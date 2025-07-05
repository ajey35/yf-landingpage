# 🌿 Yumi Finance — On-Chain BNPL Landing Page

**Yumi Finance** is the first fully on-chain **Buy Now, Pay Later (BNPL)** solution that pays you back.

This landing page is designed to communicate Yumi's value to consumers and merchants — featuring a modern, responsive UI inspired by Apple and Klarna. The interface avoids traditional "web3" aesthetics in favor of a clean, tech-forward experience.

---

## 1. Features

- **Modern, Responsive UI**: Premium, mobile-first design with smooth transitions and glassmorphism.
- **Section Highlights**:
  - **Hero & Benefits**: Clear value proposition, instant approval, zero interest, and yield-earning.
  - **BNPL Problems**: Visually engaging cards outlining issues with legacy BNPL.
  - **User Flow**: Step-by-step and diagrammatic flows for users.
  - **How It Works**: Simple, animated steps for onboarding.
  - **Why We Win**: Competitive advantages over other solutions.
  - **Go To Market**: Strategy and roadmap highlights.
  - **Team**: Horizontally scrolling, snap-aligned team showcase with photos/initials.
  - **For Merchants**: Dedicated merchant page with tailored benefits, trust signals, and contact/demo CTAs.
- **Navigation**: Smooth scroll, modern navbar with logo, section links, and a distinct CTA for merchants.
- **Scroll-Reveal Animations**: Subtle, performant transitions on all major sections and cards.
- **Premium Backgrounds**: Soft gradients and glassy effects for a high-end look.
- **Accessibility**: Focus rings, semantic HTML, and keyboard navigation.

---

## 2. Tech Stack

- **Next.js** (App Router + TypeScript)
- **Tailwind CSS** (utility-first styling)
- **Lucide React Icons**
- **Fully Responsive Design**
- **Scroll-reveal Animations**
- Optional **Framer Motion** support

---

## 3. Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/yumi-finance-landing.git
cd yumi-finance-landing
```

### 2. Install Dependencies

```bash
# With npm
npm install

# Or with yarn
yarn install

# Or with pnpm
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the landing page.

---

## 4. Project Structure

- `app/` — Main Next.js app directory
  - `components/` — Modular React components for each section
  - `merchant/` — Merchant-specific landing page
  - `globals.css` — Global styles (Tailwind + custom)
- `components/ui/` — Reusable UI primitives (cards, buttons, etc.)
- `public/` — Static assets (images, logos)
- `styles/` — Additional global styles
- `lib/`, `hooks/` — Utilities and custom hooks

---

## 5. Customization

- **Branding**: Replace images/logos in `public/` as needed.
- **Team/Content**: Update section data in the respective components.
- **Styling**: Tweak Tailwind classes or add custom styles in `globals.css`.

---

## 6. Deployment

This project is ready to deploy on **Vercel**, **Netlify**, or any platform supporting Next.js.

---

## 7. Contributing

Pull requests and issues are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 8. License

[MIT](LICENSE) — © Yumi 🤍 Finance

