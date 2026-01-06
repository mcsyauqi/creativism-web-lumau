import { Link } from 'react-router-dom';

const Home = () => {
  const signatureBowls = [
    {
      name: 'BEEF BLACKPEPPER BOWL',
      price: 'Rp 28.000',
      desc: 'Beef slice tender dengan saus blackpepper yang rich',
      tag: 'BEST SELLER 🔥',
      tagColor: '#DC2626',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop'
    },
    {
      name: 'CHICKEN TERIYAKI BOWL',
      price: 'Rp 25.000',
      desc: 'Ayam fillet juicy dengan saus teriyaki homemade',
      tag: 'CROWD FAVORITE',
      tagColor: '#FBBF24',
      tagTextColor: '#1F2937',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=400&fit=crop'
    },
    {
      name: 'SALTED EGG CHICKEN BOWL',
      price: 'Rp 30.000',
      desc: 'Ayam crispy dengan salted egg sauce yang creamy',
      tag: 'MUST TRY!',
      tagColor: '#1F2937',
      image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=400&h=400&fit=crop'
    }
  ];

  const whyLuMau = [
    { icon: '🍚', title: 'PORSI NGGAK PELIT', desc: 'Nasi full, topping banyak, perut puas!' },
    { icon: '🔥', title: 'RASA NGGAK BOHONG', desc: 'Bumbu racikan sendiri, bukan instant!' },
    { icon: '💰', title: 'HARGA NGGAK BIKIN NANGIS', desc: '20K-an udah kenyang!' },
    { icon: '⚡', title: 'CEPET NGGAK PAKE LAMA', desc: '10 menit ready!' }
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
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 50%, #1F2937 100%)',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '64px'
        }}
      >
        {/* Background Pattern */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '40px', left: '40px', fontSize: '8rem' }}>🍚</div>
          <div style={{ position: 'absolute', top: '25%', right: '80px', fontSize: '6rem' }}>🥢</div>
          <div style={{ position: 'absolute', bottom: '80px', left: '25%', fontSize: '5rem' }}>🔥</div>
          <div style={{ position: 'absolute', bottom: '40px', right: '40px', fontSize: '6rem' }}>🍜</div>
        </div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <div className="animate-bounce-slow" style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '6rem' }}>🍚</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(3rem, 10vw, 7rem)',
              fontFamily: "'Bangers', cursive",
              color: 'white',
              marginBottom: '1rem',
              letterSpacing: '0.1em',
              textShadow: '4px 4px 0px rgba(0,0,0,0.2)'
            }}
          >
            LU MAU?
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              fontFamily: "'Bangers', cursive",
              color: '#FBBF24',
              marginBottom: '1rem',
              letterSpacing: '0.05em'
            }}
          >
            Rice bowl porsi sultan, harga rakyat!
          </p>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            Topping nggak pelit, nasi hangat, perut kenyang!
          </p>

          {/* Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {['Porsi Jumbo', '20K-an', '150+ Outlet'].map((text, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: i === 1 ? 'white' : '#FBBF24',
                  color: i === 1 ? '#DC2626' : '#1F2937',
                  fontWeight: '600',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                {text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link
                to="/menu"
                style={{
                  backgroundColor: 'white',
                  color: '#DC2626',
                  fontWeight: '700',
                  padding: '1rem 2rem',
                  borderRadius: '9999px',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  fontFamily: "'Poppins', sans-serif",
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  transition: 'transform 0.2s'
                }}
              >
                Lihat Menu
              </Link>
              <a
                href="https://gofood.link/u/lumau"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#FBBF24',
                  color: '#1F2937',
                  fontWeight: '700',
                  padding: '1rem 2rem',
                  borderRadius: '9999px',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  fontFamily: "'Poppins', sans-serif",
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  transition: 'transform 0.2s'
                }}
              >
                Order Sekarang
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }} className="animate-bounce">
          <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Signature Bowls Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#FEF9C3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontFamily: "'Bangers', cursive",
              textAlign: 'center',
              color: '#DC2626',
              marginBottom: '0.5rem',
              letterSpacing: '0.05em'
            }}
          >
            SIGNATURE BOWLS 🔥
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(31,41,55,0.7)', marginBottom: '3rem', fontSize: '1.1rem', fontFamily: "'Poppins', sans-serif" }}>
            Menu andalan yang bikin nagih!
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {signatureBowls.map((bowl, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                className="card-hover"
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={bowl.image}
                    alt={bowl.name}
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: bowl.tagColor,
                      color: bowl.tagTextColor || 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      fontFamily: "'Poppins', sans-serif"
                    }}
                  >
                    {bowl.tag}
                  </span>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: "'Bangers', cursive", color: '#1F2937', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                    {bowl.name}
                  </h3>
                  <p style={{ color: 'rgba(31,41,55,0.7)', marginBottom: '1rem', fontSize: '0.9rem', fontFamily: "'Poppins', sans-serif" }}>
                    {bowl.desc}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#DC2626', fontFamily: "'Poppins', sans-serif" }}>
                      {bowl.price}
                    </span>
                    <a
                      href="https://gofood.link/u/lumau"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: '#DC2626',
                        color: 'white',
                        padding: '0.5rem 1.25rem',
                        borderRadius: '9999px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        textDecoration: 'none',
                        fontFamily: "'Poppins', sans-serif"
                      }}
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
      <section style={{ padding: '4rem 1rem', backgroundColor: '#DC2626' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontFamily: "'Bangers', cursive",
              textAlign: 'center',
              color: 'white',
              marginBottom: '0.5rem',
              letterSpacing: '0.05em'
            }}
          >
            KENAPA LU MAU?
          </h2>
          <p style={{ textAlign: 'center', color: '#FBBF24', fontFamily: "'Bangers', cursive", fontSize: '1.25rem', marginBottom: '3rem', letterSpacing: '0.05em' }}>
            Karena emang worth it! 💯
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {whyLuMau.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  transition: 'transform 0.2s'
                }}
                className="card-hover"
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontFamily: "'Bangers', cursive", color: '#DC2626', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'rgba(31,41,55,0.7)', fontSize: '0.9rem', fontFamily: "'Poppins', sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#FEF9C3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontFamily: "'Bangers', cursive",
              textAlign: 'center',
              color: '#DC2626',
              marginBottom: '0.5rem',
              letterSpacing: '0.05em'
            }}
          >
            MENU LU MAU? 📋
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(31,41,55,0.7)', marginBottom: '3rem', fontSize: '1.1rem', fontFamily: "'Poppins', sans-serif" }}>
            Pilihan lengkap buat semua selera!
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem'
            }}
          >
            {categories.map((cat, index) => (
              <Link
                key={index}
                to="/menu"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  padding: '1.5rem 1rem',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                className="card-hover"
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{cat.icon}</div>
                <h3 style={{ fontWeight: '600', color: '#1F2937', fontSize: '0.85rem', fontFamily: "'Poppins', sans-serif" }}>
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link
              to="/menu"
              style={{
                display: 'inline-block',
                backgroundColor: '#DC2626',
                color: 'white',
                fontWeight: '700',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                fontSize: '1.1rem',
                textDecoration: 'none',
                fontFamily: "'Poppins', sans-serif",
                boxShadow: '0 10px 25px rgba(220,38,38,0.3)'
              }}
            >
              Lihat Menu Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* Outlet Locator Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#FBBF24' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 3rem)',
              fontFamily: "'Bangers', cursive",
              color: '#1F2937',
              marginBottom: '0.5rem',
              letterSpacing: '0.05em'
            }}
          >
            LU MAU? ADA DI DEKAT LU! 📍
          </h2>
          <p style={{ color: 'rgba(31,41,55,0.7)', marginBottom: '2rem', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 2rem', fontFamily: "'Poppins', sans-serif" }}>
            150+ outlet tersebar di seluruh Indonesia. Mau makan di tempat atau order delivery, semua bisa!
          </p>

          <div style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
            <div style={{ display: 'flex', backgroundColor: 'white', borderRadius: '9999px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <input
                type="text"
                placeholder="Cari lokasi outlet..."
                style={{
                  flex: 1,
                  padding: '1rem 1.5rem',
                  border: 'none',
                  outline: 'none',
                  fontSize: '1rem',
                  fontFamily: "'Poppins', sans-serif"
                }}
              />
              <button
                style={{
                  backgroundColor: '#DC2626',
                  color: 'white',
                  padding: '1rem 1.5rem',
                  border: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                Cari
              </button>
            </div>
          </div>

          <Link
            to="/locations"
            style={{
              display: 'inline-block',
              backgroundColor: '#1F2937',
              color: 'white',
              fontWeight: '700',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              fontSize: '1rem',
              textDecoration: 'none',
              fontFamily: "'Poppins', sans-serif",
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }}
          >
            Lihat Semua Outlet
          </Link>
        </div>
      </section>

      {/* Social Proof Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#1F2937' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              textAlign: 'center'
            }}
          >
            {stats.map((stat, index) => (
              <div key={index}>
                <div
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    fontFamily: "'Bangers', cursive",
                    color: '#FBBF24',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em'
                  }}
                >
                  {stat.number}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', fontFamily: "'Poppins', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram UGC Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#FEF9C3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontFamily: "'Bangers', cursive",
              textAlign: 'center',
              color: '#DC2626',
              marginBottom: '0.5rem',
              letterSpacing: '0.05em'
            }}
          >
            @LUMAU.ID 📸
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(31,41,55,0.7)', marginBottom: '2.5rem', fontSize: '1rem', fontFamily: "'Poppins', sans-serif" }}>
            Tag @lumau.id buat di-feature!
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1rem'
            }}
          >
            {ugcPhotos.map((photo, index) => (
              <a
                key={index}
                href="https://instagram.com/lumau.id"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  aspectRatio: '1',
                  overflow: 'hidden',
                  borderRadius: '0.75rem',
                  display: 'block'
                }}
              >
                <img
                  src={photo}
                  alt="Customer photo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href="https://instagram.com/lumau.id"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(45deg, #833AB4, #FD1D1D, #F77737)',
                color: 'white',
                fontWeight: '700',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                fontSize: '1rem',
                textDecoration: 'none',
                fontFamily: "'Poppins', sans-serif",
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
              }}
            >
              <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @lumau.id
            </a>
          </div>
        </div>
      </section>

      {/* Franchise CTA Section */}
      <section
        style={{
          padding: '4rem 1rem',
          background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 50%, #1F2937 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '40px', right: '40px', fontSize: '8rem' }}>💰</div>
          <div style={{ position: 'absolute', bottom: '40px', left: '40px', fontSize: '6rem' }}>🏪</div>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontFamily: "'Bangers', cursive",
              color: 'white',
              marginBottom: '0.5rem',
              letterSpacing: '0.05em'
            }}
          >
            MAU BUKA OUTLET LU MAU? 💰
          </h2>
          <p style={{ color: '#FBBF24', fontFamily: "'Bangers', cursive", fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>
            BISA BANGET!
          </p>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', fontFamily: "'Poppins', sans-serif" }}>
            Bisnis F&B yang proven dengan 150+ outlet sukses. Modal terjangkau, support full, balik modal cepat!
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {['Mulai 75 Juta', 'Balik Modal 8-14 Bulan', 'Support Penuh'].map((text, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: i === 1 ? 'white' : '#FBBF24',
                  color: i === 1 ? '#DC2626' : '#1F2937',
                  fontWeight: '600',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                {text}
              </span>
            ))}
          </div>

          <Link
            to="/franchise"
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: '#DC2626',
              fontWeight: '700',
              padding: '1rem 2.5rem',
              borderRadius: '9999px',
              fontSize: '1.1rem',
              textDecoration: 'none',
              fontFamily: "'Poppins', sans-serif",
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }}
          >
            Info Franchise
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
