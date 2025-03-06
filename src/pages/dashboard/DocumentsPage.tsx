import React, { useState } from 'react';
import { FileText, Search, Filter, Download, Plus} from 'lucide-react';

const DocumentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const documents = [
    {
      id: 'DOC-1001',
      title: 'Договор купли-продажи iPhone 13 Pro',
      dealId: 'SD-2345',
      dealTitle: 'Продажа iPhone 13 Pro',
      type: 'Договор купли-продажи',
      status: 'Подписан',
      statusClass: 'bg-green-100 text-green-800',
      date: '15.03.2025',
      size: '1.2 МБ',
      format: 'PDF',
      signatories: [
        { name: 'Иванов Иван Иванович', status: 'Подписано', date: '15.03.2025 12:30' },
        { name: 'Козлов Иван Иванович', status: 'Подписано', date: '15.03.2025 14:15' }
      ]
    },
    {
      id: 'DOC-1002',
      title: 'Акт приема-передачи iPhone 13 Pro',
      dealId: 'SD-2345',
      dealTitle: 'Продажа iPhone 13 Pro',
      type: 'Акт приема-передачи',
      status: 'Подписан',
      statusClass: 'bg-green-100 text-green-800',
      date: '15.03.2025',
      size: '0.8 МБ',
      format: 'PDF',
      signatories: [
        { name: 'Иванов Иван Иванович', status: 'Подписано', date: '15.03.2025 12:35' },
        { name: 'Козлов Иван Иванович', status: 'Подписано', date: '15.03.2025 14:20' }
      ]
    },
    {
      id: 'DOC-1003',
      title: 'Расписка о получении денежных средств',
      dealId: 'SD-2345',
      dealTitle: 'Продажа iPhone 13 Pro',
      type: 'Расписка',
      status: 'Подписан',
      statusClass: 'bg-green-100 text-green-800',
      date: '15.03.2025',
      size: '0.5 МБ',
      format: 'PDF',
      signatories: [
        { name: 'Иванов Иван Иванович', status: 'Подписано', date: '15.03.2025 12:40' }
      ]
    },
    {
      id: 'DOC-1004',
      title: 'Договор аренды квартиры',
      dealId: 'SD-2344',
      dealTitle: 'Аренда квартиры',
      type: 'Договор аренды',
      status: 'Ожидает подписания',
      statusClass: 'bg-yellow-100 text-yellow-800',
      date: '10.03.2025',
      size: '2.5 МБ',
      format: 'PDF',
      signatories: [
        { name: 'Иванов Иван Иванович', status: 'Подписано', date: '10.03.2025 10:15' },
        { name: 'Сидорова Анна Петровна', status: 'Ожидает подписания', date: '-' }
      ]
    },
    {
      id: 'DOC-1005',
      title: 'Акт приема-передачи квартиры',
      dealId: 'SD-2344',
      dealTitle: 'Аренда квартиры',
      type: 'Акт приема-передачи',
      status: 'Ожидает подписания',
      statusClass: 'bg-yellow-100 text-yellow-800',
      date: '10.03.2025',
      size: '1.8 МБ',
      format: 'PDF',
      signatories: [
        { name: 'Иванов Иван Иванович', status: 'Ожидает подписания', date: '-' },
        { name: 'Сидорова Анна Петровна', status: 'Ожидает подписания', date: '-' }
      ]
    }
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(documents.length / itemsPerPage);

  const filteredDocuments = activeTab === 'all' 
    ? documents 
    : documents.filter(doc => {
        if (activeTab === 'pending') return doc.status === 'Ожидает подписания';
        if (activeTab === 'signed') return doc.status === 'Подписан';
        if (activeTab === 'contracts') return doc.type.includes('Договор');
        if (activeTab === 'acts') return doc.type.includes('Акт');
        return true;
      });

  const paginatedDocuments = filteredDocuments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="heading-lg">Документы</h1>
        <button className="btn btn-primary flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Загрузить документ
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('all')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'all'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Все документы
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'pending'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Ожидают подписания
            </button>
            <button
              onClick={() => setActiveTab('signed')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'signed'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Подписанные
            </button>
            <button
              onClick={() => setActiveTab('contracts')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'contracts'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Договоры
            </button>
            <button
              onClick={() => setActiveTab('acts')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'acts'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Акты
            </button>
          </nav>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск по документам..."
                  className="w-full sm:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="btn btn-secondary flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Фильтры
              </button>
              <button className="btn btn-secondary flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Экспорт
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Название</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Тип</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Сделка</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Действия</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedDocuments.map((document) => (
                  <tr key={document.id} className={selectedDocument === document.id ? 'bg-warm-gray bg-opacity-5' : ''}>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 mr-3">
                          <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                            <FileText className="h-4 w-4 text-gray-500" />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">{document.title}</div>
                          <div className="text-xs text-gray-500">{document.format} • {document.size}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{document.type}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      <div className="font-medium">#{document.dealId}</div>
                      <div className="text-xs">{document.dealTitle}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${document.statusClass}`}>
                        {document.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{document.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button className="text-warm-gray font-medium hover:underline">
                          Просмотр
                        </button>
                        <button 
                          onClick={() => setSelectedDocument(selectedDocument === document.id ? null : document.id)}
                          className="text-warm-gray font-medium hover:underline"
                        >
                          Подробнее
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Показано {paginatedDocuments.length} из {filteredDocuments.length} документов
            </div>
            <div className="flex space-x-2">
              <button 
                className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Предыдущая
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    currentPage === page
                      ? 'bg-warm-gray text-white'
                      : 'border border-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button 
                className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Следующая
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedDocument && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="heading-md mb-4">Информация о документе</h2>
          
          {documents.filter(doc => doc.id === selectedDocument).map((document) => (
            <div key={document.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Основная информация</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-gray-500">ID документа</div>
                        <div className="font-medium">{document.id}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Тип документа</div>
                        <div className="font-medium">{document.type}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Статус</div>
                        <div className="font-medium">{document.status}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Дата создания</div>
                        <div className="font-medium">{document.date}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Формат</div>
                        <div className="font-medium">{document.format}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Размер</div>
                        <div className="font-medium">{document.size}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Связанная сделка</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="mb-4">
                      <div className="text-xs text-gray-500">ID сделки</div>
                      <div className="font-medium">#{document.dealId}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-xs text-gray-500">Название сделки</div>
                      <div className="font-medium">{document.dealTitle}</div>
                    </div>
                    <div className="text-center">
                      <button className="text-warm-gray font-medium text-sm hover:underline">
                        Перейти к сделке
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Подписанты</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-4">
                    {document.signatories.map((signatory, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 rounded-full bg-warm-gray text-white flex items-center justify-center">
                            {signatory.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{signatory.name}</div>
                          <div className="flex items-center mt-1">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              signatory.status === 'Подписано' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {signatory.status}
                            </span>
                            {signatory.date !== '-' && (
                              <span className="text-xs text-gray-500 ml-2">{signatory.date}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <div className="space-x-2">
                  <button className="btn btn-secondary btn-sm">
                    Скачать
                  </button>
                  <button className="btn btn-secondary btn-sm">
                    Поделиться
                  </button>
                </div>
                {document.status === 'Ожидает подписания' && 
                 document.signatories.some(s => s.name === 'Иванов Иван Иванович' && s.status === 'Ожидает подписания') && (
                  <button className="btn btn-primary btn-sm">
                    Подписать документ
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocumentsPage;