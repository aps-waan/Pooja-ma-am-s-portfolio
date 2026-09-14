# Pooja Bhatt – Executive Portfolio Website Implementation Plan

Design and develop a high-end, responsive portfolio web application for **Pooja Bhatt**, Senior MIS Analyst, Data Analyst, and Corporate Trainer (Excel & Power BI), ready for seamless deployment on Vercel.

## Background & Creative Direction
- **Target Audience**: Corporate clients, university deans, hiring managers, and prospective training attendees.
- **Client Persona**: 10+ years of high-impact experience spanning Fortune 500 & premier enterprises (Mercedes-Benz, Tanishq, CGC University, Chitkara University, ShipHaven US Clients, Shine Logistics, Cogneesol).
- **Color Palette & Lucky Color**: 
  - The client specifically expressed an affinity for **Orange / Warm Amber** while cautioning against overly dark or harsh tones (*"It's yellow, Orange actually but.. I guess bht dark hoga toh"*).
  - We engineered a calibrated **Executive Warm Amber & Sunset Orange Palette** (`#F97316`, `#EA580C`, `#F59E0B`, `#FEF08A`), anchored by deep obsidian slate (`#0B0F17`) with glowing amber glassmorphic accents, accompanied by a **Dual Theme Switcher (Dark & Crisp Executive Light Mode)** so she can enjoy both a sleek modern dark mode and a crisp corporate light mode.
- **StitchMCP Integration**: Generated design system tokens, typography pairing (*Plus Jakarta Sans* + *JetBrains Mono* for data), layout metrics, and component blueprints from Stitch.

---

## User Review Required

> [!IMPORTANT]
> **Tech Stack Selection**:
> We will build the application using **Vite + React 18 + TypeScript + Tailwind CSS + Lucide Icons**.
> - Produces a blazing-fast, single-page application.
> - Zero server overhead; 1-click zero-config deployment on Vercel (`dist` output).
> - Fully typed data model for all 10 positions, skills, training modules, and interactive dashboard metrics from her resume.
> - Direct download of her PDF resume (`Pooja_Bhatt__Resume-1.pdf`) linked right from the hero and navigation.

---

## Proposed Architecture & Features

### 1. Header & Navigation (`Navbar.tsx`)
- Logo brandmark with glowing orange pulse indicator.
- Navigation links: *Expertise*, *Experience*, *Interactive Dashboards*, *Training*, *Education*, *Contact*.
- Actions: Dark/Light Mode toggle, "Download Resume" (PDF), and "Book Consultation" CTA.
- Responsive mobile drawer menu.

### 2. Executive Hero Section (`Hero.tsx`)
- Value Proposition: *"Transforming Complex Data into Executive Clarity & Empowering 1,000+ Analysts"*.
- Subtitle highlighting 10+ years in logistics, retail, automotive, e-commerce, and education.
- High-contrast CTAs: "Explore Dashboards", "Book Corporate Training", "Download CV".
- **Live Telemetry & Impact Stats Bar**:
  - `10+` Years Enterprise Tenure
  - `1,000+` Students & Professionals Trained
  - `10+` Brand Implementations (Mercedes-Benz, Tanishq, Chitkara, CGC)
  - `99.8%` Billing & Reconciliation Precision

### 3. Interactive Data Hub & Live Dashboard Simulator (`DashboardShowcase.tsx`)
A unique, interactive component highlighting her core expertise in MIS & Power BI:
- Live tabbed preview cards:
  1. **Billing & Invoice Audit** (ShipHaven US Clients / FedEx & UPS audit variance, reconciliation rates).
  2. **Automotive & Retail MIS** (Mercedes-Benz & Tanishq sales performance, enquiry conversion, stock aging).
  3. **Logistics Operations & Budget** (Shine Logistics monthly expenditure & payout tracking).
  4. **Training Impact Analytics** (CGC & Chitkara cohorts, placement readiness score, 1000+ students).
- Interactive filter toggles, live KPI badges, and animated trend sparklines.

### 4. Core Competency & Tech Matrix (`Skills.tsx`)
- Categorized skill cards with tags and proficiency metrics:
  - **Advanced Excel Mastery**: Power Query, Power Pivot, DAX Formulas, Nested Lookups, Dynamic Arrays, VBA/Macro Automation.
  - **Power BI & Visual Intelligence**: Data Modeling, Interactive Dashboards, KPI Tracking, Executive Reporting.
  - **Billing, Invoicing & Audit**: FedEx & UPS audits, discrepancy reconciliation, accounts payable/receivable.
  - **ERP & Enterprise Systems**: SAP, Tally ERP, Zoho, QuickBooks, Oracle.
  - **Corporate Pedagogy**: Curriculum design, placement-oriented workshops, hands-on business analytics case studies.

### 5. Professional Career Timeline (`Experience.tsx`)
- Filterable timeline (All, Corporate Training, MIS & Analytics, Logistics & Billing, Automotive & Retail) covering all 10 career milestones from her resume:
  1. *Advanced Excel & Power BI Trainer* – CGC University, Mohali (2026)
  2. *Freelance Trainer & Guest Faculty* – Chitkara University / Languafina (2024–2026)
  3. *Billing Analyst & MIS* – Performance Modes / ShipHaven (2023–2024)
  4. *MIS Coordinator* – Shine Logistics (2022)
  5. *Senior Process Associate (BIS)* – Cogneesol (2019–2022)
  6. *MIS Executive* – Mercedes-Benz Panjab Motors (2018)
  7. *MIS Executive* – Tanishq (2017)
  8. *MIS Executive (E-Commerce)* – Kapsons Online Pvt. Ltd. (2015–2016)
  9. *MIS In-Charge* – Cargo Motors Pvt. Ltd. (2011–2015)
  10. *Accounts Data Entry Operator* – Cargo Motors Pvt. Ltd. (2010–2011)

### 6. Corporate Training & Pedagogy (`Training.tsx`)
- Module 1: *Advanced Excel & Power Query for Business Leaders*
- Module 2: *Power BI from Scratch to C-Suite Dashboards*
- Module 3: *Corporate Billing & Reconciliation Analytics*
- Module 4: *Executive Data Storytelling & Placement Bootcamp*
- Features syllabus breakdown, target audience tags, and request outline modal.

### 7. Education & Credentials (`Education.tsx`)
- M.Sc. Information Technology – Punjab Technical University (2009–2012)
- B.Com (Professional) – Guru Nanak Dev University (2006–2009)
- Language proficiencies: English, Hindi, Punjabi.

### 8. Contact & Executive Booking Hub (`Contact.tsx` & `Footer.tsx`)
- Direct contact details:
  - Phone / WhatsApp: `+91 9463088367`
  - Email: `official.poojabhatt90@gmail.com`
  - Location: `Mohali, Punjab, India`
- Functional consultation inquiry form with copy-to-clipboard and WhatsApp quick-connect.
- Professional footer with quick links, copyright, and verified credentials tag.

---

## Proposed Changes

### Configuration & Setup
- `package.json`: Vite + React + TypeScript + Tailwind CSS + Lucide Icons.
- `vite.config.ts`: Vite bundling configuration.
- `tailwind.config.js`: Custom theme with orange/amber warm tokens and typography.
- `index.html`: SEO meta tags, Google Fonts (*Plus Jakarta Sans*, *JetBrains Mono*), title "Pooja Bhatt | Senior MIS Analyst & Corporate Trainer".
- `vercel.json`: Clean routing configuration for Vercel deployment.

### Source Code (`src/`)
- `src/index.css`: Tailwind directives, custom glassmorphic styling, glow utilities, smooth scrolling.
- `src/types/portfolio.ts`: TypeScript interfaces for experience, skills, training modules, and dashboard telemetry.
- `src/data/portfolioData.ts`: Complete, verified data populated directly from her resume PDF.
- `src/components/Navbar.tsx`: Sticky navigation with theme toggle and CTAs.
- `src/components/Hero.tsx`: High-impact hero with orange/amber accents and key stats.
- `src/components/DashboardShowcase.tsx`: Live simulated interactive MIS dashboard.
- `src/components/Skills.tsx`: Categorized competencies with tags and levels.
- `src/components/Experience.tsx`: Filterable 10-role career trajectory timeline.
- `src/components/Training.tsx`: Corporate training modules & workshops.
- `src/components/Education.tsx`: University degrees & languages.
- `src/components/Contact.tsx`: Contact form, WhatsApp link, email, phone.
- `src/components/Footer.tsx`: Modern footer.
- `src/App.tsx`: Main page orchestration with theme state (dark/light).
- `public/Pooja_Bhatt_Resume.pdf`: Copy of resume for direct download.

---

## Verification Plan

### Automated Tests & Builds
- Run `npm run build` to verify TypeScript compile and Vite production bundling without errors or warnings.
- Verify asset paths and bundle sizes.

### Manual Verification
- Start local development server with `npm run dev`.
- Test responsive layouts on desktop (1440px), tablet (768px), and mobile (375px) viewports using the browser tool.
- Test Dark Mode and Light Mode transitions to ensure orange/amber accents look stunning in both.
- Test all links: "Download Resume", WhatsApp direct chat, email mailto, and contact form feedback.
- Confirm all data matches `Pooja_Bhatt__Resume-1.pdf` with 100% accuracy.
