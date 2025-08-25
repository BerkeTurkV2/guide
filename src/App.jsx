import { useState } from 'react'

// YouTube URL'sini embed formatına dönüştüren yardımcı fonksiyon
const getYoutubeEmbedUrl = (url) => {
  console.log('Dönüştürülecek URL:', url);
  
  // YouTube URL formatını kontrol et
  if (url.includes('youtu.be/')) {
    // youtu.be formatı için
    const videoId = url.split('youtu.be/')[1].split('?')[0];
    console.log('Çıkarılan Video ID:', videoId);
    return `https://www.youtube.com/embed/${videoId}`;
  } else if (url.includes('youtube.com/watch')) {
    // youtube.com/watch formatı için
    const videoId = new URLSearchParams(url.split('?')[1]).get('v');
    console.log('Çıkarılan Video ID:', videoId);
    return `https://www.youtube.com/embed/${videoId}`;
  } else if (url.includes('youtube.com/shorts/')) {
    // youtube.com/shorts formatı için
    const videoId = url.split('youtube.com/shorts/')[1].split('?')[0];
    console.log('Çıkarılan Shorts Video ID:', videoId);
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  // Geçersiz URL durumunda orijinal URL'yi döndür
  console.log('Geçersiz URL formatı, orijinal URL döndürülüyor');
  return url;
};

function App() {
  const [activeTab, setActiveTab] = useState('temel')
  const [activeItems, setActiveItems] = useState({})
  const [activeSections, setActiveSections] = useState({})

  // Temel Seviye içeriği
  const temelSeviyeData = {
    title: "Temel Seviye",
    categories: [
      {
        name: "Öldürme Bugu",
        items: [
          { 
            id: 1, 
            type: "video", 
            title: "Nasıl yapılır?", 
            url: "https://youtube.com/shorts/22RaXldJC7g?si=cg85o%02cFIJ1y96qC",
            description: ""
          }
        ]
      },
      {
        name: "Petler",
        items: [
          { 
            id: 1, 
            type: "text", 
            title: "Xeno pet açma?", 
            description: "Her pet türünden eveil hayvanları sarı 5 yıldız olarak uyandırırsanız Xeno pet menüsü açılabilir."
          },
          { 
            id: 2, 
            type: "text", 
            title: "Hangi Xeno pet?", 
            description: "Puffy"
          }
        ]
      },
      {
        name: "Toplama Nesnesi",
        items: [
          { 
            id: 1, 
            type: "text", 
            title: "Ne için?", 
            description: "Hesaba kıymetli istatistiklerin dahil edilmesi için önemlidir. Bunlardan bazıları; Kritik Oranı, Kritik Hasarı, Saldırı Hasarı vs."
          },
          { 
            id: 2, 
            type: "text", 
            title: "Önce hangiler?", 
            description: "Kırmızı olanlardan drona etki edene öncelik verin. Sarı olanlardan ise kırmızı 3 yıldız özelliği olarak Kritik oran'ı verenlere öncelik verin."
          },
          { 
            id: 3, 
            type: "text", 
            title: "Koleksiyon seti?", 
            description: "Açtığınız ve yükselttiğiniz koleksiyonlar sebebiyle belli kombinasyonlarda etkili özellikler aktif olur. Bu özelliklere yönelik gelişiminizde ilerlemeniz çok mantıklı bir strateji olacaktır."
          },
          { 
            id: 4, 
            type: "text", 
            title: "Özel set?", 
            description: "Elinizde olan mor parçacıkları kullanarak özel setleri yükseltebilirsiniz ve çok kıymetli özellikleri hesabınıza dahil edebilirsiniz."
          }
        ]
      },
      {
        name: "Teknik Donanım",
        items: [
          { 
            id: 1, 
            type: "text", 
            title: "Katsayı hesabı?", 
            description: "Sarı 0 : 50 Puan\nSarı 1 : 100 Puan\nSarı 2 : 150 Puan\nSarı 3 : 200 Puan\nKırmızı 0 : 300 Puan\nKırmızı 1 : 400 Puan\nKırmızı 2 : 550 Puan\nKırmızı 3 : 700 Puan\nKırmızı 4 : 850 Puan\nYadigar : 1000 Puan\nİkiz Yadigar : 1000 Puan"
          }
        ]
      }
    ]
  }

  // Deneyimli içeriği (Kaçış Operasyonu, Bitiricinin Yankısı, Klan Seferi)
  const deneyimliData = {
    title: "Deneyimli",
    sections: [
      {
        title: "Klan Seferi",
        categories: [
          {
            name: "Ekipmanlar",
            items: [
              { 
                id: 1, 
                type: "video", 
                title: "Ne kuşanılmalı?", 
                url: "https://www.youtube.com/watch?v=09XqC0uKfec&ab_channel=VeterinerHekimOnurKaraca",
                description: ""
              },
              { 
                id: 2, 
                type: "video", 
                title: "Ne kuşanılmalı 2 ?", 
                url: "https://www.youtube.com/watch?v=pEtHII8nJcE&ab_channel=VeterinerHekimOnurKaraca",
                description: ""
              }
            ]
          },
          {
            name: "Felaketzedeler",
            items: [
              { 
                id: 1, 
                type: "text", 
                title: "Kimle oynamalı?", 
                description: "Taloxa"
              },
              { 
                id: 2, 
                type: "text", 
                title: "Uyandırma kaç?", 
                description: "En Kırmızı 1 Yıldız uyandırılması gerekmektedir. İmkanın var ise Kırmızı 2 Yıldız'a uyandırıp takımlı pasifin birinci yuvasını doldurabiliyorsan çok daha faydalı olur. Daha iyi imkana sahipsen Kırmızı 3 Yıldız uyandırmasını ciddi anlamda öneririm. Eğer imkanın var ise Kırmızı 4 Yıldız'a uyandırıp takımlı pasifin ikinci yuvasınıda doldurabiliyorsan çok daha faydalı olur. Eğer imkanın el verirse en çok önereceğim Kırmızı 5 Yıldız uyandırması olacaktır. Bunu yapamıyorsun ancak Sinerji levelin yüksek mi? Sinerji levelini gerekirse sıfırla. Mutlaka Kırmızı 5 uyandırma seviyesini aktif etmeye çalış."
              },
              { 
                id: 3, 
                type: "text", 
                title: "Sinerji mi K8 mi?", 
                description: "10 Level Sinerji, K8 uyumdan daha etkilidir. Eğer K8 uyumdan vazgeçtiğinde sinerjini 10 level daha yükseltebiliyorsan sinerji levelini tercih et. Ancak bu söylediğim olmuyor ise K8 uyumunu tercih et."
              },
              { 
                id: 4, 
                type: "text", 
                title: "Savaş arkadaşı?", 
                description: "Sol tarafta Metallia felaketzedesi, sağ tarafta Kral felaketzedesi idealdir. Ancak imkanın el vermiyor ise sol tarafa Kral felaketzedesini, sağ tarafa yaygın felaketzedesini yerleştirebilirsin."
              }
            ]
          },
          {
            name: "Oynama Stratejisi",
            items: [
              { 
                id: 1, 
                type: "text", 
                title: "Aktif beceriler?", 
                description: ""
              },
            ]
          },
          {
            name: "Teknik Donanım",
            items: [
              { 
                id: 1, 
                type: "video", 
                title: "İkiz hangi mod? - İdeal katsayılar?", 
                url: "https://www.youtube.com/shorts/CMxbGfFHVJg",
                description: ""
              },
            ]
          },
          {
            name: "Petler",
            items: [
              { 
                id: 1, 
                type: "video", 
                title: "Hangi Xeno pet?", 
                url: "https://www.youtube.com/shorts/T3isAH8VD-E",
                description: ""
              },
            ]
          }
        ]
      },
      {
        title: "Bitiricinin Yankısı",
        categories: [
          {
            name: "Ekipmanlar",
            items: [
              { 
                id: 1, 
                type: "video", 
                title: "Ne kuşanılmalı?", 
                url: "https://www.youtube.com/watch?v=9jAHoq5w7zM&ab_channel=VeterinerHekimOnurKaraca",
                description: ""
              }
            ]
          },
          {
            name: "Felaketzedeler",
            items: [
              { 
                id: 1, 
                type: "text", 
                title: "Kimle oynamalı?", 
                description: "Taloxa"
              },
              { 
                id: 2, 
                type: "text", 
                title: "Uyandırma kaç?", 
                description: "En Kırmızı 1 Yıldız uyandırılması gerekmektedir. İmkanın var ise Kırmızı 2 Yıldız'a uyandırıp takımlı pasifin birinci yuvasını doldurabiliyorsan çok daha faydalı olur. Daha iyi imkana sahipsen Kırmızı 3 Yıldız uyandırmasını ciddi anlamda öneririm. Eğer imkanın var ise Kırmızı 4 Yıldız'a uyandırıp takımlı pasifin ikinci yuvasında doldurabiliyorsan çok daha faydalı olur. Eğer imkanın el verirse en çok önereceğim Kırmızı 5 Yıldız uyandırması olacaktır. Bunu yapamıyorsan ancak Sinerji levelin yüksek mi? Sinerji levelini gerekirse sıfırla. Mutlaka Kırmızı 5 uyandırma seviyesini aktif etmeye çalış."
              },
              { 
                id: 3, 
                type: "text", 
                title: "Sinerji mi K8 mi?", 
                description: "10 Level Sinerji, K8 uyumdan daha etkilidir. Eğer K8 uyumdan vazgeçtiğinde sinerjini 10 level daha yükseltebiliyorsan sinerji levelini tercih et. Ancak bu söylediğim olmuyor ise K8 uyumunu tercih et."
              },
              { 
                id: 4, 
                type: "text", 
                title: "Savaş arkadaşı?", 
                description: "Sol tarafta Metalfa felaketzedesi, sağ tarafta Kral felaketzedesi idealdir. Ancak imkanın el vermiyor ise sol tarafta Kral felaketzedesi, sağ tarafta yaygın felaketzedesi yerleştirebilirsin."
              }
            ]
          },
          {
            name: "Oynama Stratejisi",
            items: [
              { 
                id: 1, 
                type: "text", 
                title: "Evo sıralaması?", 
                description: "3 2 1 4 5"
              }
            ]
          },
          {
            name: "Teknik Donanım",
            items: [
              { 
                id: 1, 
                type: "video", 
                title: "İkiz hangi mod? - İdeal katsayılar??", 
                url: "https://www.youtube.com/shorts/Tb1M6mnEbms",
                description: ""
              },
            ]
          },
          {
            name: "Petler",
            items: [
              { 
                id: 1, 
                type: "video", 
                title: "Hangi pet?", 
                url: "https://www.youtube.com/shorts/T3isAH8VD-E",
                description: ""
              }
            ]
          }
        ]
      },
      {
        title: "Kaçış Operasyonu",
        categories: [
          {
            name: "Ekipmanlar",
            items: [
              { 
                id: 1, 
                type: "text", 
                title: "S kuşanmalar? (mor)", 
                description: "1. Boşluk S Silahı\n2. Kaos S Zırhı\n3. Boşluk S Kolyesi\n4. Kaos S Kemeri\n5. Boşluk S Eldiveni\n6. Kaos S Ayakkabısı"
              },
              { 
                id: 2, 
                type: "text", 
                title: "S kuşanmalar? (sarı)", 
                description: "1. Boşluk S Silahı\n2. Kaos S Zırhı\n3. Boşluk S Kolyesi\n4. Kaos S Kemeri\n5. Boşluk S Eldiveni\n6. Kaos S Ayakkabısı"
              },
              { 
                id: 3, 
                type: "text", 
                title: "S kuşanmalar? (kırmızı)", 
                description: "1. Boşluk S Silahı\n2. Kaos S Zırhı\n3. Boşluk S Kolyesi\n4. Kaos S Kemeri\n5. Boşluk S Eldiveni\n6. Kaos S Ayakkabısı"
              }
            ]
          },
          {
            name: "Build",
            items: [
              { 
                id: 1, 
                type: "text", 
                title: "200 Parça", 
                description: "[Resim - 200 Parça ekipman görseli]"
              }
            ]
          },
          {
            name: "Bölümler",
            items: [
              { 
                id: 1, 
                type: "text", 
                title: "Sırasıyla neler?", 
                description: "- Kolay 1-6\n- Orta 1-6\n- Zor 1-6\n- Epik 1-6\n- Efsane 1-6\n- Destansı 1-6\n- Kabus 1-6\n- Rüya Cehennemi 1-12"
              },
              { 
                id: 2, 
                type: "text", 
                title: "Süre ne kadar?", 
                description: "Her bölüm 5 dakika"
              },
              { 
                id: 3, 
                type: "text", 
                title: "Neler düşer?", 
                description: "- Mor S Parçaları Zor bölüm itibariyle düşmeye başlar.\n- Sarı S Parçaları Efsane bölüm itibariyle düşmeye başlar\n- Kırmızı S Parçaları Kabus bölüm itibariyle düşmeye başlar"
              }
            ]
          },
          {
            name: "Oynama Stratejisi",
            items: [
              { 
                id: 1, 
                type: "text", 
                title: "Merkeze dönüş?", 
                description: "Eğer son öldürdüğün boss'u öldürmekte zorlanıyorsan bunu Midgame'den itibaren pişmanlık yaşamadığın sürürleri tercih edersin."
              },
              { 
                id: 2, 
                type: "text", 
                title: "Dinlen nedir?", 
                description: "Savaşın bittiğinden sonra devam etmek veya merkeze dönüş konusunda karar vereceksin ancak zamanın buna el vermiyor, dahası sonra o zaman bitti tıklayarak mola vermiş oluyorsun. Daha sonra müsait zamanında kaçış operasyonu moduna girince bu pencere tekrar karşına çıkkar."
              },
              { 
                id: 3, 
                type: "text", 
                title: "Üst üste boss öldürüm?", 
                description: "Üst üste en fazla 2 Boss öldürdükten sonraki savaşacağınız her boss normalden çok daha güçlü ve zorlu olarak karşınıza çıkacaktır. Bu sebepten dolayı 2-3 tane boss öldürdükten sonra merkeze dönüş yapmanız faydalı olacaktır."
              },
              { 
                id: 4, 
                type: "text", 
                title: "Ekipman farmı?", 
                description: "Zor bölümde oynayın ve Mor renkteKi S ekipmanların farmını yapın ve kuşanın. Daha sonrasında Bölümlerde ilerlemeye devam edin. Efsane bölümünde ise Sarı S ekipmanları elde edin, tüm ekipmanlarınız ideal Sarı renkteKi S Parçaları olana kadar o bölümde vakit geçirin. Tamamladığınızda ise bölümlerde ilerlemeye devam edin. Kabus ve Rüya cehennemi bölümlerinde ise kırmızı ekipman toplamaya odaklanın."
              },
              { 
                id: 5, 
                type: "text", 
                title: "Puan farmı?", 
                description: "Diğer bölümlerde elde edeceğiniz hedefsize hizmet etmeyecektir. Bu yüzden Rüya Cehennemi bölümündeyken kırmızı ve sarı toplama nesneleri biriktirin. Satın. Daha fazla puan elde edin."
              }
            ]
          }
        ]
      }
    ]
  }

  // İçerik gösterme/gizleme fonksiyonu
  const toggleItem = (categoryId, itemId) => {
    const itemKey = `${categoryId}-${itemId}`;
    
    setActiveItems(prev => {
      // Eğer içerik zaten açıksa, kapat
      if (prev[itemKey]) {
        const newState = {...prev};
        delete newState[itemKey];
        return newState;
      } 
      // İçerik kapalıysa, aç
      else {
        return {...prev, [itemKey]: true};
      }
    });
  };
  
  // Bölüm gösterme/gizleme fonksiyonu
  const toggleSection = (sectionId) => {
    setActiveSections(prev => {
      // Eğer bölüm zaten açıksa, kapat
      if (prev[sectionId]) {
        const newState = {...prev};
        delete newState[sectionId];
        return newState;
      } 
      // Bölüm kapalıysa, aç
      else {
        return {...prev, [sectionId]: true};
      }
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-900 py-6 px-4">
      {/* Modal yapısını kaldırdık */}
      
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
            ? 'bg-cyan-700 text-white' 
            : 'bg-gray-200 hover:bg-cyan-100'}`}
        >
          Temel Seviye
        </button>
        <button 
          onClick={() => setActiveTab('deneyimli')} 
          className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'deneyimli' 
            ? 'bg-cyan-700 text-white' 
            : 'bg-gray-200 hover:bg-cyan-100'}`}
        >
          Deneyimli
        </button>
      </div>

      {/* İçerik */}
      <div className="max-w-6xl mx-auto">
        {activeTab === 'temel' ? (
          <div className="temel-seviye">
            <h2 className="text-2xl font-bold text-center mb-6 text-cyan-700">{temelSeviyeData.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {temelSeviyeData.categories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-cyan-700 text-white py-3 px-4">
                    <h3 className="font-bold text-lg">{category.name}</h3>
                  </div>
                  <ul className="p-4">
                    {category.items.map(item => (
                      <li key={item.id} className="mb-4 last:mb-0">
                        <div className="flex items-start">
                          <span className="bg-blue-100 text-blue-700 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 text-sm">
                            {item.id}
                          </span>
                          <div className="w-full">
                            {item.type === 'video' ? (
                              <div>
                                <button 
                                  onClick={() => toggleItem(category.name, item.id)}
                                  className="text-gray-800 hover:text-blue-600 hover:underline cursor-pointer text-left mb-2 font-medium"
                                >
                                  - {item.title}
                                </button>
                                
                                {/* Video oynatıcı - sadece ilgili video açıksa göster */}
                                {activeItems[`${category.name}-${item.id}`] && (
                                  <div className="mt-2 mb-3 w-full flex justify-center">
                                    <div className="relative w-[280px]" style={{ paddingBottom: '56.25%', height: 0 }}>
                                      <iframe
                                        src={getYoutubeEmbedUrl(item.url)}
                                        className="absolute top-0 left-0 w-full h-full"
                                        style={{ maxHeight: '300px'}}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="YouTube video player"
                                      ></iframe>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div>
                                <button 
                                  onClick={() => toggleItem(category.name, item.id)}
                                  className="text-gray-800 hover:text-blue-600 hover:underline cursor-pointer text-left mb-2 font-medium"
                                >
                                  - {item.title}
                                </button>
                                
                                {activeItems[`${category.name}-${item.id}`] && (
                                  <div className="text-gray-600 bg-gray-50 p-3 rounded-md text-sm whitespace-pre-line mt-2">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
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
            <h2 className="text-2xl font-bold text-center mb-6 text-cyan-700">{deneyimliData.title}</h2>
            
            <div className="space-y-6">
              {deneyimliData.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="section bg-white rounded-lg shadow-md overflow-hidden">
                  <button 
                    onClick={() => toggleSection(section.title)}
                    className="w-full text-left text-xl font-bold bg-cyan-700 text-white py-3 px-4 flex justify-between items-center hover:bg-cyan-800 transition-colors"
                  >
                    <span>{section.title}</span>
                    <span className="text-2xl">
                      {activeSections[section.title] ? '−' : '+'}
                    </span>
                  </button>
                  
                  {activeSections[section.title] && (
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {section.categories.map((category, catIndex) => (
                          <div key={catIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-cyan-700 text-white py-3 px-4">
                              <h4 className="font-bold text-lg">{category.name}</h4>
                            </div>
                            <ul className="p-4">
                              {category.items ? (
                                category.items.map(item => (
                                  <li key={item.id} className="mb-4 last:mb-0">
                                    <div className="flex items-start">
                                      <span className="bg-blue-100 text-blue-700 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 text-sm">
                                        {item.id}
                                      </span>
                                      <div className="w-full">
                                        {item.type === 'video' ? (
                                          <div>
                                            <button 
                                              onClick={() => toggleItem(category.name, item.id)}
                                              className="text-gray-800 hover:text-blue-600 hover:underline cursor-pointer text-left mb-2"
                                            >
                                              - {item.title}
                                            </button>
                                            
                                            {activeItems[`${category.name}-${item.id}`] && (
                                              <div className="mt-2 mb-3 w-full flex justify-center">
                                                <div className="relative w-[260px]" style={{ paddingBottom: '56.25%', height: 0 }}>
                                                  <iframe
                                                    src={getYoutubeEmbedUrl(item.url)}
                                                    className="absolute top-0 left-0 w-full h-full"
                                                    style={{ maxHeight: '300px' }}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="YouTube video player"
                                                  ></iframe>
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        ) : (
                                          <div>
                                            <button 
                                              onClick={() => toggleItem(category.name, item.id)}
                                              className="text-gray-800 hover:text-blue-600 hover:underline cursor-pointer text-left mb-2 font-medium"
                                            >
                                              - {item.title}
                                            </button>
                                            
                                            {activeItems[`${category.name}-${item.id}`] && (
                                              <div className="text-gray-600 bg-gray-50 p-3 rounded-md text-sm whitespace-pre-line mt-2">
                                                {item.description}
                                              </div>
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </li>
                                ))
                              ) : (
                                category.videos && category.videos.map(video => (
                                  <li key={video.id} className="mb-2 last:mb-0">
                                    <div className="flex items-start">
                                      <span className="bg-blue-100 text-blue-700 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 text-sm">
                                        {video.id}
                                      </span>
                                      <div>
                                        <button 
                                          onClick={() => toggleVideo(category.name, video.id)}
                                          className="text-gray-800 hover:text-blue-600 hover:underline cursor-pointer text-left mb-2"
                                        >
                                          - {video.title}
                                        </button>
                                        
                                        {activeVideos[`${category.name}-${video.id}`] && (
                                          <div className="mt-2 mb-3 w-full flex justify-center">
                                            <div className="relative w-[260px]" style={{ paddingBottom: '56.25%', height: 0 }}>
                                              <iframe
                                                src={getYoutubeEmbedUrl(video.url)}
                                                className="absolute top-0 left-0 w-full h-full"
                                                style={{ maxHeight: '300px' }}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title="YouTube video player"
                                              ></iframe>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </li>
                                ))
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
