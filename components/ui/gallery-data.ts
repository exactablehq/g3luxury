export interface GalleryItem {
  id: string;
  title: string;
  category: "suites" | "ambience" | "amenities" | "exterior";
  categoryLabel: string;
  description: string;
  image: string;
  tag: string;
  height?: number;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Executive Couple Therapy Suite",
    category: "suites",
    categoryLabel: "Therapy Suites",
    description: "Spacious dual massage suite featuring handcrafted floral towel art, fresh rose petals, ambient botanical greenery, and serene yoga meditation artwork.",
    image: "/gallery/IMG_9957.jpeg",
    tag: "Couple Suite",
    height: 460
  },
  {
    id: "gal-2",
    title: "Illuminated Lotus Reception Lounge",
    category: "ambience",
    categoryLabel: "Reception & Lounge",
    description: "Elegantly appointed welcome counter illuminated with the backlit G3 Luxury lotus emblem, warm architectural lighting, and plush velvet seating.",
    image: "/gallery/IMG_9954.jpeg",
    tag: "Reception",
    height: 600
  },
  {
    id: "gal-3",
    title: "G3 Luxury Spa Entrance & Facade",
    category: "exterior",
    categoryLabel: "Spa Exterior",
    description: "Striking front entrance featuring 3D illuminated golden signage, authentic Thai Buddha artistry, and lush decorative palms welcoming guests.",
    image: "/gallery/IMG_9936.jpeg",
    tag: "Main Entrance",
    height: 620
  },
  {
    id: "gal-4",
    title: "Handcrafted Swan Towel Art",
    category: "suites",
    categoryLabel: "Therapy Suites",
    description: "Romantic heart-shaped swan towel sculptures adorned with fresh crimson rosebuds and petals for our signature couple wellness rituals.",
    image: "/gallery/IMG_9985.jpeg",
    tag: "Couple Ritual",
    height: 440
  },
  {
    id: "gal-5",
    title: "Private Therapy Suite 03",
    category: "suites",
    categoryLabel: "Therapy Suites",
    description: "Exclusive individual therapy sanctuary featuring rich wood panelling, climate-controlled comfort, mood lighting, and adjoining vanity station.",
    image: "/gallery/IMG_9970.jpeg",
    tag: "Single Suite",
    height: 440
  },
  {
    id: "gal-6",
    title: "Botanical Vanity & Grooming Station",
    category: "amenities",
    categoryLabel: "Luxury Amenities",
    description: "Refreshing grooming bay set against an evergreen turf accent wall, equipped with premium essential oils, hand wash, and styling amenities.",
    image: "/gallery/IMG_9974.jpeg",
    tag: "Vanity Station",
    height: 620
  },
  {
    id: "gal-7",
    title: "Grand Reception & Therapy Showcase",
    category: "ambience",
    categoryLabel: "Reception & Lounge",
    description: "Panoramic view of our reception lounge showcasing the peaceful Buddha mural and treatment staircase highlighting our authentic massage offerings.",
    image: "/gallery/IMG_9955.jpeg",
    tag: "Grand Lounge",
    height: 380
  },
  {
    id: "gal-8",
    title: "Single Deluxe Therapy Chamber",
    category: "suites",
    categoryLabel: "Therapy Suites",
    description: "Tranquil private massage room with ergonomic wooden therapy bed, soft cotton drapery, wood-paneled walls, and soft ambient lighting.",
    image: "/gallery/IMG_9966.jpeg",
    tag: "Private Room",
    height: 600
  },
  {
    id: "gal-9",
    title: "Floral Bed Arrangement & Rose Petals",
    category: "suites",
    categoryLabel: "Therapy Suites",
    description: "Detailed view of our therapy bed presentation featuring artisanal folded towel artistry, fresh aromatic rose petals, and sanitized linens.",
    image: "/gallery/IMG_9969.jpeg",
    tag: "Therapy Bed",
    height: 440
  },
  {
    id: "gal-10",
    title: "Essential Oils & Refreshment Bar",
    category: "amenities",
    categoryLabel: "Luxury Amenities",
    description: "Curated station with 100% pure organic herbal massage oils, fresh towels, and cleansing essentials for pre and post-massage revitalization.",
    image: "/gallery/IMG_9981.jpeg",
    tag: "Essential Oils",
    height: 600
  },
  {
    id: "gal-11",
    title: "En-Suite Hot Rain Shower Facility",
    category: "amenities",
    categoryLabel: "Luxury Amenities",
    description: "Private high-pressure overhead rain shower room with instant geyser heating, wood-slat ceiling, and pristine hygienic tiling.",
    image: "/gallery/IMG_9977.jpeg",
    tag: "Rain Shower",
    height: 580
  },
  {
    id: "gal-12",
    title: "Single Room 03 Interior View",
    category: "suites",
    categoryLabel: "Therapy Suites",
    description: "Warm timber architecture and soothing acoustic insulation create an oasis of deep relaxation and therapeutic healing.",
    image: "/gallery/IMG_9971.jpeg",
    tag: "Therapy Room",
    height: 440
  },
  {
    id: "gal-13",
    title: "Warm Hospitality & Welcome Desk",
    category: "ambience",
    categoryLabel: "Reception & Lounge",
    description: "Our courteous front desk team welcomes guests into a tranquil environment tailored for stress relief and holistic revitalization.",
    image: "/gallery/IMG_9929.jpeg",
    tag: "Welcome Desk",
    height: 440
  },
  {
    id: "gal-14",
    title: "Modern Spa Facade & Architecture",
    category: "exterior",
    categoryLabel: "Spa Exterior",
    description: "Contemporary dark panel architectural facade with wide entrance steps and prominent high-visibility branding.",
    image: "/gallery/IMG_9937.jpeg",
    tag: "Architecture",
    height: 580
  },
  {
    id: "gal-15",
    title: "Multi-Storey Standalone Wellness Center",
    category: "exterior",
    categoryLabel: "Spa Exterior",
    description: "Dedicated multi-level spa destination designed exclusively for private therapies, luxury body massages, and serene wellness experiences.",
    image: "/gallery/IMG_9938.jpeg",
    tag: "Building",
    height: 640
  },
  {
    id: "gal-16",
    title: "Grand Street Elevation & Entrance",
    category: "exterior",
    categoryLabel: "Spa Exterior",
    description: "Clear daytime perspective of G3 Luxury Massage & Wellness Spa welcoming visitors with manicured planters and elegant entryway.",
    image: "/gallery/IMG_9939.jpeg",
    tag: "Facade",
    height: 580
  },
  {
    id: "gal-17",
    title: "Prime Neighborhood Location",
    category: "exterior",
    categoryLabel: "Spa Exterior",
    description: "Easily accessible roadside location with convenient parking and prominent landmarks making your wellness retreat effortless to visit.",
    image: "/gallery/IMG_9940.jpeg",
    tag: "Location",
    height: 420
  }
];
