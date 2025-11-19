import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [lastClickedSection, setLastClickedSection] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Beranda', id: 'beranda' },
    { name: 'Era Disrupsi', id: 'era-disrupsi' },
    { name: 'Tentang Kami', id: 'tentang-kami', isExternal: true },
    { name: 'Program Kami', id: 'program-kami' },
  ];

  const url = `https://wa.me/6285664636443`;

  const currentPath = window.location.pathname;

  useEffect(() => {
    if (currentPath === '/tentang-kami') {
      return setActiveSection('tentang-kami');
    }

    const handleScroll = () => {
      const sections = menuItems
        .filter(item => !item.isExternal)
        .map(item => document.getElementById(item.id))
        .filter(Boolean);

      // Offset scroll berbeda jika section yang terakhir diklik adalah program-kami
      const extraOffset = lastClickedSection === "program-kami" ? 150 : 0;
      const scrollPosition = window.scrollY + 150 + extraOffset;

      let foundActive = false;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {

          const nextSection = section.nextElementSibling;
          if (nextSection && nextSection.id && !menuItems.find(item => item.id === nextSection.id)) {
            const nextSectionTop = nextSection.offsetTop;
            if (scrollPosition >= nextSectionTop) {
              setActiveSection('');
              foundActive = true;
              break;
            }
          }

          setActiveSection(section.id);
          foundActive = true;
          break;
        }
      }

      if (!foundActive) setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath, lastClickedSection]);


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const targetSection = params.get("section");

    if (targetSection) {
      const el = document.getElementById(targetSection);
      if (el) {
        const extraOffset = targetSection === "program-kami" ? -730 : 150;
        const offset = el.offsetTop - extraOffset;
        window.scrollTo({
          top: offset,
        });
      }
      window.history.replaceState({}, "", "/");
    }
  }, []);


  const scrollToSection = (id, isExternal) => {
    setLastClickedSection(id); // penting!

    const currentPath = window.location.pathname;

    if (isExternal) {
      navigate('/tentang-kami');
      return null; // hentikan rendering komponen
    }

    if (currentPath === '/tentang-kami') {
      setActiveSection(false);
      window.location.href = `/?section=${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const extraOffset = id === "program-kami" ? -730 : 150;
      const offsetTop = element.offsetTop - extraOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }

    setIsOpen(false);
  };


  return (
    <nav>
      {/* Desktop Navbar */}
      <div className="hidden md:flex fixed w-full items-center justify-center z-[999] top-[28px] max-w-[1520px] mx-auto">
        <div className="flex flex-row justify-between items-center px-8 py-4 rounded-full w-full mx-5 lg:mx-28 bg-white/60 transition-all duration-300 shadow-md bg-opacity-10 backdrop-blur-2xl hover:bg-opacity-100">
          <div className="flex justify-between items-center rounded-full w-full">
            <p className="font-black text-2xl text-[#221D80]">EraMuda</p>

            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id, item.isExternal)}
                  className={`text-base font-medium transition-colors cursor-pointer ${activeSection === item.id
                    ? 'text-[#221D80] font-bold underline underline-offset-4'
                    : 'text-gray-800 hover:text-[#221D80]'
                    }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>

            <Link to={url} target="_blank" rel="noopener noreferrer" className="capitalize rounded-full text-white py-2 px-2 lg:px-6 bg-[#221D80] flex items-center gap-2 hover:bg-[#1a1560] transition-colors cursor-pointer active:scale-95 ease-in-out duration-200">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.58331 8.25C4.58331 6.54819 5.25935 4.91609 6.46271 3.71273C7.66607 2.50937 9.29817 1.83333 11 1.83333C12.7018 1.83333 14.3339 2.50937 15.5372 3.71273C16.7406 4.91609 17.4166 6.54819 17.4166 8.25V9.19875C18.9713 9.4215 20.1666 10.7589 20.1666 12.375V12.6042C20.1666 14.2312 18.7632 15.6576 17.1123 15.5815C16.434 17.5248 14.7088 18.8347 12.8471 19.1666C12.4162 19.3242 11.9066 19.25 11.4583 19.25C11.0936 19.25 10.7439 19.1051 10.486 18.8473C10.2282 18.5894 10.0833 18.2397 10.0833 17.875C10.0833 17.5103 10.2282 17.1606 10.486 16.9027C10.7439 16.6449 11.0936 16.5 11.4583 16.5C12.1852 16.5 12.9901 16.3946 13.4814 17.0582C14.6694 16.4927 15.5833 15.2982 15.5833 13.75V8.25C15.5833 7.03442 15.1004 5.86863 14.2409 5.00909C13.3813 4.14955 12.2156 3.66667 11 3.66667C9.7844 3.66667 8.61862 4.14955 7.75907 5.00909C6.89953 5.86863 6.41665 7.03442 6.41665 8.25V13.9792C6.41665 14.4046 6.24764 14.8126 5.9468 15.1135C5.64596 15.4143 5.23793 15.5833 4.81248 15.5833C4.02236 15.5833 3.26459 15.2695 2.70589 14.7108C2.14719 14.1521 1.83331 13.3943 1.83331 12.6042V12.375C1.83312 11.6034 2.11103 10.8575 2.6161 10.2741C3.12118 9.69077 3.81959 9.30898 4.58331 9.19875V8.25Z" fill="#FEFFFF" />
              </svg>
              <p className="hidden lg:block">Hubungi Kami</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed w-full bg-white shadow-md z-50">
        <div className="flex items-center justify-between px-4 py-4">
          <p className="font-black text-lg text-[#221D80]">EraMuda</p>
          <button
            onClick={toggleMenu}
            className="text-[#221D80] hover:text-gray-700 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 top-[60px] w-full bg-white z-40 flex flex-col">
            <div className="flex flex-col w-full">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, item.isExternal)}
                  className={`px-4 py-4 text-left text-base font-medium border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer ${activeSection === item.id
                    ? 'text-[#221D80] bg-gray-50 font-bold'
                    : 'text-gray-800'
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button className="w-full m-0 capitalize text-white py-3 px-6 bg-[#221D80] flex items-center justify-center gap-2 hover:bg-[#1a1560] transition-colors">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.58331 8.25C4.58331 6.54819 5.25935 4.91609 6.46271 3.71273C7.66607 2.50937 9.29817 1.83333 11 1.83333C12.7018 1.83333 14.3339 2.50937 15.5372 3.71273C16.7406 4.91609 17.4166 6.54819 17.4166 8.25V9.19875C18.9713 9.4215 20.1666 10.7589 20.1666 12.375V12.6042C20.1666 14.2312 18.7632 15.6576 17.1123 15.5815C16.434 17.5248 14.7088 18.8347 12.8471 19.1666C12.4162 19.3242 11.9066 19.25 11.4583 19.25C11.0936 19.25 10.7439 19.1051 10.486 18.8473C10.2282 18.5894 10.0833 18.2397 10.0833 17.875C10.0833 17.5103 10.2282 17.1606 10.486 16.9027C10.7439 16.6449 11.0936 16.5 11.4583 16.5C12.1852 16.5 12.9901 16.3946 13.4814 17.0582C14.6694 16.4927 15.5833 15.2982 15.5833 13.75V8.25C15.5833 7.03442 15.1004 5.86863 14.2409 5.00909C13.3813 4.14955 12.2156 3.66667 11 3.66667C9.7844 3.66667 8.61862 4.14955 7.75907 5.00909C6.89953 5.86863 6.41665 7.03442 6.41665 8.25V13.9792C6.41665 14.4046 6.24764 14.8126 5.9468 15.1135C5.64596 15.4143 5.23793 15.5833 4.81248 15.5833C4.02236 15.5833 3.26459 15.2695 2.70589 14.7108C2.14719 14.1521 1.83331 13.3943 1.83331 12.6042V12.375C1.83312 11.6034 2.11103 10.8575 2.6161 10.2741C3.12118 9.69077 3.81959 9.30898 4.58331 9.19875V8.25Z" fill="#FEFFFF" />
              </svg>
              Hubungi Kami
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}