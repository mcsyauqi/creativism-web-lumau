import { useState } from 'react';

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    budget: '',
    location: '',
    message: ''
  });

  const highlights = [
    {
      icon: '🏪',
      title: '150+ Outlet',
      desc: 'Success Stories'
    },
    {
      icon: '⏱️',
      title: '8-14 Bulan',
      desc: 'Balik Modal'
    },
    {
      icon: '📚',
      title: 'Training',
      desc: 'Lengkap'
    },
    {
      icon: '📦',
      title: 'Supply Chain',
      desc: 'Terintegrasi'
    }
  ];

  const packages = [
    {
      name: 'PAKET BOOTH',
      subtitle: 'Foodcourt / Mall',
      price: 'Rp 75.000.000',
      color: 'bg-secondary',
      features: [
        'Booth siap pakai',
        'Equipment lengkap',
        'Bahan baku awal 1 bulan',
        'Training 2 minggu',
        'SOP operasional',
        'Marketing kit'
      ],
      royalty: '4%'
    },
    {
      name: 'PAKET OUTLET MINI',
      subtitle: 'Ruko / Standalone',
      price: 'Rp 150.000.000',
      color: 'bg-primary',
      isPopular: true,
      features: [
        'Renovasi tempat',
        'Equipment premium',
        'Opening stock lengkap',
        'Training 2 minggu + pendampingan',
        'SOP operasional',
        'Marketing kit + grand opening support'
      ],
      royalty: '4%'
    },
    {
      name: 'PAKET OUTLET FULL',
      subtitle: 'Full Dine-in Experience',
      price: 'Rp 250.000.000',
      color: 'bg-accent',
      features: [
        'Full setup + seating area',
        'Equipment premium lengkap',
        'Opening stock lengkap',
        'Training 2 minggu + pendampingan 1 bulan',
        'SOP operasional lengkap',
        'Marketing kit + grand opening + PR support'
      ],
      royalty: '4%'
    }
  ];

  const support = [
    {
      icon: '📚',
      title: 'Training Operasional',
      desc: '2 minggu training intensif untuk owner dan karyawan'
    },
    {
      icon: '📋',
      title: 'SOP Lengkap',
      desc: 'Standard Operating Procedure dari A-Z'
    },
    {
      icon: '📦',
      title: 'Supply Bahan Baku',
      desc: 'Jaminan supply chain terintegrasi dan konsisten'
    },
    {
      icon: '📢',
      title: 'Marketing Support',
      desc: 'Template konten, campaign support, dan branding guidelines'
    },
    {
      icon: '✅',
      title: 'Quality Control',
      desc: 'Audit rutin untuk menjaga standar kualitas'
    },
    {
      icon: '💬',
      title: '24/7 Support',
      desc: 'Tim support siap membantu kapanpun dibutuhkan'
    }
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      location: 'Outlet Jakarta Selatan',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      text: 'Balik modal dalam 10 bulan! Supportnya luar biasa, dari training sampai marketing semua dibantu.'
    },
    {
      name: 'Siti Rahayu',
      location: 'Outlet Bandung',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      text: 'Senang banget gabung Lu Mau? Brand-nya kuat, customer loyal, dan supply chain-nya reliable.'
    },
    {
      name: 'Andi Wijaya',
      location: 'Outlet Surabaya',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      text: 'Dari 1 outlet sekarang udah punya 3. Sistemnya proven, tinggal follow aja pasti berhasil.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Terima kasih! Tim kami akan menghubungi Anda dalam 1x24 jam.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      budget: '',
      location: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">💰</div>
          <div className="absolute bottom-10 right-10 text-8xl">🏪</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-4">
            MAU BUKA LU MAU? 💰
          </h1>
          <p className="text-2xl md:text-3xl text-secondary font-heading mb-6">
            SENDIRI? BISA BANGET!
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Bisnis F&B yang proven, modal terjangkau, support full!
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-2xl font-heading text-accent">{item.title}</div>
                <div className="text-accent/70">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading text-center text-primary mb-4">
            PILIH PAKET FRANCHISE 📋
          </h2>
          <p className="text-center text-accent/70 mb-12 text-lg">
            Sesuaikan dengan budget dan lokasi yang kamu punya!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  pkg.isPopular ? 'md:-translate-y-4' : ''
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 font-bold text-sm">
                    MOST POPULAR 🔥
                  </div>
                )}

                <div className={`${pkg.color} text-white p-6 ${pkg.isPopular ? 'pt-10' : ''}`}>
                  <h3 className="text-2xl font-heading">{pkg.name}</h3>
                  <p className="opacity-80">{pkg.subtitle}</p>
                  <div className="text-3xl font-bold mt-4">{pkg.price}</div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <span className="text-primary">✓</span>
                        <span className="text-accent/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4">
                    <p className="text-center text-accent/60">
                      Royalty: <span className="font-bold text-accent">{pkg.royalty}</span> dari omset
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading text-center text-white mb-4">
            SUPPORT YANG DIDAPAT 💪
          </h2>
          <p className="text-center text-secondary font-heading text-xl mb-12">
            Kita support dari A-Z!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {support.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:scale-105 transition-transform duration-200 shadow-lg"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-accent mb-2">{item.title}</h3>
                <p className="text-accent/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading text-center text-primary mb-4">
            FRANCHISEE STORIES 🌟
          </h2>
          <p className="text-center text-accent/70 mb-12 text-lg">
            Dengerin langsung dari partner kami!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-accent">{item.name}</h3>
                    <p className="text-accent/60 text-sm">{item.location}</p>
                  </div>
                </div>
                <p className="text-accent/80 italic">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading text-center text-white mb-4">
            TERTARIK? 🤝
          </h2>
          <p className="text-center text-white/80 mb-12 text-lg">
            Isi form di bawah, tim kami akan segera menghubungi!
          </p>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-accent font-medium mb-2">Nama Lengkap *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-accent font-medium mb-2">No. Telepon *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="0812xxxxxxxx"
                />
              </div>

              <div>
                <label className="block text-accent font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-accent font-medium mb-2">Kota *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="Jakarta"
                />
              </div>

              <div>
                <label className="block text-accent font-medium mb-2">Budget Range *</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                >
                  <option value="">Pilih budget</option>
                  <option value="75jt">~ Rp 75.000.000 (Booth)</option>
                  <option value="150jt">~ Rp 150.000.000 (Outlet Mini)</option>
                  <option value="250jt">~ Rp 250.000.000 (Outlet Full)</option>
                </select>
              </div>

              <div>
                <label className="block text-accent font-medium mb-2">Lokasi yang Diincar</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="Mall ABC, Jl. XYZ (opsional)"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-accent font-medium mb-2">Pesan Tambahan</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                  placeholder="Ada pertanyaan atau info tambahan?"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              Kirim Inquiry
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/80">Atau hubungi langsung:</p>
            <a
              href="mailto:franchise@lumau.id"
              className="text-secondary font-bold text-lg hover:underline"
            >
              franchise@lumau.id
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franchise;
