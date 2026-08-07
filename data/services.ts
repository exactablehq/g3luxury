export interface ServiceItem {
  id: string;
  title: string;
  price?: string;
  time?: string;
  prices?: { price: string; time: string }[];
  image: string;
  description: string;
  shortDescription?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "relaxing_spa",
    title: "Relaxing Spa",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" },
    ],
    image: "/relaxing_spa.png",
    description:
      "Deep Tissue if you suffer from chronic or serious muscle pain and tension or you're seeking recovery from an inquiry, this is the therapy for you on a luxury spa break. The massage therapist will use deep pressure directly on the area of concern with the fingertips, hands, elbows or forearms, which can often feel uncomfortable. This therapy targets the deep layers of muscle and seeks to break down the tissue which is causing the pain or inflammation, helping you to recover.",
    shortDescription:
      "Relieve chronic muscle pain, tension, and injury with targeted deep pressure therapy designed to break down tissue inflammation.",
  },
  {
    id: "aroma",
    title: "Aromatherapy",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" },
    ],
    image: "/aromatherapy.png",
    description:
      "Aromatherapy involves a classic massage technique with long stroke and kneading, but this essential oils, which derive from plant material. These oils are then absorbed through the skin and release a lovely perfume which you’ll breathe in. Different oils will be used depending upon the personal needs; you may need calming, energizing, cleansing or decongesting, all of which require a different combination of oils. This is a fantastic therapy for stress relief and deep relaxation.",
    shortDescription:
      "Experience stress relief and deep relaxation with a classic massage technique combined with organic essential oils custom-tailored to your needs.",
  },
  {
    id: "swedish",
    title: "Swedish Massage",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" },
    ],
    image: "/swedish_massage.png",
    description:
      "The Swedish massage is probably one of the most popular techniques around and it’s used by beginners as well as athletes to manage pain and to help accelerate recovery from injuries. The technique itself is done with a special massage oil or lotion and involves a combination of smooth, relaxing strokes, circular motions and a bit of kneading to soothe away the pain and any stiffness in the muscles.\n\nThe Swedish massage technique is incredibly relaxing and is definitely recommended for first timers.",
    shortDescription:
      "Relax your muscles and recover from fatigue with smooth, circular strokes, gentle kneading, and custom premium massage oils.",
  },
  {
    id: "massage_relaxing",
    title: "Massage Therapy Relaxing Spa",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" },
    ],
    image: "/thai_compress_massage.png",
    description:
      "One of the most popular types of massage therapy, a Thai massage involves a combination of acupressure, body rocking and assisted stretching. It generally takes place on the floor and is carried out using the feet, knees, elbows, thumbs and palms; you can either have a full body massage or have it target a particular troublesome area. This is a great choice if you're looking to treat back or shoulder pain, a stiff neck or muscle strain. It also helps to improve circulation and your spinal alignment.",
    shortDescription:
      "Relieve tension and improve circulation with acupressure, body rocking, and assisted stretching in a traditional Thai style.",
  },
  {
    id: "relaxing_techniques",
    title: "Relaxing Massage Techniques",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" },
    ],
    image: "/relaxing_massage_techniques.png",
    description:
      "Massage is an ancient healing technique that’s well known for relaxing the body and the mind. However, with different massage techniques comes other benefits such as healing acute physical pain, reducing muscle stiffness, reducing stress and headaches, or even just to boost your immunity.",
    shortDescription:
      "Relax your body and mind, reduce muscle stiffness, and alleviate headaches with custom soothing massage techniques.",
  },
  {
    id: "shoulder_massage",
    title: "Massage Therapy Shoulder Pain",
    prices: [{ price: "₹1000", time: "[ 30 Min ]" }],
    image: "/shoulder_massage.png",
    description:
      "Shoulder Pain Shoulder massage uses deep strokes to reduce stiffness and muscle knot that cause pain. Shoulder massage with warm oil also improves the blood circulation and improves supply of oxygen & nutrients to the muscles. This causes the exhausted muscle to feel relaxed. The massage movement also eases the tension in ligaments and thus reduces pain.",
    shortDescription:
      "Relieve neck and shoulder stiffness, reduce muscle knots, and restore blood circulation with deep warm oil strokes.",
  },
  {
    id: "foot_massage",
    title: "Relaxing Foot Massage",
    prices: [{ price: "₹1000", time: "[ 30 Min ]" }],
    image: "/foot_massage.png",
    description:
      "The benefits of Foot Massage and Reflexology includes helps control blood pressure, improves nerve sensitivity improve energy level, improves blood circulation, helps promote sleep, improves liver function, treat migraines and headaches, speed up healing of wounds, treat arthritis, useful for depression, and helps reduce swollen feet.",
    shortDescription:
      "Promote sleep, improve nerve sensitivity, boost circulation, and relieve headaches with therapeutic foot reflexology.",
  },
  {
    id: "head_massage",
    title: "Head Massage",
    prices: [{ price: "₹1000", time: "[ 30 Min ]" }],
    image: "/head_massage.png",
    description:
      "Scalp massage relaxes your mind and nervous system, promotes sound sleep and may help your memory too. A warm oil massage, done once a week, has the following benefits: It conditions the scalp, helping to prevent flakes and dry, itchy scalp. It helps enhance blood circulation in the head and neck area.",
    shortDescription:
      "Condition your scalp, stimulate blood circulation, and soothe your nervous system with a nourishing warm oil scalp massage.",
  },
  {
    id: "massage_tips",
    title: "Massage Therapy Tips",
    prices: [{ price: "₹1000", time: "[ 30 Min ]" }],
    image: "/massage_tips.png",
    description:
      "Massage Therapy helps into relax your body, reduce stress, lower your blood pressure, promotes muscle relaxation, improves blood circulation, improves posture and also strengthen the body’s immune system.",
    shortDescription:
      "Lower blood pressure, reduce stress, promote muscle relaxation, and boost your immune system with therapeutic massage.",
  },
  {
    id: "back_massage",
    title: "Back Massage Techniques",
    prices: [{ price: "₹1000", time: "[ 30 Min ]" }],
    image: "/back_massage.png",
    description:
      "Different Back Massage Techniques helps to relax your body. These are as follows :\na. Whole Hand Effleurage\nb. Effleurage using Heel of the Hand\nc. Effleurage using reinforced Fingers\nd. Stripping, using the Reinforced Thumb\ne. Frictions, using the Reinforced Middle Finger\nf. Effleurage using Forearms\ng. Trigger point release using sustained pressure of the reinforced thumb\nh. Finishing with Effleurage",
    shortDescription:
      "Relax your body with a sequence of hand effleurage, thumb friction, and forearm pressure techniques.",
  },
  {
    id: "neck_shoulder_massage",
    title: "Neck & Shoulder Massage",
    prices: [{ price: "₹1000", time: "[ 30 Min ]" }],
    image: "/neck_shoulder_massage.png",
    description:
      "A neck and shoulder massage gives great relief to areas in your back and sides of the neck that are hard-to-reach. Massaging neck and shoulder muscles will provide great relief from stress after a hard day's work. Stress can lead to lack of concentration, which in turn reduces your productivity at work.",
    shortDescription:
      "Soothe hard-to-reach areas of the neck and upper back, release persistent muscle stress, and restore concentration.",
  },
  {
    id: "foot_pressure_points",
    title: "Pressure Points for a Foot",
    prices: [{ price: "₹1000", time: "[ 30 Min ]" }],
    image: "/foot_pressure_points.png",
    description:
      "Pressure point massage has many benefits. By arousing the pressure points and nerve centers, pressure point massage provides relief from many ailments and pains in the body such as Back Pain, Knee Pain, Headache, Stress, Ankle / Foot Pain, Abdominal Pain / Nausea etc. The massaging technique opens up the way for both improved circulation and the energy flow.",
    shortDescription:
      "Relieve back and knee pain, headaches, stress, and ankle stiffness by targeting deep nerve centers and pressure points.",
  },
  {
    id: "lomi_lomi_massage",
    title: "Lomi Lomi Massage",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" },
    ],
    image: "/lomi_lomi_massage.png",
    description:
      "Rooted in huna (a Hawaiian philosophy centered on achieving harmony in mind, body and spirit), lomi lomi aims to promote relaxation, improve circulation, address muscle pain and other physical ailments, and provide spiritual and emotional benefits, including the relief of fear, anxiety, and other negative emotions.",
    shortDescription:
      "Experience holistic Hawaiian healing designed to restore harmony, ease muscle pain, and release negative emotions.",
  },
  {
    id: "hamman_eindhoven_spa",
    title: "Hamman Eindhoven Spa",
    prices: [{ price: "₹5000", time: "[ 90 Min ]" }],
    image: "/hamman_eindhoven_spa.png",
    description:
      "This treatment is beneficial to reduce stress, anxiety and allow deep relaxation, beautifying the body and face, fight acne, skin nourishing and rehydration, anti - aging, decrease muscle tension, gives better sleep boosts the immune system, body and mind connection. By this treatment you will be feeling fresh and revitalized.",
    shortDescription:
      "Reduce stress, anxiety, and muscle tension while nourishing and rehydrating your body and face for deep revitalization.",
  },
  {
    id: "abhyangam_massage",
    title: "Abhyangam Massage",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" },
    ],
    image: "/abhyangam_massage.png",
    description:
      "Abhyangam is a form of Ayurvedic body massage with dosh - specific warm herb infused oils. This massage improves joint health, nourishes the dhatus (tissues of the body) and brings aggravated doshas back to balance.",
    shortDescription:
      "Balance your body and mind, improve joint health, and nourish body tissues with a traditional warm herb-infused Ayurvedic oil massage.",
  },
  {
    id: "relax_oil_massage",
    title: "Relax Oil Massage",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" },
    ],
    image: "/relax_oil_massage.png",
    description:
      "Oil Massage improves blood circulation, increase flexibility, beat depression, body pain, get rid of dead skin and dirt effectively, improves heart health, improves eyesight, get rid of stretch marks, aids in better and deeper sleep at night",
    shortDescription:
      "Improve blood circulation, increase flexibility, beat body pain, remove dead skin, and enjoy deeper sleep at night with custom oil massage therapy.",
  },
  {
    id: "balinese_massage",
    title: "Balinese Massage",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" },
    ],
    image: "/balinese_massage.png",
    description:
      'Balinese massage is a full - body, deep - tissue, holistic treatment. Balinese massage uses a combination of gentle stretches, acupressure, reflexology, and aromatherapy to stimulate the flow of blood, oxygen and " qi " (energy) around your body, and bring a sense of wellbeing, calm and deep relaxation.',
    shortDescription:
      "Experience a full-body deep-tissue holistic treatment combining gentle stretches, acupressure, reflexology, and aromatherapy for calm and deep relaxation.",
  },
  {
    id: "kapur_massage",
    title: "Kapur Massage",
    prices: [
      { price: "₹2500", time: "[ 60 Min ]" },
      { price: "₹3500", time: "[ 90 Min ]" },
    ],
    image: "/kapur_massage.png",
    description:
      'Kapur Massage is used to relieve pain and reduce thing, It has also been used to treat in fungal infections of the toenail, warts, cold sores, hemorrhoids, and osteoarthritis. Kapur is used topically to increase local blood flow and as a " counterirritant " which reduces pain and swelling by causing irritation.',
    shortDescription:
      "Relieve pain, reduce swelling, increase local blood flow, and treat body discomfort with therapeutic Kapur massage.",
  },
];
