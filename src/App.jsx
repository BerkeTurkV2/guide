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
          { id: 1, title: "Nasıl yapılır?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
        ]
      },
      {
        name: "Ekipmanlar",
        videos: [
          { id: 1, title: "Ne kuşanılmalı?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
        ]
      },
      {
        name: "Felaketzedeler",
        videos: [
          { id: 1, title: "Kimle oynamalı?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
          { id: 2, title: "Sinerji nedir?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
        ]
      },
      {
        name: "Toplama Nesnesi",
        videos: [
          { id: 1, title: "Ne için?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
          { id: 2, title: "Önce hangiler?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
          { id: 3, title: "Koleksiyon seti?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
          { id: 4, title: "Özel set?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
        ]
      },
      {
        name: "Teknik Donanım",
        videos: [
          { id: 1, title: "Katsayı hesabı?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
          { id: 2, title: "İkiz nedir?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
          { id: 3, title: "İkiz modları?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
          { id: 4, title: "İdeal katsayılar?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
        ]
      },
      {
        name: "Petler",
        videos: [
          { id: 1, title: "Pet grupları?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
          { id: 2, title: "Pet besleme?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
          { id: 3, title: "Xeno Pet nedir?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
          { id: 4, title: "Hangi Xeno pet?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
          { id: 5, title: "Hangi özellikler?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
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
              { id: 1, title: "Ne kuşanılmalı?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
            ]
          },
          {
            name: "Build",
            videos: [
              { id: 1, title: "100 Parça", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 2, title: "150 Parça", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 3, title: "200 Parça", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
            ]
          },
          {
            name: "Bölümler",
            videos: [
              { id: 1, title: "Sırasıyla neler?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 2, title: "Süre ne kadar?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 3, title: "Neler düşer?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
            ]
          },
          {
            name: "Oynama Stratejisi",
            videos: [
              { id: 1, title: "Merkeze dönüş?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 2, title: "Dinlen nedir?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 3, title: "Üst üste bölüm?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 4, title: "Ekipman farmı?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 5, title: "Puan farmı?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
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
              { id: 1, title: "Ne kuşanılmalı?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
            ]
          },
          {
            name: "Felaketzedeler",
            videos: [
              { id: 1, title: "Kimle oynamalı?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 2, title: "Uyandırma kaç?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 3, title: "Sinerji mi KB mi?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 4, title: "Savaş arkadaşı?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
            ]
          },
          {
            name: "Oynama Stratejisi",
            videos: [
              { id: 1, title: "Evo sıralaması?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 2, title: "Savaş örneği?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
            ]
          },
          {
            name: "Teknik Donanım",
            videos: [
              { id: 1, title: "İkiz hangi mod?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 2, title: "İdeal katsayılar?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
            ]
          },
          {
            name: "Petler",
            videos: [
              { id: 1, title: "Hangi Xeno pet?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 2, title: "Hangi özellikler?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
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
              { id: 1, title: "Ne kuşanılmalı?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
            ]
          },
          {
            name: "Felaketzedeler",
            videos: [
              { id: 1, title: "Kimle oynamalı?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 2, title: "Uyandırma kaç?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 3, title: "Sinerji mi KB mi?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 4, title: "Savaş arkadaşı?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
            ]
          },
          {
            name: "Oynama Stratejisi",
            videos: [
              { id: 1, title: "Aktif beceriler?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 2, title: "Pasif beceriler?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 3, title: "Savaş örneği?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
            ]
          },
          {
            name: "Teknik Donanım",
            videos: [
              { id: 1, title: "İkiz hangi mod?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 2, title: "İdeal katsayılar?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
            ]
          },
          {
            name: "Petler",
            videos: [
              { id: 1, title: "Hangi Xeno pet?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" },
              { id: 2, title: "Hangi özellikler?", url: "https://youtu.be/fyX1JPxd6GI?si=dKCzaj4QP6UIf9yc" }
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
                          <a 
                            href={video.url || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-800 hover:text-blue-600 hover:underline"
                          >
                            [ Video ] - {video.title}
                          </a>
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
                                <a 
                                  href={video.url || "#"} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="text-gray-800 hover:text-blue-600 hover:underline"
                                >
                                  [ Video ] - {video.title}
                                </a>
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
      <footer className="max-w-6xl mx-auto mt-12 pt-6 border-t border-blue-200 text-center text-cyan-800">
        <p>© 2025 Ayyıldız Survivorio Rehberi - Tüm Hakları Saklıdır</p>
      </footer>
    </div>
  )
}

export default App
