const About = () => {
  const promises = [
    {
      icon: '📏',
      title: 'Porsi yang JUJUR',
      desc: 'Kalau bilang jumbo, ya beneran jumbo. Nggak tipu-tipu!'
    },
    {
      icon: '✨',
      title: 'Rasa yang KONSISTEN',
      desc: 'Outlet manapun, rasanya sama. Quality control ketat!'
    },
    {
      icon: '💯',
      title: 'Harga yang FAIR',
      desc: 'Worth every rupiah. Value for money guaranteed!'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Mulai dari Dapur Rumah',
      desc: 'Di tengah pandemi, mulai jualan rice bowl dari dapur sendiri dengan modal seadanya.'
    },
    {
      year: '2021',
      title: 'Outlet Pertama & Viral',
      desc: 'Buka outlet pertama dan viral di TikTok. Antrean panjang setiap hari!'
    },
    {
      year: '2022',
      title: '50 Outlet',
      desc: 'Ekspansi besar-besaran. Lu Mau? sudah hadir di 50 lokasi.'
    },
    {
      year: '2023',
      title: '100 Outlet',
      desc: 'Menembus 100 outlet dengan ribuan customer setia setiap hari.'
    },
    {
      year: '2024',
      title: '150+ Outlet',
      desc: 'Terus berkembang! Kini hadir di lebih dari 150 lokasi se-Indonesia.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-9xl">📖</div>
          <div className="absolute bottom-10 right-10 text-8xl">🍚</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6">
            CERITA LU MAU? 📖
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-heading">
            Dari dapur rumah, sampai 150+ outlet!
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8 text-center">
              STORY TIME! 🎬
            </h2>

            <div className="space-y-6 text-lg text-accent/80 leading-relaxed">
              <p>
                <span className="text-primary font-bold">Lu Mau?</span> lahir dari keresahan yang sama: <span className="font-semibold text-accent">Laper, budget tipis, tapi pengen makan enak.</span>
              </p>

              <p>
                Tahun 2020, di tengah pandemi, kita mulai jualan rice bowl dari dapur rumah. Konsepnya simple: <span className="bg-secondary/30 px-2 rounded">porsi harus gede</span>, <span className="bg-secondary/30 px-2 rounded">rasa harus enak</span>, <span className="bg-secondary/30 px-2 rounded">harga harus terjangkau</span>.
              </p>

              <p>
                Ternyata banyak yang sefrekuensi! Dari 1 outlet kecil, sekarang udah <span className="text-primary font-bold text-xl">150+ outlet se-Indonesia</span>.
              </p>

              <p>
                Nama <span className="font-heading text-primary text-2xl">'Lu Mau?'</span> itu dateng dari pertanyaan yang selalu kita tanya ke customer:
              </p>

              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <p className="text-xl italic mb-2">"Lu mau pake apa?"</p>
                <p className="text-xl italic mb-2">"Lu mau tambah apa?"</p>
                <p className="text-2xl font-bold text-primary">Dan jawabannya selalu: "Mau dong!"</p>
              </div>

              <p className="text-center text-2xl font-heading text-primary pt-4">
                So here we are. Lu mau? MAU DONG! 🍚
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading text-center text-white mb-4">
            JANJI KITA 🤝
          </h2>
          <p className="text-center text-secondary font-heading text-xl mb-12">
            Yang kita pegang teguh sejak hari pertama!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-200 shadow-lg"
              >
                <div className="text-6xl mb-4">{promise.icon}</div>
                <h3 className="text-2xl font-heading text-primary mb-4">{promise.title}</h3>
                <p className="text-accent/70 text-lg">{promise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading text-center text-primary mb-4">
            PERJALANAN KITA 🚀
          </h2>
          <p className="text-center text-accent/70 mb-12 text-lg">
            Dari nol sampai hero!
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full transform md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <span className="inline-block bg-secondary text-accent font-bold px-4 py-1 rounded-full text-sm mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-heading text-primary mb-2">{milestone.title}</h3>
                      <p className="text-accent/70">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team/Values Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent mb-6">
            VISI MISI 🎯
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading text-primary mb-4">VISI</h3>
              <p className="text-lg text-accent/80">
                Menjadi brand rice bowl nomor 1 di Indonesia yang bikin semua orang bisa makan enak dengan budget ramah.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading text-primary mb-4">MISI</h3>
              <ul className="text-lg text-accent/80 space-y-2 text-left max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  Menyediakan makanan berkualitas dengan harga terjangkau
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  Membuka lapangan kerja di seluruh Indonesia
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  Menjadi partner bisnis yang memberdayakan masyarakat
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  Terus berinovasi untuk kepuasan pelanggan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
