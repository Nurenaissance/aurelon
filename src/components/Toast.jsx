import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, AlertCircle, X, ShoppingBag, Info } from 'lucide-react';

const ToastContext = createContext();

const icons = {
  success: <Check className="w-4 h-4" />,
  error: <AlertCircle className="w-4 h-4" />,
  cart: <ShoppingBag className="w-4 h-4" />,
  info: <Info className="w-4 h-4" />,
};

const styles = {
  success: 'bg-emerald-500 text-white',
  error: 'bg-error text-white',
  cart: 'bg-aurele-gold text-aurele-noir',
  info: 'bg-foreground text-white',
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none max-w-sm w-full">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 80, scale: 0.95 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-elevated text-sm font-medium ${styles[toast.type]}`}
            >
              {icons[toast.type]}
              <span className="flex-1">{toast.message}</span>
              <button
                onClick={() => removeToast(toast.id)}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
