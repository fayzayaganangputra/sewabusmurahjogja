import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/bus', label: 'Bus' },
    { path: '/truk', label: 'Truk' },
    { path: '/tentang', label: 'Tentang' },
    { path: '/kontak', label: 'Kontak' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[#1e40af]">
            SewaBusMurahJogja
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition hover:text-[#1e40af] ${
                  location.pathname === item.path
                    ? 'text-[#1e40af] underline'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <select
              value={location.pathname}
              onChange={(e) => window.location.href = e.target.value}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e40af]"
            >
              {navItems.map((item) => (
                <option key={item.path} value={item.path}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
