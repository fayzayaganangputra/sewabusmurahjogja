import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export default function Kontak() {
  const whatsappLink = 'https://wa.me/6281234567890';

  const contactInfo = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+62 812-3456-7890',
      color: 'text-[#16a34a]',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'sewa@armadajogja.com',
      color: 'text-[#1e40af]',
    },
    {
      icon: MapPin,
      label: 'Alamat',
      value: 'Sleman, Yogyakarta',
      color: 'text-red-600',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-600">
              Siap melayani kebutuhan transportasi Anda 24/7
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1e40af] to-[#16a34a] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className={`w-10 h-10 ${info.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-bold text-center mb-2 text-gray-800">{info.label}</h3>
                  <p className="text-center text-gray-700 font-medium">{info.value}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-[#16a34a] to-green-600 text-white rounded-2xl p-8 md:p-12 shadow-xl text-center mb-12 animate-fadeIn">
            <MessageCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Butuh Bantuan Segera?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Tim kami siap membantu Anda melalui WhatsApp untuk respon yang cepat dan mudah
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#16a34a] px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Chat via WhatsApp Sekarang
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
            <div className="bg-gradient-to-r from-[#1e40af] to-[#16a34a] text-white p-6">
              <h2 className="text-2xl font-bold text-center">Lokasi Kami</h2>
            </div>
            <div className="p-6">
              <p className="text-center text-gray-700 mb-4 text-lg">
                Kami berlokasi di Sleman, Yogyakarta dan siap melayani kebutuhan transportasi Anda
                di seluruh wilayah DIY dan sekitarnya.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.037945182435!2d110.37838457499544!3d-7.357760972512138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a597cf295e2d3%3A0x6579f8cf6d6e41e5!2sSleman%2C%20Yogyakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow"
              ></iframe>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-xl animate-fadeIn">
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
              Jam Operasional
            </h3>
            <div className="text-center text-gray-700">
              <p className="mb-2">
                <span className="font-semibold">Senin - Minggu:</span> 24 Jam
              </p>
              <p className="text-sm text-gray-600">
                Customer service kami siap melayani Anda kapan saja
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
