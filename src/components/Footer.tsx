import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#1e40af] to-[#16a34a] text-white py-12 mt-16 animate-fadeIn">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Kolom 1 - Brand dan Deskripsi */}
          <div>
            <h3 className="text-2xl font-bold mb-3">SewaBusMurahJogja</h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              Solusi transportasi terpercaya di Yogyakarta. Menyediakan layanan sewa 
              <span className="font-semibold"> bus pariwisata, elf, dan truk </span> dengan armada terawat serta sopir berpengalaman.
            </p>
            <div className="flex space-x-4 mt-5">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Kolom 2 - Kontak */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-3 text-gray-100 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-0.5" />
                <span>Godean, Yogyakarta</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <a href="tel:+6281234567890" className="hover:underline">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <a href="mailto:info@sewaarmadajogja.com" className="hover:underline">
                  info@sewabusmurahjogja.com
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3 - Peta */}
          <div className="flex justify-center md:justify-end">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.037945182435!2d110.37838457499544!3d-7.357760972512138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a597cf295e2d3%3A0x6579f8cf6d6e41e5!2sSleman%2C%20Yogyakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* Garis Pembatas */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-200 text-sm">
          © {currentYear} <span className="font-semibold">SewaArmadaJogja</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
