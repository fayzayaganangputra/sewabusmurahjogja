import { MessageCircle, Package } from 'lucide-react';

export default function Truk() {
  const whatsappLink = 'https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20sewa%20Truk%20CDD%20Bak%20Terbuka';

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
            <img
              src="public/images/truk.png"
              alt="Truk CDD Bak Terbuka"
              className="w-full h-64 object-contain rounded-xl bg-gray-100"
            />

            <div className="p-8">
              <h1 className="text-4xl font-bold text-[#16a34a] mb-4">
                Truk CDD Bak Terbuka
              </h1>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-xl text-gray-700 mb-2">
                  <span className="font-semibold">Kapasitas:</span> 4 ton
                </p>
                <p className="text-3xl font-bold text-[#16a34a]">
                  Rp 950.000 <span className="text-lg text-gray-600">/ hari</span>
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Deskripsi</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Truk CDD bak terbuka cocok untuk angkutan barang, material bangunan, dan pindahan rumah.
                  Kendaraan dalam kondisi prima dengan driver berpengalaman yang siap membantu kebutuhan
                  logistik Anda.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800">
                    <span className="font-semibold">💡 Info:</span> Tersedia juga sewa harian, mingguan,
                    dan kontrak bulanan dengan harga spesial!
                  </p>
                </div>
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
                  Cocok Untuk
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 text-[#16a34a]">✓ Angkutan Barang</h3>
                    <p className="text-gray-700">
                      Ideal untuk distribusi barang dagangan, logistik, dan pengiriman dalam kota maupun luar kota.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 text-[#16a34a]">✓ Material Bangunan</h3>
                    <p className="text-gray-700">
                      Sempurna untuk mengangkut pasir, batu, semen, bata, dan material konstruksi lainnya.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 text-[#16a34a]">✓ Pindahan Rumah</h3>
                    <p className="text-gray-700">
                      Membantu proses pindahan rumah atau kantor dengan aman dan efisien.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 text-[#16a34a]">✓ Kebutuhan Khusus</h3>
                    <p className="text-gray-700">
                      Tersedia untuk berbagai keperluan transportasi barang sesuai kebutuhan Anda.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Spesifikasi Kendaraan</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#16a34a] rounded-full"></span>
                    Kapasitas angkut: 4 ton
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#16a34a] rounded-full"></span>
                    Bak terbuka untuk kemudahan loading
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#16a34a] rounded-full"></span>
                    Driver berpengalaman disertakan
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#16a34a] rounded-full"></span>
                    Kondisi kendaraan terawat dan siap pakai
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
