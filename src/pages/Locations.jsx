import { useState } from 'react';

const Locations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('all');

  const locations = {
    jabodetabek: {
      name: 'JABODETABEK',
      cities: [
        { city: 'Jakarta Selatan', outlets: 15, areas: ['Kemang', 'Blok M', 'Fatmawati', 'Cilandak', 'Pondok Indah'] },
        { city: 'Jakarta Pusat', outlets: 10, areas: ['Sudirman', 'Thamrin', 'Menteng', 'Cikini'] },
        { city: 'Jakarta Barat', outlets: 12, areas: ['Grogol', 'Kebon Jeruk', 'Taman Anggrek', 'Central Park'] },
        { city: 'Jakarta Timur', outlets: 8, areas: ['Cawang', 'Jatinegara', 'Rawamangun'] },
        { city: 'Jakarta Utara', outlets: 6, areas: ['Kelapa Gading', 'Sunter', 'PIK'] },
        { city: 'Tangerang', outlets: 10, areas: ['BSD', 'Alam Sutera', 'Gading Serpong'] },
        { city: 'Depok', outlets: 8, areas: ['Margonda', 'Cinere', 'Sawangan'] },
        { city: 'Bekasi', outlets: 7, areas: ['Summarecon', 'Grand Galaxy', 'Harapan Indah'] },
        { city: 'Bogor', outlets: 5, areas: ['Pajajaran', 'Yasmin', 'Cibinong'] }
      ]
    },
    jawaBarat: {
      name: 'JAWA BARAT',
      cities: [
        { city: 'Bandung', outlets: 8, areas: ['Dago', 'Braga', 'Pasteur', 'Buah Batu'] },
        { city: 'Cimahi', outlets: 2, areas: ['Cimahi Tengah'] },
        { city: 'Sukabumi', outlets: 2, areas: ['Sukabumi Kota'] }
      ]
    },
    jawaTengah: {
      name: 'JAWA TENGAH',
      cities: [
        { city: 'Semarang', outlets: 5, areas: ['Simpang Lima', 'Banyumanik', 'Tembalang'] },
        { city: 'Solo', outlets: 3, areas: ['Solo Baru', 'Manahan'] }
      ]
    },
    jawaTimur: {
      name: 'JAWA TIMUR',
      cities: [
        { city: 'Surabaya', outlets: 10, areas: ['Tunjungan', 'Pakuwon', 'Citraland', 'Galaxy Mall'] },
        { city: 'Malang', outlets: 4, areas: ['Ijen', 'Dinoyo', 'Soekarno Hatta'] },
        { city: 'Sidoarjo', outlets: 3, areas: ['Lippo Plaza', 'Sun City'] }
      ]
    },
    yogyakarta: {
      name: 'YOGYAKARTA',
      cities: [
        { city: 'Yogyakarta', outlets: 5, areas: ['Malioboro', 'Seturan', 'Gejayan', 'Ambarukmo'] }
      ]
    },
    sumatra: {
      name: 'SUMATRA',
      cities: [
        { city: 'Medan', outlets: 5, areas: ['Sun Plaza', 'Centre Point', 'Ring Road'] },
        { city: 'Palembang', outlets: 3, areas: ['Palembang Icon', 'OPI Mall'] },
        { city: 'Pekanbaru', outlets: 2, areas: ['SKA Mall', 'Living World'] }
      ]
    },
    sulawesi: {
      name: 'SULAWESI',
      cities: [
        { city: 'Makassar', outlets: 3, areas: ['Trans Studio', 'Nipah Mall', 'Panakkukang'] }
      ]
    },
    bali: {
      name: 'BALI',
      cities: [
        { city: 'Denpasar', outlets: 4, areas: ['Renon', 'Sunset Road', 'Gatsu'] },
        { city: 'Badung', outlets: 2, areas: ['Kuta', 'Seminyak'] }
      ]
    }
  };

  const regions = [
    { id: 'all', name: 'Semua Wilayah' },
    { id: 'jabodetabek', name: 'Jabodetabek' },
    { id: 'jawaBarat', name: 'Jawa Barat' },
    { id: 'jawaTengah', name: 'Jawa Tengah' },
    { id: 'jawaTimur', name: 'Jawa Timur' },
    { id: 'yogyakarta', name: 'Yogyakarta' },
    { id: 'sumatra', name: 'Sumatra' },
    { id: 'sulawesi', name: 'Sulawesi' },
    { id: 'bali', name: 'Bali' }
  ];

  const getFilteredLocations = () => {
    let filtered = activeRegion === 'all' ? locations : { [activeRegion]: locations[activeRegion] };

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const result = {};

      Object.entries(filtered).forEach(([regionKey, region]) => {
        const matchingCities = region.cities.filter(
          (city) =>
            city.city.toLowerCase().includes(query) ||
            city.areas.some((area) => area.toLowerCase().includes(query))
        );

        if (matchingCities.length > 0) {
          result[regionKey] = { ...region, cities: matchingCities };
        }
      });

      return result;
    }

    return filtered;
  };

  const totalOutlets = Object.values(locations).reduce(
    (total, region) => total + region.cities.reduce((sum, city) => sum + city.outlets, 0),
    0
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary via-primary-dark to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">📍</div>
          <div className="absolute bottom-10 right-10 text-8xl">🏪</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-4">
            OUTLET LU MAU? 📍
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-heading mb-2">
            {totalOutlets}+ outlet, pasti ada yang deket!
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex bg-white rounded-full overflow-hidden shadow-lg">
            <span className="flex items-center pl-6 text-accent/50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Cari kota atau area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-4 outline-none text-accent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 text-accent/50 hover:text-primary"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Region Filter */}
      <section className="py-6 bg-background sticky top-16 md:top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeRegion === region.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-accent hover:bg-secondary'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(getFilteredLocations()).length === 0 ? (
            <div className="text-center py-12">
              <p className="text-2xl text-accent/50 mb-4">😔 Outlet tidak ditemukan</p>
              <p className="text-accent/70">Coba kata kunci lain atau pilih wilayah berbeda</p>
            </div>
          ) : (
            Object.entries(getFilteredLocations()).map(([regionKey, region]) => (
              <div key={regionKey} className="mb-12">
                <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
                  {region.name}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {region.cities.map((city, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-accent">{city.city}</h3>
                        <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                          {city.outlets} outlet
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {city.areas.map((area, areaIndex) => (
                          <span
                            key={areaIndex}
                            className="bg-secondary/50 text-accent text-sm px-3 py-1 rounded-full"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Order Options */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
            ORDER LANGSUNG 🛵
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Makan di outlet atau order delivery, semua bisa!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://gofood.link/u/lumau"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <span>🏍️</span>
              <span>GoFood</span>
            </a>
            <a
              href="https://grab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <span>🛵</span>
              <span>GrabFood</span>
            </a>
            <a
              href="https://shopee.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <span>🛒</span>
              <span>ShopeeFood</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
