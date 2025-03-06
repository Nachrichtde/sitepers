import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Send,
  FileText
} from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-4">Свяжитесь с нами</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы всегда готовы ответить на ваши вопросы и помочь с использованием платформы УСДВ.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="heading-md mb-6">Отправить сообщение</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Тема *
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray focus:border-transparent"
                  required
                >
                  <option value="">Выберите тему</option>
                  <option value="general">Общий вопрос</option>
                  <option value="technical">Техническая поддержка</option>
                  <option value="billing">Вопросы оплаты</option>
                  <option value="partnership">Сотрудничество</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className="h-4 w-4 text-warm-gray focus:ring-warm-gray border-gray-300 rounded mt-1"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    Я согласен с <Link to="/privacy" className="text-warm-gray hover:underline">Политикой конфиденциальности</Link> и даю согласие на обработку моих персональных данных
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Отправить сообщение
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="heading-md mb-6">Другие способы связи</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-warm-gray flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">Онлайн-чат</h3>
                    <p className="text-gray-600">Воспользуйтесь онлайн-чатом на нашем сайте для быстрой связи с поддержкой.</p>
                    <button className="mt-2 text-warm-gray font-medium hover:underline">
                      Начать чат
                    </button>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="h-6 w-6 text-warm-gray flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">База знаний</h3>
                    <p className="text-gray-600">Посетите нашу базу знаний для получения ответов на часто задаваемые вопросы.</p>
                    <Link to="/faq" className="mt-2 text-warm-gray font-medium hover:underline">
                      Перейти в базу знаний
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default ContactPage;