import React, { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Instagram,
  Menu,
  X,
  Mail,
  Droplets,
  Syringe,
  Activity,
  MessageCircle,
  Heart,
  Facebook,
  Navigation,
} from "lucide-react";

/**
 * DR. GEORGE KARKABI - AESTHETIC CLINIC
 * Updates:
 * 1. Phone number updated to 053 724 6693.
 * 2. Year updated to 2025.
 * 3. Instagram link fixed.
 * 4. Facebook link added (placeholder).
 * 5. Waze navigation added.
 */

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // LINKS CONFIGURATION
  const INSTAGRAM_LINK = "https://www.instagram.com/dr.georgekarkabi/";
  const FACEBOOK_LINK = "https://www.facebook.com"; // Replace this with your actual Facebook link
  const WAZE_LINK = "https://waze.com/ul?q=Herzliya+24+Haifa";

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit via Email Client
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Appointment Request from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0APlease contact me to schedule an appointment.`;
    window.location.href = `mailto:clinic@karkabi.com?subject=${subject}&body=${body}`;
  };

  // Submit via WhatsApp (Instant)
  const handleWhatsApp = () => {
    const message = `Hello Dr. Karkabi, I would like to inquire about an appointment. \n\nName: ${formData.name} \nPhone: ${formData.phone}`;
    const encoded = encodeURIComponent(message);
    // Updated number: 0537246693 -> 972537246693
    window.open(`https://wa.me/972537246693?text=${encoded}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-stone-800 font-sans selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden">
      {/* Inject Fonts directly */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Lato', sans-serif; }
        
        .glass-nav {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "glass-nav py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className="text-2xl font-serif italic font-semibold tracking-tighter text-stone-900 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            Dr. Karkabi
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {["Treatments", "The Doctor", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(" ", "-"))
                }
                className="text-sm uppercase tracking-widest text-stone-600 hover:text-rose-900 transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("booking")}
              className="px-6 py-2 bg-stone-900 text-white text-xs uppercase tracking-widest hover:bg-rose-900 transition-colors rounded-full"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-stone-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FDFCF8] flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {["Treatments", "The Doctor", "Booking", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollToSection(item.toLowerCase().replace(" ", "-"))
              }
              className="text-2xl font-serif text-stone-800"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div
            className="mb-6 flex justify-center fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="px-4 py-1 border border-stone-300 rounded-full text-xs uppercase tracking-widest text-stone-500">
              Est. 2025 • Haifa
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 mb-8 leading-[1.1] fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Refined aesthetics <br /> by{" "}
            <span className="italic text-stone-500">Dr. George Karkabi</span>.
          </h1>
          <p
            className="max-w-xl mx-auto text-stone-600 text-lg md:text-xl leading-relaxed mb-12 fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Located in the heart of Haifa. We specialize in precision treatments
            that restore volume, smooth texture, and rejuvenate your natural
            beauty.
          </p>

          <div
            className="flex flex-col md:flex-row items-center justify-center gap-6 fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <button
              onClick={() => scrollToSection("booking")}
              className="w-full md:w-auto px-8 py-4 bg-stone-900 text-white text-sm uppercase tracking-widest hover:bg-rose-900 transition-all transform hover:-translate-y-1 rounded-full shadow-lg"
            >
              Request Booking
            </button>
            <button
              onClick={() => scrollToSection("treatments")}
              className="group flex items-center text-stone-800 text-sm uppercase tracking-widest hover:text-rose-900 transition-colors"
            >
              Our Services{" "}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-400">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </div>
      </header>

      {/* Treatments Section */}
      <section id="treatments" className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
              Curated <br />
              <span className="italic text-stone-400">Treatments</span>
            </h2>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <p className="text-stone-500 max-w-md ml-auto text-right md:text-left">
              We focus on advanced, non-invasive aesthetic medicine. Each
              treatment is tailored to harmonize with your natural features.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Botox */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-6 relative h-[350px]">
                <img
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
                  alt="Botox Treatment Face"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Syringe className="text-rose-900" size={20} />
                <h3 className="text-2xl font-serif group-hover:text-rose-900 transition-colors">
                  Botox & Neuromodulators
                </h3>
              </div>
              <p className="text-stone-500 mb-4 leading-relaxed text-sm">
                The gold standard for smoothing dynamic wrinkles. We use precise
                micro-dosing to relax fine lines while maintaining your natural
                expressions.
              </p>
            </div>

            {/* Card 2: Sculptra */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-6 relative h-[350px]">
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
                  alt="Sculptra Cheek Volume"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="text-rose-900" size={20} />
                <h3 className="text-2xl font-serif group-hover:text-rose-900 transition-colors">
                  Sculptra® Aesthetic
                </h3>
              </div>
              <p className="text-stone-500 mb-4 leading-relaxed text-sm">
                More than a filler—it’s a collagen stimulator. Sculptra
                gradually restores facial volume and structure lost to aging,
                offering results that last up to two years.
              </p>
            </div>

            {/* Card 3: PRP */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-6 relative h-[350px]">
                <img
                  src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800"
                  alt="PRP Plasma Treatment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Droplets className="text-rose-900" size={20} />
                <h3 className="text-2xl font-serif group-hover:text-rose-900 transition-colors">
                  PRP Therapy
                </h3>
              </div>
              <p className="text-stone-500 mb-4 leading-relaxed text-sm">
                Platelet-Rich Plasma (The "Vampire" treatment). We harness your
                body's own growth factors to rejuvenate tired skin, improve
                texture, and stimulate hair growth.
              </p>
            </div>

            {/* Card 4: Vitamin Infusions */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-6 relative h-[350px]">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                  alt="Vitamin IV Infusion"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Activity className="text-rose-900" size={20} />
                <h3 className="text-2xl font-serif group-hover:text-rose-900 transition-colors">
                  Vitamin Infusions
                </h3>
              </div>
              <p className="text-stone-500 mb-4 leading-relaxed text-sm">
                Customized IV drips designed to boost immunity, enhance skin
                radiance from within, and provide deep hydration for a
                revitalized feeling.
              </p>
            </div>

            {/* Card 5: Dermal Fillers (Fixed Image) */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-6 relative h-[350px]">
                <img
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800"
                  alt="Dermal Fillers Lips"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Heart className="text-rose-900" size={20} />
                <h3 className="text-2xl font-serif group-hover:text-rose-900 transition-colors">
                  Dermal Fillers
                </h3>
              </div>
              <p className="text-stone-500 mb-4 leading-relaxed text-sm">
                Hyaluronic acid fillers to restore lost volume in lips, cheeks,
                and jawline. We prioritize symmetry and proportion for an
                undetectable enhancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor / Why Choose Us Section */}
      <section id="the-doctor" className="py-24 bg-[#F5F2F0]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1000"
                  alt="Dr George Karkabi"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-2 mb-2 text-rose-900">
                  <Sparkles size={20} />
                  <span className="font-serif italic font-bold">
                    The Difference
                  </span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  "Aesthetic medicine is 50% science and 50% art. I strive for
                  the perfect balance."
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-rose-900 text-xs font-bold uppercase tracking-widest mb-4 block">
                Meet the Expert
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">
                Why Choose <br />{" "}
                <span className="italic text-stone-500">
                  Dr. George Karkabi?
                </span>
              </h2>
              <div className="space-y-6 text-stone-600 text-lg">
                <p>
                  Choosing an aesthetic practitioner is a decision of trust. Dr.
                  Karkabi is known for his honest approach—he will never
                  recommend a treatment you don't need.
                </p>
                <p>
                  With a clinic centrally located in Haifa, Dr. Karkabi combines
                  medical expertise with an artistic eye. He specializes in the
                  "untouched" look, ensuring that after leaving Herzliya 24, you
                  look refreshed and rested, never frozen or overfilled.
                </p>
                <ul className="space-y-4 mt-6">
                  <li className="flex items-center gap-3">
                    <div className="p-1 bg-stone-200 rounded-full">
                      <Star size={12} />
                    </div>
                    <span className="text-sm uppercase tracking-wide">
                      Personalized Consultations
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 bg-stone-200 rounded-full">
                      <Star size={12} />
                    </div>
                    <span className="text-sm uppercase tracking-wide">
                      Premium Product Lines Only
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 bg-stone-200 rounded-full">
                      <Star size={12} />
                    </div>
                    <span className="text-sm uppercase tracking-wide">
                      Natural Result Philosophy
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Dedicated Booking Section */}
      <section
        id="booking"
        className="py-24 bg-white border-t border-stone-100"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-rose-900 text-xs font-bold uppercase tracking-widest mb-4 block">
              Reservations
            </span>
            <h2 className="text-4xl font-serif text-stone-900">
              Start Your Journey
            </h2>
          </div>

          <div className="bg-[#FDFCF8] p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
            <p className="text-center text-stone-500 mb-8">
              Fill out the form below to request a consultation. You can choose
              to send your request via Email or instantly via WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-b border-stone-300 py-3 focus:outline-none focus:border-rose-900 transition-colors bg-transparent text-lg font-serif"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-b border-stone-300 py-3 focus:outline-none focus:border-rose-900 transition-colors bg-transparent text-lg font-serif"
                    placeholder="053 724 6693"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-b border-stone-300 py-3 focus:outline-none focus:border-rose-900 transition-colors bg-transparent text-lg font-serif"
                  placeholder="email@example.com"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  className="flex-1 py-4 bg-stone-900 text-white text-xs uppercase tracking-widest hover:bg-stone-800 transition-all rounded-full shadow-lg flex justify-center items-center gap-2"
                >
                  <Mail size={16} /> Send via Email
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 py-4 bg-[#25D366] text-white text-xs uppercase tracking-widest hover:bg-[#20bd5a] transition-all rounded-full shadow-lg flex justify-center items-center gap-2"
                >
                  <MessageCircle size={16} /> Send via WhatsApp
                </button>
              </div>
              <p className="text-center text-xs text-stone-400 mt-4">
                WhatsApp will open a chat with Dr. Karkabi instantly.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section (Separate from Booking) */}
      <section id="contact" className="py-24 bg-[#F9F8F6]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-1/3">
              <span className="text-2xl font-serif italic font-bold text-stone-900 block mb-6">
                Dr. Karkabi
              </span>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                Expert aesthetic treatments in a private, tranquil setting.
              </p>

              <div className="space-y-3">
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone-600 hover:text-rose-900 cursor-pointer transition-colors"
                >
                  <Instagram size={20} />
                  <span className="text-lg">@dr.georgekarkabi</span>
                </a>

                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone-600 hover:text-blue-800 cursor-pointer transition-colors"
                >
                  <Facebook size={20} />
                  <span className="text-lg">Dr. George Karkabi</span>
                </a>
              </div>
            </div>

            <div className="md:w-1/3">
              <h4 className="uppercase text-xs font-bold tracking-widest text-stone-900 mb-6">
                Clinic Location
              </h4>
              <div className="flex items-start gap-4 text-stone-600 mb-4">
                <MapPin size={20} className="mt-1 shrink-0 text-rose-900" />
                <p className="text-lg">
                  Herzliya 24
                  <br />
                  Haifa, Israel
                </p>
              </div>
              <a
                href={WAZE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#33CCFF]/10 text-[#0099CC] rounded-full text-xs font-bold hover:bg-[#33CCFF]/20 transition-colors"
              >
                <Navigation size={14} />
                Navigate with Waze
              </a>
            </div>

            <div className="md:w-1/3">
              <h4 className="uppercase text-xs font-bold tracking-widest text-stone-900 mb-6">
                Direct Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-stone-600">
                  <Phone size={20} className="text-rose-900" />
                  <p className="text-lg">053 724 6693</p>
                </div>
                <div className="flex items-center gap-4 text-stone-600">
                  <Mail size={20} className="text-rose-900" />
                  <p className="text-lg">clinic@karkabi.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-8 border-t border-stone-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2025 Dr. George Karkabi Aesthetics. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
