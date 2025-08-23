import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('temel')

  // Temel Seviye içeriği
  const temelSeviyeData = {
    title: "Temel Seviye",
    categories: [
      {
        name: "Öldürme Bugu",
        videos: [
          { id: 1, title: "Nasıl yapılır?" }
        ]
      },
      {
        name: "Ekipmanlar",
        videos: [
          { id: 1, title: "Ne kuşanılmalı?" }
        ]
      },
      {
        name: "Felaketzedeler",
        videos: [
          { id: 1, title: "Kimle oynamalı?" },
          { id: 2, title: "Sinerji nedir?" }
        ]
      },
      {
        name: "Toplama Nesnesi",
        videos: [
          { id: 1, title: "Ne için?" },
          { id: 2, title: "Önce hangiler?" },
          { id: 3, title: "Koleksiyon seti?" },
          { id: 4, title: "Özel set?" }
        ]
      },
      {
        name: "Teknik Donanım",
        videos: [
          { id: 1, title: "Katsayı hesabı?" },
          { id: 2, title: "İkiz nedir?" },
          { id: 3, title: "İkiz modları?" },
          { id: 4, title: "İdeal katsayılar?" }
        ]
      },
      {
        name: "Petler",
        videos: [
          { id: 1, title: "Pet grupları?" },
          { id: 2, title: "Pet besleme?" },
          { id: 3, title: "Xeno Pet nedir?" },
          { id: 4, title: "Hangi Xeno pet?" },
          { id: 5, title: "Hangi özellikler?" }
        ]
      }
    ]
  }

  // Deneyimli içeriği (Kaçış Operasyonu, Bitiricinin Yankısı, Klan Seferi)
  const deneyimliData = {
    title: "Deneyimli",
    sections: [
      {
        title: "Kaçış Operasyonu",
        categories: [
          {
            name: "Ekipmanlar",
            videos: [
              { id: 1, title: "Ne kuşanılmalı?" }
            ]
          },
          {
            name: "Build",
            videos: [
              { id: 1, title: "100 Parça" },
              { id: 2, title: "150 Parça" },
              { id: 3, title: "200 Parça" }
            ]
          },
          {
            name: "Bölümler",
            videos: [
              { id: 1, title: "Sırasıyla neler?" },
              { id: 2, title: "Süre ne kadar?" },
              { id: 3, title: "Neler düşer?" }
            ]
          },
          {
            name: "Oynama Stratejisi",
            videos: [
              { id: 1, title: "Merkeze dönüş?" },
              { id: 2, title: "Dinlen nedir?" },
              { id: 3, title: "Üst üste bölüm?" },
              { id: 4, title: "Ekipman farmı?" },
              { id: 5, title: "Puan farmı?" }
            ]
          }
        ]
      },
      {
        title: "Bitiricinin Yankısı",
        categories: [
          {
            name: "Ekipmanlar",
            videos: [
              { id: 1, title: "Ne kuşanılmalı?" }
            ]
          },
          {
            name: "Felaketzedeler",
            videos: [
              { id: 1, title: "Kimle oynamalı?" },
              { id: 2, title: "Uyandırma kaç?" },
              { id: 3, title: "Sinerji mi KB mi?" },
              { id: 4, title: "Savaş arkadaşı?" }
            ]
          },
          {
            name: "Oynama Stratejisi",
            videos: [
              { id: 1, title: "Evo sıralaması?" },
              { id: 2, title: "Savaş örneği?" }
            ]
          },
          {
            name: "Teknik Donanım",
            videos: [
              { id: 1, title: "İkiz hangi mod?" },
              { id: 2, title: "İdeal katsayılar?" }
            ]
          },
          {
            name: "Petler",
            videos: [
              { id: 1, title: "Hangi Xeno pet?" },
              { id: 2, title: "Hangi özellikler?" }
            ]
          }
        ]
      },
      {
        title: "Klan Seferi",
        categories: [
          {
            name: "Ekipmanlar",
            videos: [
              { id: 1, title: "Ne kuşanılmalı?" }
            ]
          },
          {
            name: "Felaketzedeler",
            videos: [
              { id: 1, title: "Kimle oynamalı?" },
              { id: 2, title: "Uyandırma kaç?" },
              { id: 3, title: "Sinerji mi KB mi?" },
              { id: 4, title: "Savaş arkadaşı?" }
            ]
          },
          {
            name: "Oynama Stratejisi",
            videos: [
              { id: 1, title: "Aktif beceriler?" },
              { id: 2, title: "Pasif beceriler?" },
              { id: 3, title: "Savaş örneği?" }
            ]
          },
          {
            name: "Teknik Donanım",
            videos: [
              { id: 1, title: "İkiz hangi mod?" },
              { id: 2, title: "İdeal katsayılar?" }
            ]
          },
          {
            name: "Petler",
            videos: [
              { id: 1, title: "Hangi Xeno pet?" },
              { id: 2, title: "Hangi özellikler?" }
            ]
          }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-blue-50 text-gray-900 py-6 px-4">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-cyan-800">Ayyıldız Survivorio Rehberi</h1>
        <p className="text-center text-lg mt-2">Tüm seviyeler için kapsamlı rehber.</p>
      </header>

      {/* Tab Seçimi */}
      <div className="max-w-6xl mx-auto mb-8 flex justify-center space-x-4">
        <button 
          onClick={() => setActiveTab('temel')} 
          className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'temel' 
            ? 'bg-cyan-600 text-white' 
            : 'bg-gray-200 hover:bg-cyan-100'}`}
        >
          Temel Seviye
        </button>
        <button 
          onClick={() => setActiveTab('deneyimli')} 
          className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'deneyimli' 
            ? 'bg-cyan-600 text-white' 
            : 'bg-gray-200 hover:bg-cyan-100'}`}
        >
          Deneyimli
        </button>
      </div>

      {/* İçerik */}
      <div className="max-w-6xl mx-auto">
        {activeTab === 'temel' ? (
          <div className="temel-seviye">
            <h2 className="text-2xl font-bold text-center mb-6 text-cyan-800">{temelSeviyeData.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {temelSeviyeData.categories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-cyan-700 text-white py-3 px-4">
                    <h3 className="font-bold text-lg">{category.name}</h3>
                  </div>
                  <ul className="p-4">
                    {category.videos.map(video => (
                      <li key={video.id} className="mb-2 last:mb-0">
                        <div className="flex items-start">
                          <span className="bg-blue-100 text-blue-700 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 text-sm">
                            {video.id}
                          </span>
                          <span className="text-gray-800">
                            [ Video ] - {video.title}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="deneyimli">
            <h2 className="text-2xl font-bold text-center mb-6 text-cyan-800">{deneyimliData.title}</h2>
            
            <div className="space-y-10">
              {deneyimliData.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="section">
                  <h3 className="text-xl font-bold mb-4 bg-cyan-800 text-white py-2 px-4 rounded-md inline-block">
                    {section.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.categories.map((category, catIndex) => (
                      <div key={catIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-cyan-700 text-white py-3 px-4">
                          <h4 className="font-bold text-lg">{category.name}</h4>
                        </div>
                        <ul className="p-4">
                          {category.videos.map(video => (
                            <li key={video.id} className="mb-2 last:mb-0">
                              <div className="flex items-start">
                                <span className="bg-blue-100 text-blue-700 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 text-sm">
                                  {video.id}
                                </span>
                                <span className="text-gray-800">
                                  [ Video ] - {video.title}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-12 pt-6 border-t border-blue-200 text-center text-blue-600">
        <p>© 2025 Ayyıldız Survivorio Rehberi - Tüm Hakları Saklıdır</p>
      </footer>
    </div>
  )
}

export default App
