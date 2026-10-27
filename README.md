# Wanderlens - Coastal Pass (Endterm Project)

Multi-page responsive travel website for coastal and island trips. The endterm version extends the midterm project
(same topic, same team, same pages) with JavaScript and jQuery interactivity.

**Live site:** _paste your GitHub Pages / Netlify link here_

## Team "AI love"
* Balnur
* Ayazhan

## Pages (8, all connected through the navbar)
Home, Discover, Attractions, Experiences, Plan Your Trip, Get Pass, About, Contact.

## Technologies
HTML5, CSS3, **Bootstrap 5.3** (grid, navbar, offcanvas, toasts, form classes), Font Awesome, Google Fonts,
**JavaScript (ES6)**, **jQuery 3.7**.

## Project structure
```
index.html, discover.html, attractions.html, experiences.html,
plan-trip.html, pass.html, about.html, contact.html
css/style.css          design tokens, light/dark theme, custom components
js/data.js             arrays with project data (attractions, experiences, destinations, passes, durations, activities, faqs)
js/main.js             functions, DOM rendering, events, filtering, favorites, theme
js/validation.js       custom form validation (contact form + trip planner)
js/jquery-effects.js   jQuery selectors, traversal, events, effects
```

## New endterm features
| Feature | Where |
|---|---|
| Cards rendered from arrays (not written in HTML) | Home (featured), Discover, Attractions, Experiences, Pass |
| Live search + category filter | Attractions, Experiences |
| Favorites list (heart button, saved in localStorage, panel with remove) | all pages (navbar heart) |
| Light / dark theme switcher (saved) | all pages (navbar moon icon) |
| Live price calculator | Plan Your Trip |
| Itinerary generator (day-by-day list) | Plan Your Trip |
| Custom form validation with messages + success message | Contact, Plan Your Trip |
| jQuery accordion, slide toggles, fade, animated counters, back-to-top | Discover, Pass, Home, all pages |
| Responsive navbar with mobile menu | all pages |

## How the requirements are covered
* **Arrays:** 7 arrays in `data.js`. **Loops:** `forEach` (renderCards), `for...of` (favorites list), `for` (buildItinerary).
* **Functions (with parameters):** `filterItems`, `calculateTotal` (both return a value), `renderCards`, `createCard`, `toggleFavorite`, `showToast`, `setTheme`, `validateForm`, `checkEmail`, ...
* **DOM:** `createElement`, `appendChild`, `remove()`, `classList.toggle`, `setAttribute`, `textContent`, show/hide with `d-none`.
* **Events (`addEventListener`):** `click`, `input`, `change`, `submit`, `keydown`, `blur`, `DOMContentLoaded`; `event.preventDefault()` on forms and heart buttons.
* **jQuery:** selectors (`#id`, `.class`, `element`, `a[href^="http"]`, descendant `.faq-item .faq-question`), traversal (`closest`, `find`, `next`, `siblings`), events (`click`, `scroll`, `mouseenter/mouseleave`), effects (`slideToggle`, `slideUp`, `fadeIn`, `fadeOut`, `slideDown`, `animate`).

## How to test
1. **Search & filter:** open *Attractions*, type "cove" in the search box (list shrinks, counter updates), press `Esc` to clear, click category buttons. Do the same on *Experiences*.
2. **Favorites:** click the heart on any card - toast appears and the navbar counter grows. Click the heart icon in the navbar to open the list, remove an item with the trash button. Reload the page: favorites are kept.
3. **Theme:** click the moon/sun button in the navbar. Reload: the theme is kept.
4. **Contact form:** open *Contact*, press *Confirm and Submit* with empty fields - specific messages appear under each field. Try a bad email (`abc`), short name, short message. Fill everything correctly and tick the terms - a green success message fades in. Opening it from *Get Pass* (Purchase button) preselects the pass.
5. **Plan Your Trip:** change duration / travelers / activities - the total updates instantly. Submit empty form to see errors (travelers outside 1-10, past date, no activity). Submit valid data to get a day-by-day itinerary.
6. **jQuery:** *Discover* -> "Learn more" slides details; *Get Pass* -> click FAQ questions (accordion); *Home* -> counters animate on load; scroll down on any page -> back-to-top button fades in.
7. **Mobile:** narrow the browser (or use DevTools device mode): the navbar collapses into a hamburger menu and cards stack in one column.

## Run locally
Open the folder in VS Code and run `index.html` with Live Server (or just open it in a browser). Internet is required for CDN files and images.

---
&copy; 2026 Wanderlens. All rights reserved.
