const Testimonials = () => {
  const googleReviews = [
    {
      name: 'Amanda Putri',
      rating: 5,
      date: '2 minggu lalu',
      text: 'Porsinya beneran jumbo! Nggak nyangka harga segini dapet sebanyak ini. Beef blackpepper-nya tender banget, sausnya rich. Bakal balik lagi!',
      source: 'Google'
    },
    {
      name: 'Reza Pratama',
      rating: 5,
      date: '1 bulan lalu',
      text: 'Favorite banget chicken teriyaki-nya! Ayamnya juicy, sausnya pas, nasi-nya juga masih anget. Value for money sih ini.',
      source: 'Google'
    },
    {
      name: 'Dewi Kusuma',
      rating: 5,
      date: '3 minggu lalu',
      text: 'Salted egg chicken-nya ENAK BANGET! Creamy tapi nggak eneg. Porsi juga nggak pelit. 10/10 recommend!',
      source: 'Google'
    },
    {
      name: 'Bimo Setiawan',
      rating: 4,
      date: '1 bulan lalu',
      text: 'Enak sih, cuma kadang waiting time-nya agak lama pas jam makan siang. Tapi worth the wait!',
      source: 'Google'
    }
  ];

  const gofoodReviews = [
    {
      name: 'FoodieJKT',
      rating: 5,
      date: '1 minggu lalu',
      text: 'Pertama kali coba langsung jatuh cinta! Beef bulgogi-nya beneran Korean style, kimchi-nya juga enak. Harga super affordable.',
      source: 'GoFood',
      verified: true
    },
    {
      name: 'RachelEats',
      rating: 5,
      date: '2 minggu lalu',
      text: 'Langganan dari dulu! Paling suka chicken geprek level 3, pedesnya pas. Pelayanannya juga cepet.',
      source: 'GoFood',
      verified: true
    },
    {
      name: 'MakanMurah_',
      rating: 5,
      date: '3 minggu lalu',
      text: 'Budget friendly tapi rasanya premium! Shrimp tempura bowl-nya worth it banget. Udangnya gede-gede.',
      source: 'GoFood',
      verified: true
    },
    {
      name: 'JajananHits',
      rating: 4,
      date: '1 bulan lalu',
      text: 'Konsisten enak dari pertama beli sampai sekarang. Cuma wish ada more vegetarian options.',
      source: 'GoFood',
      verified: true
    }
  ];

  const socialMentions = [
    {
      username: '@foodgram.id',
      platform: 'Instagram',
      text: 'Akhirnya nyobain Lu Mau? yang lagi viral! No wonder lah pada rebutan, porsinya gede banget dan rasanya juara 🔥🍚',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop',
      likes: '2.3K'
    },
    {
      username: '@jakartafoodhunter',
      platform: 'Instagram',
      text: 'Rice bowl 25K dengan kualitas segini? Take my money! Chicken teriyaki-nya juicy banget, highly recommend! ⭐⭐⭐⭐⭐',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=300&fit=crop',
      likes: '1.8K'
    },
    {
      username: '@kulinersby',
      platform: 'Instagram',
      text: 'Lu Mau? akhirnya buka di Surabaya! Langsung gas ke outlet pertama. Beef blackpepper FTW! 🐄',
      image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=300&h=300&fit=crop',
      likes: '956'
    },
    {
      username: '@makanapa_hari_ini',
      platform: 'TikTok',
      text: 'POV: Kamu laper tapi budget tipis 💸 Solution: Lu Mau? 20K-an udah dapet rice bowl porsi sultan!',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&h=300&fit=crop',
      views: '150K'
    },
    {
      username: '@reviewjujur',
      platform: 'TikTok',
      text: 'Honest review Lu Mau? Salted Egg Chicken: 9/10! Sausnya creamy, ayamnya crispy, porsinya nggak bohong. Worth it!',
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&h=300&fit=crop',
      views: '89K'
    },
    {
      username: '@bandungkuliner',
      platform: 'Instagram',
      text: 'New addiction unlocked 🔓 Lu Mau? Bandung branch, beef yakiniku + cheese sauce = combo juara!',
      image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=300&h=300&fit=crop',
      likes: '1.2K'
    }
  ];

  const stats = [
    { number: '4.8', label: 'Rating GoFood', icon: '⭐' },
    { number: '4.7', label: 'Rating Google', icon: '⭐' },
    { number: '50K+', label: 'Reviews', icon: '💬' },
    { number: '98%', label: 'Recommend', icon: '👍' }
  ];

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      ));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary via-primary-dark to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">⭐</div>
          <div className="absolute bottom-10 right-10 text-8xl">💬</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-4">
            KATA MEREKA ⭐
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-heading">
            Bukan kita yang bilang, tapi mereka!
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-heading text-accent">{stat.number}</div>
                <div className="text-accent/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 flex items-center gap-3">
            <span className="text-4xl">📍</span> Google Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {googleReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-accent">{review.name}</h3>
                    <p className="text-accent/50 text-sm">{review.date}</p>
                  </div>
                  <div className="text-lg">{renderStars(review.rating)}</div>
                </div>
                <p className="text-accent/80">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GoFood Reviews */}
      <section className="py-16 md:py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 flex items-center gap-3">
            <span className="text-4xl">🛵</span> GoFood Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gofoodReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-accent">{review.name}</h3>
                    {review.verified && (
                      <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="text-lg">{renderStars(review.rating)}</div>
                </div>
                <p className="text-accent/50 text-sm mb-2">{review.date}</p>
                <p className="text-accent/80">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Mentions */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4 text-center">
            SOCIAL MEDIA BUZZ 📱
          </h2>
          <p className="text-center text-accent/70 mb-10">
            Lagi rame di sosmed!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialMentions.map((mention, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={mention.image}
                  alt="Food post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-accent">{mention.username}</span>
                    <span className={`text-sm px-2 py-0.5 rounded ${
                      mention.platform === 'Instagram'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-black text-white'
                    }`}>
                      {mention.platform}
                    </span>
                  </div>
                  <p className="text-accent/80 text-sm mb-2">{mention.text}</p>
                  <div className="text-accent/50 text-sm">
                    {mention.likes ? `❤️ ${mention.likes}` : `👁️ ${mention.views}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
            UDAH PERNAH COBA? 🍚
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Share pengalaman kamu! Tag @lumau.id buat di-feature!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com/lumau.id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @lumau.id
            </a>
            <a
              href="https://gofood.link/u/lumau"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-accent font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Cobain Sekarang!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
