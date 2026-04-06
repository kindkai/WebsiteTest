/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

// --- Types ---
type View = 'works' | 'project' | 'info';

// --- Components ---

const Navbar = ({ currentView, setView }: { currentView: View, setView: (v: View) => void }) => (
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-transparent">
    <button 
      onClick={() => setView('works')}
      className="text-xl md:text-2xl font-bold tracking-tighter text-primary uppercase hover:opacity-70 transition-opacity"
    >
      YOUNGWOO CHOI
    </button>
    <div className="hidden md:flex items-center gap-12">
      <button 
        onClick={() => setView('info')}
        className={`text-primary font-bold tracking-tight transition-all ${currentView === 'info' ? 'border-b-2 border-primary' : 'opacity-60 hover:opacity-100'}`}
      >
        Info
      </button>
      <button 
        onClick={() => setView('works')}
        className={`text-primary font-bold tracking-tight transition-all ${currentView === 'works' ? 'border-b-2 border-primary' : 'opacity-60 hover:opacity-100'}`}
      >
        Works
      </button>
      <a href="#" className="text-primary font-bold tracking-tight opacity-60 hover:opacity-100 transition-all">Contact</a>
    </div>
    <button className="md:hidden text-primary">
      <Menu size={24} />
    </button>
  </nav>
);

const Footer = () => (
  <footer className="w-full px-6 md:px-12 py-20 mt-20 border-t border-primary/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
    <div className="flex flex-col gap-6">
      <div className="text-xl font-bold tracking-tighter text-primary uppercase">YOUNGWOO CHOI</div>
      <div className="font-bold text-[10px] tracking-widest text-primary/60 uppercase max-w-xs leading-loose">
        © 2024 INDUSTRIAL MONOGRAPH. ALL RIGHTS RESERVED.
      </div>
    </div>
    <div className="flex gap-8 md:gap-16">
      {['Instagram', 'LinkedIn', 'Email'].map((link) => (
        <a key={link} href="#" className="font-bold text-[10px] uppercase tracking-widest text-primary/60 hover:text-primary transition-all">
          {link}
        </a>
      ))}
    </div>
  </footer>
);

// --- Pages ---

const WorksPage = ({ onProjectClick }: { onProjectClick: () => void }) => (
  <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-32">
    <header className="mb-32 max-w-6xl">
      <h1 className="text-8xl md:text-[12rem] font-bold tracking-[-0.04em] mb-12 leading-[0.85] text-primary">Works.</h1>
      <p className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-[-0.02em] max-w-5xl text-primary">
        A selection of industrial artifacts, structural prototypes, and functional experiments developed between 2020 and 2024.
      </p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-40 gap-x-12">
      {/* Project 1 */}
      <div className="md:col-span-8 group cursor-pointer" onClick={onProjectClick}>
        <div className="bg-surface-low aspect-[16/10] overflow-hidden mb-8">
          <img 
            src="https://picsum.photos/seed/industrial1/1200/800" 
            alt="K-01 Haptic Controller" 
            className="w-full h-full object-cover greyscale-img"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex justify-between items-start pt-6 border-t-4 border-primary">
          <div>
            <span className="font-bold text-sm uppercase tracking-widest block mb-3 text-primary">Electronic Prototype</span>
            <h3 className="text-5xl md:text-6xl font-bold tracking-[-0.03em] text-primary">K-01 Haptic Controller</h3>
          </div>
          <span className="text-xl font-bold uppercase tracking-widest text-primary">2024</span>
        </div>
        <p className="mt-6 max-w-xl text-2xl font-bold tracking-tight text-primary/90 leading-tight">
          Exploring the intersection of tactile feedback and minimalist structural integrity through machined metal.
        </p>
      </div>

      {/* Project 2 */}
      <div className="md:col-span-4 group cursor-pointer flex flex-col justify-end">
        <div className="bg-surface-low aspect-square overflow-hidden mb-8">
          <img 
            src="https://picsum.photos/seed/furniture1/800/800" 
            alt="Mono-02 Stool" 
            className="w-full h-full object-cover greyscale-img"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="pt-6 border-t-4 border-primary">
          <span className="font-bold text-sm uppercase tracking-widest block mb-3 text-primary">Furniture</span>
          <h3 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-primary">Mono-02 Stool</h3>
        </div>
      </div>

      {/* Project 3 */}
      <div className="md:col-start-2 md:col-span-5 group cursor-pointer">
        <div className="bg-surface-low aspect-[3/4] overflow-hidden mb-8">
          <img 
            src="https://picsum.photos/seed/audio1/800/1000" 
            alt="Auralis MK. I" 
            className="w-full h-full object-cover greyscale-img"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="pt-6 border-t-4 border-primary">
          <span className="font-bold text-sm uppercase tracking-widest block mb-3 text-primary">Concept Prototype</span>
          <h3 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-primary">Auralis MK. I</h3>
          <p className="mt-3 text-sm font-bold uppercase tracking-widest text-primary">Acoustics & Form Study</p>
        </div>
      </div>

      {/* Project 4 */}
      <div className="md:col-span-6 group cursor-pointer mt-12 md:mt-48">
        <div className="bg-surface-low aspect-video overflow-hidden mb-8">
          <img 
            src="https://picsum.photos/seed/spatial1/1200/675" 
            alt="Vessel Pavilion" 
            className="w-full h-full object-cover greyscale-img"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="pt-6 border-t-4 border-primary">
          <span className="font-bold text-sm uppercase tracking-widest block mb-3 text-primary">Spatial Design</span>
          <h3 className="text-5xl md:text-6xl font-bold tracking-[-0.03em] text-primary">Vessel Pavilion</h3>
        </div>
      </div>

      {/* Project 5 */}
      <div className="md:col-span-12 group cursor-pointer mt-32" onClick={onProjectClick}>
        <div className="bg-surface-low aspect-[21/9] overflow-hidden mb-12">
          <img 
            src="https://picsum.photos/seed/auto1/1600/685" 
            alt="Project Spectre" 
            className="w-full h-full object-cover greyscale-img"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t-4 border-primary pt-8">
          <div className="max-w-3xl">
            <span className="font-bold text-sm uppercase tracking-widest block mb-4 text-primary">Mobility</span>
            <h3 className="text-7xl md:text-9xl font-bold tracking-[-0.04em] leading-none mb-8 text-primary">Project Spectre</h3>
            <p className="text-3xl font-bold tracking-tight leading-tight text-primary/90">
              A study in reductive automotive surfacing, focusing on the tension between liquid forms and aggressive mechanical cut-lines.
            </p>
          </div>
          <button className="bg-primary text-white px-12 py-7 text-xl font-bold uppercase tracking-widest hover:brightness-110 transition-all whitespace-nowrap">
            View Case Study
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ProjectPage = () => (
  <div className="pt-32 pb-24">
    <header className="px-6 md:px-12 grid grid-cols-12 gap-8 items-end mb-16">
      <div className="col-span-12 md:col-span-8">
        <h1 className="font-bold text-[10vw] leading-[0.9] tracking-tighter mb-8 text-primary">Project Spectre</h1>
      </div>
      <div className="col-span-12 md:col-span-4 pb-4">
        <p className="font-bold text-xs tracking-widest uppercase mb-4 text-primary/80">Automotive Design / 2024</p>
        <p className="text-2xl leading-tight font-bold text-primary max-w-sm">
          Exploring the intersection of silent electric performance and aggressive aerodynamic silhouettes.
        </p>
      </div>
    </header>

    <section className="px-6 md:px-12 mb-32">
      <div className="w-full aspect-[21/9] overflow-hidden bg-surface-low">
        <img 
          src="https://picsum.photos/seed/spectre-hero/1600/685" 
          alt="Project Spectre Hero" 
          className="w-full h-full object-cover greyscale-img"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>

    <section className="px-6 md:px-12 mb-32 grid grid-cols-12 gap-8">
      <div className="col-span-12 md:col-span-4">
        <h2 className="font-bold text-5xl tracking-tight mb-8 text-primary">Design Intent</h2>
      </div>
      <div className="col-span-12 md:col-span-7 md:col-start-6">
        <div className="space-y-8 text-3xl font-bold leading-[1.1] tracking-tight text-primary">
          <p>
            Project Spectre was conceived as a challenge to the existing visual language of electric vehicles. Rather than opting for the typical soft, bulbous forms associated with efficiency, Spectre embraces the sharp, industrial precision of high-speed aerospace engineering.
          </p>
          <p>
            The goal was to create a "monolithic" body that feels carved from a single block of material, where every air intake and vent is an integrated tectonic shift rather than an additive component.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-surface-low py-32 px-6 md:px-12 mb-32">
      <div className="grid grid-cols-12 gap-8 max-w-screen-2xl mx-auto">
        <div className="col-span-12 md:col-span-5 mb-16 md:mb-0">
          <img 
            src="https://picsum.photos/seed/spectre-detail/800/800" 
            alt="Material Integrity" 
            className="w-full aspect-square object-cover greyscale-img mb-8"
            referrerPolicy="no-referrer"
          />
          <h3 className="font-bold text-3xl mb-4 tracking-tight text-primary">Material Integrity</h3>
          <p className="max-w-md text-xl font-bold leading-tight text-primary">
            Utilizing recycled carbon-polymer composites to achieve a weight reduction of 40% while maintaining structural rigidity for high-speed cornering.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <h2 className="font-bold text-5xl tracking-tight mb-12 text-primary">Technical Specs</h2>
          <div className="border-t-2 border-primary pt-8 space-y-6">
            {[
              { label: 'Powertrain', value: 'Tri-Motor Axial Flux' },
              { label: 'Peak Power', value: '1,240 kW' },
              { label: '0—100 KM/H', value: '1.82 Seconds' },
              { label: 'Drag Coefficient', value: '0.19 Cd' }
            ].map((spec) => (
              <div key={spec.label} className="flex justify-between items-end border-b border-primary/20 pb-6 last:border-0">
                <span className="font-bold uppercase tracking-widest text-[10px] text-primary">{spec.label}</span>
                <span className="font-bold text-3xl tracking-tight text-primary">{spec.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-primary p-12 text-white">
            <h4 className="font-bold text-4xl mb-6 tracking-tight">Thermal Management</h4>
            <p className="text-xl font-bold leading-tight opacity-90">
              Active liquid cooling systems integrated directly into the chassis skin allow for sustained peak performance without throttle de-rating during extreme track usage.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 md:px-12 mb-32 max-w-screen-2xl mx-auto">
      <h2 className="font-bold text-5xl tracking-tight mb-16 text-primary">Process Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="aspect-video bg-surface-low overflow-hidden">
            <img src="https://picsum.photos/seed/process1/1200/675" alt="Sketch" className="w-full h-full object-cover greyscale-img" referrerPolicy="no-referrer" />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square bg-surface-low overflow-hidden">
              <img src="https://picsum.photos/seed/process2/800/800" alt="Clay Model" className="w-full h-full object-cover greyscale-img" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square bg-surface-low overflow-hidden">
              <img src="https://picsum.photos/seed/process3/800/800" alt="Technical Drawing" className="w-full h-full object-cover greyscale-img" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="aspect-[3/4] bg-surface-low overflow-hidden">
            <img src="https://picsum.photos/seed/process4/600/800" alt="Texture" className="w-full h-full object-cover greyscale-img" referrerPolicy="no-referrer" />
          </div>
          <div className="p-8 border-l-4 border-primary bg-surface-low">
            <p className="font-bold uppercase tracking-widest text-[10px] mb-4 text-primary">Phase 04: Validation</p>
            <p className="text-sm font-bold leading-tight text-primary">
              "The transition from digital surfacing to clay modeling revealed subtle aero-acoustic properties that informed the final rear diffuser geometry."
            </p>
          </div>
          <div className="aspect-square bg-surface-low overflow-hidden">
            <img src="https://picsum.photos/seed/process5/800/800" alt="Detail" className="w-full h-full object-cover greyscale-img" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

const InfoPage = () => (
  <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-32">
    <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end pt-12">
      <div className="md:col-span-7">
        <h1 className="text-[clamp(4rem,10vw,8rem)] font-bold leading-[0.85] tracking-tighter mb-12 uppercase text-primary">
          YoungWoo<br/>Choi
        </h1>
        <p className="font-bold text-3xl md:text-5xl leading-[1.1] tracking-tight max-w-2xl text-primary">
          Industrial designer focused on the intersection of primitive forms and mechanical precision.
        </p>
      </div>
      <div className="md:col-span-5 aspect-[4/5] bg-surface-low overflow-hidden">
        <img 
          src="https://picsum.photos/seed/elias/800/1000" 
          alt="YoungWoo Choi" 
          className="w-full h-full object-cover greyscale-img"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>

    <section className="mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      <div className="md:col-span-4">
        <span className="font-bold text-[10px] uppercase tracking-[0.2em] mb-4 block text-primary">Manifesto</span>
      </div>
      <div className="md:col-span-8">
        <div className="font-bold text-2xl md:text-4xl leading-[1.2] space-y-8 max-w-3xl text-primary">
          <p>Based in Berlin, YoungWoo Choi operates at the convergence of traditional craft and robotic fabrication. His work rejects the planned obsolescence of the modern era, opting instead for materials that patina and structures that endure.</p>
          <p>Every object is treated as a monograph—a singular study in utility and aesthetic tension. By stripping away the superfluous, Choi uncovers the industrial soul of the everyday object.</p>
        </div>
      </div>
    </section>

    <section className="mt-48 border-t border-primary/20 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="font-bold text-4xl tracking-tighter mb-8 uppercase text-primary">Recognition</h2>
          <span className="font-bold text-[10px] uppercase tracking-widest text-primary/60">Selected Works 2018–2024</span>
        </div>
        <div className="md:col-span-8 space-y-12">
          {[
            { title: 'Red Dot Design Award', year: '2023', desc: "Best of the Best: Product Design for 'The Monolith' Series" },
            { title: "Compasso d'Oro", year: '2021', desc: 'Honorable Mention: Sustainable Urban Lighting Systems' },
            { title: 'Wallpaper* Design Awards', year: '2019', desc: 'Designer of the Year: Emerging Talent Category' }
          ].map((award) => (
            <div key={award.title} className="border-b border-primary/20 pb-8 last:border-0">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-bold text-2xl uppercase tracking-tighter text-primary">{award.title}</h3>
                <span className="font-bold text-sm text-primary">{award.year}</span>
              </div>
              <p className="font-bold text-sm text-primary/70">{award.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="mt-48">
      <h2 className="font-bold text-5xl tracking-tighter mb-16 uppercase text-primary">Select Clients</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/10 border border-primary/10">
        {['Vitruvia', 'Kvadrat', 'Audi AG', 'Leica', 'Rimowa', 'Teenage Eng.', 'Hay', 'Muuto'].map((client, i) => (
          <div key={client} className="bg-surface p-12 flex flex-col justify-between aspect-square hover:bg-primary/5 transition-colors group">
            <span className="font-bold text-[10px] uppercase tracking-widest text-primary/40 group-hover:text-primary">0{i+1}</span>
            <span className="font-bold text-3xl uppercase tracking-tighter text-primary">{client}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="mt-48 border-t border-primary/20 pt-16">
      <div className="max-w-4xl">
        <p className="font-bold text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-12 uppercase text-primary">
          Let's refine the future of objects.
        </p>
        <button className="bg-primary text-white px-10 py-6 font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all">
          Start a project
        </button>
      </div>
    </section>
  </div>
);

export default function App() {
  const [view, setView] = useState<View>('info');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen">
      <Navbar currentView={view} setView={setView} />
      
      <main>
        <AnimatePresence mode="wait">
          {view === 'info' && (
            <motion.div 
              key="info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <InfoPage />
            </motion.div>
          )}
          {view === 'works' && (
            <motion.div 
              key="works"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WorksPage onProjectClick={() => setView('project')} />
            </motion.div>
          )}
          {view === 'project' && (
            <motion.div 
              key="project"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProjectPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
