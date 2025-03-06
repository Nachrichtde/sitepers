import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Package, 
  Shield, 
  CheckCircle, 
  FileText,
  ChevronRight
} from 'lucide-react';

const LogisticsPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-gray to-dark-gray text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Логистические решения УСДВ</h1>
            <p className="text-xl mb-8 text-gray-200">
              Мы предлагаем комплексные логистические решения для безопасной доставки товаров любой ценности и габаритов по всей России.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/login" className="btn btn-primary btn-large">
                Начать безопасную сделку
              </Link>
              <a href="#services" className="btn btn-secondary btn-large">
                Узнать о услугах
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Наши логистические услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              УСДВ предлагает полный спектр логистических услуг для обеспечения безопасной и своевременной доставки товаров в рамках ваших сделок.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <Package className="h-16 w-16 text-warm-gray" />
              </div>
              <h3 className="heading-sm mb-4">Доставка малогабаритных товаров</h3>
              <p className="text-gray-600 mb-6">
                Безопасная доставка смартфонов, ноутбуков, фотоаппаратов, ювелирных изделий и других ценных малогабаритных товаров с полным страхованием.
              </p>
              <ul className="text-left w-full space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Доставка по всей России</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Страхование на полную стоимость</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Отслеживание в реальном времени</span>
                </li>
              </ul>
              <div className="mt-auto">
                <span className="text-2xl font-bold text-warm-gray">от 300 ₽</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <Truck className="h-16 w-16 text-warm-gray" />
              </div>
              <h3 className="heading-sm mb-4">Перевозка крупногабаритных товаров</h3>
              <p className="text-gray-600 mb-6">
                Профессиональная перевозка мебели, бытовой техники и других крупногабаритных предметов с услугами упаковки, погрузки и разгрузки.
              </p>
              <ul className="text-left w-full space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Профессиональная упаковка</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Погрузка и разгрузка</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Подъем на этаж</span>
                </li>
              </ul>
              <div className="mt-auto">
                <span className="text-2xl font-bold text-warm-gray">от 1 500 ₽</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <Shield className="h-16 w-16 text-warm-gray" />
              </div>
              <h3 className="heading-sm mb-4">Сопровождение особо ценных грузов</h3>
              <p className="text-gray-600 mb-6">
                Специальная услуга для антиквариата, предметов искусства, коллекционных вещей и других особо ценных предметов с физическим сопровождением.
              </p>
              <ul className="text-left w-full space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Физическое сопровождение</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Усиленное страхование</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Индивидуальный подход</span>
                </li>
              </ul>
              <div className="mt-auto">
                <span className="text-2xl font-bold text-warm-gray">от 5 000 ₽</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Как работает доставка с УСДВ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы сделали процесс доставки максимально простым и безопасным для обеих сторон сделки.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card flex flex-col items-center text-center h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-warm-gray text-white flex items-center justify-center text-xl font-bold">1</div>
                <div className="mb-6 mt-4">
                  <FileText className="h-12 w-12 text-warm-gray" />
                </div>
                <h3 className="heading-sm mb-4">Создание сделки</h3>
                <p className="text-gray-600">
                  Создайте сделку в личном кабинете, укажите параметры товара и выберите опцию доставки через УСДВ.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ChevronRight className="h-8 w-8 text-warm-gray" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card flex flex-col items-center text-center h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-warm-gray text-white flex items-center justify-center text-xl font-bold">2</div>
                <div className="mb-6 mt-4">
                  <Package className="h-12 w-12 text-warm-gray" />
                </div>
                <h3 className="heading-sm mb-4">Упаковка и отправка</h3>
                <p className="text-gray-600">
                  Продавец упаковывает товар и передает его курьеру или в пункт приема. Мы фиксируем состояние товара.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ChevronRight className="h-8 w-8 text-warm-gray" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card flex flex-col items-center text-center h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-warm-gray text-white flex items-center justify-center text-xl font-bold">3</div>
                <div className="mb-6 mt-4">
                  <Truck className="h-12 w-12 text-warm-gray" />
                </div>
                <h3 className="heading-sm mb-4">Доставка и отслеживание</h3>
                <p className="text-gray-600">
                  Товар доставляется получателю. Обе стороны могут отслеживать статус доставки в реальном времени.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ChevronRight className="h-8 w-8 text-warm-gray" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card flex flex-col items-center text-center h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-warm-gray text-white flex items-center justify-center text-xl font-bold">4</div>
                <div className="mb-6 mt-4">
                  <CheckCircle className="h-12 w-12 text-warm-gray" />
                </div>
                <h3 className="heading-sm mb-4">Проверка и подтверждение</h3>
                <p className="text-gray-600">
                  Покупатель проверяет товар и подтверждает получение. Только после этого деньги переводятся продавцу.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Наши логистические партнеры</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы сотрудничаем с ведущими логистическими компаниями для обеспечения качественной доставки по всей России.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card flex flex-col items-center text-center"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Логотип_Яндекс_Доставка.svg" 
                alt="Яндекс.Доставка" 
                className="h-16 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">Яндекс.Доставка</h3>
              <p className="text-gray-600 text-sm">
                Быстрая доставка по городу и между городами с отслеживанием в реальном времени.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card flex flex-col items-center text-center"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/f8/CDEK_logo.svg" 
                alt="СДЭК" 
                className="h-16 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">СДЭК</h3>
              <p className="text-gray-600 text-sm">
                Доставка по России с широкой сетью пунктов выдачи.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card flex flex-col items-center text-center"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Russian_Post_logo.png" 
                alt="Почта России" 
                className="h-16 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">Почта России</h3>
              <p className="text-gray-600 text-sm">
                Доставка в самые отдаленные уголки России с возможностью отправки наложенным платежом.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Часто задаваемые вопросы о доставке</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на самые распространенные вопросы о логистических услугах УСДВ.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="heading-md mb-6">Общие вопросы</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Как рассчитывается стоимость доставки?</h4>
                  <p className="text-gray-600">
                    Стоимость доставки рассчитывается на основе веса и габаритов товара, расстояния доставки, выбранного способа доставки и дополнительных услуг (упаковка, страхование и т.д.).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Какие сроки доставки?</h4>
                  <p className="text-gray-600">
                    Сроки доставки зависят от расстояния и выбранного способа доставки. В среднем доставка по Москве занимает 1-2 дня, по России — 3-7 дней.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Как отслеживать доставку?</h4>
                  <p className="text-gray-600">
                    Отслеживание доставки доступно в личном кабинете УСДВ. Вы получаете уведомления о каждом изменении статуса доставки через email или SMS. Также доступно отслеживание через приложения партнеров.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="heading-md mb-6">Особые случаи</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Что делать, если товар поврежден при доставке?</h4>
                  <p className="text-gray-600">
                    В случае повреждения товара при доставке необходимо зафиксировать это в присутствии курьера, составить акт и сразу сообщить в службу поддержки УСДВ. Мы инициируем процедуру возврата средств или замены товара.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Возможна ли доставка крупногабаритных товаров?</h4>
                  <p className="text-gray-600">
                    Да, мы осуществляем доставку крупногабаритных товаров (мебель, бытовая техника и т.д.) с услугами профессиональной упаковки, погрузки, разгрузки и подъема на этаж.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Как организовать перевозку грузов, требующих особых условий?</h4>
                  <p className="text-gray-600">
                    При перевозке грузов на особых условиях важно обращаться к профессиональным перевозчикам, которые имеют опыт работы с такими грузами и могут обеспечить их безопасность и сохранность в процессе перевозки.
                  </p>
                </div>
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
              <h2 className="heading-lg mb-4">Готовы начать безопасную сделку с доставкой?</h2>
              <p className="text-xl text-gray-200 max-w-2xl">
                Воспользуйтесь нашими логистическими решениями для безопасной и надежной доставки товаров в рамках вашей сделки.
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

export default LogisticsPage;