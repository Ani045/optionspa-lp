import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Users, 
  Award, 
  Shield, 
  Clock, 
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Heart,
  Microscope,
  Stethoscope,
  Activity,
  Brain,
  Eye,
  Zap,
  Target,
  CheckCircle,
  MessageCircle,
  TestTube
} from 'lucide-react';


function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState({ ultrasound: 0, labTests: 0, patients: 0 });

  // Hero slides data
  const heroSlides = [
    {
      title: "Get All Routine and Specialized Ultrasound Scans at the Most Affordable Price",
      subtitle: "State-of-the-art diagnostic equipments with cutting-edge technology",
      highlight: "Scans done by expert radiologists with MD Radio-diagnosis from premium institutes like Safdarjung Hospital , New Delhi and Fetal Medicine Foundation(FMF) , London (UK) certification",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Book All Lab Tests Easily from the Comfort of Your Home",
      subtitle: "Comprehensive diagnostic health packages at affordable prices for you and your family",
      highlight: "1 Lakh+ Ultrasound scans | 2 Lakh+ Lab tests | 3 Lakh+ Satisfied Patients",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    
    {
      title: "Comprehensive Health Packages Designed for Your Family's Wellbeing",
      subtitle: "Preventive health check-ups with detailed reporting and analysis",
      highlight: "Trusted diagnostic center since 2015",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  // Health packages data
  const healthPackages = [
    { name: "DIABETES SCREENING", price: 500, mrp: 700, tests: "FBS, PPBS, HbA1c" },
    { name: "ANC PROFILE (PREGNANCY)", price: 1500, mrp: 2250, tests: "Complete Blood Count, Blood Sugar, Urine Analysis" },
    { name: "FEVER PROFILE", price: 1100, mrp: 1550, tests: "CBC, ESR, Malaria, Typhoid, Dengue" },
    { name: "BASIC EXECUTIVE", price: 2500, mrp: 3550, tests: "Complete Health Checkup with 25+ Parameters" },
    { name: "ORTHO-NEURO", price: 3700, mrp: 5300, tests: "Bone & Neurological Health Assessment" },
    { name: "CARDIO DIABETES", price: 4100, mrp: 6050, tests: "Heart & Diabetes Comprehensive Panel" },
    { name: "ADVANCE EXECUTIVE", price: 5100, mrp: 6750, tests: "Premium Health Package with 50+ Tests" }
  ];

  // Services data
  const services = [
    { name: "Ultrasound", icon: <Activity className="w-8 h-8" />, description: "Advanced ultrasound imaging" },
    { name: "Digital X-ray", icon: <Zap className="w-8 h-8" />, description: "High-quality digital radiography" },
    { name: "Colour Doppler", icon: <Heart className="w-8 h-8" />, description: "Blood flow assessment" },
    { name: "ECG", icon: <Activity className="w-8 h-8" />, description: "Electrocardiogram testing" },
    { name: "TMT", icon: <Target className="w-8 h-8" />, description: "Treadmill stress testing" },
    { name: "EEG", icon: <Brain className="w-8 h-8" />, description: "Brain activity monitoring" },
    { name: "NCV", icon: <Zap className="w-8 h-8" />, description: "Nerve conduction velocity" },
    { name: "EMG", icon: <Activity className="w-8 h-8" />, description: "Electromyography testing" },
    { name: "Audiometry", icon: <Eye className="w-8 h-8" />, description: "Hearing assessment" },
    { name: "PFT (Spirometry)", icon: <Activity className="w-8 h-8" />, description: "Pulmonary function test" },
    { name: "Uroflowmetry", icon: <Target className="w-8 h-8" />, description: "Urinary flow assessment" },
    { name: "IVP", icon: <Microscope className="w-8 h-8" />, description: "Intravenous pyelography" },
    { name: "HSG", icon: <Heart className="w-8 h-8" />, description: "Hysterosalpingography" },
    { name: "FNAC/Cytopathology", icon: <Microscope className="w-8 h-8" />, description: "Fine needle aspiration" },
    { name: "Path Lab Tests", icon: <Stethoscope className="w-8 h-8" />, description: "Comprehensive lab testing" },
    { name: "Health Packages", icon: <Shield className="w-8 h-8" />, description: "Complete health checkups" }
  ];

  // Team data
  const team = [
    { name: "DR. INDRAJEET KUNDU", qualification: "MBBS, MD (Radio-diagnosis)", experience: "10+ years", image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { name: "DR. ANAM SINGH", qualification: "MBBS, MD (Pathology)", experience: "7+ years", image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { name: "DR. VIKAS GOYAL", qualification: "Senior Consultant Radiologist", experience: "20+ years", image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { name: "DR. AMIT BANSAL", qualification: "MBBS, PGDHM, Family Physician", experience: "18+ years", image: "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=300" }
  ];

  // Testimonials data
  const testimonials = [
    { name: "Lekhraj Bairwa", rating: 5, text: "Excellent service and very professional staff. The ultrasound was done with great care and the report was detailed." },
    { name: "Virendra Meena", rating: 5, text: "Best diagnostic center in Gurgaon. Affordable prices and accurate results. Highly recommended!" },
    { name: "Pankaj Yadav", rating: 5, text: "Great experience with home collection service. Very convenient and the staff was very polite." },
    { name: "Vinay Gowda", rating: 5, text: "Dr. Kundu is very experienced and explains everything clearly. The facility is well-maintained." },
    { name: "Suman Naiya", rating: 5, text: "Prompt service and reasonable pricing. The health package was comprehensive and value for money." },
    { name: "Manas Mahapatra", rating: 5, text: "Excellent diagnostic services. The team is professional and the equipment is modern." },
    { name: "Vyomika Teckchandani", rating: 5, text: "Very satisfied with the pregnancy ultrasound service. The doctor was very caring and professional." }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What documents are needed for pregnancy ultrasounds?",
      answer: "For pregnancy ultrasounds, you need to bring your ID proof, previous medical reports if any, and doctor's prescription. We also provide Form F for official documentation."
    },
    {
      question: "What is Form F?",
      answer: "Form F is an official document required for pregnancy ultrasounds as per government regulations. It's provided by our center and includes all necessary declarations and medical information."
    },
    {
      question: "Is Ultrasound safe?",
      answer: "Yes, ultrasound is completely safe for both mother and baby. It uses sound waves and doesn't involve any radiation. Our equipment meets international safety standards."
    },
    {
      question: "How often should ultrasound be done during pregnancy?",
      answer: "Typically, 2-3 ultrasounds are recommended during pregnancy - one in each trimester. However, your doctor may recommend additional scans based on your specific condition."
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    const animateCounters = () => {
      const targets = { ultrasound: 200000, labTests: 400000, patients: 600000 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounters({
          ultrasound: Math.floor(targets.ultrasound * progress),
          labTests: Math.floor(targets.labTests * progress),
          patients: Math.floor(targets.patients * progress)
        });
        
        if (step >= steps) {
          clearInterval(interval);
          setCounters(targets);
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    });

    const trustSection = document.getElementById('trust-indicators');
    if (trustSection) {
      observer.observe(trustSection);
    }

    return () => observer.disconnect();
  }, []);

  const BookingForm = () => (
    <div className="bg-transparent backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-slate-200">
      <h3 className="text-xl font-bold text-slate-800 mb-6">Book Your Test</h3>
      <form className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-medium"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-medium"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-medium"
        />
        <select className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-medium">
          <option>Select Investigation</option>
          <option>Ultrasound</option>
          <option>Lab Tests</option>
          <option>Health Package</option>
          <option>X-Ray</option>
        </select>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-4 rounded-2xl hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
        >
          Book Now
        </button>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Top Contact Strip */}
      {/* <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <a href="tel:8744002727" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Sector 82 , Gurugram: 8744002727</span>
            </a>
            <a href="tel:7291071742" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Manesar: 7291071742</span>
            </a>
            <a href="tel:9971108920" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Old Gurugram: 9971108920</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:prathamultrasound@gmail.com" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="font-medium">prathamultrasound@gmail.com</span>
            </a>
          </div>
        </div>
      </div> */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden md:flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <a href="tel:8744002727" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Sector 82 , Gurugram: 8744002727</span>
            </a>
            <a href="tel:7291071742" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Manesar: 7291071742</span>
            </a>
            <a href="tel:9971108920" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Old Gurugram: 9971108920</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:prathamultrasound@gmail.com" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="font-medium">prathamultrasound@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Mobile Layout - Visible only on mobile */}
        <div className="md:hidden text-xs">
          {/* First row - Primary contact */}
          <div className="flex justify-between items-center mb-2">
            <a href="tel:8744002727" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-3 h-3" />
              <span className="font-medium">Sector 82: 8744002727</span>
            </a>
            <a href="mailto:prathamultrasound@gmail.com" className="flex items-center space-x-1 hover:text-cyan-300 transition-colors">
              <Mail className="w-3 h-3" />
              <span className="font-medium">Email</span>
            </a>
          </div>
          
          {/* Second row - Other contacts */}
          <div className="flex justify-between items-center text-slate-300">
            <a href="tel:7291071742" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-3 h-3" />
              <span>Manesar: 7291071742</span>
            </a>
            <a href="tel:9971108920" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-3 h-3" />
              <span>Old Gurugram: 9971108920</span>
            </a>
          </div>
        </div>

      </div>
    </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img 
                src="/WhatsApp Image 2025-07-08 at 13.37.19_ce68d005.jpg" 
                alt="Pratham Diagnostic Logo" 
                className="h-14 w-auto"
              />
              {/* <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">PRATHAM DIAGNOSTIC</h1>
                <p className="text-xs text-slate-600 font-medium tracking-wide">AUTHENTIC - DEDICATED - MEANINGFUL</p>
              </div> */}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#services" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#packages" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold relative group">
                Packages
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#team" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold relative group">
                Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-3 rounded-2xl hover:from-pink-600 hover:to-rose-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Test
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 rounded-2xl hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-cyan-600" /> : <Menu className="w-6 h-6 text-cyan-600" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-slate-200 bg-white/95 backdrop-blur-sm rounded-b-2xl">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold">Home</a>
                <a href="#about" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold">About</a>
                <a href="#services" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold">Services</a>
                <a href="#packages" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold">Packages</a>
                <a href="#team" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold">Team</a>
                <a href="#contact" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold">Contact</a>
                <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-3 rounded-2xl hover:from-pink-600 hover:to-rose-700 transition-all duration-300 font-bold w-fit">
                  Book Test
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex h-full">
              {/* Left Content */}
              <div className="flex-1 bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200 flex items-center">
                <div className="max-w-2xl mx-auto px-8">
                  <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-slate-700 mb-10 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl mb-10 border border-slate-200 shadow-xl">
                    <p className="text-cyan-800 font-bold text-lg">
                      {slide.highlight}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1 relative">
                <img
                  src={slide.image}
                  alt="Medical Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-8 right-8 w-96">
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-600 w-10' : 'bg-white/60 w-3'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-all shadow-xl hover:shadow-2xl"
        >
          <ChevronLeft className="w-6 h-6 text-cyan-600" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-all shadow-xl hover:shadow-2xl"
        >
          <ChevronRight className="w-6 h-6 text-cyan-600" />
        </button>
      </section>

      {/* Trust Indicators */}
     
      <section id="trust-indicators" className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 bg-opacity-20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            📊 Trusted Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-purple-600">Impact</span> in Numbers
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering healthcare excellence across Gurgaon and Manesar
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center shadow-lg">
            <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold mb-2 text-white">
              {counters.ultrasound.toLocaleString()}+
            </div>
            <div className="text-blue-100 font-medium">Ultrasound Scans</div>
            <div className="text-blue-200 text-sm mt-1">Precision in imaging services</div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-center shadow-lg">
            <div className="bg-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TestTube className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold mb-2 text-white">
              {counters.labTests.toLocaleString()}+
            </div>
            <div className="text-purple-100 font-medium">Lab Tests</div>
            <div className="text-purple-200 text-sm mt-1">Accurate diagnostic reports</div>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-center shadow-lg">
            <div className="bg-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold mb-2 text-white">
              {counters.patients.toLocaleString()}+
            </div>
            <div className="text-teal-100 font-medium">Satisfied Patients</div>
            <div className="text-teal-200 text-sm mt-1">Happy families served</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center items-center space-x-6 flex-wrap gap-4">
          <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full border border-white border-opacity-20">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="font-medium text-white">Trusted by Leading Hospitals</span>
          </div>
          <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full border border-white border-opacity-20">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="font-medium text-white">ISO Certified Quality</span>
          </div>
          <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full border border-white border-opacity-20">
            <Award className="w-5 h-5 text-green-400" />
            <span className="font-medium text-white">International Standards</span>
          </div>
        </div>
      </div>
    </section>


      {/* About Us */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
  <div className="max-w-6xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
        🏥 About Us
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        About <span className="text-blue-600">Pratham</span> <span className="text-purple-600">Diagnostic</span> and Imaging Centre
      </h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
        Redefining diagnostic center with multiple locations in Gurugram and Manesar, 
        providing comprehensive medical imaging and laboratory services since 2015.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div>
        <img
          src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Medical Equipment"
          className="rounded-2xl shadow-lg w-full"
        />
      </div>

      {/* Content */}
      <div className="space-y-8">
        {/* Services Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Services Include:</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-xl">
              <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
              <span className="font-medium text-gray-700">Ultrasound & Colour Doppler</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-xl">
              <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
              <span className="font-medium text-gray-700">Digital X-ray & HSG</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-purple-50 rounded-xl">
              <div className="w-3 h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
              <span className="font-medium text-gray-700">ECG, TMT & EEG</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-orange-50 rounded-xl">
              <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
              <span className="font-medium text-gray-700">NCV, EMG & Audiometry</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-pink-50 rounded-xl">
              <div className="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0"></div>
              <span className="font-medium text-gray-700">PFT & Uroflowmetry</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-teal-50 rounded-xl">
              <div className="w-3 h-3 bg-teal-500 rounded-full flex-shrink-0"></div>
              <span className="font-medium text-gray-700">Comprehensive Pathlab</span>
            </div>
          </div>
        </div>

        {/* What Makes Us Special Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">What Makes Us Special:</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
              <div className="bg-blue-100 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-gray-700 leading-relaxed">Home collection services for your convenience</span>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
              <div className="bg-green-100 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-gray-700 leading-relaxed">Dedicated USG scans with expert radiologists</span>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
              <div className="bg-purple-100 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-gray-700 leading-relaxed">One-on-one report discussion with doctors</span>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl">
              <div className="bg-orange-100 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-gray-700 leading-relaxed">MD Radio-diagnosis experts from Safdarjung Hospital</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Health Packages */}
      <section id="packages" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            {/* Health Packages Badge */}
            <div className="inline-flex items-center bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
              Health Packages
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-cyan-500">Health Packages</span> at Unbeatable Prices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Choose from our specially designed health packages for complete wellness and preventive care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {healthPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  index === 0 ? 'bg-red-500' : 
                  index === 1 ? 'bg-pink-500' : 
                  index === 2 ? 'bg-orange-500' : 
                  index === 3 ? 'bg-blue-500' : 
                  index === 4 ? 'bg-purple-500' : 
                  index === 5 ? 'bg-teal-500' : 'bg-purple-500'
                }`}>
                  <span className="text-white font-bold text-lg">
                    {index === 0 ? 'A' : 
                     index === 1 ? '♥' : 
                     index === 2 ? '⚡' : 
                     index === 3 ? 'D' : 
                     index === 4 ? '⚕' : 
                     index === 5 ? '♥' : 'B'}
                  </span>
                </div>

                {/* Save Badge */}
                <div className="absolute top-4 right-4 bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Save ₹{pkg.mrp - pkg.price}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-4">{pkg.name}</h3>
                
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">₹{pkg.price}</span>
                    <span className="text-gray-400 line-through text-lg">₹{pkg.mrp}</span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    {Math.round(((pkg.mrp - pkg.price) / pkg.mrp) * 100)}% OFF
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{pkg.tests}</p>
                
                <button className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-300 ${
                  index === 0 ? 'bg-red-500 hover:bg-red-600' : 
                  index === 1 ? 'bg-pink-500 hover:bg-pink-600' : 
                  index === 2 ? 'bg-orange-500 hover:bg-orange-600' : 
                  index === 3 ? 'bg-blue-500 hover:bg-blue-600' : 
                  index === 4 ? 'bg-purple-500 hover:bg-purple-600' : 
                  index === 5 ? 'bg-teal-500 hover:bg-teal-600' : 'bg-purple-500 hover:bg-purple-600'
                }`}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
          
          {/* View All Packages Button */}
          <div className="text-center">
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center space-x-2">
              <span>View All Packages</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            {/* Our Services Badge */}
            <div className="inline-flex items-center bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              Our Services
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-cyan-500">Diagnostic</span> <span className="text-purple-500">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              State-of-the-art medical equipment and expert healthcare professionals delivering precise diagnostics
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Row 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ultrasound</h3>
              <p className="text-gray-600 text-sm">Advanced ultrasound imaging with 4D technology</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Digital X-ray</h3>
              <p className="text-gray-600 text-sm">High-resolution digital radiography</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Colour Doppler</h3>
              <p className="text-gray-600 text-sm">Blood flow assessment & vascular imaging</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ECG</h3>
              <p className="text-gray-600 text-sm">Electrocardiogram testing & monitoring</p>
            </div>

            {/* Row 2 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">TMT</h3>
              <p className="text-gray-600 text-sm">Treadmill stress testing</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">EEG</h3>
              <p className="text-gray-600 text-sm">Brain activity monitoring & analysis</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">NCV</h3>
              <p className="text-gray-600 text-sm">Nerve conduction velocity testing</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">EMG</h3>
              <p className="text-gray-600 text-sm">Electromyography muscle testing</p>
            </div>

            {/* Row 3 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Audiometry</h3>
              <p className="text-gray-600 text-sm">Comprehensive hearing assessment</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">PFT (Spirometry)</h3>
              <p className="text-gray-600 text-sm">Pulmonary function testing</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Uroflowmetry</h3>
              <p className="text-gray-600 text-sm">Urinary flow assessment</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">IVP</h3>
              <p className="text-gray-600 text-sm">Intravenous pyelography imaging</p>
            </div>

            {/* Row 4 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">HSG</h3>
              <p className="text-gray-600 text-sm">Hysterosalpingography examination</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">FNAC/Cytopathology</h3>
              <p className="text-gray-600 text-sm">Fine needle aspiration cytology</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Path Lab Tests</h3>
              <p className="text-gray-600 text-sm">Comprehensive laboratory testing</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Health Packages</h3>
              <p className="text-gray-600 text-sm">Complete health checkup packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
        🏥 Why Choose Us
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Six Reasons to <span className="text-teal-600">Trust</span> <span className="text-purple-600">Pratham</span>
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Discover what makes us the preferred choice for healthcare diagnostics in Gurgaon and Manesar
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="relative text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-2 right-2 w-12 h-12 bg-blue-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-blue-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-1 w-6 h-6 bg-blue-400 rounded-full opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Fast and Accurate Results
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Latest state-of-the-art technology ensures quick and precise diagnostics with minimal waiting time
          </p>
        </div>
      </div>

      <div className="relative text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-2 right-2 w-12 h-12 bg-green-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-green-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-1 w-6 h-6 bg-green-400 rounded-full opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="bg-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Trusted and Ethical Care
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Following best industry practices and maintaining highest ethical standards in patient care
          </p>
        </div>
      </div>

      <div className="relative text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-2 right-2 w-12 h-12 bg-purple-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-purple-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-1 w-6 h-6 bg-purple-400 rounded-full opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="bg-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            World Class Technology
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Equipment from globally renowned brands for superior diagnostic quality and reliability
          </p>
        </div>
      </div>

      <div className="relative text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-2 right-2 w-12 h-12 bg-orange-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-orange-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-1 w-6 h-6 bg-orange-400 rounded-full opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Skilled Expert Team
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Highly trained and experienced doctors with specialized expertise in their respective fields
          </p>
        </div>
      </div>

      <div className="relative text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-2 right-2 w-12 h-12 bg-pink-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-pink-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-1 w-6 h-6 bg-pink-400 rounded-full opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="bg-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            One Stop Healthcare Hub
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Wide range of diagnostic services available under one roof for your convenience
          </p>
        </div>
      </div>

      <div className="relative text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-2 right-2 w-12 h-12 bg-teal-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-teal-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-1 w-6 h-6 bg-teal-400 rounded-full opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="bg-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Affordable Excellence
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Best quality healthcare services at the most competitive prices without compromising quality
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Our Expert Team */}
      <section id="team" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              👨‍⚕️ Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our <span className="text-blue-600">Expert</span> <span className="text-purple-600">Team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Experienced medical professionals dedicated to providing exceptional healthcare services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{doctor.qualification}</p>
                  <p className="text-gray-500 text-sm">{doctor.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Patient Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ⭐ Patient Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our <span className="text-blue-600">Patients</span> <span className="text-purple-600">Say</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Real experiences from our satisfied patients across Gurgaon and Manesar
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-sm p-10 text-center border border-gray-100 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
              <div className="absolute top-8 right-6 w-12 h-12 bg-purple-200 rounded-full opacity-40"></div>
              <div className="absolute bottom-6 left-8 w-20 h-20 bg-pink-200 rounded-full opacity-25"></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-yellow-200 rounded-full opacity-35"></div>
              <div className="absolute top-1/2 left-2 w-8 h-8 bg-green-200 rounded-full opacity-30"></div>
              <div className="absolute top-1/3 right-2 w-14 h-14 bg-indigo-200 rounded-full opacity-25"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">{testimonials[currentTestimonial].name.charAt(0)}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-blue-600 text-sm font-medium">Verified Patient</p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ❓ FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Get answers to common questions about our diagnostic services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800 text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Locations */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              📍 Contact Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Visit Our <span className="text-blue-600">Locations</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Two convenient locations to serve you better across Gurgaon and Manesar
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gurgaon Centre */}
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-300 rounded-full opacity-25"></div>
              <div className="absolute top-1/2 right-2 w-12 h-12 bg-blue-400 rounded-full opacity-20"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-xl flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Gurgaon Centre</h3>
                    <p className="text-blue-600 text-sm font-medium">Main Branch</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700 text-sm">Address</p>
                      <p className="text-gray-600 text-sm">Sector 82, Gurugram, Haryana</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-4 h-4 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700 text-sm">Phone</p>
                      <a href="tel:8744002727" className="text-blue-600 text-sm font-medium">+91-8744002727</a>
                    </div>
                  </div>
                </div>

                <div className="bg-white bg-opacity-50 rounded-xl p-4 text-center">
                  <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm font-medium">Google Maps Integration</p>
                  <p className="text-gray-500 text-xs">Gurgaon Location</p>
                </div>
              </div>
            </div>

            {/* Manesar Centre */}
            <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-purple-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-300 rounded-full opacity-25"></div>
              <div className="absolute top-1/2 right-2 w-12 h-12 bg-purple-400 rounded-full opacity-20"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-500 text-white w-10 h-10 rounded-xl flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Manesar Centre</h3>
                    <p className="text-purple-600 text-sm font-medium">Branch Office</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700 text-sm">Address</p>
                      <p className="text-gray-600 text-sm">Manesar, Haryana</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-4 h-4 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700 text-sm">Phone</p>
                      <a href="tel:7291071742" className="text-purple-600 text-sm font-medium">+91-7291071742</a>
                    </div>
                  </div>
                </div>

                <div className="bg-white bg-opacity-50 rounded-xl p-4 text-center">
                  <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm font-medium">Google Maps Integration</p>
                  <p className="text-gray-500 text-xs">Manesar Location</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="flex justify-center items-center space-x-6 flex-wrap gap-4">
              <a href="mailto:prathamultrasound@gmail.com" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors bg-gray-50 px-6 py-3 rounded-full border border-gray-200">
                <Mail className="w-5 h-5" />
                <span className="font-medium">prathamultrasound@gmail.com</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors bg-gray-50 px-6 py-3 rounded-full border border-gray-200">
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <img 
                  src="/WhatsApp Image 2025-07-08 at 13.37.19_ce68d005.jpg" 
                  alt="Pratham Diagnostic Logo" 
                  className="h-14 w-auto"
                />
                {/* <div>
                  <h3 className="text-xl font-bold">PRATHAM DIAGNOSTIC</h3>
                  <p className="text-xs text-slate-400 font-medium tracking-wide">AUTHENTIC - DEDICATED - MEANINGFUL</p>
                </div> */}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Leading diagnostic center providing comprehensive medical imaging and laboratory services since 2015.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#home" className="hover:text-white transition-colors font-medium">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors font-medium">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors font-medium">Services</a></li>
                <li><a href="#packages" className="hover:text-white transition-colors font-medium">Packages</a></li>
                <li><a href="#team" className="hover:text-white transition-colors font-medium">Team</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors font-medium">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Gurgaon Centre</h4>
              <div className="text-slate-400 space-y-4">
                <p className="font-medium">Sector 82, Gurugram</p>
                <p className="font-medium">Phone: +91-8744002727</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Manesar Centre</h4>
              <div className="text-slate-400 space-y-4">
                <p className="font-medium">Manesar, Haryana</p>
                <p className="font-medium">Phone: +91-7291071742</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-16 pt-10 text-center text-slate-400">
            <p className="font-medium">&copy; 2022 Pratham Diagnostic and Imaging Centre. Made by Branding Pioneers</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;