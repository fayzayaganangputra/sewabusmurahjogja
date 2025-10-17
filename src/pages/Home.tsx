import { Link } from 'react-router-dom';
import { Bus, Truck, Shield, Users, DollarSign } from 'lucide-react';

export default function Home() {
  const whatsappLink = 'https://wa.me/6281234567890';

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-[#1e40af] to-[#16a34a] text-white py-20 px-4 animate-fadeIn">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sewa Bus & Truk Jogja
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Armada bersih, sopir berpengalaman, dan harga transparan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/bus"
              className="bg-white text-[#1e40af] px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition shadow-lg"
            >
              Lihat Bus
            </Link>
            <Link
              to="/truk"
              className="bg-white text-[#16a34a] px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition shadow-lg"
            >
              Lihat Truk
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-[#16a34a] text-white px-6 py-4 rounded-xl shadow-lg text-center animate-pulse mb-12">
          <p className="text-lg md:text-xl font-semibold">
            🎉 PROMO BULAN INI! Diskon 10% untuk sewa 3 hari atau lebih 🎉
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition animate-fadeIn">
            <Bus className="w-12 h-12 text-[#1e40af] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center mb-2">Armada Terawat</h3>
            <p className="text-gray-600 text-center">
              Kendaraan selalu dalam kondisi prima dan bersih untuk kenyamanan Anda
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <Users className="w-12 h-12 text-[#16a34a] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center mb-2">Sopir Berpengalaman</h3>
            <p className="text-gray-600 text-center">
              Driver profesional yang ramah dan menguasai rute di Yogyakarta
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <DollarSign className="w-12 h-12 text-[#1e40af] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center mb-2">Harga Transparan</h3>
            <p className="text-gray-600 text-center">
              Tidak ada biaya tersembunyi, semua sudah termasuk dalam paket
            </p>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Pilihan Armada Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition p-4 animate-fadeIn">
            <img
              src="public/images/medium.png"
              alt="Bus Medium Pariwisata"
              className="w-full h-64 object-contain rounded-xl bg-gray-100"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2 text-[#1e40af]">Bus Medium Pariwisata</h3>
              <p className="text-gray-600 mb-3">Kapasitas: 30 penumpang</p>
              <p className="text-3xl font-bold text-[#16a34a] mb-4">
                Rp 1.800.000 <span className="text-lg text-gray-500">/ hari</span>
              </p>
              <p className="text-gray-700 mb-4">
                Bus nyaman full AC dengan reclining seat. Cocok untuk wisata, ziarah, dan acara keluarga.
              </p>
              <Link
                to="/bus"
                className="block w-full bg-[#1e40af] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#1e3a8a] transition"
              >
                Detail Bus
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition p-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <img
              src="public/images/truk.png"
              alt="Truk CDD Bak Terbuka"
              className="w-full h-64 object-contain rounded-xl bg-gray-100"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2 text-[#16a34a]">Truk CDD Bak Terbuka</h3>
              <p className="text-gray-600 mb-3">Kapasitas: 4 ton</p>
              <p className="text-3xl font-bold text-[#16a34a] mb-4">
                Rp 950.000 <span className="text-lg text-gray-500">/ hari</span>
              </p>
              <p className="text-gray-700 mb-4">
                Cocok untuk angkutan barang & material bangunan. Tersedia untuk sewa harian dan bulanan.
              </p>
              <Link
                to="/truk"
                className="block w-full bg-[#16a34a] text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Detail Truk
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
      Galeri Armada & Kegiatan
    </h2>
    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
      Berikut beberapa dokumentasi armada kami dan kegiatan pelanggan kami di berbagai destinasi wisata di Yogyakarta.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <div className="overflow-hidden rounded-xl shadow hover:scale-105 transition">
        <img
          src="public/images/foto1.jpeg"
          alt="Armada Bus"
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="overflow-hidden rounded-xl shadow hover:scale-105 transition">
        <img
          src="public/images/foto2.jpeg"
          alt="Armada Truk"
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="overflow-hidden rounded-xl shadow hover:scale-105 transition">
        <img
          src="public/images/foto4.jpeg"
          alt="Interior Bus"
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="overflow-hidden rounded-xl shadow hover:scale-105 transition">
        <img
          src="public/images/foto5.jpeg"
          alt="Truk siap berangkat"
          className="w-full h-48 object-cover"
        />
      </div>
    </div>
  </div>
</section>


        <div className="bg-gradient-to-r from-[#1e40af] to-[#16a34a] text-white rounded-2xl p-8 md:p-12 text-center shadow-xl animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Butuh bus atau truk hari ini?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#16a34a] px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition shadow-lg"
          >
            Hubungi via WhatsApp Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
