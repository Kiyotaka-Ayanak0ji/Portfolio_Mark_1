import React, { useEffect, useState, createContext, useContext } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun, 
  ArrowUpRight, 
  Shield, 
  Code2, 
  Database
} from 'lucide-react';
import { PROJECTS, SKILLS, EXPERIENCE, EDUCATION } from './constants';
const ThemeContext = createContext({ isDark: true, toggle: () => {} });

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggle: () => setIsDark(!isDark) }}>
      <div className="min-h-screen transition-colors duration-500 selection:bg-accent selection:text-white">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-[0%]"
          style={{ scaleX }}
        />

        <Navbar />

        <main className="container mx-auto px-6 pt-32 pb-24 max-w-6xl">
          <Hero />
          <ExperienceSection />
          <ProjectsGrid />
          <SkillsSection />
          <EducationSection />
          <Certifications />
        </main>

        <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Ansik Aryan Samal. All Rights Reserved.
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

function Navbar() {
  const { isDark, toggle } = useContext(ThemeContext);
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-max px-6 py-3 bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-full z-10 flex items-center gap-8 justify-between">
      <div className="hidden md:flex gap-6 text-xs font-medium uppercase tracking-widest">
        <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
        <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
        <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
        <a href="#certifications" className="hover:text-accent transition-colors">Certifications</a>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={toggle} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="mb-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-accent font-mono text-sm mb-4">Based in Hyderabad, India</h2>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
          Ansik Aryan <span className="opacity-30 flex-nowrap">Samal</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          Computer Science graduate specializing in <span className="text-black dark:text-white">MERN-stack Development</span>, <span className="text-black dark:text-white">API Design</span> & <span className="text-black dark:text-white">RESTful API Development</span>.
        </p>

        <div className="flex gap-6 mt-10">
          <SocialLink href="https://github.com/Kiyotaka-Ayanak0ji" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/ansik-aryan-samal-1aa731250" icon={<Linkedin size={20} />} label="LinkedIn" />
          <SocialLink href="mailto:aryanansik@gmail.com" icon={<Mail size={20} />} label="Email" />
        </div>
      </motion.div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="mb-32">
      <SectionLabel>Professional Experience</SectionLabel>
      {EXPERIENCE.map((exp, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="grid md:grid-cols-[1fr_2fr] gap-4 py-12 border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <h3 className="text-2xl font-bold">{exp.company}</h3>
              <span className="text-accent font-mono text-sm">{exp.role}</span>
            </div>
            <ul className="space-y-4">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="text-neutral-600 dark:text-neutral-400 gap-4 ">
                  <span className="text-accent mt-1.5 px-2">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

function ProjectsGrid() {
  return (
    <section id="projects" className="mb-32">
      <SectionLabel>Projects</SectionLabel>
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between hover:border-accent transition-colors duration-500"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white dark:bg-black rounded-xl border border-neutral-200 dark:border-neutral-800">
                  {project.title.includes("Stenography") ? <Shield className="text-accent" size={24} /> : 
                   project.title.includes("Stock") ? <Code2 className="text-accent" size={24} /> : 
                   <Database className="text-accent" size={24} />}
                </div>
                <ArrowUpRight className="opacity-20" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-[10px] uppercase tracking-widest font-bold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="text-sm text-neutral-500 flex items-center gap-2">
                  <div className="w-1 h-1 bg-accent rounded-full" />
                  {h}
                </div>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="mb-32">
      <SectionLabel>Infrastructure & Tooling</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {Object.entries(SKILLS).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">{category}</h4>
            <ul className="space-y-2">
              {items.map(skill => (
                <li key={skill} className="font-medium text-lg">{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="mb-32">
      <SectionLabel>Academic Journey</SectionLabel>
      <div className="space-y-8">
        {EDUCATION.map((edu, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">{edu.school}</h3>
              <p className="text-neutral-500">{edu.degree}</p>
            </div>
            <div className="text-left md:text-right">
              <p className="font-mono text-accent">{edu.result}</p>
              <p className="text-sm opacity-40">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="mb-32">
      <SectionLabel>Certifications</SectionLabel>
      <div className="space-y-8">
        <p className="text-neutral-500">SEBI and NISM Investor Certification</p>      
        <p className="text-neutral-500">Web Development with HTML,CSS and JavaScript from <strong>Pupilfirst Pvt Ltd.</strong></p>
        <p className="text-neutral-500">Server Side Development Using Node.JS from <strong>Pupilfirst Pvt Ltd.</strong></p>
      </div>
    </section>
  )
}

// function Contact() {
//   return (
//     <section className="mb-32">
//       <div className="bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black p-12 md:p-24 rounded-[3rem] text-center">
//         <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's create something secure.</h2>
//         <a href="mailto:aryanansik@gmail.com" className="inline-flex items-center gap-4 text-xl md:text-2xl hover:gap-6 transition-all border-b pb-2">
//           aryanansik@gmail.com <ExternalLink />
//         </a>
//       </div>
//     </section>
//   );
// }

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-xs uppercase font-bold tracking-[0.3em] text-accent whitespace-nowrap">{children}</h2>
      <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />
    </div>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-neutral-500 hover:text-accent transition-colors"
    >
      {icon}
      <span className="text-xs font-mono uppercase tracking-widest">{label}</span>
    </a>
  )
}