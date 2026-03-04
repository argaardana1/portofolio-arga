"use client";

import { useState } from "react";
import { 
  Menu, X, Download, Mail, ChevronRight, 
  MapPin, Pin, Clock, Send
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("prestasi");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  
  // State untuk Komentar (Simulasi UI)
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Admin",
      message: "Terima kasih telah berkunjung! Jika Anda memiliki pertanyaan, jangan ragu untuk mengirim pesan langsung kepada saya di IG @arga_ardanaa",
      time: "10:00 AM - 04 Mar 2026",
      isPinned: true
    }
  ]);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    // Buka Gmail Otomatis
    window.location.href = `mailto:argaardana007@gmail.com?subject=Pesan dari ${name} (Portofolio)&body=Dari: ${name} (${email})%0D%0A%0D%0A${message}`;
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newComment = {
      id: Date.now(),
      name: formData.get("name") as string,
      message: formData.get("message") as string,
      time: new Date().toLocaleString('id-ID', { hour: '2-digit', minute:'2-digit', day: '2-digit', month: 'short', year: 'numeric' }),
      isPinned: false
    };
    setComments([...comments, newComment]);
    e.currentTarget.reset();
  };

  // --- DATA (Ganti dengan data asli Anda) ---
  const organizations = [
    { name: "PRAMUKA", logo: "/logo-pramuka.png" }, // Taruh file gambar di folder public
    { name: "OSIS", logo: "/logo-osis.png" },
    { name: "Rohis", logo: "/logo-rohis.png" },
  ];

  const showcaseData = [
    {
      type: "prestasi",
      title: "Juara 1 Web Design",
      issuer: "Universitas Indonesia",
      desc: "Memenangkan kompetisi desain web tingkat nasional dengan fokus pada UI/UX dan aksesibilitas.",
      img: "/prestasi-1.jpg"
    },
    {
      type: "sertifikat",
      title: "Belajar Dasar AI",
      issuer: "Dicoding Indonesia",
      desc: "Sertifikat ini menunjukkan pemahaman mendasar tentang konsep Artificial Intelligence, Machine Learning, dan bagaimana AI mentransformasi industri modern.",
      img: "/sertifikat-dicoding.jpg"
    }
  ];

  const projects = [
    {
      title: "E-Commerce AI Assistant",
      desc: "Membangun sistem chatbot AI untuk platform e-commerce guna meningkatkan retensi pelanggan.",
      img: "/project-1.jpg",
      category: "Web App"
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="font-bold text-xl text-blue-700 tracking-tight">Arga.</span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Project', 'Blog', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-b border-slate-100 py-4 px-4 flex flex-col space-y-4">
            {['Home', 'About', 'Project', 'Blog', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-slate-700 hover:text-blue-600">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-32">
        
        {/* HERO SECTION */}
        <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-10">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Welcome portofolio <br/>
              <span className="text-blue-600">Arga Ardana</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mx-auto md:mx-0">
              Professional Web Developer & AI Enthusiast. Membangun solusi digital yang modern dan efisien.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                <Mail size={18} /> Contact Me
              </a>
              <a href="/cv-arga.pdf" download className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-800 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition shadow-sm flex items-center justify-center gap-2">
                <Download size={18} /> Download CV
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-[400px] md:h-[400px] bg-slate-200 rounded-3xl rotate-3 shadow-2xl overflow-hidden relative">
              {/* Taruh foto Anda di public/foto-utama.jpg */}
              <img src="/foto-utama.jpg" alt="Arga Ardana" className="w-full h-full object-cover -rotate-3 scale-110" />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="space-y-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-10">
            <img src="/foto-profil.jpg" alt="Profile" className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white" />
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-900">Tentang Saya</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Halo, saya Arga. Saya memiliki ketertarikan mendalam pada teknologi dan pengembangan web. Saya selalu berusaha menggabungkan kreativitas dengan logika untuk menciptakan produk yang bermanfaat.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl italic text-slate-700 font-medium text-lg">
                "Leveraging AI as a professional tool, not a replacement."
              </div>
            </div>
          </div>

          {/* Organisasi */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800">Pengalaman Organisasi</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {organizations.map((org, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-4 rounded-2xl flex items-center gap-4 hover:shadow-md transition cursor-pointer">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl p-2 border border-slate-100">
                    <img src={org.logo} alt={org.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-semibold text-slate-700">{org.name}</span>
                </div>
              ))}
            </div>
            <button className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">
              Show All <ChevronRight size={16} />
            </button>
          </div>
        </section>

        {/* SHOWCASE SECTION (Sertifikat & Prestasi) */}
        <section className="space-y-8">
          <div className="flex bg-slate-200 p-1.5 rounded-2xl w-fit mx-auto md:mx-0">
            {['prestasi', 'sertifikat'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 rounded-xl font-semibold text-sm capitalize transition ${activeTab === tab ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {showcaseData.filter(d => d.type === activeTab).map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition cursor-pointer group flex flex-col"
              >
                <div className="h-48 bg-slate-200 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{item.type}</span>
                  <h4 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h4>
                  <button className="mt-auto w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition border border-slate-200">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="project" className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition group">
                <div className="h-64 rounded-2xl bg-slate-200 overflow-hidden mb-6">
                   <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="px-2 pb-2">
                  <span className="text-blue-600 font-semibold text-sm mb-2 block">{proj.category}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{proj.title}</h3>
                  <p className="text-slate-600 line-clamp-2">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMMENT SECTION */}
        <section id="blog" className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Tinggalkan Pesan</h2>
            <p className="text-slate-500 text-sm">Beritahu saya pendapat Anda tentang website ini.</p>
          </div>

          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-slate-200 flex-shrink-0" />
               <input type="text" name="name" required placeholder="Nama Anda" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition" />
            </div>
            <textarea name="message" required placeholder="Tulis pesan Anda di sini..." rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition resize-none"></textarea>
            <div className="flex justify-end">
              <button type="submit" className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-blue-600 transition flex items-center gap-2">
                <Send size={16} /> Kirim Komentar
              </button>
            </div>
          </form>

          <div className="border-t border-slate-100 pt-8 space-y-6">
            <h3 className="font-semibold text-slate-800">{comments.length} Komentar</h3>
            <div className="space-y-6">
              {comments.map((comment, idx) => (
                <div key={comment.id} className={`flex gap-4 p-4 rounded-2xl ${comment.isPinned ? 'bg-blue-50 border border-blue-100' : 'bg-slate-50 border border-slate-100'}`}>
                   <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {comment.name.charAt(0)}
                   </div>
                   <div>
                     <div className="flex items-center gap-2 mb-1">
                       <span className="font-bold text-slate-900 text-sm">{comment.name}</span>
                       {comment.isPinned && <Pin size={12} className="text-blue-600" />}
                       <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={10} /> {comment.time}</span>
                     </div>
                     <p className="text-slate-700 text-sm leading-relaxed">{comment.message}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">Mari Berkolaborasi</h2>
          <p className="text-slate-600">Punya ide proyek atau pertanyaan? Jangan ragu untuk menghubungi saya melalui form di bawah ini.</p>
          
          <form onSubmit={handleContactSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4 text-left">
             <div className="grid md:grid-cols-2 gap-4">
               <div className="space-y-1.5">
                 <label className="text-sm font-semibold text-slate-700 pl-1">Nama Lengkap</label>
                 <input type="text" name="name" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition" />
               </div>
               <div className="space-y-1.5">
                 <label className="text-sm font-semibold text-slate-700 pl-1">Email Anda</label>
                 <input type="email" name="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition" />
               </div>
             </div>
             <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 pl-1">Pesan</label>
                <textarea name="message" required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition resize-none"></textarea>
             </div>
             <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 text-lg">
                Kirim Pesan via Email
             </button>
          </form>
        </section>

      </main>

      {/* MODAL POPUP (Sertifikat/Prestasi) */}
      {selectedItem && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200 relative">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition z-10"
            >
              <X size={16} />
            </button>
            <div className="h-64 bg-slate-100">
               <img src={selectedItem.img} alt={selectedItem.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 space-y-4">
              <span className="font-semibold text-blue-600 text-sm block">{selectedItem.issuer}</span>
              <h3 className="text-2xl font-bold text-slate-900 leading-tight">{selectedItem.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{selectedItem.desc}</p>
              <div className="pt-4">
                <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
                  <Download size={18} /> Download {selectedItem.type}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
      }
