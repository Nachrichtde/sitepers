import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileSignature, 
  Clock, 
  Truck, 
  Bell, 
  HelpCircle,
  Settings,
  User,
  LogOut,
  FileText
} from 'lucide-react';

// Import dashboard components
import DashboardHome from './dashboard/DashboardHome';
import DealsPage from './dashboard/DealsPage';
import DocumentsPage from './dashboard/DocumentsPage';
import HistoryPage from './dashboard/HistoryPage';
import DeliveryPage from './dashboard/DeliveryPage';
import NotificationsPage from './dashboard/NotificationsPage';
import HelpPage from './dashboard/HelpPage';
import SettingsPage from './dashboard/SettingsPage';
import Chat from '../components/dashboard/Chat';

const DashboardPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { path: '/dashboard', icon: <Home className="h-5 w-5" />, label: 'Главная', exact: true },
    { path: '/dashboard/deals', icon: <FileSignature className="h-5 w-5" />, label: 'Сделки' },
    { path: '/dashboard/documents', icon: <FileText className="h-5 w-5" />, label: 'Документы' },
    { path: '/dashboard/history', icon: <Clock className="h-5 w-5" />, label: 'История' },
    { path: '/dashboard/delivery', icon: <Truck className="h-5 w-5" />, label: 'Доставка' },
    { path: '/dashboard/notifications', icon: <Bell className="h-5 w-5" />, label: 'Уведомления' },
    { path: '/dashboard/help', icon: <HelpCircle className="h-5 w-5" />, label: 'Справка' },
    { path: '/dashboard/settings', icon: <Settings className="h-5 w-5" />, label: 'Настройки' },
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard' && location.pathname === '/dashboard') {
      return true;
    }
    return location.pathname.startsWith(path) && path !== '/dashboard';
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-16">
      {/* Mobile Menu Button */}
      <div className="md:hidden bg-white border-b border-gray-200 p-4">
        <button
          onClick={toggleMobileMenu}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="font-medium">Меню панели управления</span>
          <svg
            className={`w-5 h-5 transition-transform ${
              isMobileMenuOpen ? 'transform rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 w-full md:w-64 md:flex-shrink-0 md:block ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-warm-gray text-white flex items-center justify-center">
              <User className="h-6 w-6" />
            </div>
            <div>
              <p className="font-medium">Иван Петров</p>
              <p className="text-sm text-gray-500">ivan@example.com</p>
            </div>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'bg-warm-gray text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-4 border-t border-gray-200">
            <Link
              to="/"
              className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Выйти</span>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
        
        {/* Chat Component */}
        <Chat />
      </main>
    </div>
  );
};

export default DashboardPage;