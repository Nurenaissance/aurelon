import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Check, Loader2, AlertCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from './Toast';

const WEBHOOK_URL = 'https://nurenaiautomatic-b7hmdnb4fzbpbtbh.canadacentral-01.azurewebsites.net/webhook/aurelon-order';

const validate = (form) => {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = 'Name is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Valid email required';
  if (!/^[\d+\-\s()]{10,15}$/.test(form.phone.replace(/\s/g, ''))) errors.phone = 'Valid phone number required';
  if (form.address.trim().length < 5) errors.address = 'Full address required';
  if (form.city.trim().length < 2) errors.city = 'City required';
  if (!/^\d{6}$/.test(form.pincode)) errors.pincode = 'Valid 6-digit pincode required';
  return errors;
};

const CheckoutModal = ({ isOpen, onClose }) => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { addToast } = useToast();
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', city: '', pincode: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [orderId, setOrderId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      addToast('Please fix the errors in the form', 'error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const generatedOrderId = 'AUR-' + Date.now().toString(36).toUpperCase();

    const orderPayload = {
      orderId: generatedOrderId,
      customer: {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        address: form.address.trim(),
        city: form.city.trim(),
        pincode: form.pincode.trim(),
      },
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        color: item.color,
        quantity: item.quantity,
      })),
      total: cartTotal,
      currency: 'INR',
      paymentMethod: paymentMethod === 'upi' ? 'UPI' : 'COD',
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload),
      });

      if (!res.ok) throw new Error(`Order failed (${res.status})`);

      setOrderId(generatedOrderId);
      setStatus('success');
      clearCart();
      addToast('Order placed successfully!', 'success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      addToast('Order failed. Please try again.', 'error');
    }
  };

  const handleClose = () => {
    if (status === 'success') {
      setStatus('idle');
      setForm({ name: '', phone: '', email: '', address: '', city: '', pincode: '' });
      setErrors({});
      setOrderId('');
      setPaymentMethod('upi');
    }
    onClose();
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border bg-white text-foreground placeholder-muted text-sm focus:outline-none transition-colors min-h-[48px] ${
      errors[field] ? 'border-error/50 focus:border-error' : 'border-faint/50 focus:border-aurele-gold/50'
    }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 z-50"
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto pointer-events-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-faint/30">
                <h2 className="font-display text-xl text-foreground">
                  {status === 'success' ? 'Order Confirmed' : 'Complete Your Order'}
                </h2>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-aurele-warm rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Success State */}
              {status === 'success' ? (
                <div className="p-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <Check className="w-8 h-8 text-emerald-500" />
                  </motion.div>
                  <h3 className="font-display text-2xl text-foreground mb-2">Order Placed!</h3>
                  <p className="text-secondary mb-4">Thank you for your order. We'll reach out to confirm shortly.</p>
                  <div className="inline-block px-4 py-2 rounded-lg bg-aurele-warm/50 border border-faint/30 mb-6">
                    <span className="text-xs text-muted block">Order ID</span>
                    <span className="font-mono font-semibold text-foreground">{orderId}</span>
                  </div>
                  <div className="text-sm text-muted space-y-1">
                    <p>A confirmation will be sent to <span className="text-foreground font-medium">{form.email || 'your email'}</span></p>
                    <p>Payment: {paymentMethod === 'upi' ? 'UPI (scan & pay)' : 'Cash on Delivery'}</p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="mt-6 px-8 py-3 bg-aurele-gold text-aurele-noir font-semibold rounded-full hover:bg-aurele-gold-dark transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {/* Order Summary */}
                  <div className="p-6 bg-aurele-warm/30 border-b border-faint/30">
                    <div className="space-y-2">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <ShoppingBag className="w-4 h-4 text-muted" />
                            <span className="text-foreground">{item.name} ({item.color})</span>
                            <span className="text-muted">x{item.quantity}</span>
                          </div>
                          <span className="font-medium text-foreground">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-faint/30">
                      <span className="font-medium text-foreground">Total</span>
                      <span className="font-display text-xl text-foreground">₹{cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="mt-2 text-xs text-success font-medium">Free shipping included</div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="text-xs text-error mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 98765 43210"
                          className={inputClass('phone')}
                        />
                        {errors.phone && <p className="text-xs text-error mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@email.com"
                          className={inputClass('email')}
                        />
                        {errors.email && <p className="text-xs text-error mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Delivery Address *</label>
                      <textarea
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        required
                        placeholder="House/flat no., street, landmark"
                        rows={2}
                        className={`${inputClass('address')} resize-none`}
                      />
                      {errors.address && <p className="text-xs text-error mt-1">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          required
                          placeholder="Mumbai"
                          className={inputClass('city')}
                        />
                        {errors.city && <p className="text-xs text-error mt-1">{errors.city}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Pincode *</label>
                        <input
                          type="text"
                          name="pincode"
                          value={form.pincode}
                          onChange={handleChange}
                          required
                          placeholder="400001"
                          maxLength={6}
                          className={inputClass('pincode')}
                        />
                        {errors.pincode && <p className="text-xs text-error mt-1">{errors.pincode}</p>}
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground mb-1.5">Payment Method *</label>

                      {/* UPI Option */}
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('upi')}
                        className={`w-full p-3 rounded-xl border text-left transition-all ${
                          paymentMethod === 'upi'
                            ? 'bg-aurele-warm/50 border-aurele-gold/40'
                            : 'bg-white border-faint/30 hover:border-faint'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            paymentMethod === 'upi' ? 'border-aurele-gold' : 'border-faint'
                          }`}>
                            {paymentMethod === 'upi' && <div className="w-2.5 h-2.5 rounded-full bg-aurele-gold" />}
                          </div>
                          <div>
                            <span className="text-sm font-medium text-foreground">Pay via UPI</span>
                            <span className="text-xs text-muted block">GPay, PhonePe, Paytm, or any UPI app</span>
                          </div>
                        </div>
                      </button>

                      {/* QR Code — shown when UPI selected */}
                      <AnimatePresence>
                        {paymentMethod === 'upi' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 rounded-xl bg-white border border-faint/30 text-center">
                              <p className="text-sm text-secondary mb-3">Scan with any UPI app to pay</p>
                              <div className="inline-block p-3 bg-white rounded-xl border border-faint/20 shadow-sm">
                                <img
                                  src="/images/upi-qr.jpg"
                                  alt="UPI QR Code — Pay to NURENAISSANCE FABRICA PRIVATE LIMITED"
                                  className="w-48 h-48 object-contain mx-auto"
                                />
                              </div>
                              <div className="mt-3 space-y-1">
                                <p className="text-xs font-medium text-foreground">NURENAISSANCE FABRICA PRIVATE LIMITED</p>
                                <p className="text-xs text-muted">UPI ID: cnurenai@kotak</p>
                                <p className="text-xs font-semibold text-aurele-gold">Amount: ₹{cartTotal.toLocaleString()}</p>
                              </div>
                              <p className="text-[11px] text-muted mt-3 leading-relaxed">
                                After payment, click "Place Order" below. We'll verify your payment and confirm your order.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* COD Option */}
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('cod')}
                        className={`w-full p-3 rounded-xl border text-left transition-all ${
                          paymentMethod === 'cod'
                            ? 'bg-aurele-warm/50 border-aurele-gold/40'
                            : 'bg-white border-faint/30 hover:border-faint'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            paymentMethod === 'cod' ? 'border-aurele-gold' : 'border-faint'
                          }`}>
                            {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 rounded-full bg-aurele-gold" />}
                          </div>
                          <div>
                            <span className="text-sm font-medium text-foreground">Cash on Delivery</span>
                            <span className="text-xs text-muted block">Pay when your order arrives</span>
                          </div>
                        </div>
                      </button>
                    </div>

                    {/* Error */}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-3 rounded-xl bg-error/10 border border-error/20 text-error text-sm"
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{errorMsg}</span>
                      </motion.div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-aurele-gold text-aurele-noir font-semibold rounded-full hover:bg-aurele-gold-dark hover:shadow-glow transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[48px]"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Placing Order...</span>
                        </>
                      ) : (
                        <span>Place Order — ₹{cartTotal.toLocaleString()}</span>
                      )}
                    </button>

                    <p className="text-xs text-muted text-center">
                      Free shipping across India. UPI & Cash on Delivery available.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
