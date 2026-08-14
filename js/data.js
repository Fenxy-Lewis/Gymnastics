/**
 * ============================================================
 * AthleteVerse — js/data.js
 * Single source of truth for all site content and configuration.
 * To swap real images, replace the `image` URLs with paths
 * under /assets/images/ using the same filenames.
 * ============================================================
 */

// ============================================================
// SITE CONFIGURATION
// Replace these values with your own before deploying.
// ============================================================
const SITE_CONFIG = {
  siteName: "AthleteVerse",
  siteUrl: "https://example.com",
  tagline: "Where Athletics Meets Lifestyle",
  description: "Your premier destination for gymnastics training, fitness culture, and athletic lifestyle content.",
  smartlink: "YOUR_ADSTERRA_SMARTLINK_HERE", // <-- REPLACE WITH YOUR ADSTERRA SMARTLINK
  social: {
    facebook:  "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube:   "https://youtube.com/",
    twitter:   "https://twitter.com/"
  }
};

// ============================================================
// CATEGORIES
// ============================================================
const CATEGORIES = [
  { id: "all",        label: "All",        icon: "layout-grid" },
  { id: "gymnastics", label: "Gymnastics", icon: "activity"    },
  { id: "fitness",    label: "Fitness",    icon: "dumbbell"    },
  { id: "lifestyle",  label: "Lifestyle",  icon: "sun"         },
  { id: "videos",     label: "Videos",     icon: "video"       },
  { id: "gallery",    label: "Gallery",    icon: "image"       },
];

// ============================================================
// POSTS (gymnastics, fitness, lifestyle)
// Trending = highest views. Latest = most recent by date.
// ============================================================
const POSTS = [
  // ─── Gymnastics ────────────────────────────────────────────
  {
    id: "gym-001",
    title: "Inside a Professional Gymnastics Training Session",
    description: "A rare behind-the-scenes look at what elite athletes go through during a full training day — from warm-up routines to final apparatus runs.",
    category: "gymnastics",
    tags: ["training", "gymnastics", "behind-the-scenes", "elite"],
    image: "https://picsum.photos/seed/gym-training-01/800/600",
    imageAlt: "Athlete performing a gymnastics routine on the balance beam during training",
    views: 48200,
    date: "2026-08-12",
    featured: true,
    trending: true,
    latest: true,
  },
  {
    id: "gym-002",
    title: "The Art of the Beam: Mastering Balance and Precision",
    description: "Exploring the technical demands of the balance beam apparatus and how elite gymnasts develop their unique style and confidence.",
    category: "gymnastics",
    tags: ["balance beam", "technique", "training", "gymnastics"],
    image: "https://picsum.photos/seed/gym-beam-02/800/600",
    imageAlt: "Close-up of a gymnast's feet on the balance beam with chalk dust",
    views: 36100,
    date: "2026-08-10",
    featured: false,
    trending: true,
    latest: true,
  },
  {
    id: "gym-003",
    title: "Floor Routine Highlights from Today's Practice",
    description: "Capturing the energy and expression that goes into crafting a competition-level floor routine, from choreography to execution.",
    category: "gymnastics",
    tags: ["floor exercise", "choreography", "training highlights"],
    image: "https://picsum.photos/seed/gym-floor-03/800/600",
    imageAlt: "Gymnast mid-leap during a floor exercise routine in a training hall",
    views: 29800,
    date: "2026-08-08",
    featured: false,
    trending: true,
    latest: false,
  },
  {
    id: "gym-004",
    title: "Vault Training: Power, Speed, and Split-Second Precision",
    description: "The vault demands explosive athleticism. We document how athletes build the runway approach speed and aerial control needed to compete.",
    category: "gymnastics",
    tags: ["vault", "power", "training", "gymnastics"],
    image: "https://picsum.photos/seed/gym-vault-04/800/550",
    imageAlt: "Gymnast in flight over the vault apparatus during a training session",
    views: 22400,
    date: "2026-08-06",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "gym-005",
    title: "Uneven Bars: A Study in Strength and Swing",
    description: "Every release move, every transition — unpacking the physical and mental preparation required for the uneven bars apparatus.",
    category: "gymnastics",
    tags: ["uneven bars", "strength", "technique"],
    image: "https://picsum.photos/seed/gym-bars-05/800/560",
    imageAlt: "Gymnast in mid-swing on the uneven bars, viewed from below",
    views: 19700,
    date: "2026-08-03",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "gym-006",
    title: "Morning Warm-Up: The Rituals That Fuel Champions",
    description: "Before any apparatus work begins, there's a methodical warm-up process. We captured an early morning session in full.",
    category: "gymnastics",
    tags: ["warm-up", "routine", "morning training", "gymnastics"],
    image: "https://picsum.photos/seed/gym-warmup-06/800/600",
    imageAlt: "Athletes stretching together on the gym floor during morning warm-up",
    views: 17300,
    date: "2026-07-31",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "gym-007",
    title: "Conditioning Week: Building the Foundation of Elite Performance",
    description: "Raw strength, body awareness, and conditioning underpin every skill. A look at the off-apparatus training that shapes champions.",
    category: "gymnastics",
    tags: ["conditioning", "strength training", "gymnastics"],
    image: "https://picsum.photos/seed/gym-conditioning-07/800/580",
    imageAlt: "Gymnast performing conditioning exercises on a gymnastics mat",
    views: 15600,
    date: "2026-07-28",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "gym-008",
    title: "Rhythmic Gymnastics: Grace, Flow, and Athletic Artistry",
    description: "Beyond the power events, rhythmic gymnastics blends dance, apparatus skill, and storytelling into one seamless performance.",
    category: "gymnastics",
    tags: ["rhythmic", "ribbon", "hoop", "artistry"],
    image: "https://picsum.photos/seed/gym-rhythmic-08/800/600",
    imageAlt: "Rhythmic gymnast performing with ribbon in an open training space",
    views: 13900,
    date: "2026-07-25",
    featured: false,
    trending: false,
    latest: false,
  },

  // ─── Fitness ───────────────────────────────────────────────
  {
    id: "fit-001",
    title: "Athletic Strength Training: A Full Week Documented",
    description: "Seven days inside a professional strength and conditioning program. From loading calculations to recovery protocols, every detail captured.",
    category: "fitness",
    tags: ["strength training", "conditioning", "workout", "documentary"],
    image: "https://picsum.photos/seed/fit-strength-01/800/600",
    imageAlt: "Athlete loading a barbell in a professional training facility",
    views: 41500,
    date: "2026-08-11",
    featured: false,
    trending: true,
    latest: true,
  },
  {
    id: "fit-002",
    title: "Functional Movement: Training the Body to Move Better",
    description: "Functional fitness focuses on movement patterns over isolated muscles. We explore how athletes apply these principles to sport-specific training.",
    category: "fitness",
    tags: ["functional fitness", "movement", "training", "mobility"],
    image: "https://picsum.photos/seed/fit-functional-02/800/560",
    imageAlt: "Athlete performing a functional movement exercise outdoors",
    views: 33200,
    date: "2026-08-09",
    featured: false,
    trending: true,
    latest: true,
  },
  {
    id: "fit-003",
    title: "Core Training Fundamentals: Building a Bulletproof Midsection",
    description: "Core strength is the foundation of every athletic movement. A deep dive into the exercises and principles that develop a truly strong core.",
    category: "fitness",
    tags: ["core training", "stability", "fitness", "workout"],
    image: "https://picsum.photos/seed/fit-core-03/800/600",
    imageAlt: "Athlete performing a plank variation on a gym floor",
    views: 28700,
    date: "2026-08-07",
    featured: false,
    trending: true,
    latest: false,
  },
  {
    id: "fit-004",
    title: "Recovery Science: What Happens After the Workout Ends",
    description: "The training session is only half the equation. Recovery nutrition, sleep, and active recovery are the other half — and they're often overlooked.",
    category: "fitness",
    tags: ["recovery", "nutrition", "sleep", "science"],
    image: "https://picsum.photos/seed/fit-recovery-04/800/580",
    imageAlt: "Athlete using foam roller during a recovery session",
    views: 24100,
    date: "2026-08-05",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "fit-005",
    title: "Mobility and Flexibility: The Often Ignored Athletic Edge",
    description: "Flexibility and mobility training are non-negotiable for injury-free performance. We document a specialist session with a sports physiotherapist.",
    category: "fitness",
    tags: ["mobility", "flexibility", "physio", "injury prevention"],
    image: "https://picsum.photos/seed/fit-mobility-05/800/600",
    imageAlt: "Athlete performing a hip flexor stretch on a training mat",
    views: 20300,
    date: "2026-08-02",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "fit-006",
    title: "HIIT Training Session: Maximum Output in Minimum Time",
    description: "High-intensity interval training distilled to its essentials — timing, effort, rest, and adaptation. We break down a full protocol.",
    category: "fitness",
    tags: ["HIIT", "cardio", "interval training", "fitness"],
    image: "https://picsum.photos/seed/fit-hiit-06/800/560",
    imageAlt: "Athlete sprinting on a track during a HIIT workout session",
    views: 18600,
    date: "2026-07-30",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "fit-007",
    title: "Olympic Lifting Fundamentals: Snatch and Clean & Jerk",
    description: "The Olympic lifts are among the most technically demanding movements in sport. We document a coaching session breaking down both lifts.",
    category: "fitness",
    tags: ["olympic lifting", "snatch", "clean and jerk", "technique"],
    image: "https://picsum.photos/seed/fit-oly-07/800/600",
    imageAlt: "Athlete in the catch position of a snatch lift in a weightlifting gym",
    views: 16200,
    date: "2026-07-27",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "fit-008",
    title: "Training Camp Diaries: Life Between Competitions",
    description: "What does a full training camp look like for elite athletes? From early morning sessions to evening film review, we went inside for a week.",
    category: "fitness",
    tags: ["training camp", "elite sport", "documentary", "athlete life"],
    image: "https://picsum.photos/seed/fit-camp-08/800/580",
    imageAlt: "Group of athletes training together during a morning session at a training camp",
    views: 14400,
    date: "2026-07-24",
    featured: false,
    trending: false,
    latest: false,
  },

  // ─── Lifestyle ─────────────────────────────────────────────
  {
    id: "life-001",
    title: "The Athlete's Morning Routine: How Champions Start Their Day",
    description: "From the first alarm to the gym door, we document the morning rituals that set elite athletes up for their best training days.",
    category: "lifestyle",
    tags: ["morning routine", "lifestyle", "habits", "athlete life"],
    image: "https://picsum.photos/seed/life-morning-01/800/600",
    imageAlt: "Athlete preparing for a morning run at sunrise in an urban setting",
    views: 39100,
    date: "2026-08-12",
    featured: false,
    trending: true,
    latest: true,
  },
  {
    id: "life-002",
    title: "Athletic Nutrition: What a Day of Eating Looks Like for a Gymnast",
    description: "Fueling elite performance requires precision nutrition. We followed one athlete for a full day to document every meal and snack.",
    category: "lifestyle",
    tags: ["nutrition", "meal prep", "athlete diet", "gymnastics"],
    image: "https://picsum.photos/seed/life-nutrition-02/800/560",
    imageAlt: "Colorful array of athletic meal prep containers with balanced nutrition",
    views: 31500,
    date: "2026-08-10",
    featured: false,
    trending: true,
    latest: true,
  },
  {
    id: "life-003",
    title: "Behind the Lens: Photographing Athletic Movement",
    description: "Sports photography captures split-second moments of pure athleticism. We went behind the camera to understand how these shots are made.",
    category: "lifestyle",
    tags: ["photography", "sports", "behind the scenes", "creative"],
    image: "https://picsum.photos/seed/life-photo-03/800/600",
    imageAlt: "Sports photographer capturing a gymnastics session from a low angle",
    views: 27200,
    date: "2026-08-08",
    featured: false,
    trending: true,
    latest: false,
  },
  {
    id: "life-004",
    title: "Rest Day Rituals: Recovery, Mindfulness, and Mental Reset",
    description: "Elite athletes understand that rest days are training days. We explore the recovery practices and mindfulness routines that sustain long careers.",
    category: "lifestyle",
    tags: ["recovery", "mindfulness", "mental health", "rest day"],
    image: "https://picsum.photos/seed/life-rest-04/800/580",
    imageAlt: "Athlete in a peaceful outdoor setting practicing mindfulness during a rest day",
    views: 23800,
    date: "2026-08-06",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "life-005",
    title: "The Training Facility: Inside a World-Class Gymnastics Gym",
    description: "Equipment, layout, atmosphere — the training environment shapes performance. A tour of a state-of-the-art gymnastics training center.",
    category: "lifestyle",
    tags: ["gym tour", "facility", "training environment", "gymnastics"],
    image: "https://picsum.photos/seed/life-facility-05/800/600",
    imageAlt: "Wide angle view of a professional gymnastics training facility with all apparatus",
    views: 21400,
    date: "2026-08-04",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "life-006",
    title: "Athlete Style Off the Mat: Fashion Meets Functionality",
    description: "Athletic fashion has entered the mainstream. We explore how performance athletes style themselves outside of competition and training.",
    category: "lifestyle",
    tags: ["fashion", "athleisure", "style", "athlete lifestyle"],
    image: "https://picsum.photos/seed/life-style-06/800/560",
    imageAlt: "Athlete in athleisure wear walking through an urban environment",
    views: 18900,
    date: "2026-08-01",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "life-007",
    title: "Mental Performance: The Psychology of Elite Athletic Training",
    description: "Physical preparation is only part of the equation. Sports psychologists and elite athletes share their mental performance strategies.",
    category: "lifestyle",
    tags: ["mental performance", "psychology", "sports", "focus"],
    image: "https://picsum.photos/seed/life-mental-07/800/600",
    imageAlt: "Athlete in focused concentration before a training session, eyes closed",
    views: 16700,
    date: "2026-07-29",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "life-008",
    title: "Travel and Training: Competing Across Continents",
    description: "Top athletes compete globally. We explore how they manage training consistency, jet lag, and performance preparation across time zones.",
    category: "lifestyle",
    tags: ["travel", "competition", "global sport", "preparation"],
    image: "https://picsum.photos/seed/life-travel-08/800/580",
    imageAlt: "Athlete with sports bag at an airport terminal, ready for travel to competition",
    views: 14100,
    date: "2026-07-26",
    featured: false,
    trending: false,
    latest: false,
  },

  // ─── Additional trending/latest items ──────────────────────
  {
    id: "trend-extra-01",
    title: "Breaking Down the Perfect Handstand: A Technical Guide",
    description: "The handstand is fundamental to gymnastics and calisthenics alike. A technical breakdown of alignment, tension, and balance.",
    category: "gymnastics",
    tags: ["handstand", "technique", "fundamentals", "calisthenics"],
    image: "https://picsum.photos/seed/trend-handstand/800/600",
    imageAlt: "Athlete holding a perfect handstand on a gymnastics floor",
    views: 45300,
    date: "2026-08-11",
    featured: false,
    trending: true,
    latest: true,
  },
  {
    id: "trend-extra-02",
    title: "Sprint Mechanics: How Top Athletes Move at Maximum Speed",
    description: "Speed is technique applied at intensity. A biomechanical breakdown of elite sprint mechanics from a coaching perspective.",
    category: "fitness",
    tags: ["sprinting", "speed", "biomechanics", "athletics"],
    image: "https://picsum.photos/seed/trend-sprint/800/600",
    imageAlt: "Athlete in full sprint on an athletics track with perfect form",
    views: 38900,
    date: "2026-08-11",
    featured: false,
    trending: true,
    latest: true,
  },
  {
    id: "trend-extra-03",
    title: "Training Day Highlights: An Elite Session Captured",
    description: "Raw, unedited documentation of a full competitive training session — the intensity, the mistakes, the breakthroughs, all of it.",
    category: "gymnastics",
    tags: ["training", "highlights", "gymnastics", "documentary"],
    image: "https://picsum.photos/seed/trend-highlights/800/580",
    imageAlt: "Multiple gymnasts training simultaneously in a large training hall",
    views: 35700,
    date: "2026-08-10",
    featured: false,
    trending: true,
    latest: true,
  },
  {
    id: "trend-extra-04",
    title: "Plyometric Power: Building Explosive Athleticism",
    description: "Jump training, plyometrics, and reactive strength are the building blocks of explosive sport performance. A practical training guide.",
    category: "fitness",
    tags: ["plyometrics", "explosive power", "jumping", "training"],
    image: "https://picsum.photos/seed/trend-plyo/800/600",
    imageAlt: "Athlete performing box jumps during a plyometric training session",
    views: 30200,
    date: "2026-08-09",
    featured: false,
    trending: true,
    latest: true,
  },
];

// ============================================================
// VIDEOS
// ============================================================
const VIDEOS = [
  {
    id: "vid-001",
    title: "Full Training Session — Elite Gymnastics Documentary",
    description: "An unfiltered look at a complete training day from start to finish. From the first warm-up stretch to the final apparatus routine, this is elite gymnastics training at its most honest.",
    category: "videos",
    tags: ["documentary", "training", "gymnastics", "behind the scenes"],
    image: "https://picsum.photos/seed/vid-doc-01/800/450",
    imageAlt: "Video thumbnail showing a gymnast performing during a full training session",
    views: 54200,
    date: "2026-08-12",
    duration: "18:34",
    featured: true,
    trending: true,
    latest: true,
  },
  {
    id: "vid-002",
    title: "Gymnastics Skills Progression: From Beginner to Advanced",
    description: "A structured look at how gymnastic skills develop over years of training — from foundational rolls and cartwheels to elite-level elements.",
    category: "videos",
    tags: ["skills", "progression", "gymnastics", "tutorial"],
    image: "https://picsum.photos/seed/vid-progression-02/800/450",
    imageAlt: "Side-by-side progression of a gymnast's skill development",
    views: 42800,
    date: "2026-08-10",
    duration: "24:12",
    featured: false,
    trending: true,
    latest: true,
  },
  {
    id: "vid-003",
    title: "Strength and Conditioning for Gymnasts",
    description: "A complete strength and conditioning circuit used by competitive gymnasts, with progressions for different levels of athlete.",
    category: "videos",
    tags: ["strength", "conditioning", "gymnastics", "workout"],
    image: "https://picsum.photos/seed/vid-conditioning-03/800/450",
    imageAlt: "Gymnast performing conditioning exercises in a gym setting",
    views: 38100,
    date: "2026-08-08",
    duration: "31:07",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "vid-004",
    title: "Inside the Weight Room: Lifting Programs for Athletes",
    description: "How do gymnasts and fitness athletes approach weight room training? A coaching walkthrough of a periodized training block.",
    category: "videos",
    tags: ["weight room", "lifting", "programming", "fitness"],
    image: "https://picsum.photos/seed/vid-lifting-04/800/450",
    imageAlt: "Athletic coach demonstrating a lift to athletes in a weight room",
    views: 29600,
    date: "2026-08-06",
    duration: "22:45",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "vid-005",
    title: "Morning Mobility Flow: 20-Minute Athlete Routine",
    description: "Start every training day right with this 20-minute mobility flow designed for athletes who need to move well and feel good.",
    category: "videos",
    tags: ["mobility", "morning routine", "flexibility", "warm-up"],
    image: "https://picsum.photos/seed/vid-mobility-05/800/450",
    imageAlt: "Athlete performing morning mobility exercises on a gym mat",
    views: 25300,
    date: "2026-08-04",
    duration: "20:00",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "vid-006",
    title: "Competition Day Prep: Mental and Physical Readiness",
    description: "Everything that goes into preparing for a competition day — from nutrition timing to mental activation strategies used by top athletes.",
    category: "videos",
    tags: ["competition", "preparation", "mental performance", "athlete"],
    image: "https://picsum.photos/seed/vid-compday-06/800/450",
    imageAlt: "Athlete warming up and preparing backstage before a gymnastics competition",
    views: 22100,
    date: "2026-08-02",
    duration: "16:28",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "vid-007",
    title: "Training Camp Day 1–7: A Full Week Documented",
    description: "Day-by-day documentation of a seven-day intensive training camp for competitive gymnasts. Unscripted and unfiltered.",
    category: "videos",
    tags: ["training camp", "vlog", "gymnastics", "weekly"],
    image: "https://picsum.photos/seed/vid-camp-07/800/450",
    imageAlt: "Wide shot of a training camp facility with athletes at work",
    views: 19800,
    date: "2026-07-31",
    duration: "44:15",
    featured: false,
    trending: false,
    latest: false,
  },
  {
    id: "vid-008",
    title: "Floor Routine Choreography: From Concept to Performance",
    description: "How does a floor routine come together? Choreographers and athletes walk through the creative and technical process behind a competition routine.",
    category: "videos",
    tags: ["choreography", "floor exercise", "creative process", "gymnastics"],
    image: "https://picsum.photos/seed/vid-choreo-08/800/450",
    imageAlt: "Choreographer and gymnast reviewing floor routine movements together",
    views: 17400,
    date: "2026-07-29",
    duration: "28:53",
    featured: false,
    trending: false,
    latest: false,
  },
];

// ============================================================
// GALLERY ITEMS
// ============================================================
const GALLERY_ITEMS = [
  {
    id: "gal-001",
    title: "Training Hall — Light and Shadow",
    description: "The unique light quality of a gymnastics training hall, captured during an afternoon session.",
    category: "gallery",
    tags: ["photography", "training hall", "light", "atmosphere"],
    image: "https://picsum.photos/seed/gal-light-01/600/900",
    imageAlt: "Artistic photograph of a gymnastics training hall with dramatic natural light",
    views: 31200,
    date: "2026-08-11",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "gal-002",
    title: "The Jump — Aerial Athleticism",
    description: "A freeze-frame moment at the peak of a gymnast's leap, suspended against a clean background.",
    category: "gallery",
    tags: ["aerial", "jump", "gymnastics", "action"],
    image: "https://picsum.photos/seed/gal-jump-02/900/600",
    imageAlt: "Gymnast at the apex of a leap with arms extended, frozen in time",
    views: 27400,
    date: "2026-08-10",
    aspectRatio: "landscape",
    featured: false,
  },
  {
    id: "gal-003",
    title: "Chalk Clouds — The Texture of Training",
    description: "Gymnastics chalk creates a distinctive visual atmosphere in the training hall. A texture study.",
    category: "gallery",
    tags: ["chalk", "texture", "detail", "gymnastics"],
    image: "https://picsum.photos/seed/gal-chalk-03/600/800",
    imageAlt: "Close-up of gymnast's hands covered in chalk with chalk cloud in background",
    views: 24800,
    date: "2026-08-09",
    aspectRatio: "portrait",
    featured: false,
  },
  {
    id: "gal-004",
    title: "Floor Level — A Different Perspective",
    description: "Photographing from the gym floor offers a completely different view of gymnastics movement.",
    category: "gallery",
    tags: ["perspective", "floor level", "photography", "gymnastics"],
    image: "https://picsum.photos/seed/gal-floor-04/900/600",
    imageAlt: "Low angle shot of a gymnast performing on the floor, shot from ground level",
    views: 21600,
    date: "2026-08-07",
    aspectRatio: "landscape",
    featured: false,
  },
  {
    id: "gal-005",
    title: "Grip Study — Strength in Detail",
    description: "The hands of an athlete tell the story of years of training. A detailed portrait study.",
    category: "gallery",
    tags: ["portrait", "detail", "hands", "strength"],
    image: "https://picsum.photos/seed/gal-grip-05/600/900",
    imageAlt: "Detailed close-up of an athlete's gripped hands showing strength and calluses",
    views: 19300,
    date: "2026-08-05",
    aspectRatio: "portrait",
    featured: false,
  },
  {
    id: "gal-006",
    title: "Bars in Motion — The Blur of Speed",
    description: "Long-exposure technique captures the fluid motion of a bar routine in a single image.",
    category: "gallery",
    tags: ["motion blur", "bars", "long exposure", "technique"],
    image: "https://picsum.photos/seed/gal-bars-06/900/600",
    imageAlt: "Long exposure photograph showing the motion blur of a gymnast on the uneven bars",
    views: 16800,
    date: "2026-08-03",
    aspectRatio: "landscape",
    featured: false,
  },
  {
    id: "gal-007",
    title: "The Scale — Balance and Artistry",
    description: "A series of balance poses that showcase the intersection of athletic control and artistic expression.",
    category: "gallery",
    tags: ["balance", "artistic", "pose", "gymnastics"],
    image: "https://picsum.photos/seed/gal-balance-07/600/800",
    imageAlt: "Gymnast holding a scale pose on the balance beam with perfect form",
    views: 14600,
    date: "2026-07-31",
    aspectRatio: "portrait",
    featured: false,
  },
  {
    id: "gal-008",
    title: "Team — The Collective Effort",
    description: "Gymnastics is an individual sport with team spirit. A group portrait from a practice session.",
    category: "gallery",
    tags: ["team", "group", "portrait", "community"],
    image: "https://picsum.photos/seed/gal-team-08/900/600",
    imageAlt: "Group of athletes together after a training session, smiling and supporting each other",
    views: 12900,
    date: "2026-07-29",
    aspectRatio: "landscape",
    featured: false,
  },
];

// ============================================================
// DERIVED COLLECTIONS (convenience exports)
// ============================================================

// All posts combined
const ALL_CONTENT = [...POSTS, ...VIDEOS, ...GALLERY_ITEMS];

// Trending: top 12 by views across all posts
const TRENDING = [...POSTS]
  .filter(p => p.trending)
  .sort((a, b) => b.views - a.views)
  .slice(0, 12);

// Latest: 12 most recent posts
const LATEST = [...POSTS]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 12);

// By category
const BY_CATEGORY = {
  gymnastics: POSTS.filter(p => p.category === "gymnastics"),
  fitness:    POSTS.filter(p => p.category === "fitness"),
  lifestyle:  POSTS.filter(p => p.category === "lifestyle"),
  videos:     VIDEOS,
  gallery:    GALLERY_ITEMS,
};

// Featured hero item (highest-viewed featured post)
const HERO_ITEM = ALL_CONTENT.find(p => p.featured) || ALL_CONTENT[0];

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

/**
 * Format a view count to a human-readable string.
 * e.g. 48200 → "48.2K"
 */
function formatViews(views) {
  if (views >= 1000000) return (views / 1000000).toFixed(1) + "M";
  if (views >= 1000)    return (views / 1000).toFixed(1) + "K";
  return views.toString();
}

/**
 * Format an ISO date string to a readable format.
 * e.g. "2026-08-12" → "Aug 12, 2026"
 */
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

/**
 * Get the relative path prefix based on whether we're on the root or in /pages/.
 * Pass "root" for index.html, "pages" for anything in /pages/.
 */
function getPathPrefix(location = "root") {
  return location === "pages" ? "../" : "";
}

/**
 * Search content by query string (title, category, tags).
 */
function searchContent(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return ALL_CONTENT.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q) ||
    (item.tags && item.tags.some(tag => tag.toLowerCase().includes(q))) ||
    (item.description && item.description.toLowerCase().includes(q))
  );
}
