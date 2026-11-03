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
  }
]
