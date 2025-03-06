import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { format } from 'date-fns';

interface TransactionFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FilterValues) => void;
}

interface FilterValues {
  status: string[];
  dateFrom: string;
  dateTo: string;
  amountMin: string;
  amountMax: string;
}

const TransactionFilters: React.FC<TransactionFiltersProps> = ({ isOpen, onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState<FilterValues>({
    status: [],
    dateFrom: '',
    dateTo: '',
    amountMin: '',
    amountMax: ''
  });

  const handleStatusChange = (status: string) => {
    setFilters(prev => ({
      ...prev,
      status: prev.status.includes(status)
        ? prev.status.filter(s => s !== status)
        : [...prev.status, status]
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      status: [],
      dateFrom: '',
      dateTo: '',
      amountMin: '',
      amountMax: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Filter className="h-6 w-6 mr-2 text-warm-gray" />
            Фильтры
          </h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Статус</h3>
            <div className="space-y-2">
              {['Успешно', 'В обработке', 'Отменено'].map((status) => (
                <label key={status} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.status.includes(status)}
                    onChange={() => handleStatusChange(status)}
                    className="h-4 w-4 text-warm-gray focus:ring-warm-gray border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-700">{status}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Период</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">От</label>
                <input
                  type="date"
                  name="dateFrom"
                  value={filters.dateFrom}
                  onChange={handleChange}
                  max={format(new Date(), 'yyyy-MM-dd')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">До</label>
                <input
                  type="date"
                  name="dateTo"
                  value={filters.dateTo}
                  onChange={handleChange}
                  max={format(new Date(), 'yyyy-MM-dd')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Сумма</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">От</label>
                <input
                  type="number"
                  name="amountMin"
                  value={filters.amountMin}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray text-sm"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">До</label>
                <input
                  type="number"
                  name="amountMax"
                  value={filters.amountMax}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray text-sm"
                  placeholder="1000000"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={handleReset}
              className="text-gray-600 hover:text-gray-900"
            >
              Сбросить
            </button>
            <button
              type="button"
              onClick={handleApply}
              className="btn btn-primary"
            >
              Применить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionFilters;