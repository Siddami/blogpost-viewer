# THEJSDUDE – Developer Blog

A modern, visually appealing blog built with **Next.js** and **Tailwind CSS**, designed for developers and tech enthusiasts. It features a curated feed of blog posts, detailed article pages, comment functionality, and a modular component structure for scalability and readability.

---

## Features

### Core Pages
- **Homepage** with:
  - LATEST posts section
  - Filtered JAVASCRIPT posts section
  - Modular `BlogCard` components with horizontal and grid layouts
  - Responsive newsletter subscription form

- **Article Page** with:
  - Article content (title, image, metadata, tags)
  - Comment form component
  - Related posts displayed in a clean horizontal/vertical layout
  - Static content for now, supports dynamic in the future

### Design & UI
- layout inspired by Figma design
- Custom typography with Oswald and Font Awesome icons
- Accessible color contrast and clean UI

### Components
- `BlogCard` – displays article data in card format
- `CommentForm` – allows user input and submission
- `NewsletterForm` – handles email capture with validation

---

## Tech Stack

- **Next.js 13+ App Router**
- **Tailwind CSS** for utility-first styling
- **TypeScript** for type safety
- **Responsive design** with mobile-first layout

---

## Challenges Faced

- **Hydration mismatch issues**: Handled with `isMounted` and later removed for static pages.
- **Routing confusion**: Using `window.location.href` didn’t refresh the same route – now prepared for dynamic routing using slugs.
- **Design implementation**: Matching pixel-perfect Figma styles using utility classes.
- **Layout responsiveness**: Ensured grid and flex utilities adjusted cleanly across screen sizes.
- **Loader edge cases**: Loader was persisting due to routing and hydration misalignment, resolved by simplifying render conditions.

---

## Future Improvements

- **Dynamic routing** using `[slug].tsx` to load individual articles from content or CMS
- **Markdown rendering** or MDX support for richer content writing
- **CMS integration** (e.g., Sanity, Contentful, or Notion API)
- **Comment system with backend** (Firebase, Supabase, or custom API)
- **Theme switcher** for dark/light toggle
- **Search and filter functionality**
- **Pagination or infinite scroll**
- **SEO improvements** with dynamic meta tags