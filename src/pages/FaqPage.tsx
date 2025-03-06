import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  FileText, 
  Shield, 
  Truck, 
  CreditCard, 
  User
} from 'lucide-react';

const FaqPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(item => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const categories = [
    { id: 'all', name: 'Все вопросы', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'process', name: 'Процесс сделки', icon: <FileText className="h-5 w-5" /> },
    { id: 'security', name: 'Безопасность', icon: <Shield className="h-5 w-5" /> },
    { id: 'delivery', name: 'Доставка', icon: <Truck className="h-5 w-5" /> },
    { id: 'payment', name: 'Оплата', icon: <CreditCard className="h-5 w-5" /> },
    { id: 'account', name: 'Аккаунт', icon: <User className="h-5 w-5" /> }
  ];

  const faqItems = [
    {
      category: 'process',
      question: 'Как начать сделку через УСДВ?',
      answer: 'Для начала сделки необходимо зарегистрироваться на платформе, верифицировать свою личность через Госуслуги или Сбербанк ID, затем создать новую сделку, указав все необходимые параметры и пригласив вторую сторону.'
    },
    {
      category: 'process',
      question: 'Сколько времени занимает процесс оформления сделки?',
      answer: 'Стандартное оформление сделки занимает от 15 минут до 1 часа, в зависимости от сложности и типа сделки. После согласования всех условий документы формируются автоматически.'
    },
    {
      category: 'process',
      question: 'Что делать, если вторая сторона отказывается от сделки?',
      answer: 'В случае отказа второй стороны от сделки, все средства, находящиеся на эскроу-счете, возвращаются отправителю в полном объеме. Комиссия за отмененную сделку не взимается.'
    },
    {
      category: 'process',
      question: 'Какие типы сделок поддерживает УСДВ?',
      answer: 'УСДВ поддерживает различные типы сделок между физическими лицами: купля-продажа товаров, аренда недвижимости, оказание услуг, продажа автомобилей и другие виды сделок, требующие юридического оформления и гарантий.'
    },
    {
      category: 'security',
      question: 'Как обеспечивается безопасность платежей?',
      answer: 'Безопасность платежей обеспечивается использованием эскроу-счетов. Деньги хранятся на защищенном счете до момента подтверждения выполнения всех условий сделки обеими сторонами.'
    },
    {
      category: 'security',
      question: 'Что происходит в случае спорной ситуации?',
      answer: 'В случае возникновения спорной ситуации активируется процедура арбитража. Наши специалисты рассматривают все предоставленные доказательства и принимают решение в соответствии с условиями сделки и законодательством РФ.'
    },
    {
      category: 'security',
      question: 'Как проверяется подлинность документов?',
      answer: 'Все документы проходят автоматическую проверку через государственные сервисы. Для дополнительной верификации используются электронные подписи и биометрическая идентификация.'
    },
    {
      category: 'security',
      question: 'Какие меры безопасности применяются для защиты персональных данных?',
      answer: 'Мы используем шифрование банковского уровня для защиты всех данных, хранящихся в системе. Доступ к персональным данным строго ограничен и контролируется. Все операции с данными логируются и могут быть проверены.'
    },
    {
      category: 'delivery',
      question: 'Какие службы доставки интегрированы с УСДВ?',
      answer: 'УСДВ интегрирован с ведущими службами доставки, включая Яндекс.Доставку, СДЭК и Почту России. Вы можете выбрать наиболее удобный вариант доставки прямо на платформе.'
    },
    {
      category: 'delivery',
      question: 'Как отслеживать статус доставки?',
      answer: 'Статус доставки отображается в реальном времени в личном кабинете. Также вы получаете уведомления о каждом изменении статуса через email или SMS.'
    },
    {
      category: 'delivery',
      question: 'Что делать, если товар поврежден при доставке?',
      answer: 'В случае повреждения товара при доставке необходимо зафиксировать это в присутствии курьера и сразу сообщить в службу поддержки УСДВ. Мы инициируем процедуру возврата средств или замены товара.'
    },
    {
      category: 'payment',
      question: 'Какие способы оплаты доступны на платформе?',
      answer: 'На платформе доступны различные способы оплаты: банковские карты, электронные кошельки, банковские переводы, а также оплата через Систему быстрых платежей (СБП).'
    },
    {
      category: 'payment',
      question: 'Можно ли изменить тарифный план после регистрации?',
      answer: 'Да, вы можете изменить тарифный план в любое время через личный кабинет. Новый тариф вступит в силу с начала следующего расчетного периода.'
    },
    {
      category: 'payment',
      question: 'Есть ли скрытые платежи или комиссии?',
      answer: 'Нет, все комиссии и платежи прозрачны и указаны в описании тарифных планов. Дополнительные комиссии могут взиматься только за дополнительные услуги, которые вы активируете самостоятельно.'
    },
    {
      category: 'payment',
      question: 'Как происходит возврат средств в случае отмены сделки?',
      answer: 'В случае отмены сделки средства возвращаются на счет отправителя в течение 1-3 рабочих дней. Срок возврата зависит от банка-эмитента карты или платежной системы.'
    },
    {
      category: 'account',
      question: 'Как зарегистрироваться на платформе УСДВ?',
      answer: 'Для регистрации на платформе УСДВ необходимо заполнить форму регистрации на сайте, указав свои контактные данные, или воспользоваться быстрой регистрацией через Госуслуги или Сбербанк ID.'
    },
    {
      category: 'account',
      question: 'Как восстановить доступ к аккаунту?',
      answer: 'Для восстановления доступа к аккаунту воспользуйтесь функцией "Забыли пароль" на странице входа. Вам будет отправлена ссылка для сброса пароля на указанный при регистрации email.'
    },
    {
      category: 'account',
      question: 'Можно ли использовать один аккаунт для нескольких пользователей?',
      answer: 'Нет, каждый пользователь должен иметь свой аккаунт. Это необходимо для обеспечения безопасности и корректной идентификации сторон сделки.'
    },
    {
      category: 'account',
      question: 'Как удалить аккаунт?',
      answer: 'Для удаления аккаунта необходимо обратиться в службу поддержки. Обратите внимание, что удаление аккаунта возможно только при отсутствии активных сделок и после выполнения всех финансовых обязательств.'
    }
  ];

  const filteredFaqs = faqItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-gray to-dark-gray text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Часто задаваемые вопросы</h1>
            <p className="text-xl mb-8 text-gray-200">
              Ответы на самые распространенные вопросы о работе сервиса УСДВ и процессе совершения безопасных сделок.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Поиск по вопросам..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-4">Категории</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center w-full px-3 py-2 rounded-md transition-colors ${
                          activeCategory === category.id
                            ? 'bg-warm-gray text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="mr-3">{category.icon}</span>
                        <span>{category.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-lg mb-4">Нужна помощь?</h3>
                  <p className="text-gray-600 mb-4">
                    Не нашли ответ на свой вопрос? Свяжитесь с нашей службой поддержки.
                  </p>
                  <Link to="/contact" className="btn btn-primary w-full">
                    Связаться с поддержкой
                  </Link>
                </div>
              </div>
            </div>
            
            {/* FAQ Content */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="heading-lg mb-6">
                  {categories.find(c => c.id === activeCategory)?.name || 'Все вопросы'}
                </h2>
                
                {filteredFaqs.length === 0 ? (
                  <div className="text-center py-12">
                    <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Вопросы не найдены</h3>
                    <p className="text-gray-600">
                      Попробуйте изменить поисковый запрос или выбрать другую категорию.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredFaqs.map((faq, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(index)}
                          className="flex justify-between items-center w-full px-6 py-4 text-left font-medium text-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <span>{faq.question}</span>
                          {expandedItems.includes(index) ? (
                            <ChevronUp className="h-5 w-5 text-warm-gray" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-warm-gray" />
                          )}
                        </button>
                        {expandedItems.includes(index) && (
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
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
                Теперь, когда вы знаете больше о нашем сервисе, начните использовать все преимущества УСДВ для ваших сделок.
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

export default FaqPage;