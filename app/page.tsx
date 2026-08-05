"use client";

import React, { useState, useEffect, useRef } from "react";

// ==========================================================================
// CONSTANTS & SECTIONS DATA
// ==========================================================================

interface ServiceItem {
  id: string;
  title: string;
  price?: string;
  time?: string;
  prices?: { price: string; time: string }[];
  image: string;
  description: string;
  shortDescription?: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "relaxing_spa",
    title: "Relaxing Spa",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" }
    ],
    image: "/relaxing_spa.png",
    description: "Deep Tissue if you suffer from chronic or serious muscle pain and tension or you're seeking recovery from an inquiry, this is the therapy for you on a luxury spa break. The massage therapist will use deep pressure directly on the area of concern with the fingertips, hands, elbows or forearms, which can often feel uncomfortable. This therapy targets the deep layers of muscle and seeks to break down the tissue which is causing the pain or inflammation, helping you to recover.",
    shortDescription: "Relieve chronic muscle pain, tension, and injury with targeted deep pressure therapy designed to break down tissue inflammation."
  },
  {
    id: "aroma",
    title: "Aromatherapy",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" }
    ],
    image: "/aromatherapy.png",
    description: "Aromatherapy involves a classic massage technique with long stroke and kneading, but this essential oils, which derive from plant material. These oils are then absorbed through the skin and release a lovely perfume which you’ll breathe in. Different oils will be used depending upon the personal needs; you may need calming, energizing, cleansing or decongesting, all of which require a different combination of oils. This is a fantastic therapy for stress relief and deep relaxation.",
    shortDescription: "Experience stress relief and deep relaxation with a classic massage technique combined with organic essential oils custom-tailored to your needs."
  },
  {
    id: "swedish",
    title: "Swedish Massage",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" }
    ],
    image: "/swedish_massage.png",
    description: "The Swedish massage is probably one of the most popular techniques around and it’s used by beginners as well as athletes to manage pain and to help accelerate recovery from injuries. The technique itself is done with a special massage oil or lotion and involves a combination of smooth, relaxing strokes, circular motions and a bit of kneading to soothe away the pain and any stiffness in the muscles.\n\nThe Swedish massage technique is incredibly relaxing and is definitely recommended for first timers.",
    shortDescription: "Relax your muscles and recover from fatigue with smooth, circular strokes, gentle kneading, and custom premium massage oils."
  },
  {
    id: "massage_relaxing",
    title: "Massage Therapy Relaxing Spa",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" }
    ],
    image: "/thai_compress_massage.png",
    description: "One of the most popular types of massage therapy, a Thai massage involves a combination of acupressure, body rocking and assisted stretching. It generally takes place on the floor and is carried out using the feet, knees, elbows, thumbs and palms; you can either have a full body massage or have it target a particular troublesome area. This is a great choice if you're looking to treat back or shoulder pain, a stiff neck or muscle strain. It also helps to improve circulation and your spinal alignment.",
    shortDescription: "Relieve tension and improve circulation with acupressure, body rocking, and assisted stretching in a traditional Thai style."
  },
  {
    id: "relaxing_techniques",
    title: "Relaxing Massage Techniques",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" }
    ],
    image: "/relaxing_massage_techniques.png",
    description: "Massage is an ancient healing technique that’s well known for relaxing the body and the mind. However, with different massage techniques comes other benefits such as healing acute physical pain, reducing muscle stiffness, reducing stress and headaches, or even just to boost your immunity.",
    shortDescription: "Relax your body and mind, reduce muscle stiffness, and alleviate headaches with custom soothing massage techniques."
  },
  {
    id: "shoulder_massage",
    title: "Massage Therapy Shoulder Pain",
    prices: [
      { price: "₹1000", time: "[ 30 Min ]" }
    ],
    image: "/shoulder_massage.png",
    description: "Shoulder Pain Shoulder massage uses deep strokes to reduce stiffness and muscle knot that cause pain. Shoulder massage with warm oil also improves the blood circulation and improves supply of oxygen & nutrients to the muscles. This causes the exhausted muscle to feel relaxed. The massage movement also eases the tension in ligaments and thus reduces pain.",
    shortDescription: "Relieve neck and shoulder stiffness, reduce muscle knots, and restore blood circulation with deep warm oil strokes."
  },
  {
    id: "foot_massage",
    title: "Relaxing Foot Massage",
    prices: [
      { price: "₹1000", time: "[ 30 Min ]" }
    ],
    image: "/foot_massage.png",
    description: "The benefits of Foot Massage and Reflexology includes helps control blood pressure, improves nerve sensitivity improve energy level, improves blood circulation, helps promote sleep, improves liver function, treat migraines and headaches, speed up healing of wounds, treat arthritis, useful for depression, and helps reduce swollen feet.",
    shortDescription: "Promote sleep, improve nerve sensitivity, boost circulation, and relieve headaches with therapeutic foot reflexology."
  },
  {
    id: "head_massage",
    title: "Head Massage",
    prices: [
      { price: "₹1000", time: "[ 30 Min ]" }
    ],
    image: "/head_massage.png",
    description: "Scalp massage relaxes your mind and nervous system, promotes sound sleep and may help your memory too. A warm oil massage, done once a week, has the following benefits: It conditions the scalp, helping to prevent flakes and dry, itchy scalp. It helps enhance blood circulation in the head and neck area.",
    shortDescription: "Condition your scalp, stimulate blood circulation, and soothe your nervous system with a nourishing warm oil scalp massage."
  },
  {
    id: "massage_tips",
    title: "Massage Therapy Tips",
    prices: [
      { price: "₹1000", time: "[ 30 Min ]" }
    ],
    image: "/massage_tips.png",
    description: "Massage Therapy helps into relax your body, reduce stress, lower your blood pressure, promotes muscle relaxation, improves blood circulation, improves posture and also strengthen the body’s immune system.",
    shortDescription: "Lower blood pressure, reduce stress, promote muscle relaxation, and boost your immune system with therapeutic massage."
  },
  {
    id: "back_massage",
    title: "Back Massage Techniques",
    prices: [
      { price: "₹1000", time: "[ 30 Min ]" }
    ],
    image: "/back_massage.png",
    description: "Different Back Massage Techniques helps to relax your body. These are as follows :\na. Whole Hand Effleurage\nb. Effleurage using Heel of the Hand\nc. Effleurage using reinforced Fingers\nd. Stripping, using the Reinforced Thumb\ne. Frictions, using the Reinforced Middle Finger\nf. Effleurage using Forearms\ng. Trigger point release using sustained pressure of the reinforced thumb\nh. Finishing with Effleurage",
    shortDescription: "Relax your body with a sequence of hand effleurage, thumb friction, and forearm pressure techniques."
  },
  {
    id: "neck_shoulder_massage",
    title: "Neck & Shoulder Massage",
    prices: [
      { price: "₹1000", time: "[ 30 Min ]" }
    ],
    image: "/neck_shoulder_massage.png",
    description: "A neck and shoulder massage gives great relief to areas in your back and sides of the neck that are hard-to-reach. Massaging neck and shoulder muscles will provide great relief from stress after a hard day's work. Stress can lead to lack of concentration, which in turn reduces your productivity at work.",
    shortDescription: "Soothe hard-to-reach areas of the neck and upper back, release persistent muscle stress, and restore concentration."
  },
  {
    id: "foot_pressure_points",
    title: "Pressure Points for a Foot",
    prices: [
      { price: "₹1000", time: "[ 30 Min ]" }
    ],
    image: "/foot_pressure_points.png",
    description: "Pressure point massage has many benefits. By arousing the pressure points and nerve centers, pressure point massage provides relief from many ailments and pains in the body such as Back Pain, Knee Pain, Headache, Stress, Ankle / Foot Pain, Abdominal Pain / Nausea etc. The massaging technique opens up the way for both improved circulation and the energy flow.",
    shortDescription: "Relieve back and knee pain, headaches, stress, and ankle stiffness by targeting deep nerve centers and pressure points."
  },
  {
    id: "lomi_lomi_massage",
    title: "Lomi Lomi Massage",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" }
    ],
    image: "/lomi_lomi_massage.png",
    description: "Rooted in huna (a Hawaiian philosophy centered on achieving harmony in mind, body and spirit), lomi lomi aims to promote relaxation, improve circulation, address muscle pain and other physical ailments, and provide spiritual and emotional benefits, including the relief of fear, anxiety, and other negative emotions.",
    shortDescription: "Experience holistic Hawaiian healing designed to restore harmony, ease muscle pain, and release negative emotions."
  },
  {
    id: "hamman_eindhoven_spa",
    title: "Hamman Eindhoven Spa",
    prices: [
      { price: "₹5000", time: "[ 90 Min ]" }
    ],
    image: "/hamman_eindhoven_spa.png",
    description: "This treatment is beneficial to reduce stress, anxiety and allow deep relaxation, beautifying the body and face, fight acne, skin nourishing and rehydration, anti - aging, decrease muscle tension, gives better sleep boosts the immune system, body and mind connection. By this treatment you will be feeling fresh and revitalized.",
    shortDescription: "Reduce stress, anxiety, and muscle tension while nourishing and rehydrating your body and face for deep revitalization."
  },
  {
    id: "abhyangam_massage",
    title: "Abhyangam Massage",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" }
    ],
    image: "/abhyangam_massage.png",
    description: "Abhyangam is a form of Ayurvedic body massage with dosh - specific warm herb infused oils. This massage improves joint health, nourishes the dhatus (tissues of the body) and brings aggravated doshas back to balance.",
    shortDescription: "Balance your body and mind, improve joint health, and nourish body tissues with a traditional warm herb-infused Ayurvedic oil massage."
  },
  {
    id: "relax_oil_massage",
    title: "Relax Oil Massage",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" }
    ],
    image: "/relax_oil_massage.png",
    description: "Oil Massage improves blood circulation, increase flexibility, beat depression, body pain, get rid of dead skin and dirt effectively, improves heart health, improves eyesight, get rid of stretch marks, aids in better and deeper sleep at night",
    shortDescription: "Improve blood circulation, increase flexibility, beat body pain, remove dead skin, and enjoy deeper sleep at night with custom oil massage therapy."
  },
  {
    id: "balinese_massage",
    title: "Balinese Massage",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" }
    ],
    image: "/balinese_massage.png",
    description: "Balinese massage is a full - body, deep - tissue, holistic treatment. Balinese massage uses a combination of gentle stretches, acupressure, reflexology, and aromatherapy to stimulate the flow of blood, oxygen and \" qi \" (energy) around your body, and bring a sense of wellbeing, calm and deep relaxation.",
    shortDescription: "Experience a full-body deep-tissue holistic treatment combining gentle stretches, acupressure, reflexology, and aromatherapy for calm and deep relaxation."
  },
  {
    id: "kapur_massage",
    title: "Kapur Massage",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" }
    ],
    image: "/kapur_massage.png",
    description: "Kapur Massage is used to relieve pain and reduce thing, It has also been used to treat in fungal infections of the toenail, warts, cold sores, hemorrhoids, and osteoarthritis. Kapur is used topically to increase local blood flow and as a \" counterirritant \" which reduces pain and swelling by causing irritation.",
    shortDescription: "Relieve pain, reduce swelling, increase local blood flow, and treat body discomfort with therapeutic Kapur massage."
  }
];

const WHATSAPP_NUMBER = "918153001114";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I would like to book an appointment.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const getAssetPath = (path: string) => {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
};

const TIMELINE_STEPS = [
  {
    number: "1",
    title: "Seamless Booking",
    text: "Select your preferred treatments and suites through our premium online system or with a personal wellness concierge."
  },
  {
    number: "2",
    title: "Sensory Consultation",
    text: "Upon arrival, enjoy organic herbal tea while we analyze skin conditions and customize oils, music, and lighting presets."
  },
  {
    number: "3",
    title: "Elite Treatment",
    text: "Surrender to the expertise of our licensed therapists as they perform your custom-designed clinical massage or facial therapy."
  },
  {
    number: "4",
    title: "Relaxation Lounge",
    text: "Extend your post-treatment serenity inside our custom amber light lounges, featuring warm water pools and hot stone beds."
  },
  {
    number: "5",
    title: "Refreshment & Amenities",
    text: "Utilize private rain showers equipped with our custom botanicals, high-speed hair dryers, and warm luxury cotton robes."
  },
  {
    number: "6",
    title: "Sanctuary Return",
    text: "Leave with customized home-care recommendations and membership privileges to sustain your physical and mental balance."
  }
];

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    alt: "Spa environment stones and candle",
    category: "Treatments",
    title: "Quietude Chamber",
    caption: "Signature candlelit massage stones chamber.",
    className: "gallery-item item-portrait reveal-up"
  },
  {
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    alt: "Hot stone treatment",
    category: "Massages",
    title: "Volcanic Stone Therapy",
    caption: "Therapeutic hot stones relax neural networks.",
    className: "gallery-item item-landscape reveal-up"
  },
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    alt: "Essential oils preparation",
    category: "Aroma",
    title: "Organic Botanical Elixirs",
    caption: "Aromatherapy oils prepared by expert botanists.",
    className: "gallery-item item-portrait reveal-up"
  },
  {
    src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80",
    alt: "Flower water bath spa",
    category: "Baths",
    title: "Thermal Petal Bath",
    caption: "Organic flower petals floating bath therapy.",
    className: "gallery-item item-landscape reveal-up"
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    alt: "Clay mud application",
    category: "Dermal",
    title: "Nourishing Mud Wrap",
    caption: "Exfoliating body mud treatments.",
    className: "gallery-item item-portrait reveal-up"
  },
  {
    src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
    alt: "Rhythmic back massage",
    category: "Massages",
    title: "Signature Massage Suite",
    caption: "Neuromuscular back massage suite.",
    className: "gallery-item item-square reveal-up"
  }
];

const TESTIMONIALS = [
  {
    rating: "★★★★★",
    text: "“G3 Luxury is not just a spa, it is a spiritual necessity. The Premium 3-hour escape completely dissolved months of deep cognitive fatigue. The therapist's technique was surgical and profoundly calming.”",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Alexandra Thorne",
    role: "Founder, Thorne Media"
  },
  {
    rating: "★★★★★",
    text: "“The Royal Luxury package exceeded every high-end hotel spa experience I've had in Paris or Tokyo. Having a dedicated wellness concierge and a private pool suite feels like absolute heaven.”",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Helena Rostova",
    role: "Creative Director"
  },
  {
    rating: "★★★★★",
    text: "“A truly transcendent neuromuscular treatment. As an athlete, I am highly critical of physical pressure therapies. The team at G3 Luxury understands muscular anatomy at an elite clinical level.”",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Marcus Vance",
    role: "Professional Athlete"
  }
];

const FAQS = [
  {
    question: "What is the cancelation and rescheduling policy?",
    answer: "We require a minimum of 24 hours notice for any rescheduling or cancellations. Cancellations made within 24 hours of the scheduled treatment will incur a fee equal to 50% of the service cost. No-shows will be charged in full."
  },
  {
    question: "How early should I arrive for my treatment?",
    answer: "We recommend arriving 20 to 30 minutes prior to your scheduled appointment. This ensures ample time to change into our premium cotton robes, enjoy our organic teas, and participate in your pre-treatment sensory oil consultation."
  },
  {
    question: "Can I customize the intensity and style of massage?",
    answer: "Absolutely. Every therapist performs an initial clinical diagnostic check. You can request specific pressure intensities, focal trigger areas, and even customize the botanical scents, background music volume, and ambient temperature levels."
  },
  {
    question: "Are the sauna and jacuzzi facilities open to all guests?",
    answer: "Sauna and steam amenities are available to all guests booking services valued above $100. Private jacuzzi hydro-therapy sessions are exclusive to our Premium and Royal package reservations or can be added on for an additional fee."
  },
  {
    question: "Are treatments suitable for pregnant individuals?",
    answer: "Yes, we offer specialized prenatal massage therapies. However, we advise consulting your physician before booking. Please inform our booking concierge of your pregnancy stage so we can assign a certified prenatal specialist."
  }
];

const INSTAGRAM_POSTS = [
  { likes: "412", img: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=400&h=400&q=80", alt: "Instagram Post - Bathing Rituals" },
  { likes: "350", img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=400&h=400&q=80", alt: "Instagram Post - Herbal Teas" },
  { likes: "529", img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&h=400&q=80", alt: "Instagram Post - Essential oil lipids" },
  { likes: "611", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&h=400&q=80", alt: "Instagram Post - Couples spa setup" },
  { likes: "489", img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=400&h=400&q=80", alt: "Instagram Post - Stone massage therapy" },
  { likes: "574", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&h=400&q=80", alt: "Instagram Post - Mud body wrap" }
];

// ==========================================================================
// SUB-COMPONENTS
// ==========================================================================

function Counter({ target }: { target: number }) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [started]);

  const numberList = Array.from({ length: target + 1 }, (_, i) => i);

  return (
    <span ref={elementRef} className="counter-number-roll-wrapper">
      <span
        className="counter-number-roll-inner"
        style={{
          transform: started ? `translateY(-${(target / (target + 1)) * 100}%)` : "translateY(0%)",
          transition: started ? "transform 2.4s cubic-bezier(0.12, 0.85, 0.25, 1)" : "none"
        }}
      >
        {numberList.map((num) => (
          <span key={num} className="counter-roll-item">
            {num}
          </span>
        ))}
      </span>
    </span>
  );
}

// ==========================================================================
// MAIN COMPONENT
// ==========================================================================

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [preloaderOpacity, setPreloaderOpacity] = useState(1);

  // Custom Cursor state
  const mouseRef = useRef({ x: 0, y: 0 });
  const circleRef = useRef({ x: 0, y: 0 });
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorCircleRef = useRef<HTMLDivElement>(null);
  const [isCursorHovered, setIsCursorHovered] = useState(false);

  // Scroll interactive states
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [heroParallaxY, setHeroParallaxY] = useState(0);
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  // Navigation states
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Carousel slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  // FAQ states
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Service Details Modal state
  const [activeServiceDetails, setActiveServiceDetails] = useState<ServiceItem | null>(null);

  // Appointment Form states
  const [bookName, setBookName] = useState("");
  const [bookPhone, setBookPhone] = useState("");
  const [bookEmail, setBookEmail] = useState("");
  const [bookService, setBookService] = useState("");
  const [bookDate, setBookDate] = useState("");
  const [bookTime, setBookTime] = useState("");
  const [bookMessage, setBookMessage] = useState("");
  const [bookingErrors, setBookingErrors] = useState<Record<string, boolean>>({});
  const [successModalData, setSuccessModalData] = useState<{ name: string; service: string } | null>(null);

  // Contact Form states
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactErrors, setContactErrors] = useState<Record<string, boolean>>({});

  // Newsletter Form states
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // ==========================================
  // INITIAL MOUNT & PRELOADER
  // ==========================================
  useEffect(() => {
    setMounted(true);

    const fadeTimer = setTimeout(() => {
      setPreloaderOpacity(0);
    }, 1500);
    const hideTimer = setTimeout(() => {
      setPreloaderVisible(false);
    }, 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // ==========================================
  // CAROUSEL AUTO-PLAY & SLIDER NAVIGATION
  // ==========================================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  // ==========================================
  // CUSTOM CURSOR LERP
  // ==========================================
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (cursorDotRef.current) {
        cursorDotRef.current.style.top = `${e.clientY}px`;
        cursorDotRef.current.style.left = `${e.clientX}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animId: number;
    const animateCursor = () => {
      const speed = 0.15;
      const dx = mouseRef.current.x - circleRef.current.x;
      const dy = mouseRef.current.y - circleRef.current.y;
      circleRef.current.x += dx * speed;
      circleRef.current.y += dy * speed;

      if (cursorCircleRef.current) {
        cursorCircleRef.current.style.top = `${circleRef.current.y}px`;
        cursorCircleRef.current.style.left = `${circleRef.current.x}px`;
      }
      animId = requestAnimationFrame(animateCursor);
    };
    animId = requestAnimationFrame(animateCursor);

    // Event delegation for hovered cursor effect
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest("a, button, select, input, textarea, .gallery-item, .faq-trigger")) {
        setIsCursorHovered(true);
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest("a, button, select, input, textarea, .gallery-item, .faq-trigger")) {
        setIsCursorHovered(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mounted]);

  // ==========================================
  // SCROLL EFFECTS & REVEALS
  // ==========================================
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);

      // Parallax
      setHeroParallaxY(scrollTop * 0.15);

      // Sticky nav
      setIsNavScrolled(scrollTop > 50);

      // Active section highlight tracking
      const trackedSectionIds = ["hero", "about", "why-choose-us", "services", "faq"];
      const headerOffset = 160;
      let currentActive = "hero";

      for (const id of trackedSectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset && rect.bottom > 80) {
            currentActive = id;
          }
        }
      }
      setActiveSection(currentActive);

      // Back to top button
      setBackToTopVisible(scrollTop > 400);

      // Scroll reveal class bindings
      const windowHeight = window.innerHeight;
      const revealPoint = 120;
      const reveals = document.querySelectorAll(".reveal, .reveal-up, .reveal-left, .reveal-right");
      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active");
        }
      });

      // Timeline Progress & Item Activation
      const timeline = document.querySelector(".timeline-container") as HTMLElement;
      const progressLine = document.getElementById("timeline-progress") as HTMLElement;
      const items = document.querySelectorAll(".timeline-item");
      if (timeline && progressLine) {
        const timelineRect = timeline.getBoundingClientRect();
        const viewportCenter = windowHeight / 2;
        let progressHeight = viewportCenter - timelineRect.top;
        const totalHeight = timelineRect.height;
        let percentage = (progressHeight / totalHeight) * 100;
        percentage = Math.max(0, Math.min(100, percentage));
        progressLine.style.height = `${percentage}%`;

        items.forEach((item) => {
          const itemTop = item.getBoundingClientRect().top;
          if (itemTop < viewportCenter) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial trigger

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  // Lock scroll on mobile navigation open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "initial";
    }
  }, [menuOpen]);

  // ==========================================
  // LIGHTBOX NAV
  // ==========================================
  const showNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const showPrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "ArrowLeft") showPrevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // ==========================================
  // FORM REGEX VALIDATIONS
  // ==========================================
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email.toLowerCase());
  };

  const validatePhone = (phone: string) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone);
  };

  // ==========================================
  // CLICK INTERACTIONS (RIPPLE EFFECT)
  // ==========================================
  const handleRipple = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  // ==========================================
  // FORM SUBMISSION HANDLERS
  // ==========================================
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, boolean> = {};

    if (!bookName.trim()) errors.bookName = true;
    if (!bookPhone.trim() || !validatePhone(bookPhone)) errors.bookPhone = true;
    if (!bookEmail.trim() || !validateEmail(bookEmail)) errors.bookEmail = true;
    if (!bookService) errors.bookService = true;
    if (!bookDate) errors.bookDate = true;
    if (!bookTime) errors.bookTime = true;

    setBookingErrors(errors);

    if (Object.keys(errors).length === 0) {
      const serviceLabels: Record<string, string> = {
        essential: "Essential Package - $150",
        premium: "Premium Package - $280",
        royal: "Royal Luxury Package - $450",
        relaxing_spa: "Relaxing Spa - ₹. 2500 / ₹. 3500",
        hamman_eindhoven_spa: "Hamman Eindhoven Spa - ₹. 5000",
        body: "Body Spa Wrap - $195",
        sauna: "Sauna Experience - $110",
        steam: "Steam Therapy - $120",
        aroma: "Aromatherapy - $150",
        abhyangam_massage: "Abhyangam Massage - ₹. 2500 / ₹. 3500",
        relax_oil_massage: "Relax Oil Massage - ₹. 2500 / ₹. 3500",
        balinese_massage: "Balinese Massage - ₹. 2500 / ₹. 3500",
        kapur_massage: "Kapur Massage - ₹. 2500 / ₹. 3500"
      };

      setSuccessModalData({
        name: bookName,
        service: serviceLabels[bookService] || bookService
      });

      // Clear Form Fields
      setBookName("");
      setBookPhone("");
      setBookEmail("");
      setBookService("");
      setBookDate("");
      setBookTime("");
      setBookMessage("");
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, boolean> = {};

    if (!contactName.trim()) errors.contactName = true;
    if (!contactEmail.trim() || !validateEmail(contactEmail)) errors.contactEmail = true;
    if (!contactSubject.trim()) errors.contactSubject = true;
    if (!contactMessage.trim()) errors.contactMessage = true;

    setContactErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Your clinical message has been transmitted successfully. A wellness coordinator will email you soon.");
      setContactName("");
      setContactEmail("");
      setContactSubject("");
      setContactMessage("");
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(newsletterEmail)) {
      setNewsletterError(true);
    } else {
      setNewsletterError(false);
      setNewsletterSuccess(true);
      setNewsletterEmail("");
      setTimeout(() => {
        setNewsletterSuccess(false);
      }, 5000);
    }
  };

  // NavLink Active check utility
  const getNavLinkClass = (href: string) => {
    const sectionId = href.replace("#", "");
    const isActive = activeSection === sectionId;
    return isActive ? "nav-link active" : "nav-link";
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    setActiveSection(sectionId);
    setMenuOpen(false);

    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* 1. Custom Cursor Elements */}
      {mounted && (
        <>
          <div ref={cursorDotRef} className="custom-cursor-dot" id="cursor-dot"></div>
          <div ref={cursorCircleRef} className={`custom-cursor-circle ${isCursorHovered ? "custom-cursor-active" : ""}`} id="cursor-circle"></div>
        </>
      )}

      {/* 2. Preloader Screen */}
      {preloaderVisible && (
        <div className="preloader" id="preloader" style={{ opacity: preloaderOpacity }}>
          <div className="preloader-wrap">
            <div className="preloader-circle-gold"></div>
            <img
              src={getAssetPath("/loader.png")}
              alt="G3 Luxury Loader"
              className="preloader-img"
            />
          </div>
        </div>
      )}

      {/* 3. Scroll Progress Indicator */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" id="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* 4. Sticky Navigation */}
      <nav id="main-nav" className={isNavScrolled ? "scrolled" : ""}>
        <div className="nav-container">
          <a href="#hero" className="nav-logo" onClick={(e) => { handleRipple(e); handleNavClick(e, "#hero"); }}>
            <img src={getAssetPath("/logo.png")} alt="G3 Luxury Logo" style={{ height: "35px", width: "auto", marginRight: "10px", objectFit: "contain" }} />
            <span>G3 Luxury</span>
          </a>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="nav-menu">
            <li><a href="#about" className={getNavLinkClass("#about")} onClick={(e) => handleNavClick(e, "#about")}>About Us</a></li>
            <li><a href="#why-choose-us" className={getNavLinkClass("#why-choose-us")} onClick={(e) => handleNavClick(e, "#why-choose-us")}>Why Choose Us</a></li>
            <li><a href="#services" className={getNavLinkClass("#services")} onClick={(e) => handleNavClick(e, "#services")}>Services</a></li>
            <li><a href="#faq" className={getNavLinkClass("#faq")} onClick={(e) => handleNavClick(e, "#faq")}>FAQs</a></li>
          </ul>

          <div className="nav-actions">
            <a
              href={WHATSAPP_LINK}
              className="btn btn-nav"
              onClick={(e) => {
                handleRipple(e);
                setMenuOpen(false);
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book An Appointment
            </a>
            <button className={`nav-hamburger ${menuOpen ? "open" : ""}`} id="nav-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* 5. Hero Section */}
      <header id="hero" className="hero-section">
        <div className="hero-bg-wrapper">
          <img
            src={getAssetPath("/hero-bg.png")}
            alt="Luxury Spa Environment"
            className="hero-bg"
            id="hero-bg-img"
            style={{ transform: `scale(1.08) translateY(${heroParallaxY}px)` }}
          />
          <div className="hero-top-blend"></div>
          <div className="hero-bottom-blend"></div>
        </div>

        <div className="hero-content container reveal-up active">
          <h1 className="hero-title">Pure Relaxation</h1>
          <p className="hero-subtitle">Indulge in personalised wellness experiences that help you unwind, recharge, and embrace lasting tranquillity.</p>

          <div className="hero-buttons">
            <a
              href={WHATSAPP_LINK}
              className="btn btn-primary"
              onClick={handleRipple}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Appointment
            </a>
            <a href="#services" className="btn btn-secondary" onClick={handleRipple}>Explore Services</a>
          </div>
        </div>
      </header>

      <main>
        {/* 6. About Us Section */}
        <section id="about" className="section-padding bg-dark text-light" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className="about-wrapper text-center reveal-up">
              <span className="section-overline">ABOUT G3 LUXURY SANCTUARY</span>
              <h2 className="section-title">
                Reclaiming Silence in a<br className="about-title-br" />Modern World
              </h2>
              <p className="about-story">G3 Luxury was founded on a simple philosophy: silence is not the absence of sound,<br />but the presence of ultimate clarity. Our sanctuary represents a custom-designed haven<br />where time slows down.</p>
              <p className="about-story">We blend the ancient thermal techniques of Eastern Europe, the clinical precision of modern dermal medicine, and the deep relaxation of Southeast Asia. Here, wellness is a conscious lifestyle choice.</p>
            </div>
          </div>

          {/* Full-width Banner across screen with no border */}
          <div
            className="about-banner-card"
            style={{ backgroundImage: `url(${getAssetPath("/about_us.png")})` }}
          >
            <div className="about-banner-top-blend"></div>
            <div className="about-banner-bottom-blend"></div>
            <div className="about-banner-overlay"></div>
            <div className="container about-banner-content">
              <div className="counters-grid" id="counters-box">
                <div className="counter-item">
                  <div className="counter-value-row">
                    <Counter target={15} />
                    <span className="counter-suffix">+</span>
                  </div>
                  <span className="counter-label">Years of Experience</span>
                </div>
                <div className="counter-item">
                  <div className="counter-value-row">
                    <Counter target={10} />
                    <span className="counter-suffix">K+</span>
                  </div>
                  <span className="counter-label">Happy Clients</span>
                </div>
                <div className="counter-item">
                  <div className="counter-value-row">
                    <Counter target={35} />
                    <span className="counter-suffix">+</span>
                  </div>
                  <span className="counter-label">Certified Experts</span>
                </div>
                <div className="counter-item">
                  <div className="counter-value-row">
                    <Counter target={12} />
                    <span className="counter-suffix">+</span>
                  </div>
                  <span className="counter-label">Luxury Suites</span>
                </div>
              </div>

              <div className="about-cta-wrapper">
                <a
                  href={WHATSAPP_LINK}
                  className="btn btn-primary"
                  onClick={handleRipple}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reserve Your Sanctuary
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Why Choose Us Section */}
        <section id="why-choose-us" className="section-padding bg-dark text-light">
          <div className="container">
            <div className="section-header text-center reveal-up">
              <span className="section-overline">G3 LUXURY EXPERIENCE</span>
              <h2 className="section-title">The Art of True Wellness</h2>
              <p className="section-subtitle">We merge ancestral healing wisdom with premium modern luxury, ensuring every second spent in our sanctuary is profoundly restoring.</p>
            </div>

            <div className="why-grid">
              {/* Card 1 */}
              <div className="why-card reveal-up">
                <div className="why-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="why-card-title">Organic Products</h3>
                <p className="why-card-text">Every treatment uses 100% bio-organic extracts, wild-harvested herbs, and premium botanical compounds free from artificial additives.</p>
              </div>

              {/* Card 2 */}
              <div className="why-card reveal-up" style={{ transitionDelay: "0.1s" }}>
                <div className="why-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="why-card-title">Certified Therapists</h3>
                <p className="why-card-text">Our international team holds specialized credentials in advanced dermal physiology, neuromuscular release, and meditative arts.</p>
              </div>

              {/* Card 3 */}
              <div className="why-card reveal-up" style={{ transitionDelay: "0.2s" }}>
                <div className="why-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="why-card-title">Private Rooms</h3>
                <p className="why-card-text">Retreat into fully soundproofed premium suites equipped with individual climatic controls, dimmable amber lighting, and steam showers.</p>
              </div>

              {/* Card 4 */}
              <div className="why-card reveal-up">
                <div className="why-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="why-card-title">Luxury Environment</h3>
                <p className="why-card-text">Immerse yourself in our custom-scented ambient halls filled with floating fire candles, soft stone textures, and cascading water features.</p>
              </div>

              {/* Card 5 */}
              <div className="why-card reveal-up" style={{ transitionDelay: "0.1s" }}>
                <div className="why-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="why-card-title">Personalized Care</h3>
                <p className="why-card-text">Every appointment starts with an individual clinical assessment to curate scents, temperatures, and therapy styles unique to your profile.</p>
              </div>

              {/* Card 6 */}
              <div className="why-card reveal-up" style={{ transitionDelay: "0.2s" }}>
                <div className="why-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22a7 7 0 007-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 007 7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="why-card-title">Natural Oils</h3>
                <p className="why-card-text">We custom-blend essential lipids, cold-pressed jojoba, and mineral-rich marula oils that hydrate dermal cells deep below the surface.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Curated Treatments Section */}
        <section id="services" className="section-padding bg-dark text-light">
          <div className="container">
            <div className="section-header text-center reveal-up">
              <span className="section-overline">CURATED TREATMENTS</span>
              <h2 className="section-title">Our Signature Services</h2>
              <p className="section-subtitle">Choose from our selection of premium wellness treatments. Each session is tailored specifically to your body's restorative requirements.</p>
            </div>

            <div className="services-grid">
              {SERVICES.map((srv, idx) => (
                <div
                  key={srv.id}
                  className="service-card reveal-up"
                  style={{ transitionDelay: `${(idx % 3) * 0.1}s`, cursor: "pointer" }}
                  onClick={(e) => {
                    setActiveServiceDetails(srv);
                  }}
                >
                  <div className="service-img-wrapper">
                    <img src={getAssetPath(srv.image)} alt={srv.title} className="service-img" loading="lazy" />
                    {srv.price && <span className="service-price">{srv.price}</span>}
                  </div>
                  <div className="service-content">
                    <div className="service-body">
                      <h3 className="service-title">{srv.title}</h3>
                      <p className="service-text">{srv.shortDescription || srv.description}</p>
                    </div>
                    <div className="service-footer">
                      {srv.prices ? (
                        <div className="service-prices-multi">
                          {srv.prices.map((p, pIdx) => (
                            <div key={pIdx} className="price-time-item">
                              <span className="multi-price">{p.price}</span>
                              <span className="multi-time">{p.time}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="service-meta">
                          <span>
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: "inline", marginRight: "4px", verticalAlign: "middle" }}>
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 6v6l4 2" />
                            </svg>
                            {srv.time}
                          </span>
                        </div>
                      )}
                      <a
                        href="#"
                        className="btn-text"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleRipple(e);
                          setActiveServiceDetails(srv);
                        }}
                      >
                        Learn More <span className="arrow">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Spa Experience Timeline Section */}
        <section id="experience" className="section-padding bg-dark text-light">
          <div className="container">
            <div className="section-header text-center reveal-up">
              <span className="section-overline">YOUR PATHWAY</span>
              <h2 className="section-title">The Wellness Journey</h2>
              <p className="section-subtitle">From the moment you connect with us to your post-treatment return home, we cultivate a seamless, relaxing flow.</p>
            </div>

            <div className="timeline-container">
              <div className="timeline-line">
                <div className="timeline-progress" id="timeline-progress"></div>
              </div>

              {TIMELINE_STEPS.map((step, idx) => (
                <div key={idx} className="timeline-item reveal-up">
                  <div className="timeline-number">{step.number}</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{step.title}</h3>
                    <p className="timeline-text">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Sanctuary Gallery Section */}


        {/* Service Details Modal */}
        {activeServiceDetails && (
          <div
            className="service-modal-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveServiceDetails(null);
            }}
          >
            <div className="service-modal-card">
              <button
                className="service-modal-close"
                onClick={() => setActiveServiceDetails(null)}
                aria-label="Close modal"
              >
                &times;
              </button>
              <div className="service-modal-grid">
                <div className="service-modal-img-wrapper">
                  <img src={getAssetPath(activeServiceDetails.image)} alt={activeServiceDetails.title} className="service-modal-img" />
                </div>
                <div className="service-modal-info">
                  <h3 className="service-modal-title">{activeServiceDetails.title}</h3>
                  <p className="service-modal-desc">
                    {activeServiceDetails.description}
                  </p>

                  <div className="service-modal-pricing-section">
                    <span className="pricing-section-title">Pricing & Duration</span>
                    {activeServiceDetails.prices ? (
                      <div className="modal-prices-multi">
                        {activeServiceDetails.prices.map((p, pIdx) => (
                          <div key={pIdx} className="modal-price-item">
                            <span className="modal-multi-price">{p.price}</span>
                            <span className="modal-multi-time">{p.time}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="modal-price-single">
                        <span className="modal-single-price">{activeServiceDetails.price}</span>
                        <span className="modal-single-time">{activeServiceDetails.time}</span>
                      </div>
                    )}
                  </div>

                  <div className="service-modal-actions">
                    <a
                      href={WHATSAPP_LINK}
                      className="btn btn-nav"
                      onClick={() => {
                        setActiveServiceDetails(null);
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Custom Lightbox Element */}
        {lightboxIndex !== null && (
          <div className="lightbox" id="lightbox" style={{ display: "flex" }} onClick={(e) => { if (e.target === e.currentTarget) setLightboxIndex(null); }}>
            <span className="lightbox-close" id="lightbox-close" onClick={() => setLightboxIndex(null)}>&times;</span>
            <span className="lightbox-nav lightbox-prev" id="lightbox-prev" onClick={showPrevImage}>&#10094;</span>
            <span className="lightbox-nav lightbox-next" id="lightbox-next" onClick={showNextImage}>&#10095;</span>
            <div className="lightbox-content">
              <img
                src={GALLERY_ITEMS[lightboxIndex].src}
                alt={GALLERY_ITEMS[lightboxIndex].alt}
                id="lightbox-img"
                style={{ opacity: 1, transition: "opacity 0.2s" }}
              />
              <p className="lightbox-caption" id="lightbox-caption">
                {GALLERY_ITEMS[lightboxIndex].caption}
              </p>
            </div>
          </div>
        )}

        {/* 15. FAQ Accordion Section */}
        <section id="faq" className="section-padding bg-dark text-light">
          <div className="container">
            <div className="section-header text-center reveal-up">
              <span className="section-overline">COMMON INQUIRIES</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Have questions about safety guidelines, booking policies, or individual therapies? Read our curated answers below.</p>
            </div>

            <div className="faq-accordion reveal-up">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <button
                    className="faq-trigger"
                    aria-expanded={openFaqIndex === idx}
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon"></span>
                  </button>
                  <div
                    className="faq-panel"
                    style={{
                      maxHeight: openFaqIndex === idx ? "300px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease-out"
                    }}
                  >
                    <div className="faq-panel-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* 19. Footer Section */}
      <footer id="footer" className="footer text-muted-light">
        <div className="footer-banner-wrapper" style={{ backgroundImage: `url(${getAssetPath("/footer.png")})` }}>
          <div className="footer-banner-top-blend"></div>
          <div className="footer-banner-overlay"></div>
          <div className="footer-banner-content">
            {/* Divider row with center logo and golden lines on either side */}
            <div className="footer-divider-logo-row">
              <span className="footer-line-side footer-line-left"></span>
              <div className="footer-brand-logo-wrap">
                <a href="#hero" onClick={handleRipple} aria-label="G3 Luxury Home">
                  <img src={getAssetPath("/logo.png")} alt="G3 Luxury Massage & Wellness Spa" className="footer-brand-logo-img" />
                </a>
              </div>
              <span className="footer-line-side footer-line-right"></span>
            </div>

            {/* Bottom Section under the line */}
            <div className="footer-bottom-grid">
              {/* Bottom Left: WhatsApp number above 3-line address */}
              <div className="footer-bottom-left">
                <a
                  href="https://wa.me/918153001114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-item"
                  title="Contact G3 Luxury Spa on WhatsApp"
                >
                  <div className="footer-icon-badge footer-icon-whatsapp">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <span className="footer-contact-text">+91 81530 01114</span>
                </a>

                <div className="footer-address-block">
                  <div className="footer-icon-badge footer-icon-location">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div className="footer-address-lines">
                    <span className="footer-contact-text">G3 LUXURY MASSAGE &amp; WELLNESS SPA,</span>
                    <span className="footer-contact-text">10/56, TIN BATTI CIRCLE, NEAR MK MOBILE,</span>
                    <span className="footer-contact-text">NANI DAMAN - 396 210</span>
                  </div>
                </div>
              </div>

              {/* Bottom Right: Terms of Service above Privacy Policy */}
              <div className="footer-bottom-right">
                <div className="footer-legal-stack">
                  <a href="#contact">Terms of Service</a>
                  <a href="#contact">Privacy Policy</a>
                </div>
                <p className="copyright">&copy; 2026 G3 Luxury Wellness. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* 20. Back to Top Button */}
      <button
        id="back-to-top"
        className={`back-to-top-btn ${backToTopVisible ? "show" : ""}`}
        aria-label="Back to Top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
