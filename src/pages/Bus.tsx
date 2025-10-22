import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Bus() {
  const buses = [
    {
      name: 'Bus Medium Pariwisata',
      capacity: '30 penumpang',
      price: 'Rp 1.000.000 / hari',
      image: 'images/medium.png',
      desc: 'Bus nyaman full AC dengan reclining seat dan audio video. Cocok untuk rombongan wisata, ziarah, atau acara keluarga.',
      link: 'https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20sewa%20Bus%20Medium%20Pariwisata',
    },
    {
      name: 'Bus Medium Ekonomi Non Ac',
      capacity: '30 penumpang',
      price: 'Rp 400.000 / hari',
      image: 'images/ekonomi.png',
      desc: 'Medium Bus Ekonomi cocok untuk perjalanan rombongan jarak dekat dengan harga terjangkau. Meskipun tanpa AC, kendaraan ini tetap nyaman untuk kebutuhan seperti kegiatan sekolah, ziarah, atau perjalanan desa dengan jumlah penumpang banyak.',
      link: 'https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20sewa%20Bus%20Medium%20Pariwisata',
    },
    {
      name: 'Elf Long Pariwisata',
      capacity: '20 penumpang',
      price: 'Rp 1.400.000 / hari',
      image: 'images/elflong.png',
      desc: 'Isuzu Elf Long berkapasitas besar dengan kabin luas dan suspensi nyaman. Ideal untuk perjalanan rombongan jarak jauh.',
      link: 'https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20sewa%20Elf%20Long%20Pariwisata',
    },
    {
      name: 'Hiace Premio',
      capacity: '15 penumpang',
      price: 'Rp 1.500.000 / hari',
      image: 'images/premio.png',
      desc: 'Hiace Premio menghadirkan kenyamanan premium dengan desain elegan dan performa tangguh untuk perjalanan wisata maupun bisnis.',
      link: 'https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20sewa%20Hiace%20Premio',
    },
    {
      name: 'Hiace Comuter',
      capacity: '15 penumpang',
      price: 'Rp 1.200.000 / hari',
      image: 'images/comuter.png',
      desc: 'Hiace Commuter hadir dengan kabin lega, AC dingin merata, dan performa mesin tangguh — sempurna untuk perjalanan rombongan yang nyaman dan efisien.',
      link: 'https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20sewa%20Hiace%20Premio',
    },
    {
      name: 'Elf Short',
      capacity: '12 penumpang',
      price: 'Rp 9000.000 / hari',
      image: 'images/elfshort.png',
      desc: 'Isuzu Elf Short menawarkan kabin nyaman dan efisiensi tinggi, cocok untuk perjalanan dalam kota atau antar jemput.',
      link: 'https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20sewa%20Elf%20Short',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#1e40af] mb-12">
          Daftar Kendaraan Pariwisata
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {buses.map((bus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
              }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300"
            >
              <img
                src={bus.image}
                alt={bus.name}
                className="w-full h-64 object-contain bg-gray-100"
              />

              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#1e40af] mb-4">
                  {bus.name}
                </h2>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-xl text-gray-700 mb-2">
                    <span className="font-semibold">Kapasitas:</span>{' '}
                    {bus.capacity}
                  </p>
                  <p className="text-3xl font-bold text-[#16a34a]">
                    {bus.price}
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {bus.desc}
                </p>

                <a
                  href={bus.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#16a34a] text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6" />
                  Sewa via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
