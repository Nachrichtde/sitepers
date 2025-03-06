import React, { useState } from 'react';
import { X, Truck } from 'lucide-react';

interface DeliveryRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeliveryRequestModal: React.FC<DeliveryRequestModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    dealId: '',
    type: '',
    fromAddress: '',
    toAddress: '',
    weight: '',
    dimensions: '',
    description: '',
    date: '',
    time: ''
  });

  // Mock data for available deals
  const availableDeals = [
    {
      id: 'SD-2345',
      title: 'Продажа iPhone 13 Pro',
      status: 'В процессе',
      counterparty: 'Козлов Иван Иванович'
    },
    {
      id: 'SD-2344',
      title: 'Аренда квартиры',
      status: 'В процессе',
      counterparty: 'Сидорова Анна Петровна'
    },
    {
      id: 'SD-2343',
      title: 'Продажа велосипеда',
      status: 'В процессе',
      counterparty: 'Петров Петр Петрович'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the API call to submit the delivery request
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Truck className="h-6 w-6 mr-2 text-warm-gray" />
            Создание заявки на доставку
          </h2>
          <p className="text-gray-600 mt-2">Заполните форму для создания заявки на доставку</p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((stepNumber) => (
              <div 
                key={stepNumber}
                className={`flex items-center ${stepNumber < 3 ? 'flex-1' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber ? 'bg-warm-gray text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    step > stepNumber ? 'bg-warm-gray' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Выберите сделку
                </label>
                <select
                  name="dealId"
                  value={formData.dealId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                  required
                >
                  <option value="">Выберите сделку для доставки</option>
                  {availableDeals.map(deal => (
                    <option key={deal.id} value={deal.id}>
                      {deal.id} - {deal.title} ({deal.counterparty})
                    </option>
                  ))}
                </select>
              </div>
              {formData.dealId && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Тип отправления
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                      required
                    >
                      <option value="">Выберите тип отправления</option>
                      <option value="document">Документы</option>
                      <option value="small">Мелкогабаритный груз</option>
                      <option value="large">Крупногабаритный груз</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Адрес отправления
                    </label>
                    <input
                      type="text"
                      name="fromAddress"
                      value={formData.fromAddress}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                      placeholder="Введите адрес отправления"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Адрес получения
                    </label>
                    <input
                      type="text"
                      name="toAddress"
                      value={formData.toAddress}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                      placeholder="Введите адрес получения"
                      required
                    />
                  </div>
                </>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Вес (кг)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                    placeholder="Вес груза"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Габариты (см)
                  </label>
                  <input
                    type="text"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                    placeholder="ДxШxВ"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Описание груза
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                  rows={4}
                  placeholder="Опишите содержимое груза"
                  required
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Дата доставки
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Время доставки
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                    required
                  >
                    <option value="">Выберите время</option>
                    <option value="morning">09:00 - 13:00</option>
                    <option value="afternoon">13:00 - 18:00</option>
                    <option value="evening">18:00 - 22:00</option>
                  </select>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Итоговая информация</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Сделка:</dt>
                    <dd className="font-medium">#{formData.dealId}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Тип отправления:</dt>
                    <dd className="font-medium">{formData.type}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Откуда:</dt>
                    <dd className="font-medium">{formData.fromAddress}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Куда:</dt>
                    <dd className="font-medium">{formData.toAddress}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Вес:</dt>
                    <dd className="font-medium">{formData.weight} кг</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="btn btn-secondary"
              >
                Назад
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="btn btn-primary ml-auto"
                disabled={step === 1 && !formData.dealId}
              >
                Далее
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary ml-auto"
              >
                Создать заявку
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryRequestModal;