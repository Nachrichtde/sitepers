import React, { useState } from 'react';
import { MessageSquare, X, Send, ChevronRight, ChevronLeft } from 'lucide-react';

interface ChatMessage {
  id: string;
  dealId: string;
  sender: string;
  content: string;
  timestamp: string;
}

interface Deal {
  id: string;
  title: string;
  counterparty: string;
  lastMessage?: string;
  unreadCount?: number;
}

const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');

  // Mock data for active deals
  const activeDeals: Deal[] = [
    {
      id: 'SD-2345',
      title: 'Продажа iPhone 13 Pro',
      counterparty: 'Козлов Иван Иванович',
      lastMessage: 'Когда можно будет посмотреть товар?',
      unreadCount: 2
    },
    {
      id: 'SD-2344',
      title: 'Аренда квартиры',
      counterparty: 'Сидорова Анна Петровна',
      lastMessage: 'Договор отправлен на подпись',
      unreadCount: 1
    },
    {
      id: 'SD-2343',
      title: 'Продажа велосипеда',
      counterparty: 'Петров Петр Петрович',
      lastMessage: 'Отлично, договорились!',
      unreadCount: 0
    }
  ];

  // Mock data for messages
  const messages: Record<string, ChatMessage[]> = {
    'SD-2345': [
      {
        id: '1',
        dealId: 'SD-2345',
        sender: 'Козлов Иван Иванович',
        content: 'Здравствуйте! Интересует iPhone 13 Pro',
        timestamp: '10:30'
      },
      {
        id: '2',
        dealId: 'SD-2345',
        sender: 'Вы',
        content: 'Добрый день! Да, телефон в наличии',
        timestamp: '10:32'
      },
      {
        id: '3',
        dealId: 'SD-2345',
        sender: 'Козлов Иван Иванович',
        content: 'Когда можно будет посмотреть товар?',
        timestamp: '10:35'
      }
    ],
    'SD-2344': [
      {
        id: '1',
        dealId: 'SD-2344',
        sender: 'Сидорова Анна Петровна',
        content: 'Добрый день! Квартира еще доступна?',
        timestamp: '15:20'
      },
      {
        id: '2',
        dealId: 'SD-2344',
        sender: 'Вы',
        content: 'Здравствуйте! Да, можем организовать просмотр',
        timestamp: '15:25'
      },
      {
        id: '3',
        dealId: 'SD-2344',
        sender: 'Система',
        content: 'Договор отправлен на подпись',
        timestamp: '15:30'
      }
    ]
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedDeal) return;

    // Here would be the API call to send the message
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-warm-gray text-white rounded-full p-3 shadow-lg hover:bg-opacity-90 transition-colors"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Сообщения</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="h-[32rem] flex flex-col">
          {!selectedDeal ? (
            // Deals List
            <div className="flex-1 overflow-y-auto">
              {activeDeals.map((deal) => (
                <button
                  key={deal.id}
                  onClick={() => setSelectedDeal(deal.id)}
                  className="w-full p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors flex items-start"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">#{deal.id}</span>
                      {deal.unreadCount > 0 && (
                        <span className="bg-warm-gray text-white text-xs px-2 py-1 rounded-full">
                          {deal.unreadCount}
                        </span>
                      )}
                    </div>
                    <div className="font-medium mt-1">{deal.title}</div>
                    <div className="text-sm text-gray-500">{deal.counterparty}</div>
                    {deal.lastMessage && (
                      <div className="text-sm text-gray-600 mt-1 truncate">
                        {deal.lastMessage}
                      </div>
                    )}
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 ml-2 flex-shrink-0" />
                </button>
              ))}
            </div>
          ) : (
            // Chat View
            <>
              <div className="p-4 border-b border-gray-200">
                <button
                  onClick={() => setSelectedDeal(null)}
                  className="flex items-center text-warm-gray hover:underline"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Назад
                </button>
                <div className="mt-2">
                  <div className="font-medium">
                    {activeDeals.find(d => d.id === selectedDeal)?.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {activeDeals.find(d => d.id === selectedDeal)?.counterparty}
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages[selectedDeal]?.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === 'Вы' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'Вы'
                          ? 'bg-warm-gray text-white'
                          : message.sender === 'Система'
                          ? 'bg-gray-100 text-gray-600'
                          : 'bg-gray-100'
                      }`}
                    >
                      {message.sender !== 'Вы' && message.sender !== 'Система' && (
                        <div className="text-xs text-gray-500 mb-1">
                          {message.sender}
                        </div>
                      )}
                      <div className="text-sm">{message.content}</div>
                      <div className="text-xs text-right mt-1 opacity-75">
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Введите сообщение..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage();
                      }
                    }}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="btn btn-primary px-4"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Chat;