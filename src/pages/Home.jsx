import { Link } from 'react-router-dom';

const Home = () => {
  const signatureBowls = [
    {
      name: 'BEEF BLACKPEPPER BOWL',
      price: 'Rp 28.000',
      desc: 'Beef slice tender dengan saus blackpepper yang rich',
      tag: 'BEST SELLER 🔥',
      tagClass: 'badge-bestseller',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop'
    },
    {
      name: 'CHICKEN TERIYAKI BOWL',
      price: 'Rp 25.000',
      desc: 'Ayam fillet juicy dengan saus teriyaki homemade',
      tag: 'CROWD FAVORITE',
      tagClass: 'badge-favorite',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=400&fit=crop'
    },
    {
      name: 'SALTED EGG CHICKEN BOWL',
      price: 'Rp 30.000',
      desc: 'Ayam crispy dengan salted egg sauce yang creamy',
      tag: 'MUST TRY!',
      tagClass: 'badge-musttry',
      image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=400&h=400&fit=crop'
    }
  ];

  const whyLuMau = [
    {
      icon: '🍚',
      title: 'PORSI NGGAK PELIT',
      desc: 'Nasi full, topping banyak, perut puas!'
    },
    {
      icon: '🔥',
      title: 'RASA NGGAK BOHONG',
      desc: 'Bumbu racikan sendiri, bukan instant!'
    },
    {
      icon: '💰',
      title: 'HARGA NGGAK BIKIN NANGIS',
      desc: '20K-an udah kenyang!'
    },
    {
      icon: '⚡',
      title: 'CEPET NGGAK PAKE LAMA',
      desc: '10 menit ready!'
    }
  ];

  const categories = [
    { name: 'Beef Bowls', icon: '🐄' },
    { name: 'Chicken Bowls', icon: '🐔' },
    { name: 'Seafood Bowls', icon: '🦐' },
    { name: 'Vegetarian Bowls', icon: '🥬' },
    { name: 'Extra Toppings', icon: '🥚' },
    { name: 'Drinks', icon: '🥤' }
  ];

  const stats = [
    { number: '1 Juta+', label: 'Bowl Terjual' },
    { number: '150+', label: 'Outlet' },
    { number: '4.8', label: 'Rating GoFood' }
  ];

  const ugcPhotos = [
    'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1580013759032-c96505e24c1f?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=300&fit=crop'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🍚</div>
          <div className="absolute top-1/4 right-20 text-8xl">🥢</div>
          <div className="absolute bottom-20 left-1/4 text-7xl">🔥</div>
          <div className="absolute bottom-10 right-10 text-8xl">🍜</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <div className="animate-bounce-slow mb-6">
            <span className="text-8xl md:text-9xl">🍚</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-white text-stroke-white mb-4 tracking-wider">
            LU MAU?
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-secondary font-heading mb-6">
            Rice bowl porsi sultan, harga rakyat!
          </p>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Topping nggak pelit, nasi hangat, perut kenyang!
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="bg-secondary text-accent font-semibold px-4 py-2 rounded-full text-sm md:text-base">
              Porsi Jumbo
            </span>
            <span className="bg-white text-primary font-semibold px-4 py-2 rounded-full text-sm md:text-base">
              20K-an
            </span>
            <span className="bg-secondary text-accent font-semibold px-4 py-2 rounded-full text-sm md:text-base">
              150+ Outlet
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-white text-primary font-bold px-8 py-4 rounded-full text-lg hover:bg-secondary hover:text-accent transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Lihat Menu
            </Link>
            <a
              href="https://gofood.link/u/lumau"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-accent font-bold px-8 py-4 rounded-full text-lg hover:bg-secondary-light transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Order Sekarang
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Signature Bowls Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-center text-primary mb-4">
            SIGNATURE BOWLS 🔥
          </h2>
          <p className="text-center text-accent/70 mb-12 text-lg">
            Menu andalan yang bikin nagih!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureBowls.map((bowl, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={bowl.image}
                    alt={bowl.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 right-4 badge ${bowl.tagClass}`}>
                    {bowl.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading text-accent mb-2">{bowl.name}</h3>
                  <p className="text-accent/70 mb-4">{bowl.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{bowl.price}</span>
                    <a
                      href="https://gofood.link/u/lumau"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors font-medium"
                    >
                      Order
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lu Mau Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-center text-white mb-4">
            KENAPA LU MAU?
          </h2>
          <p className="text-center text-secondary font-heading text-xl mb-12">
            Karena emang worth it! 💯
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyLuMau.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-200 shadow-lg"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-heading text-primary mb-2">{item.title}</h3>
                <p className="text-accent/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-center text-primary mb-4">
            MENU LU MAU? 📋
          </h2>
          <p className="text-center text-accent/70 mb-12 text-lg">
            Pilihan lengkap buat semua selera!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, index) => (
              <Link
                key={index}
                to="/menu"
                className="bg-white rounded-2xl p-6 text-center hover:bg-secondary hover:scale-105 transition-all duration-200 shadow-md group"
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <h3 className="font-semibold text-accent group-hover:text-accent">{cat.name}</h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Lihat Menu Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* Outlet Locator Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-accent mb-4">
            LU MAU? ADA DI DEKAT LU! 📍
          </h2>
          <p className="text-accent/70 mb-8 text-lg max-w-2xl mx-auto">
            150+ outlet tersebar di seluruh Indonesia. Mau makan di tempat atau order delivery, semua bisa!
          </p>

          <div className="max-w-xl mx-auto mb-8">
            <div className="flex bg-white rounded-full overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Cari lokasi outlet..."
                className="flex-1 px-6 py-4 outline-none text-accent"
              />
              <button className="bg-primary text-white px-6 py-4 font-semibold hover:bg-primary-dark transition-colors">
                Cari
              </button>
            </div>
          </div>

          <Link
            to="/locations"
            className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-accent/90 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Lihat Semua Outlet
          </Link>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-5xl md:text-6xl lg:text-7xl font-heading text-secondary mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram UGC Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading text-center text-primary mb-4">
            @LUMAU.ID 📸
          </h2>
          <p className="text-center text-accent/70 mb-10 text-lg">
            Tag @lumau.id buat di-feature!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ugcPhotos.map((photo, index) => (
              <a
                key={index}
                href="https://instagram.com/lumau.id"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden rounded-xl group"
              >
                <img
                  src={photo}
                  alt="Customer photo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://instagram.com/lumau.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @lumau.id
            </a>
          </div>
        </div>
      </section>

      {/* Franchise CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 text-9xl">💰</div>
          <div className="absolute bottom-10 left-10 text-8xl">🏪</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-4">
            MAU BUKA OUTLET LU MAU? 💰
          </h2>
          <p className="text-secondary font-heading text-2xl mb-4">
            BISA BANGET!
          </p>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Bisnis F&B yang proven dengan 150+ outlet sukses. Modal terjangkau, support full, balik modal cepat!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="bg-secondary text-accent font-semibold px-4 py-2 rounded-full">
              Mulai 75 Juta
            </span>
            <span className="bg-white text-primary font-semibold px-4 py-2 rounded-full">
              Balik Modal 8-14 Bulan
            </span>
            <span className="bg-secondary text-accent font-semibold px-4 py-2 rounded-full">
              Support Penuh
            </span>
          </div>

          <Link
            to="/franchise"
            className="inline-block bg-white text-primary font-bold px-10 py-4 rounded-full text-lg hover:bg-secondary hover:text-accent transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Info Franchise
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
