import { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuData = {
    beef: [
      {
        name: 'Beef Blackpepper Bowl',
        price: 28000,
        desc: 'Beef slice + blackpepper sauce + sunny egg + veggies',
        tag: 'BEST SELLER',
        tagClass: 'badge-bestseller'
      },
      {
        name: 'Beef Bulgogi Bowl',
        price: 30000,
        desc: 'Korean-style beef + sesame + kimchi',
        tag: null
      },
      {
        name: 'Beef Yakiniku Bowl',
        price: 30000,
        desc: 'Japanese-style sweet soy beef',
        tag: null
      },
      {
        name: 'Beef Sambal Matah Bowl',
        price: 28000,
        desc: 'Beef slice + sambal matah Bali',
        tag: null
      }
    ],
    chicken: [
      {
        name: 'Chicken Teriyaki Bowl',
        price: 25000,
        desc: 'Chicken fillet + teriyaki sauce + sesame',
        tag: 'CROWD FAVORITE',
        tagClass: 'badge-favorite'
      },
      {
        name: 'Salted Egg Chicken Bowl',
        price: 30000,
        desc: 'Crispy chicken + salted egg sauce',
        tag: 'MUST TRY',
        tagClass: 'badge-musttry'
      },
      {
        name: 'Chicken Katsu Bowl',
        price: 27000,
        desc: 'Crispy chicken katsu + curry sauce',
        tag: null
      },
      {
        name: 'Chicken Sambal Bajak Bowl',
        price: 25000,
        desc: 'Grilled chicken + sambal bajak',
        tag: null
      },
      {
        name: 'Chicken Geprek Bowl',
        price: 23000,
        desc: 'Ayam geprek + sambal korek (level 1-5)',
        tag: null
      }
    ],
    seafood: [
      {
        name: 'Shrimp Tempura Bowl',
        price: 32000,
        desc: 'Crispy shrimp tempura + teriyaki',
        tag: null
      },
      {
        name: 'Fish Fillet Bowl',
        price: 28000,
        desc: 'Crispy dory + tartar sauce',
        tag: null
      },
      {
        name: 'Cumi Saus Padang Bowl',
        price: 30000,
        desc: 'Squid + spicy Padang sauce',
        tag: null
      }
    ],
    vegetarian: [
      {
        name: 'Tofu Teriyaki Bowl',
        price: 20000,
        desc: 'Crispy tofu + teriyaki + veggies',
        tag: null
      },
      {
        name: 'Mushroom Bowl',
        price: 22000,
        desc: 'Mixed mushroom + blackpepper sauce',
        tag: null
      }
    ],
    extras: [
      {
        name: 'Extra Rice',
        price: 5000,
        desc: 'Nasi putih tambahan',
        tag: null
      },
      {
        name: 'Extra Egg',
        price: 5000,
        desc: 'Sunny side up egg',
        tag: null
      },
      {
        name: 'Extra Beef',
        price: 15000,
        desc: 'Tambahan beef slice',
        tag: null
      },
      {
        name: 'Extra Chicken',
        price: 12000,
        desc: 'Tambahan ayam fillet',
        tag: null
      },
      {
        name: 'Cheese Sauce',
        price: 5000,
        desc: 'Saus keju creamy',
        tag: null
      },
      {
        name: 'Sambal Matah',
        price: 3000,
        desc: 'Sambal matah Bali',
        tag: null
      },
      {
        name: 'Kimchi',
        price: 5000,
        desc: 'Korean kimchi',
        tag: null
      }
    ],
    drinks: [
      {
        name: 'Es Teh Manis',
        price: 5000,
        desc: 'Classic iced sweet tea',
        tag: null
      },
      {
        name: 'Lemon Tea',
        price: 8000,
        desc: 'Refreshing lemon iced tea',
        tag: null
      },
      {
        name: 'Thai Tea',
        price: 12000,
        desc: 'Creamy Thai milk tea',
        tag: null
      },
      {
        name: 'Milo Dinosaur',
        price: 15000,
        desc: 'Milo iced + milo powder topping',
        tag: null
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'Semua Menu', icon: '🍱' },
    { id: 'beef', name: 'Beef Bowls', icon: '🐄' },
    { id: 'chicken', name: 'Chicken Bowls', icon: '🐔' },
    { id: 'seafood', name: 'Seafood Bowls', icon: '🦐' },
    { id: 'vegetarian', name: 'Vegetarian', icon: '🥬' },
    { id: 'extras', name: 'Extra Toppings', icon: '🥚' },
    { id: 'drinks', name: 'Drinks', icon: '🥤' }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getFilteredMenu = () => {
    if (activeCategory === 'all') {
      return Object.entries(menuData).map(([category, items]) => ({
        category,
        items
      }));
    }
    return [{ category: activeCategory, items: menuData[activeCategory] || [] }];
  };

  const getCategoryTitle = (category) => {
    const titles = {
      beef: '🐄 BEEF BOWLS',
      chicken: '🐔 CHICKEN BOWLS',
      seafood: '🦐 SEAFOOD BOWLS',
      vegetarian: '🥬 VEGETARIAN',
      extras: '🥚 EXTRAS & TOPPINGS',
      drinks: '🥤 DRINKS'
    };
    return titles[category] || category.toUpperCase();
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary via-primary-dark to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🍚</div>
          <div className="absolute bottom-10 right-10 text-8xl">🥢</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-4">
            MENU LU MAU? 🍚
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-heading">
            Semua porsi JUMBO, semua harga RAMAH!
          </p>
        </div>
      </section>

      {/* Portion Info Banner */}
      <section className="bg-secondary py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <p className="text-accent font-medium">
              <span className="font-bold">Semua bowl include:</span> Nasi putih/nasi merah + topping utama + sunny egg + veggies + sauce
            </p>
            <span className="hidden md:block text-accent/50">|</span>
            <p className="text-accent font-bold">
              Upgrade ke EXTRA JUMBO +Rp 8.000 <span className="text-primary">(double topping!)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background sticky top-16 md:top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-accent hover:bg-secondary'
                }`}
              >
                <span>{cat.icon}</span>
                <span className="whitespace-nowrap">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {getFilteredMenu().map(({ category, items }) => (
            <div key={category} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
                {getCategoryTitle(category)}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 relative"
                  >
                    {item.tag && (
                      <span className={`absolute -top-3 -right-3 badge ${item.tagClass}`}>
                        {item.tag}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-accent mb-2">{item.name}</h3>
                    <p className="text-accent/60 mb-4 text-sm">{item.desc}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">
                        {formatPrice(item.price)}
                      </span>
                      <a
                        href="https://gofood.link/u/lumau"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors text-sm font-medium"
                      >
                        Order
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
            UDAH LAPER? 😋
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Order sekarang lewat GoFood, GrabFood, atau ShopeeFood!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://gofood.link/u/lumau"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
            >
              🏍️ GoFood
            </a>
            <a
              href="https://grab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
            >
              🛵 GrabFood
            </a>
            <a
              href="https://shopee.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
            >
              🛒 ShopeeFood
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
