# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML portfolio/business website for Kubectl, a Korean software development company. The site showcases the company's services, past projects (performance), and contact information. It's based on the BizPage Bootstrap template from BootstrapMade.

## Architecture

**Single-Page Application Structure:**
- All content is in `index.html` as a single-page application with anchor-based navigation (#intro, #about, #services, #testimonials, #contact)
- Sections are loaded on the same page; navigation uses smooth scrolling between sections
- Mobile navigation is dynamically cloned from the main nav menu via JavaScript

**Core Dependencies:**
- Bootstrap 4 (CSS framework)
- jQuery with plugins: Owl Carousel (carousels), Isotope (portfolio filtering), Lightbox (image viewing), WOW.js (scroll animations), Superfish (menus), Waypoints, CounterUp

**Key Files:**
- `index.html` - Main HTML with all page sections
- `css/style.css` - Custom styles (theme colors, section layouts, responsive design)
- `js/main.js` - Custom JavaScript for navigation, carousel initialization, mobile menu, scroll effects
- `contactform/contactform.js` - Contact form validation (form submission handler currently disabled in HTML)
- `lib/` - Third-party libraries (Bootstrap, jQuery, Owl Carousel, etc.)

## Development Workflow

**Running the Site:**
- Open `index.html` directly in a browser, or
- Use a local web server for full functionality: `python -m http.server 8000` or similar

**No Build Process:**
- This is a static site with no build tools, package managers, or compilation steps
- Changes to HTML/CSS/JS are immediately visible on page refresh

## Content Structure

**Main Sections:**
1. **Intro Carousel** (`#intro`) - Hero section with image carousel showcasing company highlights
2. **Featured Services** (`#featured-services`) - Three highlighted service areas (개발 경험, 고객 중심, 차별화)
3. **About** (`#about`) - Three service categories: 쇼핑몰 개발, 미들웨어 개발, 인트라넷 개발
4. **Services** (`#services`) - Nine ERP service features displayed in a grid
5. **Testimonials/Performance** (`#testimonials`) - Yearly project history from 2015-2022 in carousel format
6. **Contact** (`#contact`) - Contact information and form (form currently commented out)

**Portfolio Section:**
- Currently commented out in HTML but functional code exists
- Uses Isotope for filtering by category (MALL, CARD, ETC)
- Links to major Korean companies (Lotte, Hyundai, Shinsegae, etc.)

## Customization Notes

- Theme color is `#18d26e` (green accent) - defined throughout CSS
- Korean language content throughout
- Background images for major sections (intro carousel, about, facts backgrounds)
- Most interactive sections (portfolio, team, facts, skills, call-to-action) are currently commented out in the HTML
