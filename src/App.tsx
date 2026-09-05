import { HashRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { FloatingBadge } from './components/FloatingBadge';
import { Home } from './pages/Home';
import { usePageBg } from './hooks/usePageBg';
export function App() {
  usePageBg();
  return (
    <HashRouter>
      <div className="min-h-screen text-white font-sans selection:bg-watson-yellow selection:text-white">
        <Header />
        <FloatingBadge />
        <Home />
      </div>
    </HashRouter>);
}
