import { MessageCircle } from 'lucide-react';

export default function Bus() {
  const whatsappLink = 'https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20sewa%20Bus%20Medium%20Pariwisata';

  const priceTable = [
    { destination: 'Transfer in/out YIA', bigBus: 'Rp 2.500.000', mediumLong: 'Rp 2.000.000', mediumBus: 'Rp 1.700.000' },
    { destination: 'Gunungkidul', bigBus: 'Rp 3.400.000', mediumLong: 'Rp 2.900.000', mediumBus: 'Rp 2.400.000' },
    { destination: 'Baturaden', bigBus: 'Rp 5.000.000', mediumLong: 'Rp 4.000.000', mediumBus: 'Rp 3.500.000' },
    { destination: 'Semarang', bigBus: 'Rp 4.000.000', mediumLong: 'Rp 3.500.000', mediumBus: 'Rp 3.000.000' },
    { destination: 'Bandung Inap', bigBus: 'Rp 12.000.000', mediumLong: 'Rp 10.000.000', mediumBus: 'Rp 8.000.000' },
    { destination: 'Bali (5 Hari 2 Malam)', bigBus: 'Rp 15.000.000', mediumLong: 'Rp 12.500.000', mediumBus: 'Rp 11.000.000' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
            <img
              src="images/medium.png"
              alt="Bus Medium Pariwisata"
              className="w-full h-64 object-contain rounded-xl bg-gray-100"
            />

            <div className="p-8">
              <h1 className="text-4xl font-bold text-[#1e40af] mb-4">
                Bus Medium Pariwisata
              </h1>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-xl text-gray-700 mb-2">
                  <span className="font-semibold">Kapasitas:</span> 30 penumpang
                </p>
                <p className="text-3xl font-bold text-[#16a34a]">
                  Rp 1.800.000 <span className="text-lg text-gray-600">/ hari</span>
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Deskripsi</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Bus nyaman full AC dengan reclining seat dan audio video. Cocok untuk rombongan wisata,
                  ziarah, atau acara keluarga. Dilengkapi dengan kursi yang nyaman untuk perjalanan jauh.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#16a34a] text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition hover:scale-105 mb-8"
              >
                <MessageCircle className="w-6 h-6" />
                Sewa via WhatsApp
              </a>

              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Tabel Harga Berdasarkan Tujuan
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Harga berdasarkan kesepakatan ORGANDA DIY — 5 September 2022
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white shadow-sm">
                    <thead>
                      <tr className="bg-[#1e40af] text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tujuan</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Big Bus</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Medium Long</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Medium Bus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceTable.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="border border-gray-300 px-4 py-3 font-medium">{row.destination}</td>
                          <td className="border border-gray-300 px-4 py-3">{row.bigBus}</td>
                          <td className="border border-gray-300 px-4 py-3">{row.mediumLong}</td>
                          <td className="border border-gray-300 px-4 py-3 bg-green-50 font-semibold">{row.mediumBus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Catatan:</span> Harga dapat berubah sewaktu-waktu.
                    Hubungi kami untuk penawaran terbaru dan paket khusus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
