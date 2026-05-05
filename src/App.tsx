import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Trophy, Building2, Users, CheckCircle2, Zap, Shield, Sun, X, Mail, Phone, User, MessageSquare } from "lucide-react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen selection:bg-padel-lime selection:text-padel-charcoal">
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <TargetGroups onOpenModal={openModal} />
      <MobileCourtSpecs />
      <CourtDimensions />
      <Process />
      <Footer />
      
      <AnimatePresence>
        {isModalOpen && <ContactModal onClose={closeModal} />}
      </AnimatePresence>
    </div>
  );
}

function LogoIcon() {
  return (
    <div className="relative w-12 h-12 group cursor-pointer">
      {/* Dynamic Glow */}
      <div className="absolute inset-0 bg-padel-lime/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Event Badge Background */}
      <div className="absolute inset-0 bg-padel-charcoal border-2 border-padel-slate-700 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500 shadow-2xl shadow-padel-lime/5" />
      
      {/* Main Branding Container */}
      <div className="absolute inset-0 bg-padel-charcoal border-2 border-padel-lime rounded-2xl flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform duration-500 overflow-hidden backdrop-blur-sm">
        <div className="relative">
          {/* Neon Padel Ball */}
          <div className="absolute -top-3 -right-3 w-4 h-4 bg-padel-lime rounded-full shadow-[0_0_15px_rgba(163,230,53,1)] z-10 animate-pulse" />
          
          {/* Simplified Professional Racket Icon */}
          <div className="relative z-0">
            {/* Racket Frame */}
            <div className="w-6 h-7 border-[2.5px] border-white rounded-full flex flex-col items-center justify-center p-1 bg-padel-charcoal shadow-inner">
               <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-0.5 h-0.5 bg-padel-lime/60 rounded-full" />
                  <div className="w-0.5 h-0.5 bg-padel-lime/60 rounded-full" />
                  <div className="w-0.5 h-0.5 bg-padel-lime/60 rounded-full" />
                  <div className="w-0.5 h-0.5 bg-padel-lime/60 rounded-full" />
               </div>
            </div>
            {/* Racket Handle */}
            <div className="w-1.5 h-3 bg-white mx-auto rounded-b-sm border-x border-padel-slate-700" />
            
            {/* Action/Speed Lines */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 space-y-1.5">
              <div className="w-2.5 h-0.5 bg-padel-lime/40 rounded-full" />
              <div className="w-1.5 h-0.5 bg-padel-lime/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-padel-slate-700/50 bg-padel-charcoal/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <LogoIcon />
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-tighter uppercase whitespace-nowrap text-white leading-none">
              Padel <span className="text-padel-lime italic">Deutschland</span>
            </span>
            <span className="text-[10px] font-bold text-padel-lime/60 uppercase tracking-[0.4em] leading-none mt-1">Tour 2026</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-padel-slate-400">
          <a href="#cities" className="text-white hover:text-padel-lime transition-colors">Konzepte</a>
          <a href="#tech" className="hover:text-padel-lime transition-colors">Technik</a>
          <a href="#process" className="hover:text-padel-lime transition-colors">Prozess</a>
          <a href="#contact" className="hover:text-padel-lime transition-colors">Kontakt</a>
        </div>
        <button 
          onClick={onOpenModal}
          className="bg-padel-lime hover:bg-padel-lime/90 text-padel-charcoal px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-tight transition-all shadow-lg shadow-padel-lime/20 cursor-pointer"
        >
          Anfrage
        </button>
      </div>
    </nav>
  );
}

function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative pt-48 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-12 gap-12 items-center">
        <div className="col-span-12 lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-padel-lime/10 border border-padel-lime/20 rounded-full text-padel-lime text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-padel-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-padel-lime"></span>
            </span>
            Anfragen für 2026 jetzt offen
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter mb-8 uppercase"
          >
            PADEL <br />
            <span className="text-padel-lime italic">DEUTSCHLAND</span> <br />
            TOUR 2026
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl text-xl text-padel-slate-400 mb-10"
          >
            Der schnellste Sport der Welt als Pop-up-Event. <br className="hidden md:block" />
            Mobil. Unkompliziert. Einzigartig.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button 
              onClick={onOpenModal}
              className="w-full sm:w-auto bg-padel-lime hover:bg-padel-lime/90 text-padel-charcoal h-14 px-10 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-padel-lime/20 uppercase tracking-tight group cursor-pointer"
            >
              Jetzt Termin für 2026 anfragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-5 relative">
          <div className="absolute -inset-4 bg-padel-lime/10 rounded-full blur-3xl"></div>
          <motion.div 
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 2 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative bg-padel-gray border border-padel-slate-700 p-2 rounded-2xl shadow-2xl"
          >
            <div className="aspect-video bg-padel-charcoal rounded-xl border border-padel-slate-700 overflow-hidden relative group">
              <img 
                src="/images/hero.png" 
                alt="Padel Deutschland Tour 2026" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-4 py-2 bg-padel-charcoal/80 border border-padel-slate-700 rounded-lg text-[10px] font-mono text-slate-400">
                  HERO_PROMO_2026.JPG
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [formState, setFormState] = useState("idle"); // idle | sending | success

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  if (formState === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      >
        <div className="absolute inset-0 bg-padel-charcoal/90 backdrop-blur-md" onClick={onClose} />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative bg-padel-gray border border-padel-slate-700 p-12 rounded-[2.5rem] max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-padel-lime rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-padel-lime/20">
            <CheckCircle2 className="w-10 h-10 text-padel-charcoal" />
          </div>
          <h2 className="text-3xl font-black italic mb-4">Vielen Dank!</h2>
          <p className="text-padel-slate-400 mb-8">Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24h bei Ihnen.</p>
          <button 
            onClick={onClose}
            className="w-full bg-white text-padel-charcoal font-bold py-4 rounded-xl hover:bg-padel-lime transition-colors uppercase tracking-widest text-sm"
          >
            Schließen
          </button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 overflow-y-auto"
    >
      <div className="absolute inset-0 bg-padel-charcoal/90 backdrop-blur-md" onClick={onClose} />
      
      <motion.div 
        initial={{ y: 50, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        className="relative bg-padel-gray border border-padel-slate-700 p-8 md:p-12 rounded-[2.5rem] max-w-2xl w-full shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-padel-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-padel-lime text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-padel-lime animate-pulse" />
            Saison 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase">ANFRAGE <span className="text-padel-lime">STARTEN</span></h2>
          <p className="text-padel-slate-400 mt-2">Füllen Sie das Formular aus – wir kümmern uns um den Rest.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-padel-slate-500 uppercase tracking-widest px-1">Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-padel-slate-400" />
                <input 
                  required
                  type="text" 
                  placeholder="Max Mustermann"
                  className="w-full bg-padel-charcoal border border-padel-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:border-padel-lime focus:ring-1 focus:ring-padel-lime outline-none transition-all placeholder:text-padel-slate-700"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-padel-slate-500 uppercase tracking-widest px-1">E-Mail</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-padel-slate-400" />
                <input 
                  required
                  type="email" 
                  placeholder="max@beispiel.de"
                  className="w-full bg-padel-charcoal border border-padel-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:border-padel-lime focus:ring-1 focus:ring-padel-lime outline-none transition-all placeholder:text-padel-slate-700"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-padel-slate-500 uppercase tracking-widest px-1">Telefon (Optional)</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-padel-slate-400" />
                <input 
                  type="tel" 
                  placeholder="+49 123 456..."
                  className="w-full bg-padel-charcoal border border-padel-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:border-padel-lime focus:ring-1 focus:ring-padel-lime outline-none transition-all placeholder:text-padel-slate-700"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-padel-slate-500 uppercase tracking-widest px-1">Art des Events</label>
              <div className="relative">
                <select 
                  required
                  className="w-full bg-padel-charcoal border border-padel-slate-700 rounded-xl py-4 px-4 text-white focus:border-padel-lime focus:ring-1 focus:ring-padel-lime outline-none transition-all appearance-none"
                >
                  <option value="" disabled selected>Bitte wählen...</option>
                  <option value="stadtfest">Stadtfest / Event</option>
                  <option value="verein">Tennis- & Sportverein</option>
                  <option value="unternehmen">Unternehmen / B2B</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-padel-slate-400">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-padel-slate-500 uppercase tracking-widest px-1">Ihre Nachricht</label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-padel-slate-400" />
              <textarea 
                rows={4}
                placeholder="Teilen Sie uns Details zu Ihrem Vorhaben mit (Zeitraum, Ort, etc.)..."
                className="w-full bg-padel-charcoal border border-padel-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:border-padel-lime focus:ring-1 focus:ring-padel-lime outline-none transition-all placeholder:text-padel-slate-700 resize-none"
              ></textarea>
            </div>
          </div>

          <button 
            type="submit"
            disabled={formState === "sending"}
            className="w-full bg-padel-lime text-padel-charcoal font-black py-5 rounded-xl hover:brightness-110 transition-all uppercase tracking-tight text-lg shadow-xl shadow-padel-lime/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {formState === "sending" ? (
              <span className="w-6 h-6 border-2 border-padel-charcoal border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Anfrage jetzt absenden
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          
          <p className="text-[9px] text-padel-slate-700 text-center uppercase tracking-widest font-mono">
            Mit Absenden akzeptieren Sie unsere Datenschutzbestimmungen.
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}

function TargetGroups({ onOpenModal }: { onOpenModal: () => void }) {
  const groups = [
    {
      id: "cities",
      icon: <Building2 className="w-10 h-10" />,
      tag: "Kommunen",
      title: "Für Städte & Kommunen",
      subtitle: "Das Highlight für Ihren Marktplatz.",
      benefits: [
        "Belebung der Innenstadt",
        "Instagram-Hotspot",
        "Sportförderung ohne Baustelle"
      ]
    },
    {
      id: "clubs",
      icon: <Trophy className="w-10 h-10 text-padel-lime" />,
      tag: "Sportvereine",
      title: "Für Tennis- & Sportvereine",
      subtitle: "Testen Sie die Zukunft – ohne Risiko.",
      benefits: [
        "Gewinnen Sie Neumitglieder",
        "4 Wochen Probemonat",
        "Wir stellen den Court"
      ]
    },
    {
      id: "business",
      icon: <Users className="w-10 h-10" />,
      tag: "Unternehmen",
      title: "Für Unternehmen",
      subtitle: "Teambuilding auf dem nächsten Level.",
      benefits: [
        "Sommerfeste & Firmen-Cups",
        "Direkt auf dem Betriebsgelände",
        "Incentives mit Wow-Effekt"
      ]
    }
  ];

  return (
    <section id="cities" className="py-24">
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 italic tracking-tight">FÜR JEDEN DAS <span className="text-padel-lime uppercase">PASSENDE FORMAT.</span></h2>
          <p className="text-padel-slate-400 max-w-xl text-lg">Wir adaptieren unser Konzept an Ihre individuellen Bedürfnisse.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((group, idx) => (
            <motion.div 
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-padel-gray/40 border border-padel-slate-700 rounded-[2rem] flex flex-col justify-between hover:border-padel-lime/30 transition-all group"
            >
              <div>
                <div className="mb-4 text-padel-lime uppercase text-xs font-bold tracking-widest">
                  {group.tag}
                </div>
                <h3 className="text-2xl font-bold mb-4">{group.subtitle}</h3>
                <p className="text-padel-slate-400 text-sm leading-relaxed mb-8">{group.title}.</p>
                
                <ul className="space-y-4 mb-12">
                  {group.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-padel-lime flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={onOpenModal}
                className="w-full py-4 rounded-xl border border-padel-slate-700 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-padel-charcoal transition-all cursor-pointer"
              >
                Exposé anfordern
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileCourtSpecs() {
  const specs = [
    {
      title: "Patentiertes System",
      desc: "Hochmoderne mobile Struktur – führend in Stabilität und Flexibilität für temporäre Einsätze.",
      icon: <Shield className="w-5 h-5 text-padel-lime" />
    },
    {
      title: "Profi-Kunstrasen",
      desc: "Gekräuselter Monofilament-Rasen für perfekten Grip und maximale Gelenkschonung.",
      icon: <Sun className="w-5 h-5 text-padel-lime" />
    },
    {
      title: "Sicherheitsglas",
      desc: "12mm starkes, wärmebehandeltes Sicherheitsglas für optimales und berechenbares Absprungverhalten.",
      icon: <Shield className="w-5 h-5 text-padel-lime" />
    },
    {
      title: "LED Beleuchtung",
      desc: "Professionelle 200W LED-Strahler für eine schattenfreie Ausleuchtung bis in die späten Abendstunden.",
      icon: <Zap className="w-5 h-5 text-padel-lime" />
    },
    {
      title: "Schwergewicht-Basis",
      desc: "Vollständig ballastiertes System. Maximale Standfestigkeit ohne Bohrungen oder Bodenankern.",
      icon: <CheckCircle2 className="w-5 h-5 text-padel-lime" />
    },
    {
      title: "Premium Finish",
      desc: "Vollverzinkte Stahlkonstruktion mit Pulverbeschichtung für absolute Wetterbeständigkeit.",
      icon: <Shield className="w-5 h-5 text-padel-lime" />
    }
  ];

  return (
    <section id="tech" className="py-24 bg-padel-gray/20">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-padel-slate-400">
              Technisches Datenblatt
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight uppercase">DIE <span className="text-padel-lime italic">HARDWARE.</span><br />OHNE KOMPROMISSE.</h2>
            <p className="text-padel-slate-400 text-lg mb-12 italic">
              Wir setzen auf ein patentiertes mobiles System, das keine baulichen Maßnahmen erfordert und dennoch die Spielqualität eines permanenten Turnierplatzes bietet.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {specs.map((spec, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-padel-charcoal border border-padel-slate-700 rounded-lg group-hover:border-padel-lime transition-colors">
                      {spec.icon}
                    </div>
                    <h4 className="font-bold text-base text-white tracking-tight">{spec.title}</h4>
                  </div>
                  <p className="text-padel-slate-400 text-sm leading-relaxed">{spec.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-padel-lime/5 blur-3xl rounded-full" />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] bg-padel-charcoal border border-padel-slate-700 rounded-[3rem] overflow-hidden group"
            >
              <img 
                src="/images/security.png" 
                alt="Padel Sicherheit & Technik" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-padel-charcoal via-transparent to-transparent" />
              <div className="absolute top-8 right-8">
                <div className="bg-padel-lime text-padel-charcoal px-4 py-2 rounded-full font-black text-xs uppercase tracking-tighter shadow-lg shadow-padel-lime/20">
                  Premium Technik
                </div>
              </div>
              <div className="absolute bottom-12 left-12 right-12">
                <div className="p-6 bg-padel-charcoal/80 backdrop-blur-xl border border-white/5 rounded-2xl">
                  <p className="text-[10px] font-bold text-padel-lime uppercase tracking-widest mb-2">Sicherheit</p>
                  <p className="text-white text-sm font-medium">Geprüfte Standsicherheit & Windlast-Zulassung für maximale Sicherheit bei jedem Event.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourtDimensions() {
  return (
    <section className="py-32 relative overflow-hidden bg-padel-charcoal">
      {/* Decorative Grid Background for technical feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#a3e635_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Technical Drawing & Image Side */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 border border-padel-lime/20 rounded-[2.5rem] bg-padel-gray/10 backdrop-blur-sm"
            >
              <div className="absolute top-4 left-6 text-[10px] font-mono text-padel-lime/40 uppercase tracking-widest">
                Technical Blueprint
              </div>
              
              <div className="aspect-video relative rounded-2xl overflow-hidden mt-8 mb-6 shadow-2xl">
                <img 
                  src="/images/court-dimensions.png" 
                  alt="Maße mobiler Padel Court" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-padel-charcoal/50 rounded-xl border border-padel-slate-700/50">
                  <p className="text-[10px] text-padel-slate-500 uppercase font-black mb-1 tracking-widest">Breite Außen</p>
                  <p className="text-xl font-display font-black text-white italic">11,45 m</p>
                </div>
                <div className="p-4 bg-padel-charcoal/50 rounded-xl border border-padel-slate-700/50">
                  <p className="text-[10px] text-padel-slate-500 uppercase font-black mb-1 tracking-widest">Länge Außen</p>
                  <p className="text-xl font-display font-black text-white italic">20,96 m</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text Info Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-12 tracking-tight uppercase leading-none">
              MAẞE DES <br />
              <span className="text-padel-lime italic">MOBILEN PLATZES</span>
            </h2>

            <div className="space-y-12">
              {/* Outdoor Section */}
              <div className="relative pl-8 border-l-4 border-padel-lime">
                <h3 className="text-2xl font-black uppercase italic mb-6 tracking-tighter">Außenbereich <span className="text-padel-lime text-sm ml-2 font-black">(Outdoor)</span></h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 group">
                    <span className="w-2 h-2 bg-padel-lime rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-padel-slate-400 font-medium">12 Gegengewichtskästen aus Stahl an den Seiten</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-padel-lime font-black uppercase tracking-widest">Innenmaß</span>
                      <span className="text-2xl font-display font-bold text-white">20 m x 10 m</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-padel-lime/60 font-black uppercase tracking-widest">Außenmaß</span>
                      <span className="text-2xl font-display font-bold text-padel-slate-400">20,96 m x 11,45 m</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Indoor Section */}
              <div className="relative pl-8 border-l-4 border-padel-slate-700">
                <h3 className="text-2xl font-black uppercase italic mb-6 tracking-tighter text-padel-slate-400">Innenbereich <span className="text-padel-slate-500 text-sm ml-2 font-black">(Indoor/Partial)</span></h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 group">
                    <span className="w-2 h-2 bg-padel-slate-700 rounded-full" />
                    <span className="text-padel-slate-400 font-medium opacity-60">4 Gegengewichtskästen aus Stahl an den Seiten</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-padel-slate-500 font-black uppercase tracking-widest">Innenmaß</span>
                      <span className="text-xl font-display font-bold text-padel-slate-400">20 m x 10 m</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-padel-slate-600 font-black uppercase tracking-widest">Außenmaß</span>
                      <span className="text-xl font-display font-bold text-padel-slate-500">20,67 m x 11,45 m</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { title: "Digitaler Check", desc: "Wir prüfen Statik & Bodenbeschaffenheit vorab digital – unkompliziert und punktgenau." },
    { title: "24h Aufbau", desc: "Unsere mobile Logistik garantiert einen Aufbau innerhalb eines einzigen Arbeitstages." },
    { title: "Action & Match", desc: "Sofortiger Spielbetrieb, spannende Turniere oder professionelles Coaching vor Ort." },
    { title: "Sauberer Abbau", desc: "Rückstandslose Demontage – wir hinterlassen den Standort so sauber, wie wir ihn vorgefunden haben." }
  ];

  return (
    <section id="process" className="py-40 bg-padel-charcoal border-t border-padel-slate-700/50">
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em] mb-6">Der Prozess</h2>
          <p className="text-3xl md:text-5xl font-display font-black text-white italic leading-tight">MINIMALER AUFWAND FÜR <br /> <span className="text-padel-lime uppercase">MAXIMALEN ERFOLG.</span></p>
        </div>

        <div className="relative">
          {/* Connecting Line - Centered on 56px (w-14) circle: top is 28px (1.75rem) */}
          <div className="hidden md:block absolute top-[1.75rem] left-0 w-full h-[2px] bg-padel-slate-700/30" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-24">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative z-10 flex flex-col items-center md:items-start group"
              >
                <div className="w-14 h-14 rounded-full bg-padel-charcoal border-2 border-padel-lime text-xl flex items-center justify-center font-black mb-8 ring-12 ring-padel-charcoal text-padel-lime transition-transform group-hover:scale-110 duration-500">
                  {idx + 1}
                </div>
                <div className="text-2xl font-black uppercase tracking-tight text-white mb-4 italic leading-none">{step.title}</div>
                <p className="text-padel-slate-400 text-base leading-relaxed text-center md:text-left font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-padel-charcoal border-t border-padel-slate-700/50">
      {/* High-Impact Tech Bar with Grid Background */}
      <div id="tech" className="relative group/tech overflow-hidden border-b border-padel-slate-700/50">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-padel-lime/50 to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-12 py-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                { icon: <Shield className="w-5 h-5" />, label: "Keine Bodenverankerung", detail: "Indoor & Outdoor" },
                { icon: <CheckCircle2 className="w-5 h-5" />, label: "TÜV-Zertifiziert", detail: "Geprüfte Statik" },
                { icon: <Sun className="w-5 h-5" />, label: "Wetterfest & Flutlicht", detail: "24/7 Betrieb" }
              ].map((item, i) => (
                <div key={i} className="group/item relative">
                  <div className="absolute inset-0 bg-padel-lime/5 blur-xl opacity-0 group-hover/item:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative px-6 py-5 bg-padel-charcoal/80 backdrop-blur-sm border border-padel-slate-700 rounded-2xl flex items-center gap-5 hover:border-padel-lime/40 transition-all duration-500 hover:-translate-y-1">
                    <div className="p-2.5 bg-padel-lime/5 border border-padel-lime/20 rounded-xl text-padel-lime group-hover/item:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[12px] font-black text-white uppercase tracking-[0.1em] mb-0.5">{item.label}</p>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-padel-lime animate-pulse" />
                        <p className="text-[10px] text-padel-slate-400 font-bold uppercase tracking-widest">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center lg:text-right">
              <span className="text-[10px] text-padel-slate-500 font-mono uppercase tracking-[0.4em] block mb-3">System Specification</span>
              <h4 className="text-md md:text-lg text-white font-display font-black uppercase italic tracking-tight flex items-center justify-center lg:justify-end gap-3">
                <span className="text-padel-lime font-sans">DEUTSCHLAND</span> TOUR 2026
              </h4>
              <p className="text-[9px] text-padel-slate-600 font-mono uppercase tracking-widest mt-1">Advanced Mobile Infrastructure Solutions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-20 flex flex-col md:flex-row justify-between items-start gap-12">
        <div id="contact">
          <div className="flex items-center gap-5 mb-10">
            <LogoIcon />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tighter uppercase whitespace-nowrap text-white leading-none italic">
                Padel <span className="text-padel-lime">Deutschland</span>
              </span>
              <span className="text-[9px] font-bold text-padel-lime/60 uppercase tracking-[0.3em] leading-none mt-1">Tour 2026 Official Service</span>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-padel-slate-400 hover:text-white transition-colors cursor-pointer text-sm font-medium">hallo@padeltour26.de</p>
            <p className="text-padel-slate-400 hover:text-white transition-colors cursor-pointer text-sm font-medium">+49 123 456789</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="text-[10px] font-bold text-padel-slate-700 uppercase tracking-[0.2em] mb-8">Social</p>
            <ul className="text-xs text-padel-slate-400 space-y-4 uppercase tracking-widest">
              <li className="hover:text-white cursor-pointer transition-colors font-bold">Instagram</li>
              <li className="hover:text-white cursor-pointer transition-colors font-bold">LinkedIn</li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold text-padel-slate-700 uppercase tracking-[0.2em] mb-8">Rechtliches</p>
            <ul className="text-xs text-padel-slate-400 space-y-4 uppercase tracking-widest">
              <li className="hover:text-white cursor-pointer transition-colors">Impressum</li>
              <li className="text-[9px] opacity-40">© 2026 Padel Deutschland Tour</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
