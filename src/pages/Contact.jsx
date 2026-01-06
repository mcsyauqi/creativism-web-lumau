import { Link } from 'react-router-dom';

const Contact = () => {
  const contacts = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      name: 'Instagram',
      handle: '@lumau.id',
      link: 'https://instagram.com/lumau.id',
      color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ),
      name: 'TikTok',
      handle: '@lumau.id',
      link: 'https://tiktok.com/@lumau.id',
      color: 'bg-black'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      name: 'WhatsApp',
      handle: '0812-LU-MAU',
      link: 'https://wa.me/6281212345678',
      color: 'bg-green-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      name: 'Email',
      handle: 'hello@lumau.id',
      link: 'mailto:hello@lumau.id',
      color: 'bg-primary'
    }
  ];

  const departments = [
    {
      emoji: '💼',
      name: 'Franchise',
      email: 'franchise@lumau.id',
      desc: 'Mau buka outlet sendiri? Hubungi tim franchise kami!'
    },
    {
      emoji: '🤝',
      name: 'Partnership',
      email: 'marketing@lumau.id',
      desc: 'Kolaborasi, endorsement, atau partnership bisnis.'
    },
    {
      emoji: '💼',
      name: 'Careers',
      email: 'careers@lumau.id',
      desc: 'Mau gabung tim Lu Mau? Check lowongan kami!'
    },
    {
      emoji: '📢',
      name: 'Media & Press',
      email: 'pr@lumau.id',
      desc: 'Untuk keperluan media dan press release.'
    }
  ];

  const faqs = [
    {
      q: 'Gimana cara order Lu Mau?',
      a: 'Kamu bisa order via GoFood, GrabFood, ShopeeFood, atau langsung dateng ke outlet terdekat!'
    },
    {
      q: 'Bisa delivery ke luar jangkauan GoFood?',
      a: 'Untuk saat ini delivery hanya tersedia via partner app. Tapi kamu bisa takeaway dari outlet terdekat!'
    },
    {
      q: 'Ada menu vegetarian nggak?',
      a: 'Ada dong! Kita punya Tofu Teriyaki Bowl dan Mushroom Bowl yang cocok untuk vegetarian.'
    },
    {
      q: 'Berapa lama waktu tunggu pesanan?',
      a: 'Rata-rata 10-15 menit untuk dine-in atau takeaway. Untuk delivery tergantung jarak dan traffic.'
    },
    {
      q: 'Bisa request level pedas?',
      a: 'Bisa! Khusus menu yang pake sambal seperti Chicken Geprek bisa pilih level 1-5.'
    },
    {
      q: 'Ada program loyalty atau member?',
      a: 'Saat ini belum ada program membership resmi. Stay tuned di Instagram untuk info promo terbaru!'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary via-primary-dark to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">📞</div>
          <div className="absolute bottom-10 right-10 text-8xl">💬</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-4">
            HUBUNGI KITA 📞
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-heading">
            Ada pertanyaan? Kita siap bantu!
          </p>
        </div>
      </section>

      {/* Main Contact */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className={`w-16 h-16 ${contact.color} rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold text-accent mb-1">{contact.name}</h3>
                <p className="text-primary font-medium">{contact.handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading text-center text-accent mb-4">
            HUBUNGI TIM KAMI 💼
          </h2>
          <p className="text-center text-accent/70 mb-10">
            Pilih departemen sesuai kebutuhan kamu
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{dept.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-accent mb-1">{dept.name}</h3>
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-primary font-medium hover:underline"
                    >
                      {dept.email}
                    </a>
                    <p className="text-accent/70 mt-2 text-sm">{dept.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading text-center text-primary mb-4">
            SERING DITANYA 🤔
          </h2>
          <p className="text-center text-accent/70 mb-10">
            Jawaban untuk pertanyaan yang paling sering muncul
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-accent mb-2 flex items-start gap-3">
                  <span className="text-primary">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-accent/70 pl-7">
                  <span className="font-bold text-secondary">A:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-8">
            QUICK LINKS 🔗
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/menu"
              className="bg-white text-accent font-bold px-6 py-3 rounded-full hover:bg-secondary transition-colors"
            >
              Lihat Menu
            </Link>
            <Link
              to="/locations"
              className="bg-white text-accent font-bold px-6 py-3 rounded-full hover:bg-secondary transition-colors"
            >
              Cari Outlet
            </Link>
            <Link
              to="/franchise"
              className="bg-white text-accent font-bold px-6 py-3 rounded-full hover:bg-secondary transition-colors"
            >
              Info Franchise
            </Link>
            <a
              href="https://gofood.link/u/lumau"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary-dark transition-colors"
            >
              Order Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
