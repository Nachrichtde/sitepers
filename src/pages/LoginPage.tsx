import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Lock, Mail, Eye, EyeOff, User } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would handle authentication
    // For now, we'll just redirect to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <FileText className="h-12 w-12 text-warm-gray" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-dark-gray">
          {isLogin ? 'Вход в личный кабинет' : 'Регистрация в системе'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isLogin ? 'Войдите для доступа к вашим сделкам' : 'Создайте аккаунт для начала работы с УСДВ'}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`px-4 py-2 rounded-md ${
                isLogin
                  ? 'bg-warm-gray text-white'
                  : 'bg-white text-dark-gray border border-gray-300'
              }`}
              onClick={() => setIsLogin(true)}
            >
              Вход
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                !isLogin
                  ? 'bg-warm-gray text-white'
                  : 'bg-white text-dark-gray border border-gray-300'
              }`}
              onClick={() => setIsLogin(false)}
            >
              Регистрация
            </button>
          </div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  ФИО
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-warm-gray focus:border-warm-gray"
                    placeholder="Иванов Иван Иванович"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-warm-gray focus:border-warm-gray"
                  placeholder="example@mail.ru"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Пароль
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  required
                  className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-warm-gray focus:border-warm-gray"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="password-confirm" className="block text-sm font-medium text-gray-700">
                  Подтверждение пароля
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password-confirm"
                    name="password-confirm"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-warm-gray focus:border-warm-gray"
                  />
                </div>
              </div>
            )}

            {!isLogin && (
              <div className="flex items-start">
                <input
                  id="privacy-policy"
                  name="privacy-policy"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-warm-gray focus:ring-warm-gray border-gray-300 rounded mt-1"
                />
                <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-500">
                  Соглашаюсь на обработку персональных данных и{' '}
                  <Link to="/privacy" className="text-warm-gray hover:underline">
                    политику конфиденциальности
                  </Link>
                </label>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-warm-gray focus:ring-warm-gray border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Запомнить меня
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-warm-gray hover:text-warm-gray">
                    Забыли пароль?
                  </a>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-warm-gray hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warm-gray"
              >
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
              </button>
            </div>
          </motion.form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Или войти через</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span className="ml-2">Госуслуги</span>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span className="ml-2">Сбербанк ID</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
