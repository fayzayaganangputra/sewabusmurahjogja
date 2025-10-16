import { CheckCircle, MessageCircle } from 'lucide-react';

export default function Tentang() {
  const whatsappLink = 'https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20klaim%20promo%20diskon%2010%25';

  const benefits = [
    {
      icon: '✅',
      title: 'Armada bersih dan terawat',
      description: 'Setiap kendaraan kami rutin dirawat dan dibersihkan untuk kenyamanan maksimal',
    },
    {
      icon: '✅',
      title: 'Sopir profesional dan ramah',
      description: 'Driver kami berpengalaman, menguasai rute, dan siap melayani dengan baik',
    },
    {
      icon: '✅',
      title: 'Harga transparan tanpa biaya tersembunyi',
      description: 'Semua biaya sudah termasuk dalam paket, tidak ada tambahan yang mengejutkan',
    },
    {
      icon: '✅',
      title: 'Siap melayani dalam & luar kota',
      description: 'Kami melayani perjalanan di Yogyakarta dan ke berbagai kota di Jawa',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Tentang Kami
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1e40af] to-[#16a34a] mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-fadeIn">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-bold text-[#1e40af]">SewaArmadaJogja</span> adalah penyedia jasa
              transportasi pariwisata dan logistik terpercaya di Yogyakarta. Kami melayani sewa{' '}
              <span className="font-semibold">Bus Medium</span> dan{' '}
              <span className="font-semibold">Truk Angkut</span> dengan armada prima, sopir berpengalaman,
              dan harga bersahabat.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Dengan pengalaman bertahun-tahun melayani ribuan pelanggan, kami berkomitmen memberikan
              layanan terbaik untuk perjalanan wisata, ziarah, acara keluarga, maupun kebutuhan logistik
              bisnis Anda.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Mengapa Memilih Kami?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">{benefit.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#16a34a] to-green-600 text-white rounded-2xl p-8 shadow-xl animate-fadeIn">
            <div className="text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h2 className="text-3xl font-bold mb-4">PROMO SPESIAL BULAN INI</h2>
              <p className="text-xl mb-6 opacity-90">
                Dapatkan <span className="font-bold underline">diskon 10%</span> untuk pelanggan baru!
              </p>
              <p className="text-lg mb-6">
                Promo terbatas untuk pemesanan di bulan ini. Jangan lewatkan kesempatan emas ini!
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#16a34a] px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Klaim Promo Sekarang
              </a>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
              Dipercaya oleh Ratusan Pelanggan
            </h3>
            <p className="text-gray-700 text-center">
              Kami telah melayani berbagai instansi, sekolah, perusahaan, dan keluarga di seluruh Yogyakarta
              dan Jawa. Kepuasan pelanggan adalah prioritas utama kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
