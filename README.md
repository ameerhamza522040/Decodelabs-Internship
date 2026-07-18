<div align="center">
# 🧬 DecodeLabs
 
### Frontend Development Internship — Web Foundations & JavaScript Mastery
 
A collection of three progressively advanced front-end projects built with **pure HTML5, CSS3, and vanilla JavaScript** — no frameworks, no build tools, just clean fundamentals.
 
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#-license)
 
</div>
<br/>
## 📖 Table of Contents
 
- [About](#-about)
- [Projects](#-projects)
  - [Project 01 — Static Webpage Design](#-project-01--static-webpage-design)
  - [Project 02 — Nexora Digital Landing Page](#-project-02--nexora-digital-landing-page)
  - [Project 03 — Interactive Web Elements](#-project-03--interactive-web-elements)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Key Concepts Practiced](#-key-concepts-practiced)
- [Author](#-author)
- [License](#-license)
<br/>
## 🧭 About
 
This repository documents my **Phase 1 — Web Foundations and JavaScript Mastery** internship track at **Appverse Technologies**, structured under the DecodeLabs learning path. Each project builds on the last: starting with static layout fundamentals, moving into a full multi-section responsive design system, and finishing with interactive, JavaScript-driven UI behavior.
 
> 💡 Every project is self-contained — open its `index.html` directly in a browser, no setup required.
 
<br/>
## 🚀 Projects
 
### 📁 Project 01 — Static Webpage Design
 
A single-page static site focused on **semantic structure, visual precision, and layout fundamentals**.
 
<table>
<tr>
<td width="50%">
**✨ Highlights**
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Sticky navigation with smooth scroll + scroll-padding offset
- CSS Grid auto-fill portfolio card layout
- Reusable DRY button components
- Design tokens via CSS custom properties
- Lazy-loaded images with fixed dimensions (zero layout shift)
- Responsive breakpoint at `768px`
</td>
<td width="50%">
**🛠️ Built With**
`HTML5` · `CSS3` · `CSS Grid` · `Flexbox` · `CSS Variables`
 
**📂 Path**
[`/Project-01`](./Project-01)
 
</td>
</tr>
</table>
<br/>
### 📁 Project 02 — Nexora Digital Landing Page
 
A content-rich, multi-section **agency landing page** demonstrating a scalable design system and accessibility-first markup.
 
<table>
<tr>
<td width="50%">
**✨ Highlights**
- Full design-token system — color, fluid type (`clamp()`), spacing scale, radii, shadows
- Mobile-first responsive design (`768px`, `480px` breakpoints)
- Pure-CSS hamburger menu (checkbox-hack — **zero JavaScript**)
- `aria-labelledby` / `aria-label` on every section and nav landmark
- Semantic use of `<dl>` for stats and `<blockquote>` for testimonials
- Google Fonts with `preconnect` for performance
- Lazy-loaded, dimensioned images throughout
</td>
<td width="50%">
**🛠️ Built With**
`HTML5` · `CSS3` · `Mobile-First CSS` · `Google Fonts` · `ARIA`
 
**📂 Path**
[`/Project-02`](./Project-02)
 
</td>
</tr>
</table>
<br/>
### 📁 Project 03 — Interactive Web Elements
 
A hands-on **vanilla JavaScript** project — six self-contained interactive demos covering core DOM manipulation and event-handling patterns.
 
<table>
<tr>
<td width="50%">
**✨ Highlights**
- 🌗 Dark/Light mode toggle — persisted via `localStorage`
- 📱 Accessible hamburger menu with `aria-expanded` state
- 👁️ Show/Hide toggle panel (class-based visibility)
- 🔢 Live counter demonstrating in-memory state management
- ❓ FAQ accordion — one item open at a time via `querySelectorAll`/`forEach`
- ✅ Real-time form validation (name length + email regex) with dynamic submit-button state
- 🔒 `textContent` used throughout instead of `innerHTML` to avoid XSS
- 🧠 Every feature wrapped in `DOMContentLoaded` and commented with an **Input → Process → Output** breakdown
</td>
<td width="50%">
**🛠️ Built With**
`HTML5` · `CSS3` · `JavaScript (ES6+)` · `DOM API` · `localStorage`
 
**📂 Path**
[`/Project-03`](./Project-03)
 
</td>
</tr>
</table>
<br/>
## 🧰 Tech Stack
 
<div align="center">
| Layer | Technologies |
|---|---|
| **Markup** | Semantic HTML5, ARIA |
| **Styling** | CSS3, CSS Grid, Flexbox, Custom Properties, `clamp()` fluid type |
| **Scripting** | Vanilla JavaScript (ES6+), DOM API, `localStorage` |
| **Design** | Mobile-first responsive layouts, design-token systems |
| **Tooling** | Git, VS Code |
 
</div>
<br/>
## 📂 Folder Structure
 
```
Decodelabs/
├── Project-01/
│   ├── index.html
│   └── styles.css
│
├── Project-02/
│   ├── index.html
│   └── style.css
│
├── Project-03/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```
 
<br/>
## ⚡ Getting Started
 
No build steps, no dependencies — just clone and open.
 
```bash
# Clone the repository
git clone https://github.com/ameerhamza522040/Decodelabs.git
 
# Move into the repo
cd Decodelabs
 
# Open any project directly in your browser
# e.g. Project-03
cd Project-03 && start index.html   # Windows
# or
open index.html                     # macOS
```
 
<br/>
## 🎯 Key Concepts Practiced
 
- Semantic HTML5 & accessibility fundamentals (ARIA, keyboard-friendly interactions)
- CSS architecture with design tokens & custom properties
- Responsive, mobile-first layout with CSS Grid and Flexbox
- Fluid typography using `clamp()`
- DOM manipulation, event listeners, and state management in vanilla JavaScript
- Form validation and real-time UI feedback
- Performance-conscious practices (lazy loading, `preconnect`, dimensioned media)
<br/>
## 👤 Author
 
**Ameer Hamza**
Software Engineering Student · Frontend Development Intern @ Appverse Technologies
 
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ameerhamza522040)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](#)
 
<br/>
## 📄 License
 
This project is intended for educational and internship-submission purposes.
Feel free to reference it, but please avoid direct copying for your own coursework.
 
<div align="center">
**⭐ If you found this repo useful, consider giving it a star!**
 
</div>
