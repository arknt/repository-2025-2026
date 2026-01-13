# PLAN 1 – Portfolio Web (HTML / CSS / JS)

## Goal
Create a **personal portfolio website** focused on showcasing audiovisual and creative projects, with a strong visual identity, bold typography, and editorial-style layouts.

The project prioritizes:
- Visual clarity
- Strong typographic hierarchy
- Full-screen grid layouts
- Clean, understandable code

---

## Technologies Used
- **HTML5** – semantic structure
- **CSS3** – layout, grid, typography
- **Vanilla JavaScript** – basic interactions

> No frameworks or external libraries are used (React, GSAP, etc.)

---

## Project Structure

```
portfolio/
│── index.html
│── projects.html
│── css/
│   └── styles.css
│── js/
│   └── main.js
│── assets/
│   ├── images/
│   └── video/
```

---

##  General Layout

### 1️ Hero / Intro Section
- Black background covering **true 100vh**
- Large typographic title using `clamp()`
- Tight kerning for impact
- No visible white gaps between sections

Example CSS:
```css
.hero {
  min-height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
}
```

---

### 2️ Project Index
- Positioned slightly to the left
- Clear numeric system (`01`, `02`, etc.)
- Vertical alignment
- Controlled spacing using `gap`

```css
.index {
  position: absolute;
  left: 4vw;
  top: 15vh;
}
```

---

### 3️ Project Sections (Full Screen)
Each project is composed of:
- One full-screen image
- One split section (50% / 50%)
- One final full-screen image

Base grid:
```css
.project-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
```

---

## Typography

- Large-scale type using `clamp()`
- Compact line height (`line-height: 0.9`)
- Reduced letter spacing

```css
.case-title {
  font-size: clamp(6rem, 18vw, 20rem);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.04em;
}
```

---

## Images
- Uses `object-fit: cover`
- Always fills the container
- No distortion

```css
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## JavaScript (Basic Usage)

Implemented features:
- Basic scroll detection
- Section activation
- Class toggling

Example:
```js
document.addEventListener('scroll', () => {
  document.body.classList.toggle('scrolled', window.scrollY > 50);
});
```

---

## Invented / Future Improvements
- Project tagging system
- Alternative list-based view
- Image preloading for smoother transitions

