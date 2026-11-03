// Featured projects. Image paths are relative to /public.
export const ROLE = 'Figma design and prototyping + front-end development'

export const projects = [
  {
    "slug": "elvion",
    "title": "Elvion: Natural Skincare E-Commerce",
    "category": "E-commerce",
    "summary": "E-commerce website for a natural, handmade soap brand with ingredient highlights, a product grid with Add to cart, testimonials and newsletter sign-up.",
    "tags": [
      "WordPress",
      "Elementor",
      "WooCommerce"
    ],
    "live": "https://elvion.ayahtek.com/",
    "cover": "images/projects/elvion/cover.jpg",
    "description": [
      "Elvion is an e-commerce website for a natural, handmade soap brand. The goal was to make a gentle, botanical brand feel premium online while keeping it simple to browse and buy.",
      "The page opens with a warm cream hero and a clear Shop Now button, then explains what makes the soaps special with three short trust points: organically sourced ingredients, gentle for all skin types, and recyclable packaging. A six-soap product grid shows each bar with its name, its price in pesos and an Add to cart button.",
      "Customer testimonials, a newsletter sign-up and a full footer finish the page. A deep green, cream and coral palette keeps the focus on the products, and the layout adapts from laptop to mobile."
    ],
    "features": [
      "Hero with a clear call to action",
      "Ingredient and trust highlights",
      "Product grid with prices and Add to cart",
      "Customer testimonials",
      "Newsletter sign-up and full footer",
      "Responsive on desktop and mobile"
    ],
    "screenshots": [
      {
        "src": "images/projects/elvion/home_and_ingredients.jpg",
        "caption": "home_and_ingredients.png",
        "mobile": false
      },
      {
        "src": "images/projects/elvion/products_and_cta.jpg",
        "caption": "products_and_cta.png",
        "mobile": false
      },
      {
        "src": "images/projects/elvion/testimonials_and_footer.jpg",
        "caption": "testimonials_and_footer.png",
        "mobile": false
      }
    ]
  },
  {
    "slug": "pet-booking",
    "title": "Pet Booking Website & Management System",
    "category": "Booking + Admin System",
    "summary": "Public booking website for a pet hotel plus an admin system with a dashboard, reservations, customer and pet profiles, and roles and permissions.",
    "tags": [
      "Nuxt",
      "Laravel",
      "Tailwind CSS",
      "Figma"
    ],
    "cover": "images/projects/pet-booking/cover.jpg",
    "description": [
      "Furiends Pet Hotel & Supplies needed one place for pet owners to book daycare and boarding, and for staff to run the business behind it. This project covers both: a public booking website and an admin management system.",
      "The website introduces the brand with a friendly purple and yellow hero, a Book Now button, and service cards for daycare, overnight and unlimited boarding. It also covers the brand story and goals, key numbers, a contact form with head office details and branches, and a footer that lists PayMaya, GCash and QR Ph as payment options.",
      "The management system, called Pet System, gives staff a dashboard with today's appointments, a date strip, and totals for reservations, customers, pets and hotel availability. Reservations are tracked by status in a searchable table, customers have profile pages with their pets' details, and the sidebar also covers the appointment calendar, services, branch locations, wallet, admin users, and roles and permissions."
    ],
    "features": [
      "Public website with services, about, contact form and branches",
      "Footer lists PayMaya, GCash and QR Ph payment options",
      "Admin dashboard with today's appointments and key totals",
      "Reservations table with status tags, search and pagination",
      "Customer profiles with each pet's details",
      "Roles and permissions for admin users",
      "Responsive on desktop, tablet and mobile"
    ],
    "screenshots": [
      {
        "src": "images/projects/pet-booking/website_homepage.jpg",
        "caption": "website_homepage.png",
        "mobile": false
      },
      {
        "src": "images/projects/pet-booking/admin_dashboard.jpg",
        "caption": "admin_dashboard.png",
        "mobile": false
      },
      {
        "src": "images/projects/pet-booking/admin_reservations.jpg",
        "caption": "admin_reservations.png",
        "mobile": false
      },
      {
        "src": "images/projects/pet-booking/customer_profile.jpg",
        "caption": "customer_profile.png",
        "mobile": false
      }
    ]
  },
  {
    "slug": "hr-system",
    "title": "HR & Employee Management System",
    "category": "HR System",
    "summary": "Lets business owners manage employee leave, payslips, expense requests, attendance and employee records, with a dashboard, an AskHR assistant and admin controls.",
    "tags": [
      "Vue",
      "Laravel",
      "Tailwind CSS",
      "Figma"
    ],
    "cover": "images/projects/hr-system/cover.jpg",
    "description": [
      "Empleo is an HR and employee management system that lets a business owner run day-to-day people operations in one place, including employee leave, payslips and expense requests.",
      "The dashboard gives a quick read of the organization: total employees and trainees, who is present today, and open leave requests, along with leave and expense breakdowns, announcements, payroll status, the leave roster and monthly celebrants. A side panel adds AskHR, a chat assistant for questions about employees and policies, shortcuts that draft documents such as offer letters, and short insights like attendance trends.",
      "Employee records can be searched and filtered by designation, employment type, status and date, and exported. Each employee has a profile with tabs for personal information, emergency contact, bank and social benefit details, work information, a milestone timeline of roles and salary changes, and history. An admin panel sets leave credits, designations, and roles and permissions."
    ],
    "features": [
      "Dashboard with headcount, attendance and open leave requests",
      "Leave request and expense request tracking",
      "Payslip and payroll status",
      "Attendance and work schedule",
      "Employee directory with search, filters and export",
      "Employee profiles with a milestone timeline",
      "AskHR assistant, automation shortcuts and insights",
      "Roles and permissions, leave credits and designations"
    ],
    "screenshots": [
      {
        "src": "images/projects/hr-system/dashboard.jpg",
        "caption": "dashboard.png",
        "mobile": false
      },
      {
        "src": "images/projects/hr-system/employees.jpg",
        "caption": "employees.png",
        "mobile": false
      },
      {
        "src": "images/projects/hr-system/employee_personal_info.jpg",
        "caption": "employee_personal_info.png",
        "mobile": false
      },
      {
        "src": "images/projects/hr-system/employee_milestone.jpg",
        "caption": "employee_milestone.png",
        "mobile": false
      }
    ]
  },
  {
    "slug": "kido-play",
    "title": "Children’s Training & Booking Platform",
    "category": "Booking Platform",
    "summary": "Booking system where parents find activities and enroll their children, with credit packages, gift cards and a parent account showing booking records.",
    "tags": [
      "Nuxt",
      "Supabase",
      "Tailwind CSS",
      "Figma"
    ],
    "cover": "images/projects/kido-play/cover.jpg",
    "description": [
      "Kido Play (Kidopass) is a booking platform where parents can find training and activities for their children and enroll them in a few clicks. It brings sports, arts, music and camps into one place.",
      "Parents browse activities and filter by location, age, category, sub category and date, then view a class schedule and book. Bookings are paid with Kidopass credits: families pick a credit package or redeem a gift card, then use the credits to book activities. Gift cards come in set credit amounts and can be shared with other families.",
      "Each parent has an account area with a view of classes happening today, booking records with ongoing, completed and cancelled statuses, credit balance and history, profiles for their kids, and profile and password settings. A bright, playful look in red, blue, yellow and teal keeps it friendly for families."
    ],
    "features": [
      "Activity search by location, age, category and date",
      "Class schedules and online booking",
      "Booking records with ongoing, completed and cancelled statuses",
      "Credit packages and gift cards",
      "My Kids profiles for each child",
      "Dashboard of today's classes and reminders",
      "Account and password settings",
      "Responsive on desktop, tablet and mobile"
    ],
    "screenshots": [
      {
        "src": "images/projects/kido-play/about.jpg",
        "caption": "about.png",
        "mobile": false
      },
      {
        "src": "images/projects/kido-play/find_activities.jpg",
        "caption": "find_activities.png",
        "mobile": false
      },
      {
        "src": "images/projects/kido-play/account_and_booking_records.jpg",
        "caption": "account_and_booking_records.png",
        "mobile": false
      },
      {
        "src": "images/projects/kido-play/how_credits_work.jpg",
        "caption": "how_credits_work.png",
        "mobile": false
      },
      {
        "src": "images/projects/kido-play/gift_card.jpg",
        "caption": "gift_card.png",
        "mobile": false
      }
    ]
  },
  {
    "slug": "barangay",
    "title": "Barangay Management System",
    "category": "Government System + Mobile App",
    "summary": "Web system for a barangay to manage residents, businesses, documents and cases, with a mobile app for residents to request documents such as a barangay certificate.",
    "tags": [
      "Vue",
      "Laravel",
      "Tailwind CSS",
      "Figma"
    ],
    "cover": "images/projects/barangay/cover.jpg",
    "description": [
      "The Barangay Management System helps a barangay manage its residents, businesses, documents and cases in one place, and gives residents a mobile app to request documents, such as a barangay certificate, without visiting the barangay hall.",
      "On the web side, barangay staff get a dashboard with total population, households and families, special sectors such as senior citizens, persons with disability, solo parents and 4Ps beneficiaries, peace and order cases, businesses and permits, collections by document type, programs, announcements and admin users. A data section holds resident, family and household records that can be searched, filtered, imported and turned into reports. The menu also covers services, documents, disaster risk reduction (DRRM) and admin settings.",
      "The resident mobile app has a simple sign in, a home screen with announcements and the latest news, and a request for documents shortcut for items like clearances and certificates. A bottom bar gives quick access to news, transactions and the resident profile."
    ],
    "features": [
      "Dashboard with population, households and special sectors",
      "Resident, family and household records with search and import",
      "Reports and export",
      "Business permits and document collections",
      "Peace and order and incident tracking",
      "Announcements, news and programs",
      "Mobile app for residents to request barangay documents",
      "Roles for barangay admins and staff"
    ],
    "screenshots": [
      {
        "src": "images/projects/barangay/dashboard.jpg",
        "caption": "dashboard.png",
        "mobile": false
      },
      {
        "src": "images/projects/barangay/resident_data.jpg",
        "caption": "resident_data.png",
        "mobile": false
      },
      {
        "src": "images/projects/barangay/mobile_login.jpg",
        "caption": "mobile_login.png",
        "mobile": true
      },
      {
        "src": "images/projects/barangay/mobile_home.jpg",
        "caption": "mobile_home.png",
        "mobile": true
      }
    ]
  },
  {
    "slug": "hydrogenman",
    "title": "Hydrogen Man Solutions",
    "category": "E-commerce · WordPress",
    "summary": "Online store for hydrogen water systems and wellness products, with a shop, product pages, cart and checkout, plus wellness education and customer care pages.",
    "tags": [
      "WordPress",
      "Elementor",
      "WooCommerce"
    ],
    "live": "https://hydrogenmansolutions.com/",
    "cover": "images/projects/hydrogenman/cover.jpg",
    "description": [
      "Hydrogen Man Solutions sells hydrogen and terahertz-enhanced water products, along with beauty and home wellness items. The site needed to explain a technical product simply and make it easy to buy.",
      "The store covers hydrogen water dispensers, vending systems, bottles and filters, plus beauty items like hydrogen eye and steam masks. Product pages show monthly installment pricing, a Best Sellers section highlights top products, and checkout supports card payments.",
      "Supporting pages explain the technology, share wellness guides and articles, and cover FAQs, shipping, returns and the 1-year replacement warranty."
    ],
    "features": [
      "Shop with product pages, cart and secure checkout",
      "Monthly installment pricing",
      "Best Sellers section",
      "Our Technology and Wellness Education pages",
      "Customer Care: FAQs, shipping, returns, warranty",
      "Responsive on desktop and mobile"
    ],
    "screenshots": [
      {
        "src": "images/projects/hydrogenman/desktop_1.jpg",
        "caption": "Desktop · part 1 of 4",
        "mobile": false
      },
      {
        "src": "images/projects/hydrogenman/desktop_2.jpg",
        "caption": "Desktop · part 2 of 4",
        "mobile": false
      },
      {
        "src": "images/projects/hydrogenman/desktop_3.jpg",
        "caption": "Desktop · part 3 of 4",
        "mobile": false
      },
      {
        "src": "images/projects/hydrogenman/desktop_4.jpg",
        "caption": "Desktop · part 4 of 4",
        "mobile": false
      },
      {
        "src": "images/projects/hydrogenman/mobile_1.jpg",
        "caption": "Mobile · part 1 of 2",
        "mobile": true
      },
      {
        "src": "images/projects/hydrogenman/mobile_2.jpg",
        "caption": "Mobile · part 2 of 2",
        "mobile": true
      }
    ]
  },
  {
    "slug": "ayahtek",
    "title": "Ayahtek",
    "category": "Company Website · WordPress",
    "summary": "Company website for a tech studio serving governments, schools and businesses, covering services, products, case studies, careers and a consultation form.",
    "tags": [
      "WordPress",
      "Elementor"
    ],
    "live": "https://ayahtek.com/",
    "cover": "images/projects/ayahtek/cover.jpg",
    "description": [
      "Ayahtek is a tech company with offices in Singapore and Pasig that builds digital solutions for governments, schools and private businesses, under the line “Simplifying Digital Solutions”.",
      "The site presents its services (custom software and web apps, website design, mobile apps, e-commerce and eKYC identity verification) and its own products: Empleo, CoolHub and Siklab.",
      "Case studies, templates, careers and an about page round out the site, backed by cloud and school partner logos. A consultation form with Schedule a call and View our projects buttons turns visitors into leads."
    ],
    "features": [
      "Services and products overview",
      "Case studies and templates",
      "Careers and about pages",
      "Partner and client logos",
      "Consultation form with Schedule a call",
      "Responsive on desktop and mobile"
    ],
    "screenshots": [
      {
        "src": "images/projects/ayahtek/desktop_1.jpg",
        "caption": "Desktop · part 1 of 4",
        "mobile": false
      },
      {
        "src": "images/projects/ayahtek/desktop_2.jpg",
        "caption": "Desktop · part 2 of 4",
        "mobile": false
      },
      {
        "src": "images/projects/ayahtek/desktop_3.jpg",
        "caption": "Desktop · part 3 of 4",
        "mobile": false
      },
      {
        "src": "images/projects/ayahtek/desktop_4.jpg",
        "caption": "Desktop · part 4 of 4",
        "mobile": false
      },
      {
        "src": "images/projects/ayahtek/mobile_1.jpg",
        "caption": "Mobile · part 1 of 2",
        "mobile": true
      },
      {
        "src": "images/projects/ayahtek/mobile_2.jpg",
        "caption": "Mobile · part 2 of 2",
        "mobile": true
      }
    ]
  },
  {
    "slug": "liftnow",
    "title": "LiftNow PH",
    "category": "Landing Page · WordPress",
    "summary": "One-page site for a bottled water brand whose profits fund scholarships for Filipino students, with the scholarship story, partners and ways to contribute.",
    "tags": [
      "WordPress",
      "Elementor"
    ],
    "live": "https://liftnowph.com/",
    "cover": "images/projects/liftnow/cover.jpg",
    "description": [
      "LiftNow PH, based in Los Baños, Laguna, sells LIFT bottled drinking water and uses its profits to fund scholarships for Filipino students.",
      "The one-page site tells that story in order: the brand and its 9-stage filtration, the scholarship program with scholar profiles and funding goals, partner testimonials and logos in the Game Changer section, and how to help.",
      "Visitors can contribute by ordering water, pledging a case for a donation drive, or subscribing monthly as a partner. Order Now buttons link to the brand's Facebook page, and contact details close the page."
    ],
    "features": [
      "Single-page layout with anchor navigation",
      "Scholarship program and scholar profiles",
      "Partner testimonials and logos",
      "Three ways to contribute",
      "Order Now and contact links",
      "Responsive on desktop and mobile"
    ],
    "screenshots": [
      {
        "src": "images/projects/liftnow/desktop_1.jpg",
        "caption": "Desktop · part 1 of 4",
        "mobile": false
      },
      {
        "src": "images/projects/liftnow/desktop_2.jpg",
        "caption": "Desktop · part 2 of 4",
        "mobile": false
      },
      {
        "src": "images/projects/liftnow/desktop_3.jpg",
        "caption": "Desktop · part 3 of 4",
        "mobile": false
      },
      {
        "src": "images/projects/liftnow/desktop_4.jpg",
        "caption": "Desktop · part 4 of 4",
        "mobile": false
      },
      {
        "src": "images/projects/liftnow/mobile_1.jpg",
        "caption": "Mobile · part 1 of 2",
        "mobile": true
      },
      {
        "src": "images/projects/liftnow/mobile_2.jpg",
        "caption": "Mobile · part 2 of 2",
        "mobile": true
      }
    ]
  },
  {
    "slug": "empleo",
    "title": "Empleo",
    "category": "Landing Page",
    "summary": "Landing page for Empleo, an AI-powered HR platform that makes attendance and payroll simple and affordable for growing Philippine businesses.",
    "tags": [
      "Landing page"
    ],
    "live": "https://empleospace.com/",
    "cover": "images/projects/empleo/cover.jpg",
    "description": [
      "Empleo is an all-in-one HR platform for small and growing businesses, from the very first employee. The landing page introduces it with the line “Attendance and payroll, made simple and affordable.”",
      "The hero pairs that message with laptop and phone mockups of the app, a Become a Pilot User button and a Get it on Google Play badge, plus three trust points. A partners strip follows, then the features: attendance, leave management, team and people, payroll, reports, memos and announcements, cash advance, loans and Ask Pleo, an AI assistant.",
      "A Why Empleo section, a three-step How it works (create your account, onboard your team, start managing), a pilot program sign-up, a Request a Demo card and a newsletter footer finish the page."
    ],
    "features": [
      "Hero with app mockups and Google Play badge",
      "Partner logos",
      "Feature grid covering HR, payroll and AI assistance",
      "Why Empleo benefits list",
      "3-step How it works",
      "Pilot program and demo request calls to action",
      "Responsive on desktop and mobile"
    ],
    "screenshots": [
      {
        "src": "images/projects/empleo/desktop_1.jpg",
        "caption": "Desktop · part 1 of 3",
        "mobile": false
      },
      {
        "src": "images/projects/empleo/desktop_2.jpg",
        "caption": "Desktop · part 2 of 3",
        "mobile": false
      },
      {
        "src": "images/projects/empleo/desktop_3.jpg",
        "caption": "Desktop · part 3 of 3",
        "mobile": false
      },
      {
        "src": "images/projects/empleo/mobile_1.jpg",
        "caption": "Mobile · part 1 of 2",
        "mobile": true
      },
      {
        "src": "images/projects/empleo/mobile_2.jpg",
        "caption": "Mobile · part 2 of 2",
        "mobile": true
      }
    ]
  }
]
