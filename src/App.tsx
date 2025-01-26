import { useState, useEffect, useRef } from 'react';
import { Github, Twitter, Linkedin, Mail, Menu, X } from 'lucide-react';
import TechCarousel from './components/TechCarousel';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
  const [activeSection, setActiveSection] = useState('main');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        const menuButton = document.querySelector('[data-menu-button]');
        if (!menuButton?.contains(event.target as Node)) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    if (activeSection !== 'main') {
      setActiveSection('main');
      setTimeout(() => {
        document.getElementById('contact-section')?.scrollIntoView();
      }, 100);
    } else  {
      document.getElementById('contact-section')?.scrollIntoView();
    }
    handleNavClick();
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  ];

  const valueProps = [
    {
      title: "Full Stack Development",
      description: "Proficient in both frontend and backend development, building and shipping projects from start to finish."
    },
    {
      title: "Problem Solving",
      description: "Applying programmatic thinking & logic to reach efficient solutions."
    },
    {
      title: "Project Management Expertise",
      description: "Managing budget, resources, & schedule for app launch & run."
    },
    {
      title: "Business Acumen",
      description: "5 years of analyzing the business value of tech projects."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile Menu Button */}
      <button 
        data-menu-button
        className="fixed top-4 right-4 z-[60] p-2 lg:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop blur */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-200 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Sidebar Navigation */}
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 transform transition-transform duration-200 ease-in-out z-50 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6">
          <h1 className="text-xl font-bold mb-8">MJ Cal</h1>
          <div className="space-y-4">
            <button 
              onClick={() => {
                setActiveSection('main');
                handleNavClick();
              }}
              className={`w-full text-left p-3 rounded-full hover:bg-gray-800 ${activeSection === 'main' ? 'bg-gray-800' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => {
                setActiveSection('projects');
                handleNavClick();
              }}
              className={`w-full text-left p-3 rounded-full hover:bg-gray-800 ${activeSection === 'projects' ? 'bg-gray-800' : ''}`}
            >
              Projects
            </button>
            <button 
              onClick={scrollToContact}
              className={`w-full text-left p-3 rounded-full hover:bg-gray-800`}
            >
              Contact
            </button>
            <button 
              onClick={() => {
                setActiveSection('blog');
                handleNavClick();
              }}
              className={`w-full text-left p-3 rounded-full hover:bg-gray-800 ${activeSection === 'blog' ? 'bg-gray-800' : ''}`}
            >
              truthy.dev
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="max-w-4xl mx-auto p-6">
          {activeSection === 'main' && (
            <div className="space-y-12">
              <div>
                <div className="relative h-48">
                  <img 
                    src=""
                    alt="Cover"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="mt-4 flex items-start space-x-4">
                  <img 
                    src=""
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-black"
                  />
                  <div>
                    <h1 className="text-2xl font-bold">MJ Cal</h1>
                    <p className="text-gray-400">Software Developer | Former Project Manager</p>
                    <div className="flex space-x-4 mt-4">
                      {socialLinks.map(({ icon: Icon, href, label }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                        >
                          <Icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* About Me Section */}
              <div className="bg-gray-900 rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-gray-300 leading-relaxed">
                  Former project manager turned software developer, I bring a unique blend of technical expertise and project management skills. My journey into software development started with a passion for creating solutions and a desire to be more hands-on in the development process. With experience managing complex projects and now building them from the ground up, I offer a comprehensive understanding of both the technical and business aspects of software development.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
                <TechCarousel />
              </div>

              {/* Value Propositions */}
              <div>
                <h2 className="text-2xl font-bold mb-6">What I Bring to the Table</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {valueProps.map((prop, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                      <h3 className="text-xl font-bold mb-2">{prop.title}</h3>
                      <p className="text-gray-300">{prop.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div id="contact-section">
                <Contact />
              </div>
            </div>
          )}
          
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'blog' && <Blog />}
        </div>
      </main>
    </div>
  );
}

export default App
