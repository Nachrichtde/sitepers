import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Shield, 
  FileText, 
  Clock, 
  HelpCircle, 
  AlertTriangle,
  Lock
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Базовый',
      description: 'Для разовых сделок',
      monthlyPrice: '499 ₽',
      yearlyPrice: null,
      yearlySaving: null,
      features: [
        'Одна сделка',
        'Базовый набор документов',
        'Эскроу-счет',
        'Поддержка по email',
        'Срок действия 30 дней'
      ],
      isPopular: false
    },
    {
      name: 'Стандарт',
      description: 'Для регулярных сделок',
      monthlyPrice: '1 499 ₽',
      yearlyPrice: '14 990 ₽',
      yearlySaving: '2 998 ₽',
      features: [
        'До 25 сделок в месяц',
        'Расширенный набор документов',
        'Эскроу-счет',
        'Интеграция с логистикой',
        'Приоритетная поддержка',
        'Базовая аналитика'
      ],
      isPopular: true
    },
    {
      name: 'Премиум',
      description: 'Для профессионалов',
      monthlyPrice: '3 999 ₽',
      yearlyPrice: '39 990 ₽',
      yearlySaving: '7 998 ₽',
      features: [
        'Неограниченное количество сделок',
        'Полный набор документов',
        'Эскроу-счет',
        'Интеграция с логистикой',
        'Более приоритетная поддержка',
        'Расширенная аналитика'
      ],
      isPopular: false
    }
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-warm-gray" />,
      title: 'Безопасность платежей',
      description: 'Все платежи проходят через защищенный эскроу-счет, который гарантирует сохранность средств до выполнения всех условий сделки.'
    },
    {
      icon: <FileText className="h-8 w-8 text-warm-gray" />,
      title: 'Юридически значимые документы',
      description: 'Все документы, формируемые в системе, имеют юридическую силу и могут быть использованы в суде в случае спорных ситуаций.'
    },
    {
      icon: <Clock className="h-8 w-8 text-warm-gray" />,
      title: 'Быстрое оформление',
      description: 'Создание и оформление сделки занимает всего несколько минут благодаря автоматическому формированию документов.'
    },
    {
      icon: <Lock className="h-8 w-8 text-warm-gray" />,
      title: 'Защита персональных данных',
      description: 'Все персональные данные защищены в соответствии с требованиями законодательства о защите персональных данных.'
    }
  ];

  const faqs = [
    {
      question: 'Могу ли я перейти на другой тарифный план?',
      answer: 'Да, вы можете изменить тарифный план в любое время через личный кабинет. Если вы переходите на более дорогой план, разница будет списана с вашего счета. При переходе на более дешевый план, изменения вступят в силу со следующего расчетного периода.'
    },
    {
      question: 'Как происходит оплата?',
      answer: 'Оплата производится через защищенный платежный шлюз с использованием банковских карт, электронных кошельков или банковского перевода. Все платежи защищены шифрованием и соответствуют стандартам безопасности PCI DSS.'
    },
    {
      question: 'Есть ли скрытые платежи?',
      answer: 'Нет, все комиссии и платежи прозрачны и указаны в описании тарифных планов. Дополнительные комиссии могут взиматься только за дополнительные услуги, которые вы активируете самостоятельно.'
    },
    {
      question: 'Что включено в базовый набор документов?',
      answer: 'Базовый набор документов включает договор купли-продажи, акт приема-передачи товара и расписку о получении денежных средств. Расширенный и полный наборы включают дополнительные документы в зависимости от типа сделки.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-gray to-dark-gray text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Тарифные планы УСДВ</h1>
            <p className="text-xl mb-8 text-gray-200">
              Выберите подходящий тарифный план в зависимости от ваших потребностей и частоты совершения сделок.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Прозрачные тарифы без скрытых платежей</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предлагаем гибкие тарифные планы, которые подойдут как для разовых сделок, так и для регулярных продаж.
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button 
                className={`px-4 py-2 rounded-md ${billingPeriod === 'monthly' ? 'bg-white shadow-sm text-warm-gray font-medium' : 'text-gray-600 font-medium'}`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Месячная оплата
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${billingPeriod === 'yearly' ? 'bg-white shadow-sm text-warm-gray font-medium' : 'text-gray-600 font-medium'}`}
                onClick={() => setBillingPeriod('yearly')}
              >
                Годовая оплата (скидка до 17%)
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`card relative ${plan.isPopular ? 'border-2 border-warm-gray' : ''}`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-warm-gray text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                    Популярный
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="heading-md mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {billingPeriod === 'yearly' && plan.yearlyPrice ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2">
                      {plan.name === 'Базовый' ? 'за сделку' : billingPeriod === 'yearly' ? 'в год' : 'в месяц'}
                    </span>
                  </div>
                  {billingPeriod === 'yearly' && plan.yearlySaving && (
                    <div className="text-sm text-green-600 font-medium">
                      Экономия {plan.yearlySaving} по сравнению с месячной оплатой
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-warm-gray mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link 
                    to="/login" 
                    className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-secondary'} w-full`}
                  >
                    Выбрать план
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Важная информация о тарифах</h3>
                <p className="text-gray-600">
                  Все тарифы включают НДС. При оплате годового тарифа вы получаете скидку до 17% по сравнению с месячной оплатой. 
                  Для корпоративных клиентов доступны индивидуальные тарифы с дополнительными опциями и интеграциями. 
                  Свяжитесь с нашим отделом продаж для получения персонального предложения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Что включено во все тарифы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Независимо от выбранного тарифа, вы получаете доступ к основным функциям платформы УСДВ.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card flex items-start"
              >
                <div className="mr-4 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="heading-sm mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Сравнение тарифных планов</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Подробное сравнение функций и возможностей каждого тарифного плана.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-gray-500 font-medium">Функция</th>
                  <th className="px-6 py-4 text-center text-gray-500 font-medium">Базовый</th>
                  <th className="px-6 py-4 text-center text-gray-500 font-medium">Стандарт</th>
                  <th className="px-6 py-4 text-center text-gray-500 font-medium">Премиум</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Количество сделок</td>
                  <td className="px-6 py-4 text-center">1</td>
                  <td className="px-6 py-4 text-center">До 25 в месяц</td>
                  <td className="px-6 py-4 text-center">Неограниченно</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Набор документов</td>
                  <td className="px-6 py-4 text-center">Базовый</td>
                  <td className="px-6 py-4 text-center">Расширенный</td>
                  <td className="px-6 py-4 text-center">Полный</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Эскроу-счет</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Интеграция с логистикой</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Техническая поддержка</td>
                  <td className="px-6 py-4 text-center">Email</td>
                  <td className="px-6 py-4 text-center">Приоритетная</td>
                  <td className="px-6 py-4 text-center">Более приоритетная</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Аналитика и статистика</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">Базовая</td>
                  <td className="px-6 py-4 text-center">Расширенная</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Срок действия</td>
                  <td className="px-6 py-4 text-center">30 дней</td>
                  <td className="px-6 py-4 text-center">Месяц/Год</td>
                  <td className="px-6 py-4 text-center">Месяц/Год</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Часто задаваемые вопросы о тарифах</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на самые распространенные вопросы о тарифных планах УСДВ.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start mb-4">
                  <HelpCircle className="h-6 w-6 text-warm-gray mr-3 flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                </div>
                <p className="text-gray-600 ml-9">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="section">
        <div className="container">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="heading-lg mb-6">Корпоративные решения</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Для компаний и организаций мы предлагаем индивидуальные решения с расширенными возможностями и интеграциями.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-warm-gray mr-3 mt-1" />
                    <span>Индивидуальные условия и тарифы</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-warm-gray mr-3 mt-1" />
                    <span>Интеграция с вашими корпоративными системами</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-warm-gray mr-3 mt-1" />
                    <span>Выделенная команда поддержки</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-warm-gray mr-3 mt-1" />
                    <span>Расширенные возможности отчетности и аналитики</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn btn-primary">
                  Получить индивидуальное предложение
                </Link>
              </div>
              <div className="hidden lg:block relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Корпоративные решения" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-warm-gray text-white py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="heading-lg mb-4">Готовы начать безопасную сделку?</h2>
              <p className="text-xl text-gray-200 max-w-2xl">
                Выберите подходящий тарифный план и начните пользоваться всеми преимуществами УСДВ уже сегодня.
              </p>
            </div>
            <div>
              <Link to="/login" className="btn bg-white text-warm-gray hover:bg-gray-100 btn-large">
                Начать безопасную сделку
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;