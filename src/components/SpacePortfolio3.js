  import React, { useState, useEffect } from 'react';
  import { 
    FaHome, 
    FaUser, 
    FaStar, 
    FaRocket, 
    FaAward, 
    FaLinkedin, 
    FaGithub, 
    FaEnvelope, 
    FaCode, 
    FaBook,
    FaLaptopCode,
    FaCertificate,
    FaGraduationCap,
    FaProjectDiagram,
    FaExternalLinkAlt
  } from 'react-icons/fa';
  import Typed from 'typed.js';

  import WebDeveloperImage from '/Users/sarahgteerthan/Desktop/space-portfolio/src/components/web-developer.png';
  import ProfileImage from '/Users/sarahgteerthan/Desktop/space-portfolio/src/components/me.jpeg';

  // Star Background Component (Kept from previous version)
  const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
      const generateStars = () => {
        const starArray = [];
        for (let i = 0; i < 250; i++) {
          starArray.push({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 4,
            animationDelay: `${Math.random() * 5}s`,
            duration: `${Math.random() * 3 + 2}s`,
            opacity: Math.random()
          });
        }
        setStars(starArray);
      };

      generateStars();
    }, []);

    return (
      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-black via-blue-900 to-indigo-900 overflow-hidden">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full animate-starTwinkle"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: star.duration,
              opacity: star.opacity
            }}
          />
        ))}
      </div>
    );
  };

  // Enhanced Navigation Component
  const Navigation = ({ activeSection, setActiveSection }) => {
    const navItems = [
      { icon: FaHome, label: 'Home', section: 'home' },
      { icon: FaUser, label: 'About', section: 'about' },
      { icon: FaLaptopCode, label: 'Skills', section: 'skills' },
      { icon: FaGraduationCap, label: 'Education', section: 'education' },
      { icon: FaRocket, label: 'Experience', section: 'experience' },
      { icon: FaCode, label: 'Projects', section: 'projects' },
      { icon: FaCertificate, label: 'Certifications', section: 'certifications' },
      { icon: FaEnvelope, label: 'Contact', section: 'contact' }
    ];

    return (
      <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-sm z-50 animate-slideDown">
        <div className="container mx-auto flex justify-center items-center p-4">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => {
                const element = document.getElementById(item.section);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(item.section);
                }
              }}
              className={`flex items-center mx-2 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                activeSection === item.section 
                  ? 'bg-blue-600 text-white scale-110' 
                  : 'hover:bg-blue-900 text-gray-300'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="ml-2 hidden md:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    );
  };
  // Projects Section
  const ProjectsSection = () => {
    const projects = [
      {
        title: 'SignLingo - Interactive ISL Learning Platform',
        description: 'Developed an interactive mobile/web application to teach Indian Sign Language (ISL) using gamification techniques, quizzes, and a personalized learning path. Integrated reinforcement learning to recommend learning steps based on user progress, enhancing engagement and retention.',
        technologies: ['Recommdndation', 'Machine Learning', 'Gamification'],
        githubLink: 'https://github.com/yourusername/signlingo'
      },
      {
        title: 'English Text to ISL Translator',
        description: 'Built an NLP-based system to convert English text to Indian Sign Language (ISL) syntax, enabling better communication between the deaf and hearing communities. Utilized Spacy for natural language processing and sign language video demonstration integration.',
        technologies: ['NLP', 'Glove', 'Python'],
        githubLink: 'https://github.com/yourusername/isl-translator'
      },
      {
        title: 'Stocks and Cryptocurrency Price Predictor',
        description: 'Designed and implemented a machine learning model using LSTM-based Recurrent Neural Networks (RNNs) to predict stock and cryptocurrency prices based on historical data. Conducted data preprocessing, feature engineering, and model optimization.',
        technologies: ['Machine Learning', 'LSTM', 'Python'],
        githubLink: 'https://github.com/FuzzException/Stock-Price-Prediction'
      },
      
      {
        title: 'E-Commerce Website',
        description: 'Developed a fully responsive and dynamic e-commerce website using React, JavaScript, and Bootstrap, with features like product listing, shopping cart, and checkout process. Integrated APIs for real-time product data, user authentication, and cart management.',
        technologies: ['React', 'JavaScript', 'Bootstrap', 'API Integration','HTML','CSS'],
        githubLink: 'https://github.com/yourusername/ecommerce-site'
      },
      {
        title: 'Java Password Manager',
        description: 'Created a secure Java-based password manager using Swing for GUI development, allowing users to store and manage multiple passwords with AES encryption. Implemented features like secure storage and user-friendly interface.',
        technologies: ['Java', 'Swing', 'Encryption'],
        githubLink: 'https://github.com/FuzzException/Password-Manager'
      }
    ];

    return (
      <div id="projects" className="min-h-screen flex items-center justify-center text-white p-4">
        <div className="container mx-auto max-w-6xl animate-zoomIn">
          <h2 className="text-4xl font-bold mb-12 text-center animate-bounce">
            <FaProjectDiagram className="inline-block mr-4" /> Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-blue-900/30 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-900/50 flex flex-col"
              >
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">{project.title}</h3>
                <p className="text-base mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-indigo-700/50 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-colors"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Certifications Section
  const CertificationsSection = () => {
    const certifications = [
      {
        title: 'Introduction to Web Development with HTML, CSS, JavaScript',
        skills: ['HTML5', 'CSS', 'JavaScript'],
        link: 'https://drive.google.com/file/d/1s1Q5h31r5xb-kuNrchC6h9qmSCJn45xR/view?usp=sharing'
      },
      {
        title: 'Introduction to Artificial Intelligence (AI)',
        skills: ['Artificial Intelligence'],
        link: 'https://drive.google.com/file/d/1XWyptjJDU-DpN_MpfpGLSsS88aN8_sND/view?usp=sharing'
      },
      {
        title: 'Python for Data Science, AI & Development',
        skills: ['Python', 'Artificial Intelligence', 'Data Science', 'Web Development'],
        link: 'https://drive.google.com/file/d/1n_nmKhjV0efezdZMxSRgW-QFgXzLud22/view?usp=sharing'
      },
      {
        title: 'Python Essentials',
        skills: ['Python'],
        link: 'https://drive.google.com/file/d/1_CK72RNivw8s9DDiZfWKXPiUe6NYLzPL/view?usp=sharing'
      },
      {
        title: 'JavaScript Essentials',
        skills: ['JavaScript', 'Programming'],
        link: 'https://drive.google.com/file/d/15BX9jEw5UNe4gOQTQ7Y1qN2eyfFjEooa/view?usp=sharing'
      },
      {
        title: 'Applied Data Science using Python',
        skills: ['Data Science', 'Python', 'Machine Learning'],
        link: 'https://drive.google.com/file/d/1Y6XG8JWBQI4U6VIvw26pHuiHv9Y5wM6R/view?usp=sharing'
      }
    ];

    return (
      <div id="certifications" className="min-h-screen flex items-center justify-center text-white p-4">
        <div className="container mx-auto max-w-6xl animate-zoomIn">
          <h2 className="text-4xl font-bold mb-12 text-center animate-bounce">
            <FaCertificate className="inline-block mr-4" /> Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-indigo-900/30 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-indigo-900/50 flex flex-col"
              >
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">{cert.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-blue-700/50 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-colors mt-auto"
                >
                  <FaExternalLinkAlt className="mr-2" /> View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Contact Section
  const ContactSection = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you would typically send the form data to a backend service
      console.log('Form submitted:', formData);
      alert('Message sent! I will get back to you soon.');
    };

    return (
      <div id="contact" className="min-h-screen flex items-center justify-center text-white p-4">
        <div className="container mx-auto max-w-lg animate-zoomIn">
          <h2 className="text-4xl font-bold mb-12 text-center animate-bounce">
            <FaEnvelope className="inline-block mr-4" /> Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="bg-blue-900/30 p-8 rounded-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-blue-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-blue-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-black/50 border border-blue-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };

  // Education Section
  const EducationSection = () => {
    const educationHistory = [
      {
        institution: 'Mar Baselios College of Engineering and Technology',
        degree: 'B.Tech. - Computer Science & Engineering',
        year: '2021 - 2025',
        details: 'CGPA: 7.93 / 10'
      },
      {
        institution: 'St.Ann\'s High School',
        degree: '12th | CISCE',
        year: '2019 - 2021',
        details: 'Percentage: 92 / 100'
      },
      {
        institution: 'St.Ann\'s High School',
        degree: '10th | CISCE',
        year: '2017 - 2019',
        details: 'Percentage: 88.40 / 100'
      }
    ];

    return (
      <div className="min-h-screen flex items-center justify-center text-white p-4">
        <div className="max-w-4xl w-full animate-zoomIn">
          <h2 className="text-4xl font-bold mb-8 text-center animate-bounce">
            <FaGraduationCap className="inline-block mr-4" /> Education
          </h2>
          <div className="space-y-6">
            {educationHistory.map((edu, index) => (
              <div 
                key={index} 
                className="bg-indigo-900/30 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-indigo-900/50 animate-slideInRight"
              >
                <h3 className="text-2xl text-blue-300 mb-2">{edu.institution}</h3>
                <p className="text-lg">{edu.degree}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-300">{edu.details}</span>
                  <span className="text-sm text-gray-400">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Home Section with More Dynamic Animations
  const HomeSection = () => {
    const handleContactScroll = (e) => {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    useEffect(() => {
      const options = {
        strings: ['Software Developer', 'AI Engineer','Web Developer','Machine Learning Engineer','Python Developer', 'Data Scientist'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      };

      // Create a new Typed instance
      const typed = new Typed('#element', options);

      // Cleanup function to destroy Typed instance on component unmount
      return () => {
        typed.destroy();
      };
    }, []); 

    const handleDownloadCV = () => {
      // Replace with your actual Google Drive link for CV
      window.open('https://drive.google.com/file/d/1nXQcTkZHq9a_qWpxSx4n1ooYfsUGnuBd/view?usp=sharing', '_blank');
    };

    return (
      <div className="min-h-screen flex items-center justify-center text-white p-4 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fadeInLeft">
            <h1 className="text-5xl font-bold">
              Hi, I'm <span className="text-blue-400 animate-pulse">Sarah G Teerthan</span>
            </h1>
            <p 
              className="text-3xl"
              style={{ fontSize: '31px' }}
            >
              I am a <span id="element"></span>
            </p>
            
            <p className="text-lg opacity-80 animate-fadeInUp delay-500">
              Navigating the Digital Universe, One Line of Code at a Time
            </p>
            <div className="flex space-x-4 animate-slideInRight">
              <button 
                onClick={handleDownloadCV}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Download CV
              </button>
              <button onClick={handleContactScroll} className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Contact Me
              </button>
            </div>
          </div>
          <div className="flex justify-center animate-floatIn">
            <div className="w-64 h-64 bg-blue-600/30 rounded-full animate-orbit relative overflow-hidden">
              <img 
                src={WebDeveloperImage} 
                alt="Web Developer" 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };


  // About Section with Enhanced Animations
  const AboutSection = () => {
    return (
      <div className="min-h-screen flex items-center justify-center text-white p-4">
        <div className="max-w-4xl animate-zoomIn">
          <h2 className="text-4xl font-bold mb-8 text-center animate-bounce">About My Journey</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center animate-floatIn">
              <div className="w-64 h-64 bg-indigo-600/30 rounded-full relative overflow-hidden">
                <img 
                  src={ProfileImage} 
                  alt="Sarah Professional" 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full object-cover shadow-2xl"
                />
              </div>
            </div>
            <div className="animate-fadeInRight">
              <p className="text-lg mb-4 animate-slideInLeft">
              As a dedicated software developer, I view coding as a craft that transforms ideas into impactful solutions. My mission is to innovate, optimize, and build systems that drive meaningful digital experiences. 
              
              With a strong passion for technology and a problem-solving mindset, I am always eager to explore new challenges and contribute to transformative projects.
              </p>
              <p className="text-lg animate-slideInRight">
                With a keen interest in cutting-edge technologies and a creative approach to problem-solving, I'm always ready to embark on new technological adventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // Skills Section
  const SkillsSection = () => {
    const skillCategories = [
      {
        title: 'Front-End Development',
        skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'jQuery']
      },
      {
        title: 'Back-End Development',
        skills: ['Python (Flask)', 'PHP']
      },
      {
        title: 'Programming Languages',
        skills: ['Python', 'Java', 'C', 'JavaScript', 'SQL']
      },
      {
        title: 'AI/ML & Data Science',
        skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'NLP']
      }
    ];

    const softSkills = [
      'Problem-Solving', 
      'Communication', 
      'Leadership',
      'Adaptability', 
      'Time Management', 
      'Teamwork', 
      'Continuous Learning'
    ];

    return (
      <div className="min-h-screen flex items-center justify-center text-white p-4">
        <div className="container mx-auto max-w-6xl animate-zoomIn">
          <h2 className="text-4xl font-bold mb-12 text-center animate-bounce">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div>
            <h3 className="text-3xl font-bold mb-12 text-center animate-bounce">Technical Skills</h3>
              {skillCategories.map((category, index) => (
                <div key={index} className="mb-6 animate-fadeInLeft">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-blue-700/50 px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Soft Skills */}
            <div className="animate-fadeInRight">
            <h3 className="text-3xl font-bold mb-12 text-center animate-bounce">Soft Skills</h3>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-indigo-700/50 px-3 py-1 rounded-full text-sm hover:bg-indigo-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Experience Section
  const ExperienceSection = () => {
    const experiences = [
      {
        company: 'OrisysIndia Consultancy Services Pvt. Ltd.',
        role: 'Python Developer Intern',
        duration: 'Oct 11 - Oct 21, 2023',
        description: 'Developed Spotify Top 10 Hits Chart clone and real-time weather website, showcasing skills in Python, web scraping, Tkinter, HTML, CSS, JavaScript, and API integration.'
      },
      {
        company: 'Capabl India',
        role: 'Web Development Intern',
        duration: 'Aug 11 - Sep 11, 2023',
        description: 'Gained hands-on experience in full-stack development, enhancing proficiency in web development technologies.'
      },
      {
        company: 'Internship Studio',
        role: 'Website Design and Development Intern',
        duration: 'Nov 8, 2023 - Jan 2, 2024',
        description: 'Developed a responsive e-commerce website using React, Bootstrap, and JavaScript, integrating REST APIs for product management and user authentication.'
      }
    ];

    return (
      <div className="min-h-screen flex items-center justify-center text-white p-4">
        <div className="container mx-auto max-w-4xl animate-zoomIn">
          <h2 className="text-4xl font-bold mb-12 text-center animate-bounce">Professional Experience</h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-blue-900/30 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-900/50"
              >
                <h3 className="text-2xl font-semibold text-blue-400">{exp.role}</h3>
                <p className="text-lg font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-gray-300 mb-3">{exp.duration}</p>
                <p className="text-base">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Footer Component with Permanent Visibility
  const Footer = () => {
    return (
      <footer className="bg-black/30 backdrop-blur-sm text-white py-6 fixed bottom-0 left-0 w-full z-50 animate-slideUp">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="mailto:theteerthansarah@gmail.com" 
              className="hover:text-blue-400 transition-colors transform hover:scale-110"
              title="Email"
            >
              <FaEnvelope className="w-8 h-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sarah-g-teerthan-369bb5246/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors transform hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a 
              href="https://github.com/FuzzException" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors transform hover:scale-110"
              title="GitHub"
            >
              <FaGithub className="w-8 h-8" />
            </a>
          </div>
          <div className="text-center text-sm opacity-70 animate-fadeInUp">
            © {new Date().getFullYear()} Sarah's Tech Odyssey. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };

  // Main Portfolio Component
  const SpacePortfolio3 = () => {
    
    const [activeSection, setActiveSection] = useState('home');

    // Add scroll event listener to update active section
    useEffect(() => {
      const sections = ['home', 'about', 'skills', 'education', 'experience', 'projects', 'certifications', 'contact'];
      
      const handleScroll = () => {
        const scrollPosition = window.scrollY;

        for (let section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <div className="min-h-screen bg-transparent text-white relative">
        <StarBackground />
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <div id="home"><HomeSection /></div>
        <div id="about"><AboutSection /></div>
        <div id="skills"><SkillsSection /></div>
        <div id="education"><EducationSection /></div>
        <div id="experience"><ExperienceSection /></div>
        <div id="projects"><ProjectsSection /></div>
        <div id="certifications"><CertificationsSection /></div>
        <div id="contact"><ContactSection /></div>
        
        <Footer />
      </div>
    );
  };

  // Custom Animations (Previous version)
  const customAnimations = `
  @keyframes starTwinkle {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideDown {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
  }
  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }
  @keyframes bounceIn {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); opacity: 0.8; }
    70% { transform: scale(0.9); opacity: 0.9; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes floatIn {
    0% { transform: translateY(50px); opacity: 0; }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); opacity: 1; }
  }
  @keyframes zoomIn {
    from { opacity: 0; transform: scale(0.7); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes orbit {
    from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-100%); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(100%); }
    to { opacity: 1; transform: translateX(0); }
  }`;

  // Add custom styles
  const styleElement = document.createElement('style');
  styleElement.textContent = customAnimations;
  document.head.appendChild(styleElement);

  export default SpacePortfolio3;