/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Importa le immagini

import ff1 from './assets/ff1.png';
import ff2 from './assets/ff2.png';
import ff3 from './assets/ff3.png';
import flashpark from './assets/flashpark.png';

import rumbon1 from './assets/rumbon1.png'
import rumbon2 from './assets/rumbon2.png'

// import flashparkImage2 from '../assets/flashpark2.jpg';

// eslint-disable-next-line react/prop-types
const NeoBrutalismSection = ({ title, children }) => (
  <div className="mb-12 p-6 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
    <h2 className="text-4xl font-bold mb-6 text-black">{title}</h2>
    {children}
  </div>
);

// eslint-disable-next-line react/prop-types
const AnimatedCard = ({ children, color }) => (
  <div className={`${color} p-6 border-2 border-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer`}>
    {children}
  </div>
);

// eslint-disable-next-line react/prop-types
const ProjectImage = ({ src, alt, onClick }) => (
  <div 
    className="border-4 border-black overflow-hidden transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
    onClick={onClick}
  >
    <img src={src} alt={alt} className="w-full h-48 object-cover" />
  </div>
);

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img src={images[currentIndex]} alt={`Project image ${currentIndex + 1}`} className="w-full border-2 border-black" />
      <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 border-2 border-black">
        <FaChevronLeft />
      </button>
      <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 border-2 border-black">
        <FaChevronRight />
      </button>
    </div>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 border-4 border-black max-w-3xl max-h-[90vh] overflow-auto">
        <button onClick={onClose} className="float-right text-2xl">
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const experiences = [
    {
      company: "Sydea srl",
      date: "Maggio 2024 - Giugno 2024",
      role: "Sviluppatore Freelance",
      description: "Sviluppo front-end portale di gestione progetti",
      tech: "ReactJS, ui5-webcomponents-react"
    },
    {
      company: "Banca Sella",
      date: "Maggio 2022 - Luglio 2022",
      role: "Sviluppatore Freelance",
      description: "Sviluppo front-end applicazione mobile di banca Sella",
      tech: "React-Native"
    },
    {
      company: "Mooney - EasyCassa",
      date: "Marzo 2022 - Agosto 2022",
      role: "Sviluppatore Freelance",
      description: "Sviluppo e bug-fix su progetto easyCassa Cloud",
      tech: "Reactjs"
    },
    {
      company: "Umana Studio",
      date: "Dicembre 2021 - Aprile 2022",
      role: "Sviluppatore Freelance",
      description: "Progettazione e creazione app mobile per l'associazione di polizia locale di Roma",
      tech: "React-Native, Python, Firebase"
    }
  ];

  const projects = [
    {
      name: "FAMAFACILIS",
      url: "https://www.famafacilis.it/",
      tech: "ReactJS, Redux, Convex",
      images: [ff1, ff2, ff3]
    },
    {
      name: "FLASHPARK APP",
      url: "https://apps.apple.com/it/app/flashpark/id6475427815",
      tech: "React Native, Redux, Firebase",
      images: [flashpark]
    },
    {
      name: "Il Rumbon",
      url: "https://apps.apple.com/it/app/il-rumbon/id6736385595",
      tech: "React Native, Convex",
      images: [rumbon1, rumbon2]
    },
    // Aggiungi qui altri progetti con le relative immagini
  ];

  return (
    <div className="min-h-screen bg-white font-mono">
      <header className="bg-red-500 p-6 border-b-4 border-black">
        <h1 className="text-5xl font-bold text-white">Dario Esposito</h1>
        <p className="text-2xl mt-2 text-white">Sviluppatore Frontend</p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <NeoBrutalismSection title="Chi Sono">
          <p className="text-xl mb-6">
            Sono uno sviluppatore frontend con solide competenze di risoluzione dei problemi e con
            esperienza nella creazione e progettazione di software. Sono di natura una persona
            curiosa, mi piace mettermi in gioco e cimentarmi in nuove sfide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedCard color="bg-blue-400">
              <h3 className="text-2xl font-bold mb-4">Competenze</h3>
              <ul className="list-disc list-inside">
                <li>Python, Javascript</li>
                <li>React js, React Native, Flask</li>
                <li>HTML, CSS</li>
              </ul>
            </AnimatedCard>
            <AnimatedCard color="bg-green-400">
              <h3 className="text-2xl font-bold mb-4">Formazione</h3>
              <p>Laurea Triennale in Informatica</p>
              <p>Università Milano Bicocca</p>
              <p>Settembre 2020 - In corso</p>
            </AnimatedCard>
          </div>
        </NeoBrutalismSection>

        <NeoBrutalismSection title="Galleria Progetti">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectImage 
                key={index}
                src={project.images[0]}
                alt={project.name}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </NeoBrutalismSection>

        <NeoBrutalismSection title="Esperienze Lavorative">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedCard key={index} color="bg-pink-300">
                <h3 className="text-2xl font-bold">{exp.company}</h3>
                <p className="text-black mb-2">{exp.date}</p>
                <p className="font-bold">{exp.role}</p>
                <p className="mb-2">{exp.description}</p>
                <p className="text-sm bg-white inline-block p-1 border border-black">Tecnologie: {exp.tech}</p>
              </AnimatedCard>
            ))}
          </div>
        </NeoBrutalismSection>

        <NeoBrutalismSection title="Progetti">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <AnimatedCard key={index} color="bg-purple-300">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <a href={project.url} className="text-blue-800 hover:underline font-bold line-clamp-1" target="_blank" rel="noopener noreferrer">{project.url}</a>
                <p className="text-sm bg-white inline-block p-1 border border-black">Tecnologie: {project.tech}</p>
              </AnimatedCard>
            ))}
          </div>
        </NeoBrutalismSection>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/yourusername" className="hover:text-yellow-300 transition-colors duration-300"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/dario-esposito-b57121a8" className="hover:text-yellow-300 transition-colors duration-300"><FaLinkedin size={24} /></a>
            <a href="mailto:dario.esposito23@gmail.com" className="hover:text-yellow-300 transition-colors duration-300"><FaEnvelope size={24} /></a>
          </div>
          <p>© 2024 Dario Esposito. Tutti i diritti riservati.</p>
        </div>
      </footer>

      <Modal isOpen={selectedProject !== null} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div>
            <h2 className="text-3xl font-bold mb-4">{selectedProject.name}</h2>
            <ImageGallery images={selectedProject.images} />
            <p className="mt-4 mb-2"><strong>URL:</strong> <a href={selectedProject.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{selectedProject.url}</a></p>
            <p><strong>Tecnologie:</strong> {selectedProject.tech}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Portfolio;