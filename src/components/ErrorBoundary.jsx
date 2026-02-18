import { Component } from 'react';
import { RefreshCw } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-aurele-cream flex items-center justify-center p-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-aurele-gold/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">!</span>
            </div>
            <h1 className="font-display text-2xl text-foreground mb-3">
              Something went wrong
            </h1>
            <p className="text-secondary mb-6">
              We hit an unexpected error. Please refresh the page to continue shopping.
            </p>
            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-6 py-3 bg-aurele-gold text-aurele-noir font-semibold rounded-full hover:bg-aurele-gold-dark transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
