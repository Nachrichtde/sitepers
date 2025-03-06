import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Truck, 
  User, 
  Lock
} from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-warm-gray to-dark-gray text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="heading-xl mb-6"
            >
              Безопасные сделки с гарантией
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 text-gray-200"
            >
              УСДВ предлагает услуги управления транзакциями и документами, не только для физических лиц, но и для компаний с юридическими лицами. Получите доступ к удобной и простой системе управления документами от нашей команды.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link to="/login" className="btn btn-primary btn-large">
                Начать безопасную сделку
              </Link>
              <a href="#benefits" className="btn btn-secondary btn-large">
                Узнать больше
              </a>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Безопасные сделки" 
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="h-12 w-12 text-warm-gray" />,
      title: 'Безопасность платежей',
      description: 'Деньги хранятся на эскроу-счете до момента подтверждения выполнения всех условий сделки обеими сторонами.'
    },
    {
      icon: <FileText className="h-12 w-12 text-warm-gray" />,
      title: 'Юридическая защита',
      description: 'Все сделки оформляются юридически корректными документами, которые имеют юридическую силу в случае споров.'
    },
    {
      icon: <Clock className="h-12 w-12 text-warm-gray" />,
      title: 'Быстрое оформление',
      description: 'Оформление сделки занимает всего несколько минут благодаря автоматическому формированию документов.'
    },
    {
      icon: <Truck className="h-12 w-12 text-warm-gray" />,
      title: 'Интеграция с логистикой',
      description: 'Возможность организации доставки товара через наших партнеров с отслеживанием статуса в реальном времени.'
    },
    {
      icon: <Lock className="h-12 w-12 text-warm-gray" />,
      title: 'Защита персональных данных',
      description: 'Все персональные данные защищены в соответствии с требованиями законодательства о защите персональных данных.'
    },
    {
      icon: <User className="h-12 w-12 text-warm-gray" />,
      title: 'Верификация пользователей',
      description: 'Все пользователи проходят верификацию через Госуслуги или Сбербанк ID, что исключает мошенничество.'
    }
  ];

  return (
    <section id="benefits" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Преимущества УСДВ</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наша платформа обеспечивает безопасность и удобство для всех участников сделки, предоставляя полный набор инструментов для успешного завершения транзакций.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card flex flex-col items-center text-center"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="heading-sm mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/logistics" className="btn btn-primary">
            Подробнее о логистических решениях
          </Link>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Регистрация и верификация',
      description: 'Зарегистрируйтесь на платформе и пройдите верификацию через Госуслуги или Сбербанк ID для подтверждения личности.'
    },
    {
      number: '02',
      title: 'Создание сделки',
      description: 'Создайте новую сделку, указав все необходимые параметры, и пригласите вторую сторону для участия.'
    },
    {
      number: '03',
      title: 'Согласование условий',
      description: 'Обсудите и согласуйте все условия сделки с другой стороной. Все изменения фиксируются в системе.'
    },
    {
      number: '04',
      title: 'Оплата на эскроу-счет',
      description: 'Покупатель переводит деньги на защищенный эскроу-счет, где они хранятся до выполнения всех условий сделки.'
    },
    {
      number: '05',
      title: 'Доставка или передача товара',
      description: 'Продавец отправляет или передает товар покупателю. При необходимости можно воспользоваться услугами наших логистических партнеров.'
    },
    {
      number: '06',
      title: 'Подтверждение получения',
      description: 'Покупатель подтверждает получение товара и его соответствие описанию. После этого деньги переводятся продавцу.'
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Как это работает</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Процесс совершения безопасной сделки через УСДВ прост и понятен для всех участников.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="text-5xl font-bold text-warm-gray opacity-30 mb-4">{step.number}</div>
              <h3 className="heading-sm mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExamplesSection: React.FC = () => {
  const examples = [
    {
      title: 'Купля-продажа техники',
      description: 'Безопасная покупка смартфонов, ноутбуков, фотоаппаратов и другой техники с проверкой работоспособности перед оплатой.',
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Аренда недвижимости',
      description: 'Заключение договора аренды квартиры или дома с защитой интересов как арендатора, так и арендодателя.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Продажа автомобиля',
      description: 'Оформление сделки купли-продажи автомобиля с проверкой документов и защитой от мошенничества.',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Оказание услуг',
      description: 'Заказ услуг фрилансеров с гарантией качества выполнения работы и защитой от недобросовестных исполнителей.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <section id="examples" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Примеры использования</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            УСДВ подходит для различных типов сделок между физическими лицами. Вот несколько примеров, как наш сервис может быть полезен.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={example.image} 
                  alt={example.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-sm mb-4">{example.title}</h3>
                <p className="text-gray-600 mb-4">{example.description}</p>
                <Link to="/login" className="text-warm-gray font-medium flex items-center hover:underline">
                  Начать сделку <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { number: '50,000+', label: 'Успешных сделок' },
    { number: '100,000+', label: 'Пользователей' },
    { number: '99.8%', label: 'Успешных транзакций' },
    { number: '24/7', label: 'Поддержка клиентов' }
  ];

  return (
    <section className="bg-warm-gray text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg text-gray-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">Почему выбирают УСДВ</h2>
            <p className="text-xl text-gray-600 mb-8">
              Мы создали сервис, который решает основные проблемы при совершении сделок между физическими лицами: безопасность платежей, юридическая защита и простота оформления.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-warm-gray mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Полная прозрачность</h3>
                  <p className="text-gray-600">Все условия сделки и комиссии прозрачны и понятны для всех участников.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-warm-gray mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Надежная защита</h3>
                  <p className="text-gray-600">Ваши деньги и персональные данные защищены современными технологиями безопасности.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-warm-gray mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Удобный интерфейс</h3>
                  <p className="text-gray-600">Интуитивно понятный интерфейс делает процесс создания и управления сделками максимально простым.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-warm-gray mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Профессиональная поддержка</h3>
                  <p className="text-gray-600">Наша команда поддержки всегда готова помочь вам на каждом этапе сделки.</p>
                </div>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Почему выбирают УСДВ" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PartnersSection: React.FC = () => {
  const partners = [
    {
      name: 'Сбербанк',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Logo_Sberbank.svg',
      description: 'Партнер по финансовым операциям и верификации пользователей через Сбербанк ID.'
    },
    {
      name: 'Госуслуги',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Gosuslugi.png',
      description: 'Партнер по верификации пользователей и проверке документов через государственные сервисы.'
    },
    {
      name: 'Яндекс.Доставка',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Логотип_Яндекс_Доставка.svg',
      description: 'Партнер по логистическим решениям для безопасной доставки товаров по всей России.'
    },
    {
      name: 'СДЭК',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/CDEK_logo.svg/145px-CDEK_logo.svg.png',
      description: 'Партнер по доставке в труднодоступные регионы.'
    },
    {
      name: 'Почта России',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Russian_Post_logo.png',
      description: 'Партнер по доставке по России'
    }
  ];

  return (
    <section id="partners" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Наши партнеры</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы сотрудничаем с ведущими компаниями для обеспечения максимальной безопасности и удобства сделок.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="card flex flex-col items-center text-center">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-16 object-contain mb-4 grayscale hover:grayscale-0 transition-all"
              />
              <h3 className="font-semibold text-lg mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => {
  return (
    <section className="bg-warm-gray text-white py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="heading-lg mb-4">Готовы начать безопасную сделку?</h2>
            <p className="text-xl text-gray-200 max-w-2xl">
              Присоединяйтесь к тысячам пользователей, которые уже оценили преимущества УСДВ для безопасных сделок.
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
  );
};

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: 'Процесс совершения сделки',
      items: [
        {
          question: 'Как начать сделку через УСДВ?',
          answer: 'Для начала сделки необходимо зарегистрироваться на платформе, верифицировать свою личность через Госуслуги или Сбербанк ID, затем создать новую сделку, указав все необходимые параметры и пригласив вторую сторону.'
        },
        {
          question: 'Сколько времени занимает процесс оформления сделки?',
          answer: 'Стандартное оформление сделки занимает от 15 минут до 1 часа, в зависимости от сложности и типа сделки. После согласования всех условий документы формируются автоматически.'
        },
        {
          question: 'Что делать, если вторая сторона отказывается от сделки?',
          answer: 'В случае отказа второй стороны от сделки, все средства, находящиеся на эскроу-счете, возвращаются отправителю в полном объеме. Комиссия за отмененную сделку не взимается.'
        }
      ]
    },
    {
      title: 'Безопасность и гарантии',
      items: [
        {
          question: 'Как обеспечивается безопасность платежей?',
          answer: 'Безопасность платежей обеспечивается использованием эскроу-счетов. Деньги хранятся на защищенном счете до момента подтверждения выполнения всех условий сделки обеими сторонами.'
        },
        {
          question: 'Что происходит в случае спорной ситуации?',
          answer: 'В случае возникновения спорной ситуации активируется процедура арбитража. Наши специалисты рассматривают все предоставленные доказательства и принимают решение в соответствии с условиями сделки и законодательством РФ.'
        },
        {
          question: 'Как проверяется подлинность документов?',
          answer: 'Все документы проходят автоматическую проверку через государственные сервисы. Для дополнительной верификации используются электронные подписи и биометрическая идентификация.'
        }
      ]
    },
    {
      title: 'Доставка и логистика',
      items: [
        {
          question: 'Какие службы доставки интегрированы с УСДВ?',
          answer: 'УСДВ интегрирован с ведущими службами доставки, включая Яндекс.Доставку, СДЭК и Почту России. Вы можете выбрать наиболее удобный вариант доставки прямо на платформе.'
        },
        {
          question: 'Как отслеживать статус доставки?',
          answer: 'Статус доставки отображается в реальном времени в личном кабинете. Также вы получаете уведомления о каждом изменении статуса через email или SMS.'
        },
        {
          question: 'Что делать, если товар поврежден при доставке?',
          answer: 'В случае повреждения товара при доставке необходимо зафиксировать это в присутствии курьера и сразу сообщить в службу поддержки УСДВ. Мы инициируем процедуру возврата средств или замены товара.'
        }
      ]
    },
    {
      title: 'Тарифы и оплата',
      items: [
        {
          question: 'Какие способы оплаты доступны на платформе?',
          answer: 'На платформе доступны различные способы оплаты: банковские карты, электронные кошельки, банковские переводы, а также оплата через Систему быстрых платежей (СБП).'
        },
        {
          question: 'Можно ли изменить тарифный план после регистрации?',
          answer: 'Да, вы можете изменить тарифный план в любое время через личный кабинет. Новый тариф вступит в силу с начала следующего расчетного периода.'
        },
        {
          question: 'Есть ли скрытые платежи или комиссии?',
          answer: 'Нет, все комиссии и платежи прозрачны и указаны в описании тарифных планов. Дополнительные комиссии могут взиматься только за дополнительные услуги, которые вы активируете самостоятельно.'
        }
      ]
    }
  ];

  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Часто задаваемые вопросы</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые распространенные вопросы о работе сервиса УСДВ.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card">
              <h3 className="heading-md mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const index = categoryIndex * 10 + itemIndex;
                  return (
                    <div key={itemIndex} className="border-b border-gray-200 pb-4">
                      <button
                        className="flex justify-between items-center w-full text-left font-medium text-lg"
                        onClick={() => toggleAccordion(index)}
                      >
                        <span>{item.question}</span>
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            activeIndex === index ? 'transform rotate-180' : ''
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
                      {activeIndex === index && (
                        <div className="mt-3 text-gray-600">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OfficeLocationSection: React.FC = () => {
  return (
    <section id="contact" className="section">
    </section>
  );
};

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ExamplesSection />
      <StatsSection />
      <WhyUsSection />
      <PartnersSection />
      <CTASection />
      <FAQSection />
      <OfficeLocationSection />
    </div>
  );
};

export default HomePage;