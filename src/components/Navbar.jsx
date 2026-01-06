import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Outlet', path: '/locations' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div
          className="flex justify-between items-center"
          style={{ height: '64px' }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span
              className="hover-shake"
              style={{
                color: '#DC2626',
                fontFamily: "'Bangers', cursive",
                fontSize: '1.75rem',
                letterSpacing: '0.05em'
              }}
            >
              LU MAU?
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center"
            style={{ gap: '2rem' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: isActive(link.path) ? '#DC2626' : '#1F2937',
                  fontWeight: isActive(link.path) ? '600' : '500',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#DC2626'}
                onMouseLeave={(e) => {
                  if (!isActive(link.path)) e.target.style.color = '#1F2937';
                }}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://gofood.link/u/lumau"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#DC2626',
                color: 'white',
                fontWeight: '600',
                padding: '0.5rem 1.5rem',
                borderRadius: '9999px',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.9rem',
                boxShadow: '0 4px 6px rgba(220, 38, 38, 0.3)',
                textDecoration: 'none',
                transition: 'transform 0.2s, background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#B91C1C';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#DC2626';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Order Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                color: '#1F2937',
                padding: '0.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <svg
                style={{ width: '24px', height: '24px' }}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" style={{ paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    backgroundColor: isActive(link.path) ? '#DC2626' : 'transparent',
                    color: isActive(link.path) ? 'white' : '#1F2937',
                    fontWeight: '500',
                    fontFamily: "'Poppins', sans-serif",
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none'
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://gofood.link/u/lumau"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#DC2626',
                  color: 'white',
                  fontWeight: '600',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  fontFamily: "'Poppins', sans-serif",
                  marginTop: '0.5rem',
                  textAlign: 'center',
                  textDecoration: 'none'
                }}
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
