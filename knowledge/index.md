# Reel knowledge base — 78 cards

Generated 2026-10-09 by build_knowledge.js · cards in knowledge/, plain transcripts in knowledge/transcripts/

---

### 2026-10-09 — [Selection Controls: When to use what](https://www.facebook.com/reel/1458518826177868)

This reel explains the appropriate use cases for various selection controls like switches, checkboxes, radio buttons, and segmented controls. It emphasizes the difference between immediate actions (switches) and delayed actions (checkboxes with save buttons), as well as optimal counts for different selection patterns.

**Principles:** `Switches should trigger immediate actions without a save button.` · `Checkboxes are for settings that require a 'Save' action.` · `Do not mix switches and checkboxes in the same form to avoid state confusion.` · `Use radio buttons for up to 5 mutually exclusive options for better visibility.` · `Use dropdowns for more than 5 options to prevent screen overflow.` · `Use segmented controls for 2-4 exclusive options that need to be always visible.` · `Implement tri-state (indeterminate) checkboxes for parent-child relationships.` · `Make the entire row (label + control) a clickable target.` · `Maintain a minimum touch target height of 44px for mobile accessibility.`

**UI patterns:** Switch (Toggle), Checkbox, Radio Button, Dropdown Menu, Segmented Control, Tri-state Checkbox, Indeterminate state, Touch targets

**Before → After:** Demonstrates the transformation from a dropdown to a segmented control for better visibility, and from a standard checkbox to a tri-state checkbox for accurate parent-child status.

**Tags:** UX Design, UI Design, Selection Controls, Accessibility, Mobile Design, Design Systems

Transcript: `transcripts/1458518826177868.txt` · Card: `1458518826177868.json`

---

### 2026-10-03 — [Sheets are a System: 5 Rules for Better UX](https://www.facebook.com/reel/1111460338008332)

This reel explains the fundamental differences between sheets and modals, providing five specific rules for designing effective sheets. It covers context preservation, snap points, velocity-based dismissal, desktop responsiveness, and the importance of replacing content rather than stacking sheets.

**Principles:** `Context Preservation: Sheets keep the background visible while modals use a scrim to focus on a single action.` · `Snap Points: Sheets should snap to predefined heights (peek, half, full) rather than free-floating.` · `Velocity-based Dismissal: Interaction should prioritize flick speed over drag distance for closing.` · `Responsive Constraints: Side drawers on desktop should be bounded between 320px and 40% screen width.` · `Content Replacement: Avoid stacking multiple sheets; replace internal content and use back navigation instead.`

**UI patterns:** Bottom Sheet, Modal Dialog, Side Drawer, Scrim Overlay, Form, List View, Back Navigation

**Before → After:** Contrasts incorrect sheet implementations (free-floating heights, distance-only dismissal, and stacked sheets) with a systematic approach using snap points, velocity thresholds, and content replacement.

**Tags:** UX Design, UI Design, Mobile Design, Design Systems, Interaction Design, Product Design

Transcript: `transcripts/1111460338008332.txt` · Card: `1111460338008332.json`

---

### 2026-10-01 — [Mastering CSS View Transitions](https://www.facebook.com/reel/1617431583257999)

Learn how to create complex UI animations like card-to-page morphs, list reordering, and circular theme wipes using the CSS View Transitions API. This lesson demonstrates how a single CSS property can replace heavy animation libraries for both single-page and multi-page applications.

**Principles:** `View Transitions API` · `State interpolation` · `Unique naming for transition elements` · `Circular wipe animation` · `Progressive enhancement` · `Native browser snapshots`

**UI patterns:** Card to page transition, List reordering, Theme toggle, Modal dialog, Multi-page navigation

**Before → After:** Demonstrates the transition from static UI updates (instant swaps) to smooth, browser-native morphing animations for cards, lists, themes, and modals.

**Tags:** CSS, View Transitions, UX Design, Web Development, Animation, UI Patterns

Transcript: `transcripts/1617431583257999.txt` · Card: `1617431583257999.json`

---

### 2026-09-29 — [Kanban is a System: 5 Design Decisions](https://www.facebook.com/reel/1114841577734481)

This lesson breaks down five critical UX decisions for designing effective Kanban boards, focusing on interaction feedback, layout stability, and information density.

**Principles:** `Visual feedback for interaction (lift/tilt/shadow)` · `Preventing Layout Shift (CLS) using sized placeholders` · `Visualizing constraints (WIP limits)` · `Information density management (collapsing columns vs. horizontal scrolling)` · `Single Source of Truth (swimlanes vs. multiple boards)`

**UI patterns:** Kanban Board, Drag and Drop, Cards, Column Headers, WIP Limits, Collapsible Columns, Swimlanes

**Before → After:** Demonstrates the difference between a 'thin line' placeholder (causing layout jump) versus a 'sized slot' (zero layout shift).

**Tags:** UX Design, UI Design, Kanban, Product Design, Interaction Design, Productivity Tools

Transcript: `transcripts/1114841577734481.txt` · Card: `1114841577734481.json`

---

### 2026-09-25 — [Success is a System: Designing Better Done Screens](https://www.facebook.com/reel/1386079209898048)

This reel outlines five key decisions for designing effective success states that keep users engaged rather than hitting a dead end. It covers the importance of specificity, providing next actions, matching dismissal to stakes, creating open loops, and using celebration sparingly.

**Principles:** `Specificity in feedback (What, Who, When)` · `Always provide a next step to avoid dead ends` · `Dismissal duration based on stakes (Toast vs. Page)` · `Open loops for user retention` · `Celebration rarity to maintain impact`

**UI patterns:** Success screens, Toasts, Primary and secondary buttons, Progress trackers, Confetti animation, Receipts, Settings toggles

**Before → After:** Transformation from a generic 'Success!' checkmark with a single 'OK' button to a detailed, actionable success page with specific data and retention loops.

**Tags:** UX Design, UI Design, Product Design, User Experience, Success States, Interaction Design

Transcript: `transcripts/1386079209898048.txt` · Card: `1386079209898048.json`

---

### 2026-09-23 — [The 6 Rules of UI Cards](https://www.facebook.com/reel/1638166994563234)

This lesson outlines a systematic approach to designing UI cards, focusing on treatment based on background, single-entity logic, and avoiding common pitfalls like nesting. It provides specific rules for clickability, aspect ratios in grids, and adapting card styles for dark mode.

**Principles:** `Background-driven treatment selection` · `Single-entity principle (one title, one subject, one destination)` · `Single-action clickability (entire surface as a button)` · `Avoidance of card nesting (use dividers instead)` · `Consistent aspect ratios (16:9) to prevent grid row breaks` · `Dark mode elevation through tinting and borders rather than shadows`

**UI patterns:** Cards, Grids, Panels, Dividers, Hover States, Dark Mode, Form Sections

**Before → After:** Shows the transformation of a complex panel with nested cards and multiple buttons into a clean, single-entity card with internal dividers and a single clickable surface.

**Tags:** UI Design, UX Design, Card Design, Design Systems, Dark Mode, Layout, Visual Hierarchy

Transcript: `transcripts/1638166994563234.txt` · Card: `1638166994563234.json`

---

### 2026-09-21 — [De-AI Your UI: Pricing Page Optimization](https://www.facebook.com/reel/1361704646040572)

This lesson teaches how to optimize AI-generated pricing pages by establishing visual hierarchy, simplifying feature lists, and communicating value through currency-based savings rather than percentages.

**Principles:** `Visual Hierarchy` · `Scannability` · `Cognitive Load Reduction` · `Anchoring` · `Call to Action Prioritization`

**UI patterns:** Pricing Tiers, Badges, Feature Lists, Buttons, Toggle Switch, Strikethrough Pricing

**Before → After:** Transformation from a repetitive, low-hierarchy AI-generated pricing table to a high-conversion design with a clear 'Most Popular' recommendation and simplified feature comparisons.

**Tags:** UX Design, UI Design, Pricing Page, CRO, Visual Hierarchy, Product Design

Transcript: `transcripts/1361704646040572.txt` · Card: `1361704646040572.json`

---

### 2026-09-19 — [Typography as a System](https://www.facebook.com/reel/1077130178294248)

This lesson outlines seven critical decisions for building a professional typography system, focusing on hierarchy, readability, and technical implementation. It demonstrates how to move from arbitrary choices to a structured system using specific ratios, weights, and spacing rules.

**Principles:** `Limit font sizes to 5 max` · `Use a 1.25 ratio for type scales` · `Use 3 text colors (primary, secondary, muted) for hierarchy` · `Use 2 weights (400 for reading, 600 for scanning)` · `Inverse leading: tighter for headings, looser for body` · `Adjust tracking: tighter for large text, looser for small caps` · `Limit measure to 45-75 characters per line` · `Use tabular-nums for numeric data in tables`

**UI patterns:** Dashboard, Data Table, Stats Cards, Typography Scale, CLI / Code Editor

**Before → After:** A complex, unorganized typography set is refined into a strict system of 5 sizes, 3 colors, and 2 weights, improving readability and visual hierarchy.

**Tags:** Typography, UX Design, UI Design, Design Systems, Web Design, Product Design

Transcript: `transcripts/1077130178294248.txt` · Card: `1077130178294248.json`

---

### 2026-09-18 — [6 Rules for Calendar UX Design](https://www.facebook.com/reel/1438584748132985)

This lesson outlines a systematic approach to calendar UI, focusing on layout rules that improve readability and interaction. It covers grid structure, color usage, event overlapping, and drag-and-drop behaviors.

**Principles:** `Grid alignment: Labels on lines for better scanning.` · `Contextual defaults: Scroll to current time instead of midnight.` · `Visual clarity: Use 10% fills and 3px stripes to avoid 'rainbow' visual noise.` · `Information density: Side-by-side events instead of hiding data behind '+1' buttons.` · `Consistent scaling: Fixed pixel-to-time ratio (60px = 1hr).` · `Immediate feedback: Update labels during drag interactions, not after.` · `Layout persistence: Pin all-day events so they don't consume grid space.`

**UI patterns:** Weekly Calendar Grid, Time Indicator Line, Event Cards, Color Coding System, Side-by-side Overlap Layout, Drag-to-create Interaction, Pinned/Sticky Header Row, Real-time Tooltips

**Before → After:** Contrasts 'Full Fills' (busy/rainbow look) with 'Stripes' (clean/readable look), and 'Hidden behind +1' with 'Side-by-side' visibility.

**Tags:** UX Design, UI Design, Calendar UI, Interaction Design, Product Design, Visual Hierarchy

Transcript: `transcripts/1438584748132985.txt` · Card: `1438584748132985.json`

---

### 2026-09-16 — [Chat UI is a System](https://www.facebook.com/reel/971313432660880)

This lesson breaks down six critical design decisions for building a professional chat interface. It focuses on reducing visual noise through message grouping, optimistic UI states, and smart scroll anchoring.

**Principles:** `Reduce visual noise by grouping messages from the same sender within a 2-minute window.` · `Use proximity (4px vs 16px) to define relationships between message bubbles.` · `Progressive disclosure: show exact timestamps only on hover to keep the UI clean.` · `Optimistic UI: show the message bubble immediately upon sending to improve perceived performance.` · `Avoid layout shifts: use scroll anchoring to prevent the list from jumping when new messages arrive.` · `Contextual placement: place typing indicators exactly where the next message will appear.`

**UI patterns:** Message Grouping, Date Dividers, Hover Timestamps, Optimistic UI, Inline Error Handling, Scroll Anchoring Pill, Typing Indicator, Auto-expanding Textarea, File Attachment Previews

**Before → After:** A chat thread with 13 redundant avatars is transformed into a streamlined thread with only 7 avatars using smart grouping logic.

**Tags:** UX Design, UI Design, Product Design, Chat UI, Interaction Design, Mobile Design

Transcript: `transcripts/971313432660880.txt` · Card: `971313432660880.json`

---

### 2026-09-14 — [De-AI Your UI: 5 Fixes for Landing Pages](https://www.facebook.com/reel/1445609737415311)

This reel identifies five common design 'tells' that make a landing page look AI-generated and provides specific fixes to improve professionalism. It covers improvements for headlines, background elements, button hierarchy, social proof, and feature sections.

**Principles:** `Outcome-oriented copywriting` · `Visual hierarchy` · `Specific social proof` · `Show, don't tell` · `Intentional use of color`

**UI patterns:** Hero section, Call-to-action (CTA) buttons, Social proof / Logo cloud, Testimonials, Feature cards, Product screenshots, Annotations

**Before → After:** A generic, purple-blob-filled AI-generated landing page with vague copy and generic icons is transformed into a clean, product-focused landing page with specific copy, clear hierarchy, and real social proof.

**Tags:** UX Design, UI Design, Landing Page, Copywriting, Visual Hierarchy, Product Design, AI Design

Transcript: `transcripts/1445609737415311.txt` · Card: `1445609737415311.json`

---

### 2026-09-12 — [5 Design Decisions that make Linear feel 'Expensive'](https://www.facebook.com/reel/882296604820252)

This reel reverse-engineers the design of the Linear app, highlighting five specific UI decisions that contribute to its premium feel. It covers information density, the use of borders over shadows, minimal color palettes, keyboard-first interactions, and strict alignment.

**Principles:** `Information Density` · `Border-based Depth` · `Monochromatic Palette` · `Low Latency Feedback` · `Grid Alignment` · `Keyboard-First Design`

**UI patterns:** Data Table, Sidebar, Status Indicators, Command Palette, Keyboard Shortcuts, Primary Button, Search Bar

**Before → After:** The video demonstrates a step-by-step transformation of a generic issue tracker UI into a high-density, polished interface modeled after Linear.

**Tags:** UI Design, UX Design, Linear, Product Design, Visual Hierarchy, Design Systems

Transcript: `transcripts/882296604820252.txt` · Card: `882296604820252.json`

---

### 2026-09-10 — [Mastering the CSS :has() Selector](https://www.facebook.com/reel/1723838365576036)

This lesson showcases five powerful use cases for the CSS :has() selector, demonstrating how to handle complex UI logic without JavaScript. It covers parent styling, form validation, dynamic layouts, quantity queries, and global document reactions.

**Principles:** `Parent Selection` · `Native Browser Validation` · `DOM-driven Layout` · `Quantity Queries` · `Declarative UI Styling`

**UI patterns:** Pricing Cards, Radio Buttons, Form Validation, Sidebar Layout, Modal Dialog, Dynamic Grid

**Before → After:** Transitioning from JavaScript-heavy state management (React hooks, event handlers) to pure CSS logic for interactive UI components.

**Tags:** CSS, Web Development, UI Design, Frontend, Coding Tips

Transcript: `transcripts/1723838365576036.txt` · Card: `1723838365576036.json`

---

### 2026-09-08 — [De-AI Your UI: 5 Dashboard Fixes](https://www.facebook.com/reel/1562348875576398)

This lesson identifies common 'tells' of AI-generated UI designs and provides five specific fixes to make dashboards look more professional. It covers gradients, icon tiles, hierarchy, shadows, and copy refinement.

**Principles:** `Visual Hierarchy` · `Information Density` · `Intentional Color Usage` · `Elevation and Shadows` · `Microcopy Refinement` · `Tabular Digits for Data Alignment`

**UI patterns:** Dashboard, Metric Cards, Line Chart, Data Table, Sparklines, Sidebar Navigation, Search Bar

**Before → After:** A generic, AI-generated dashboard with excessive gradients and shadows is transformed into a professional interface with clear hierarchy, flat accents, and precise data visualization.

**Tags:** UI Design, Dashboard Design, UX Design, Visual Hierarchy, Design Tips

Transcript: `transcripts/1562348875576398.txt` · Card: `1562348875576398.json`

---

### 2026-09-06 — [7 Steps to Responsive Tables](https://www.facebook.com/reel/1074809841592221)

This lesson demonstrates how to transform complex data tables for mobile devices by restructuring them into cards rather than simply shrinking them. It covers data prioritization, layout stacking, and using container queries for component-level responsiveness.

**Principles:** `Restructure rather than shrink for mobile` · `Rank data by Identity, Value, and State` · `Stack data into multi-line cards` · `Align numerical values for comparison` · `Use tabular figures for numbers` · `Label ambiguous data (dates) but not obvious data (currency)` · `Use progressive disclosure for secondary details` · `Use container queries for component-level responsiveness`

**UI patterns:** Data Table, Card Layout, Horizontal Scroll, Bottom Sheet, Expandable Row, Container Queries, Sort Controls, Status Badges

**Before → After:** A 6-column desktop table shrunk to fit a mobile screen with tiny text and horizontal scrolling transformed into a restructured card-based layout with ranked data and progressive disclosure.

**Tags:** UX Design, UI Design, Responsive Design, Mobile Design, Data Tables, Container Queries

Transcript: `transcripts/1074809841592221.txt` · Card: `1074809841592221.json`

---

### 2026-09-04 — [6 Decisions for Better Data Tables](https://www.facebook.com/reel/1268917731967815)

This reel outlines six essential design decisions to transform cluttered spreadsheets into professional data tables. It covers alignment, row styling, density options, sticky headers, cell content management, and reducing visual noise in action columns.

**Principles:** `Right-align numbers for comparison` · `Use tabular figures for numeric alignment` · `Left-align text` · `Use hairlines and hover states instead of zebra stripes` · `Offer density modes (Compact, Default, Comfortable)` · `Pin headers and key columns for context` · `Use dashes for empty cells` · `Truncate text to maintain row height` · `Hide actions until hover/focus`

**UI patterns:** Data Table, Pagination, Status Badges, Sticky Header, Sticky Column, Kebab Menu, Tooltips, Density Toggle

**Before → After:** A cluttered spreadsheet-style table is transformed into a clean, functional UI component with improved readability and interactive controls.

**Tags:** UI Design, UX Design, Data Tables, Dashboard Design, Design System, Typography

Transcript: `transcripts/1268917731967815.txt` · Card: `1268917731967815.json`

---

### 2026-09-02 — [Mastering Border Radius Systems](https://www.facebook.com/reel/1620756073024890)

This lesson teaches how to create a consistent border radius system in UI design. It covers mathematical formulas for nested corners and selection rings, scaling radius with component size, and handling edges and images.

**Principles:** `Inner radius = outer radius - padding` · `Radius follows size (scaling)` · `Pill shapes for single-line elements only` · `Zero radius for edges touching screen borders` · `Outer ring radius = inner radius + gap` · `Clip images or subtract padding for inset images`

**UI patterns:** Cards, Chips, Buttons, Modals, Avatars, Toggles, Selection Rings, Images

**Before → After:** The video demonstrates the transformation from a visually inconsistent UI using a single border radius to a harmonious system where radii are calculated based on nesting, size, and context.

**Tags:** UI Design, Design Systems, Border Radius, UX Design, Visual Design

Transcript: `transcripts/1620756073024890.txt` · Card: `1620756073024890.json`

---

### 2026-08-31 — [Dark Mode Design System](https://www.facebook.com/reel/4527950214187522)

This lesson covers essential principles for creating a professional dark mode UI, moving beyond simple black and white. It teaches techniques for depth, elevation, text legibility, and handling accents and images.

**Principles:** `Use near-black instead of pure black for depth` · `Use lightness to indicate elevation` · `Avoid pure white text to reduce eye strain` · `Use alpha transparency for text hierarchy` · `Desaturate accent colors` · `Use alpha for borders/hairlines` · `Dim images and redraw illustrations for dark mode`

**UI patterns:** Dashboard, Cards, Chips, Modals, Menus, Buttons, Search bars, Data visualization, Illustrations

**Before → After:** A flat, high-contrast black and white dashboard is transformed into a layered, accessible, and visually balanced dark mode interface.

**Tags:** UI Design, Dark Mode, Accessibility, Color Theory, Visual Hierarchy

Transcript: `transcripts/4527950214187522.txt` · Card: `4527950214187522.json`

---

### 2026-08-29 — [Mastering Notification Badges](https://www.facebook.com/reel/1738722907177807)

This reel outlines essential UI/UX rules for designing notification badges, focusing on layout stability, signal clarity, and user behavior. It teaches how to manage unread counts, distinguish between status and action, and maintain a high signal-to-noise ratio.

**Principles:** `Layout Stability (Capping counts)` · `Anchored Positioning (Preventing icon drift)` · `Semantic Color Coding (Action vs. Status)` · `Signal-to-Noise Ratio (Avoiding redundant indicators)` · `Immediate Feedback (Clearing on view)` · `Smooth Transitions (Avoiding zero-reset flickers)` · `Selective Attention (Badging only critical items)`

**UI patterns:** Notification Badges, Status Indicators, Navigation Bars, Inbox List Items, Iconography

**Before → After:** Demonstrates the difference between 'uncapped' badges that break layouts versus 'capped' badges that maintain stability, and 'reflowing' icons versus 'anchored' icons.

**Tags:** UI Design, UX Design, Design Systems, Notifications, Mobile UI, Visual Hierarchy

Transcript: `transcripts/1738722907177807.txt` · Card: `1738722907177807.json`

---

### 2026-08-27 — [Designing a Robust Avatar Component System](https://www.facebook.com/reel/1769259328059594)

This lesson outlines best practices for creating flexible avatar components, including fallback strategies and deterministic coloring. It covers visual consistency through limited sizing and integrated status indicators to reduce UI clutter.

**Principles:** `Graceful Degradation` · `Deterministic Coloring` · `Visual Identity` · `Clutter Reduction` · `Standardized Sizing`

**UI patterns:** Avatar, Fallback Chain, Avatar Stack, Status Ring, Sizing Tokens

**Before → After:** Transitions from broken image icons to a fallback chain, random colors to name-based colors, and redundant badges to integrated status rings.

**Tags:** UI Design, Design Systems, UX, Components, Avatar

Transcript: `transcripts/1769259328059594.txt` · Card: `1769259328059594.json`

---

### 2026-08-25 — [UI Numbers: 5 Tips for Better Data Display](https://www.facebook.com/reel/28747148424888259)

This lesson covers essential techniques for formatting numerical data in UI design to improve readability and comparison. It demonstrates the use of tabular figures, proper alignment, abbreviation, relative time, and currency formatting.

**Principles:** `Use tabular figures (monospaced numbers) for vertical data alignment.` · `Right-align numerical columns to allow magnitude comparison by the last digit.` · `Abbreviate large values (K, M, B) for a smaller footprint, showing exact values on hover.` · `Prioritize relative time for recent events to improve human readability.` · `Align currency by the decimal point rather than the symbol.`

**UI patterns:** Data Tables, Dashboards, Activity Feeds, Tooltips, Numerical Lists

**Before → After:** Transitions from proportional 'wobbly' number columns to tabular 'straight' columns, and from left-aligned to right-aligned data.

**Tags:** UI Design, Typography, Data Visualization, Dashboard Design, UX Design

Transcript: `transcripts/28747148424888259.txt` · Card: `28747148424888259.json`

---

### 2026-08-23 — [One Tap, One Charge: Optimizing Action Buttons](https://www.facebook.com/reel/1716300012818005)

This reel demonstrates best practices for handling button states during asynchronous operations, such as payment processing. It covers techniques like instant disabling, layout-stable spinners, idempotency keys, and response-driven state changes to ensure a robust and user-friendly experience.

**Principles:** `Immediate Feedback` · `Preventing Duplicate Actions` · `Layout Stability` · `Contextual Error Handling` · `State Synchronization`

**UI patterns:** Action Button, Loading Spinner, Success/Error States, Checkout Screen, Network Request Visualization

**Before → After:** Comparison of layout shifts (reflows) versus locked-width buttons, and timer-based versus response-based button re-enabling.

**Tags:** UX, UI, Web Development, Frontend, Design Patterns, Interaction Design

Transcript: `transcripts/1716300012818005.txt` · Card: `1716300012818005.json`

---

### 2026-08-20 — [Mastering the Copy Button UX](https://www.facebook.com/reel/1087480894228525)

This reel outlines five essential best practices for designing copy-to-clipboard buttons. It covers instant feedback, state resets, data integrity, accessibility, and error handling for insecure origins.

**Principles:** `Instant Feedback: Avoid spinners for instantaneous actions like copying.` · `State Reset: Revert success icons to their original state after a short delay (e.g., 2 seconds).` · `Data Integrity: Ensure the clipboard receives raw data rather than formatted text that might include hidden characters.` · `Accessibility: Use aria-live to announce state changes to screen reader users.` · `Graceful Degradation: Provide fallbacks for API failures on insecure origins.`

**UI patterns:** Copy-to-clipboard button, Success state checkmark, Aria-live region, Terminal input, Loading spinner

**Before → After:** Demonstrates the difference between a basic, often broken copy button and a robust, accessible implementation.

**Tags:** UX Design, UI Design, Accessibility, Frontend Development, Micro-interactions

Transcript: `transcripts/1087480894228525.txt` · Card: `1087480894228525.json`

---

### 2026-08-17 — [Mastering Scroll State in UI Design](https://www.facebook.com/reel/1862628335143062)

This lesson explains why scroll position should be treated as application state, particularly in single-page applications. It covers scroll restoration, offsetting for sticky headers, and the usability issues of infinite scroll with footers.

**Principles:** `Scroll position is application state` · `Manual scroll restoration for SPAs` · `Header height offsets for scroll-to-element actions` · `Use scroll-margin-top for anchor visibility` · `Avoid infinite scroll if the footer contains essential navigation`

**UI patterns:** Feed/List view, Single Page Application (SPA) routing, Sticky Header, Jump links / Anchor links, Infinite Scroll, Footer

**Before → After:** Demonstrates the difference between a broken scroll experience (resetting to top or hiding content under headers) versus a corrected experience using manual restoration and offsets.

**Tags:** UX Design, UI Design, Frontend Development, Scroll Behavior, SPA, Web Design

Transcript: `transcripts/1862628335143062.txt` · Card: `1862628335143062.json`

---

### 2026-08-15 — [Six Rules for Resizable Panels](https://www.facebook.com/reel/881135991496149)

This lesson covers essential UX improvements for resizable split views, focusing on interaction robustness and state persistence. It details technical solutions for common issues like small hit areas, iframe interference, and cursor flickering.

**Principles:** `Increase hit area for small targets` · `Clamping (min/max width constraints)` · `Snapping to binary states (open/closed)` · `Pointer event management via overlays` · `Global cursor locking during drag` · `State persistence across sessions`

**UI patterns:** Split view, Resizable sidebar, Drag handles, Cursor styles, Invisible overlays

**Before → After:** A fragile split view that can be dragged off-screen or lose focus is transformed into a robust, constrained, and persistent resizable panel system.

**Tags:** UI Design, UX Design, Interaction Design, Frontend Development, Web Design

Transcript: `transcripts/881135991496149.txt` · Card: `881135991496149.json`

---

### 2026-08-13 — [Pull-to-Refresh Design Principles](https://www.facebook.com/reel/2286226512205780)

This reel outlines six key principles for designing a high-quality pull-to-refresh interaction, focusing on physics, feedback, and responsiveness. It emphasizes creating a sense of weight and continuity to make the UI feel polished and intuitive.

**Principles:** `Threshold-based triggering` · `Visual resistance (Elasticity)` · `Seamless transition (Handoff)` · `Pre-emptive feedback (Haptic)` · `Natural physics (Overshoot/Bounce)` · `Non-blocking UI (Scroll alive)`

**UI patterns:** Pull-to-refresh, Loading spinner, Inbox list, Haptic feedback visualization, Rubber banding / Elastic scrolling

**Before → After:** Compares 'cheap' 1:1 movement vs 'weighted' elastic movement, 'hard stop' vs 'rubber band' overshoot, and 'frozen' vs 'scroll alive' lists.

**Tags:** UX Design, UI Design, Micro-interactions, Mobile Design, Animation, Pull-to-refresh

Transcript: `transcripts/2286226512205780.txt` · Card: `2286226512205780.json`

---

### 2026-08-09 — [Selection is a system](https://www.facebook.com/reel/1481497547331280)

This lesson covers building robust data table selection systems, focusing on tri-state checkboxes, explicit selection counts, and state persistence. It also advocates for using undo functionality over confirmation modals for destructive bulk actions.

**Principles:** `Tri-state checkboxes (empty, partial, checked) are essential for header selection.` · `Explicitly name the total count in 'Select All' actions to avoid ambiguity.` · `Selection state must persist across pagination.` · `Reversible actions (Undo) are superior to friction-heavy confirmation modals.`

**UI patterns:** Data Table, Tri-state Checkbox, Bulk Actions Bar, Pagination, Undo Notification, Selection Range

**Before → After:** A standard table selection vs. a comprehensive selection system with tri-states, persisted state, and undo functionality.

**Tags:** UX Design, UI Design, Data Tables, Selection Systems, Product Design

Transcript: `transcripts/1481497547331280.txt` · Card: `1481497547331280.json`

---

### 2026-08-07 — [Don't Disable Buttons, Explain Them](https://www.facebook.com/reel/1227415986172701)

This lesson explains why disabling buttons in forms creates accessibility and usability barriers. It demonstrates how keeping buttons active allows for better validation feedback, maintains tab order, and ensures screen readers can communicate form status.

**Principles:** `Maintain tab order for accessibility` · `Ensure sufficient color contrast (WCAG)` · `Provide feedback via validation on click instead of disabling` · `Distinguish between disabled and busy states` · `Use ARIA attributes like aria-busy for screen readers`

**UI patterns:** Buttons, Forms, Tooltips, Validation Messages, Loading Spinners, Input Fields, Checkboxes

**Before → After:** A disabled button that is inaccessible and provides no feedback is replaced by an active button that triggers validation, highlights errors, and uses proper loading states.

**Tags:** UX Design, Accessibility, Form Design, UI Design, A11y, Web Development

Transcript: `transcripts/1227415986172701.txt` · Card: `1227415986172701.json`

---

### 2026-08-05 — [Designing for Touch vs. Mouse](https://www.facebook.com/reel/1996169834388343)

This lesson explains how to handle hover states on mobile devices using media queries and why primary actions should never be hidden behind hover. It also demonstrates the importance of 44px tap targets for accessibility and usability.

**Principles:** `Avoid sticky hover on touch devices` · `Use @media (hover: hover) for pointer-specific styles` · `Use @media (pointer: coarse) for touch-friendly sizing` · `Never hide primary actions behind hover` · `Minimum 44px tap targets for mobile` · `Pad the hit area rather than scaling the icon`

**UI patterns:** Product Cards, Hover Actions, Bottom Sheet, Swipe Actions, Icon Buttons, Media Queries

**Before → After:** A 20px hit area that misses the user's thumb is transformed into a 44px hit area that maintains a 20px icon size for visual balance.

**Tags:** UX Design, UI Design, Mobile Design, CSS, Accessibility, Interaction Design

Transcript: `transcripts/1996169834388343.txt` · Card: `1996169834388343.json`

---

### 2026-08-04 — [Maintaining Design Consistency with UX Engine](https://www.facebook.com/reel/895404883181820)

This reel demonstrates how to prevent design drift in AI-generated interfaces by using a design system skill. It explains how extracting existing tokens from code ensures that every new screen adheres to a single, coherent visual language.

**Principles:** `Design Consistency` · `Design Tokens` · `Avoiding Design Drift` · `Visual Coherence` · `Systematic Design`

**UI patterns:** Pricing Cards, Settings Panel, Data Tables, Toggle Switches, Design Tokens, Button Variants

**Before → After:** Inconsistent UI screens with varying colors and button styles are transformed into a unified product interface by extracting and enforcing a shared design system.

**Tags:** UX Design, UI Design, Design Systems, AI Tools, Design Tokens, Product Design

Transcript: `transcripts/895404883181820.txt` · Card: `895404883181820.json`

---

### 2026-08-02 — [4 UI Fixes for Real Content](https://www.facebook.com/reel/1051915977228458)

This reel demonstrates how to prevent UI layouts from breaking when faced with real-world data like long names or URLs. It covers four essential CSS fixes: min-width for flexbox, middle truncation, tabular numbers, and overflow wrapping.

**Principles:** `Flexbox min-width behavior` · `Context-aware truncation` · `Tabular vs Proportional numerals` · `Word breaking for long strings`

**UI patterns:** User Cards, File Lists, Metric Dashboards, Message Bubbles, Flexbox Layouts

**Before → After:** Shows UI components breaking under long or dynamic content, then fixed with specific CSS properties like min-width: 0 and tabular-nums.

**Tags:** UI Design, CSS, Frontend Development, UX Design, Responsive Design

Transcript: `transcripts/1051915977228458.txt` · Card: `1051915977228458.json`

---

### 2026-07-31 — [The Lifecycle of a Click: From Buy to Optimistic UI](https://www.facebook.com/reel/1338683461665391)

This lesson breaks down the six-step process of a network request, from frontend validation to database atomicity. It also introduces Optimistic UI, explaining when to provide instant feedback and when to make the user wait for server confirmation.

**Principles:** `Frontend validation for instant feedback` · `Backend validation for security` · `Database atomicity` · `Optimistic UI for low-risk actions` · `Pessimistic UI for high-risk actions (payments)`

**UI patterns:** Checkout form, Loading spinner, Success state, Like button, Network request visualization

**Before → After:** Comparison between Optimistic UI (instant feedback for likes) and standard UI (waiting for server confirmation for payments).

**Tags:** UX Design, UI Design, Frontend Development, Backend Development, Optimistic UI, Product Design

Transcript: `transcripts/1338683461665391.txt` · Card: `1338683461665391.json`

---

### 2026-07-29 — [Settings is a System](https://www.facebook.com/reel/1522723335623999)

This reel teaches how to design a robust settings system by categorizing actions based on their impact. It covers the use of instant vs. explicit save models, task-based grouping, search functionality, and high-friction 'danger zones' for destructive actions.

**Principles:** `Match the save model to the blast radius (low stakes = instant, high stakes = explicit)` · `Group settings by task or user intent rather than database tables` · `Provide search for large settings lists to support power users` · `Visually indicate modified states to encourage experimentation and easy undoing` · `Increase friction for destructive actions using quarantine zones and confirmation typing`

**UI patterns:** Toggle switches, Input fields, Save/Cancel bars, Grouped lists, Search/Filter, Modified state indicators, Reset buttons, Danger zones, Confirmation modals

**Before → After:** Transforms a flat, unorganized list of 40 settings into a structured, searchable system with clear visual feedback and safety measures for destructive actions.

**Tags:** UI Design, UX Design, Settings Page, Product Design, UI Engineering

Transcript: `transcripts/1522723335623999.txt` · Card: `1522723335623999.json`

---

### 2026-07-26 — [The Anatomy of Autosave](https://www.facebook.com/reel/1846879053403558)

This reel explains that autosave is a complex system rather than a simple status label. It details the technical and design patterns required to maintain data integrity and user trust, including debouncing, state machines, and conflict resolution.

**Principles:** `Debouncing` · `State Machine UI` · `Offline Queuing` · `Conflict Management (Merge vs Warn)` · `Navigation Guards` · `System Transparency`

**UI patterns:** Status Pill, Offline Badge, Local Queue List, Conflict Resolution UI, Navigation Guard Dialog

**Before → After:** A misleading 'Saved' label that hides sync failure versus a robust system that tracks pending edits and prevents data loss.

**Tags:** UX Engineering, UI Design, Autosave, Product Design, State Management, Data Integrity

Transcript: `transcripts/1846879053403558.txt` · Card: `1846879053403558.json`

---

### 2026-07-24 — [UX Engine: Improving AI-Generated Interfaces](https://www.facebook.com/reel/1522318429070043)

This reel introduces UX Engine, a tool for Claude Code that transforms generic 'database-shaped' AI outputs into user-centric interfaces. It emphasizes intent discovery, state completeness, and automated UX auditing to create safer, more professional designs.

**Principles:** `Intent-driven design` · `Information hierarchy` · `Friction for destructive actions` · `State completeness` · `Skeleton screen layout matching` · `UX Auditing`

**UI patterns:** Data Table, Search Bar, Confirmation Modal, Skeleton Screens, Empty State, Error State, Success Notification, Action Menu

**Before → After:** A cluttered 12-column table with immediate delete buttons is transformed into a streamlined 5-column table with search-first navigation and confirmation-guarded destructive actions.

**Tags:** UX Design, AI Tools, UI Design, Claude Code, Product Design, Design Systems

Transcript: `transcripts/1522318429070043.txt` · Card: `1522318429070043.json`

---

### 2026-07-23 — [Inline Editing: A UX System](https://www.facebook.com/reel/4439326552949174)

This lesson breaks down the technical and design requirements for seamless inline editing, focusing on affordances, layout stability, and state management. It emphasizes that inline editing is not just a UI swap but a system of behaviors including keyboard semantics and optimistic updates.

**Principles:** `Visual Affordance (Whispering editability)` · `Zero Cumulative Layout Shift (CLS)` · `Keyboard Semantics (Enter/Escape consistency)` · `Blur Behavior Consistency (Save vs Discard on blur)` · `Optimistic Updates` · `Graceful Error Handling (Rollback with draft preservation)` · `Contextual Edit Modes (Direct vs Explicit based on risk)`

**UI patterns:** Inline Text Input, Hover States, Pencil Icon Affordance, Optimistic UI Loading State, Error Rollback Notification, Data Grid / Spreadsheet Cell, Explicit Edit Mode Button

**Before → After:** The 'Bad Swap' shows a +3px layout shift when transitioning from text to input, while 'The Swap' maintains 0px shift by matching font, size, and padding exactly.

**Tags:** UX Design, UI Engineering, Interaction Design, Frontend Development, Product Design, Accessibility

Transcript: `transcripts/4439326552949174.txt` · Card: `4439326552949174.json`

---

### 2026-07-20 — [Multiplayer UX Engineering](https://www.facebook.com/reel/1562882515556734)

This reel breaks down the technical and design requirements for building seamless multiplayer experiences. It covers essential patterns like cursor interpolation, deterministic user coloring, and preventative selection locks to ensure smooth collaboration.

**Principles:** `Interpolation for smooth motion` · `Deterministic coloring for consistent identity` · `Visual presence over textual information` · `Conflict prevention through selection locks` · `Shared context via viewport syncing`

**UI patterns:** Collaborative cursors, Avatar stacks, Presence indicators, Selection highlights, Object locking, Viewport following

**Before → After:** Raw 10Hz cursor updates (jittery/teleporting) vs. Interpolated 60fps movement (smooth/gliding).

**Tags:** UX Design, Multiplayer, Collaboration, Product Design, UI Patterns

Transcript: `transcripts/1562882515556734.txt` · Card: `1562882515556734.json`

---

### 2026-07-17 — [Designing Destructive Actions](https://www.facebook.com/reel/1052845123926917)

This lesson explores six UI patterns to handle destructive actions like deletion safely. It teaches how to use friction, specific labeling, and visual hierarchy to prevent accidental user errors.

**Principles:** `Hold-to-confirm replaces dialogs for intentionality` · `Use specific verbs in labels instead of generic 'Yes/No'` · `Avoid muscle memory errors by moving destructive buttons away from primary spots` · `Red budget: reserve red color exclusively for destruction` · `Geography is friction: bury dangerous actions at the bottom` · `Cooldown periods as a last line of defense`

**UI patterns:** Hold-to-confirm button, Confirmation dialog, Danger zone, Cooldown timer, Progress ring, Primary/Secondary buttons

**Before → After:** Transforming generic confirmation dialogs and poorly placed delete buttons into intentional, friction-based interactions like hold-to-confirm and danger zones.

**Tags:** UX Design, UI Design, Interaction Design, Error Prevention, UX Engineering

Transcript: `transcripts/1052845123926917.txt` · Card: `1052845123926917.json`

---

### 2026-07-14 — [Context Menu UX Engineering](https://www.facebook.com/reel/1030653972707108)

This lesson covers the technical and design details of context menus, including collision detection, grouping by intent, and the 'safe triangle' for submenus. It also highlights keyboard accessibility and cross-platform consistency between desktop and mobile.

**Principles:** `Collision Detection` · `Information Architecture` · `Hover Intent (Safe Triangle)` · `Keyboard Accessibility` · `Cross-platform Consistency`

**UI patterns:** Context Menu, Submenu, Bottom Sheet, Dividers, Keyboard Shortcuts

**Before → After:** A list of 12 flat actions is transformed into a structured menu grouped by intent with dividers and a highlighted destructive action.

**Tags:** UX Design, UI Design, Interaction Design, Accessibility, Figma

Transcript: `transcripts/1030653972707108.txt` · Card: `1030653972707108.json`

---

### 2026-07-12 — [The Grammar of Swipe Gestures](https://www.facebook.com/reel/886778010644415)

This lesson breaks down the mechanics of high-quality swipe interactions, covering thresholds, physics, and semantics. It explains how to balance speed and safety by using haptic feedback and undo states instead of disruptive dialogs.

**Principles:** `Threshold Design: Distinguishing between revealing a menu and committing to an action.` · `Rubber-band Physics: Using resistance as a tactile feedback mechanism.` · `Direction Semantics: Standardizing swipe directions (Right = Safe, Left = Destructive).` · `Discoverability: Using 'peeks' to onboard users to hidden gestures.` · `Safety Net: Prioritizing 'Undo' over confirmation dialogs to maintain flow.`

**UI patterns:** Swipe-to-action, Contextual list buttons, Haptic feedback, Progressive disclosure peek, Undo toast notification

**Before → After:** Demonstrates the danger of swapping standard swipe directions (muscle memory error) and the efficiency of replacing confirmation dialogs with an undo toast.

**Tags:** UX Design, Mobile UI, Gestures, Micro-interactions, Product Design

Transcript: `transcripts/886778010644415.txt` · Card: `886778010644415.json`

---

### 2026-07-10 — [Undo UX: Designing for Reversibility](https://www.facebook.com/reel/2126158401583676)

This lesson explains why providing an 'Undo' option is superior to 'Are you sure?' confirmation dialogs for most user actions. It covers soft deletes, matching friction to the cost of irreversible actions, and using grace periods to prevent common mistakes.

**Principles:** `Reversibility beats confirmation` · `Undo punishes nobody; confirmation punishes everyone` · `Deletion is a state, not an event` · `Match friction to the cost of the action` · `Earn the irreversible` · `The delay is the feature (Grace Periods)`

**UI patterns:** Toast notification with Undo button, Confirmation Modal, Soft Delete Database Flag, Trash Lifecycle Timeline, Type-to-confirm Input, Undo History Stack, Grace Period Progress Bar

**Before → After:** Comparison between a high-friction 'Confirm' dialog requiring 3 clicks every time versus an 'Undo' pattern requiring only 1 click with optional regret.

**Tags:** UX Design, UI Design, Product Design, Interaction Design, Reversibility, Undo Pattern

Transcript: `transcripts/2126158401583676.txt` · Card: `2126158401583676.json`

---

### 2026-07-08 — [Focus is a Feature: Keyboard Accessibility](https://www.facebook.com/reel/4421962048072389)

This lesson covers the critical importance of focus states for keyboard accessibility, detailing how to style focus rings, manage tab order, and implement focus traps. It emphasizes that accessibility is a legal and functional requirement, not just a stylistic choice.

**Principles:** `WCAG 2.4.7 Compliance` · `3:1 Contrast Ratio` · `Focus-Visible Pseudo-class` · `DOM Order Consistency` · `Focus Trapping` · `Skip Navigation`

**UI patterns:** Focus Ring, Input Fields, Buttons, Modals, Skip Links, Dashboard Grid

**Before → After:** A checkout form with invisible focus states is transformed into one with clear, accessible focus rings; a dashboard with chaotic tab order is corrected to follow logical DOM flow.

**Tags:** Accessibility, A11Y, UX Design, Web Design, CSS, UI Patterns

Transcript: `transcripts/4421962048072389.txt` · Card: `4421962048072389.json`

---

### 2026-07-06 — [Optimistic UI: Making Interfaces Feel Instant](https://www.facebook.com/reel/1737522820773693)

This lesson explains Optimistic UI, a technique where the interface updates immediately after a user action without waiting for server confirmation. It highlights the 400ms threshold for perceived latency and defines when to use this pattern versus showing a loading state.

**Principles:** `Optimistic UI` · `Perceived Latency (400ms rule)` · `State Rollback` · `Context-Aware Loading States`

**UI patterns:** Like Button, Counter, Loading Spinner, Error Toast, Flow Diagram

**Before → After:** Transition from a 'Wait for Server' model (slow, visible delay) to an 'Update First, Sync After' model (instant feel).

**Tags:** UX, UI, Optimistic UI, Latency, Product Design

Transcript: `transcripts/1737522820773693.txt` · Card: `1737522820773693.json`

---

### 2026-07-03 — [The Power of UX Writing](https://www.facebook.com/reel/1496755651597876)

This reel demonstrates how microcopy impacts conversion and user experience. It provides actionable tips for improving button labels, error messages, empty states, and brand voice through human-centric writing.

**Principles:** `Action-oriented labels (Payoff vs. Chore)` · `Helpful error handling (Detour vs. Dead end)` · `Actionable empty states` · `Persistent labeling (Labels vs. Placeholders)` · `Human-centric tone of voice`

**UI patterns:** Sign-up form, Call to Action (CTA) Button, Inline validation / Error messages, Empty state, Input fields, Floating labels, System alerts

**Before → After:** Contrasts generic, technical microcopy (e.g., 'Submit', 'Invalid input', 'Operation failed') with specific, helpful, and human-sounding copy (e.g., 'Create my free account', 'Want to log in?', 'Hmm, that didn't go through').

**Tags:** UX Writing, Microcopy, Conversion Rate Optimization, UI Design, Product Design, UX Design

Transcript: `transcripts/1496755651597876.txt` · Card: `1496755651597876.json`

---

### 2026-07-01 — [Form UX Timing](https://www.facebook.com/reel/1944524912916993)

This reel explains the importance of timing in form validation, demonstrating why validating on blur is superior to validating on submit or on every keystroke.

**Principles:** `Avoid 'On Submit' validation to prevent overwhelming users with errors.` · `Avoid 'On Keystroke' validation for initial entry to prevent premature error messages.` · `Use 'On Blur' validation to provide feedback after a user completes a field.` · `Switch to live validation only after an error is detected to provide immediate resolution feedback.` · `Provide positive reinforcement with success states.`

**UI patterns:** Input fields, Inline validation, Error messages, Success indicators, Submit button

**Before → After:** Contrasts the frustration of 'On Submit' and 'On Keystroke' validation with the smoother experience of 'On Blur' and 'Live on Error' validation.

**Tags:** UX Design, Form Design, UI Design, Validation, Interaction Design

Transcript: `transcripts/1944524912916993.txt` · Card: `1944524912916993.json`

---

### 2026-06-25 — [5 Tips for Better Color Pickers](https://www.facebook.com/reel/1349015704030919)

This reel explores five essential features for a high-performance color picker in UI design tools. It covers human-readable color formats, memory, real-time contrast checking, alpha previews, and automated palette generation.

**Principles:** `Human-readable color formats (OKLCH)` · `Color persistence and memory` · `Real-time accessibility checking` · `Contextual transparency previews` · `Systematic color scaling`

**UI patterns:** Color Picker, Sliders, Color Swatches, Contrast Badge, Button Preview, Palette Generator

**Before → After:** A basic color picker transformed into an advanced design tool with accessibility and system-building features.

**Tags:** UI Design, Color Theory, Accessibility, Design Systems, UX, OKLCH

Transcript: `transcripts/1349015704030919.txt` · Card: `1349015704030919.json`

---

### 2026-06-23 — [Password UX Best Practices](https://www.facebook.com/reel/1652926899128548)

This lesson covers essential UX improvements for password fields, emphasizing that password length is more important than complexity rules. It demonstrates real-time validation, strength meters, and the importance of supporting password managers for a seamless signup experience.

**Principles:** `Entropy over complexity` · `Inline validation` · `Real-time coaching` · `Accessibility (Allow Paste)` · `System-level integration`

**UI patterns:** Password input field, Password strength meter, Live validation checklist, Show/Hide password toggle, Password manager integration, Auto-generated password prompt

**Before → After:** Moving from static error messages shown after submission to real-time coaching via live checklists and strength meters that update as the user types.

**Tags:** UX Design, UI Design, Forms, Passwords, Security, Product Design

Transcript: `transcripts/1652926899128548.txt` · Card: `1652926899128548.json`

---

### 2026-06-21 — [5 UX Signals for Better File Uploads](https://www.facebook.com/reel/1029052806542981)

This lesson outlines five critical UI signals to improve the file upload experience, focusing on user feedback and transparency. It covers reactive drop zones, detailed progress indicators, error recovery, visual previews, and independent upload queues.

**Principles:** `Immediate feedback` · `Transparency` · `Error recovery` · `Visual confirmation` · `Parallel processing`

**UI patterns:** Drop zone, Progress bar, Loading spinner, Retry button, File preview card, Upload queue

**Before → After:** Contrasts a 'broken' experience (no feedback, vague progress, full restarts) with a 'safe' experience (reactive UI, honest progress, inline retries, and visual previews).

**Tags:** UX Design, UI Design, File Upload, Interaction Design, Product Design

Transcript: `transcripts/1029052806542981.txt` · Card: `1029052806542981.json`

---

### 2026-06-19 — [Mastering Pagination UX](https://www.facebook.com/reel/4488595424803425)

This lesson explores essential pagination strategies for data tables, including choosing the right pattern for user needs and solving technical issues like data drift. It covers cursor-based pagination, UI truncation, scroll restoration, and URL state management.

**Principles:** `Use cursor-based pagination to prevent item duplication and drift in dynamic lists.` · `Select pagination patterns based on user goals: Numbered for specific access, Load More for manual control, and Infinite Scroll for discovery.` · `Truncate long pagination ranges to avoid UI overflow while keeping the first and last pages accessible.` · `Implement scroll restoration to maintain user context when navigating back from detail views.` · `Sync UI state with the URL to enable deep linking and persistent views across refreshes.`

**UI patterns:** Data Table, Numbered Pagination, Load More Button, Infinite Scroll, Pagination Truncation, Scroll Restoration, URL Query Parameters

**Before → After:** Demonstrates the transition from buggy offset pagination to stable cursor pagination, and from cluttered link lists to clean, truncated navigation with URL state persistence.

**Tags:** UX Design, UI Design, Pagination, Data Tables, Frontend Development, Web Design

Transcript: `transcripts/4488595424803425.txt` · Card: `4488595424803425.json`

---

### 2026-06-17 — [Designing a Better Command Palette](https://www.facebook.com/reel/2157566511696771)

This lesson covers the essential UX patterns for building a high-performance command palette (Cmd+K). It focuses on fuzzy matching, structured results, keyboard-only navigation, and handling async or empty states to empower power users.

**Principles:** `Fuzzy matching to match user intent over literal strings` · `Information hierarchy through grouped results` · `Keyboard-first accessibility for speed` · `Avoid blank voids by providing starting points in empty states` · `Non-blocking UI for asynchronous data fetching` · `Hierarchical navigation with granular back-steps`

**UI patterns:** Command Palette, Fuzzy Search, Grouped List, Keyboard Navigation, Empty State Suggestions, Inline Loading Spinner, Nested Menus

**Before → After:** Transforming a basic search box into a structured, keyboard-driven command palette with fuzzy matching and nested navigation.

**Tags:** UX Design, UI Design, Command Palette, Productivity, Accessibility, Interaction Design

Transcript: `transcripts/2157566511696771.txt` · Card: `2157566511696771.json`

---

### 2026-06-15 — [Mastering 6-Digit Code Inputs](https://www.facebook.com/reel/1028519599859018)

This lesson covers essential UX patterns for multi-box authentication codes, including auto-advance, pasting logic, and mobile autofill. It emphasizes providing instant feedback and preventing user errors through smart state management and throttled resend actions.

**Principles:** `Auto-advance focus` · `Auto-reverse focus` · `Input sanitization (stripping spaces)` · `Single source of truth state` · `Mobile input optimization` · `Throttled actions` · `Instant visual feedback`

**UI patterns:** OTP Input, Numeric Keypad, Countdown Timer, Shake Animation, Success State

**Before → After:** Shows a standard input failing to handle a pasted code with spaces versus a sanitized input that fills all boxes correctly.

**Tags:** UI Design, UX Design, Authentication, Mobile UX, Frontend

Transcript: `transcripts/1028519599859018.txt` · Card: `1028519599859018.json`

---

### 2026-06-12 — [Designing Better UI Filter Systems](https://www.facebook.com/reel/1898356567528601)

This lesson explains how to design effective filter chips by managing states, logic, and mobile layouts. It emphasizes immediate feedback, clear exit strategies, and maintaining visibility of active filters to improve user experience.

**Principles:** `State differentiation (Idle vs Active vs Disabled)` · `Boolean logic (OR within groups, AND across groups)` · `Immediate feedback (Real-time count updates)` · `Mobile space optimization (Horizontal scroll vs wrapping)` · `Visibility of system status (Pinned active filters)`

**UI patterns:** Filter chips, Result count indicator, Horizontal scrolling row, Clear all button, Pinned active filters

**Before → After:** Demonstrates the transition from wrapping chips into a 'wall' that hides results to using a single horizontal scrolling row with an edge fade to preserve screen real estate.

**Tags:** UI Design, UX Design, Mobile Design, Filter Chips, Design Systems

Transcript: `transcripts/1898356567528601.txt` · Card: `1898356567528601.json`

---

### 2026-06-10 — [Credit Card Input UX Tips](https://www.facebook.com/reel/4388536218092850)

Learn how to optimize credit card input fields with smart formatting, brand detection, and patient validation. These UX tips help reduce user errors and friction during the checkout process.

**Principles:** `Chunking for readability` · `Immediate visual feedback` · `Smart caret management` · `Validation on blur` · `Data sanitization` · `Human-readable vs machine-readable data`

**UI patterns:** Input field, Input mask, Brand detection, Validation message, Caret, JSON data structure

**Before → After:** Transforms a basic, error-prone text input into a smart, formatted credit card field that handles brand detection and data cleaning.

**Tags:** UX Design, UI Design, Form UX, Checkout Experience, Input Masking

Transcript: `transcripts/4388536218092850.txt` · Card: `4388536218092850.json`

---

### 2026-06-08 — [Mastering Slider UI Design](https://www.facebook.com/reel/1468779114997918)

This lesson outlines essential UX improvements for sliders, focusing on usability, visual feedback, and accessibility. It covers techniques like expanding hit areas, using filled tracks, snapping to discrete steps, and adding keyboard support.

**Principles:** `Expand hit areas for better target acquisition` · `Use filled tracks to communicate value visually` · `Snap to discrete steps for precision` · `Provide real-time feedback with floating values` · `Support range selection with dual thumbs` · `Implement keyboard accessibility (Arrow keys, Home, End)`

**UI patterns:** Slider, Range Slider, Floating Value Label, Stepped Slider, Keyboard Navigation

**Before → After:** Transforming a basic, hard-to-use slider into a highly accessible and intuitive component with better hit areas, visual fills, and discrete steps.

**Tags:** UI Design, UX Design, Slider, Accessibility, Interaction Design, Form Design

Transcript: `transcripts/1468779114997918.txt` · Card: `1468779114997918.json`

---

### 2026-06-05 — [Mastering Data Visualization](https://www.facebook.com/reel/3087307248136449)

This reel provides a masterclass in data visualization, covering essential rules for honesty and clarity. It teaches viewers how to avoid misleading axes, choose the right chart types, use color meaningfully, and optimize the data-ink ratio.

**Principles:** `Zero-baseline for bar charts` · `Appropriate chart selection (Form follows function)` · `Color as data encoding (Categorical, Sequential, Diverging)` · `Data-ink ratio maximization` · `Elimination of chartjunk` · `Direct labeling` · `Banking to 45 degrees for aspect ratios`

**UI patterns:** Bar Chart, Line Chart, Pie Chart, Data Labels, Color Palettes, Dashboard Components

**Before → After:** Demonstrates the transformation from misleading, cluttered charts with truncated axes and excessive colors to honest, clean, and highly readable data visualizations.

**Tags:** DataViz, UIDesign, UXDesign, DashboardDesign, InformationDesign, Tufte

Transcript: `transcripts/3087307248136449.txt` · Card: `3087307248136449.json`

---

### 2026-06-03 — [The Anatomy of a Perfect Star Rating](https://www.facebook.com/reel/2106780266928548)

This lesson covers essential UX improvements for star rating components, including hover previews, state management, and accurate data representation. It also demonstrates how micro-interactions like staggered animations and progress rings can enhance the user experience.

**Principles:** `Immediate Feedback (Hover Preview)` · `State Separation (Preview vs. Committed)` · `Data Accuracy (Avoid rounding up ratings)` · `Visual Polish (Staggered animations for delight)` · `Redundant Coding (Using both stars and a ring for faster comprehension)`

**UI patterns:** Star Rating Widget, Circular Progress Bar / Progress Ring, Hover States, Staggered Animation, Rating Summary Card

**Before → After:** Transforms a basic, static star rating into an interactive, accurate, and polished component with hover previews and staggered animations.

**Tags:** UI Design, UX Design, Micro-interactions, Star Rating, Animation, Data Visualization

Transcript: `transcripts/2106780266928548.txt` · Card: `2106780266928548.json`

---

### 2026-06-01 — [Drag-and-Drop Interaction Patterns](https://www.facebook.com/reel/860578686523731)

This reel breaks down the essential feedback loops for a seamless drag-and-drop experience. It covers pick-up signals, drop zone indicators, snapping logic, and error recovery via undo toasts.

**Principles:** `Visual Feedback` · `Affordance` · `Predictability` · `Context-Aware Constraints` · `Error Recovery`

**UI patterns:** Kanban Board, Cards, Drag and Drop, Toast Notification, Undo Button, Insertion Line, Drop Zone Highlight

**Before → After:** Contrasts a 'blind drop' (no feedback) with a 'previewed drop' (insertion lines and highlights), and 'stuck' movement with multi-signal feedback (cursor change, card lift, background fade).

**Tags:** UX Design, UI Design, Interaction Design, Drag and Drop, Kanban, Product Design

Transcript: `transcripts/860578686523731.txt` · Card: `860578686523731.json`

---

### 2026-05-30 — [Mastering UI Toggles](https://www.facebook.com/reel/27114469058187838)

This lesson breaks down the anatomy, animation, and accessibility of a high-quality toggle switch. It covers geometric ratios, multi-property transitions, and optimistic UI patterns for a better user experience.

**Principles:** `Geometric Proportions` · `Multi-property Animation` · `Keyboard Accessibility` · `ARIA Compliance` · `Optimistic Updates` · `Error Handling & Rollback`

**UI patterns:** Toggle Switch, Focus Ring, Loading Spinner, Error Toast, Optimistic UI

**Before → After:** A basic 'snapping' toggle compared to a polished 'morphing' toggle with smooth transitions and accessibility features.

**Tags:** UI Design, UX Design, Animation, Accessibility, Frontend, Design Systems

Transcript: `transcripts/27114469058187838.txt` · Card: `27114469058187838.json`

---

### 2026-05-28 — [Mastering Notification Systems](https://www.facebook.com/reel/2282515145835327)

This lesson teaches how to select the appropriate UI surface for notifications based on message severity. It covers the lifecycle, persistence, and stacking behavior of toasts, banners, modals, and badges.

**Principles:** `Match notification volume to message severity` · `Use auto-dismiss for low-priority toasts (e.g., 4 seconds)` · `Include 'Undo' for destructive actions in toasts` · `Banners should persist until manual dismissal` · `Modals must block interaction until a choice is made` · `Stack toasts vertically to maintain readability` · `Avoid stacking multiple modals (Trainwreck)`

**UI patterns:** Toast notifications, Banners, Modals, Notification badges, Dashboard layout

**Before → After:** Comparison between a clean stack of three toasts ('Breathe') versus an overlapping, unusable stack of three modals ('Trainwreck').

**Tags:** UI Design, UX Design, Notifications, Design Systems, Dashboard Design, Product Design

Transcript: `transcripts/2282515145835327.txt` · Card: `2282515145835327.json`

---

### 2026-05-27 — [Automated UX Audits with Claude Code](https://www.facebook.com/reel/1338363621728980)

This video introduces UX Engine, a Claude Code plugin that performs automated UX audits on UI code. It identifies critical issues like poor information hierarchy, missing accessibility labels, and unhandled states, providing direct code fixes via diffs.

**Principles:** `Information Hierarchy` · `Visual Affordance` · `Accessibility` · `State Completeness` · `Mobile Responsiveness` · `Feedback Systems`

**UI patterns:** Buttons, Dashboard, Toolbar, Empty State, Form, Search Input, Avatar, CLI

**Before → After:** A primary-styled 'Delete' button is updated to a ghost variant with a destructive property to improve visual hierarchy and prevent accidental clicks.

**Tags:** UX Audit, Claude Code, AI Tools, UI Design, Frontend Development, Accessibility

Transcript: `transcripts/1338363621728980.txt` · Card: `1338363621728980.json`

---

### 2026-05-26 — [UX Tips for Multi-Step Forms](https://www.facebook.com/reel/1532385908524073)

This lesson teaches how to optimize long forms by converting them into multi-step wizards. It highlights key techniques like chunking, progress visualization, contextual grouping, and inline validation to reduce cognitive load and improve completion rates.

**Principles:** `Chunking` · `Cognitive Load Reduction` · `Progress Visualization` · `Contextual Grouping` · `Inline Validation` · `State Persistence (Local Storage)`

**UI patterns:** Multi-step form, Stepper wizard, Linear progress bar, Numbered step indicators, Step labels, Inline validation, Input fields, Navigation buttons (Next/Back)

**Before → After:** A single-page form with 12 fields (the 'Wall') is transformed into a 4-step wizard (the 'Path') that uses chunking and progress tracking.

**Tags:** UX Design, UI Design, Form Design, Stepper Wizard, User Experience, Product Design

Transcript: `transcripts/1532385908524073.txt` · Card: `1532385908524073.json`

---

### 2026-05-22 — [Mastering UI Tab Systems](https://www.facebook.com/reel/979499467901827)

This lesson details five essential rules for designing high-quality tab systems, focusing on smooth animations, accessibility, and mobile responsiveness. It covers everything from indicator motion and overflow handling to keyboard navigation and content transitions.

**Principles:** `Smooth motion over instant state changes` · `Ease-out timing (Slow in, Fast out)` · `Avoid multi-line wrapping for navigation` · `Keyboard accessibility (Arrow, Home, End keys)` · `Visual distinction between Focus and Active states` · `Mobile-first touch targets (>= 44px)` · `Thumb-zone optimization` · `Prevention of Layout Shift (CLS) through height interpolation` · `Fade-Pause-Fade content transitions`

**UI patterns:** Tabs, Underline Indicator, Horizontal Scroll, Edge Fades/Gradients, Chevron Buttons, Focus Rings, Segmented Controls, Bottom Sheets

**Before → After:** Hard-cut tab indicators and content jumping vs. smooth sliding indicators and interpolated container heights with fade transitions.

**Tags:** UI Design, UX Design, Tabs, Animation, Accessibility, Mobile Design, Dashboard Design

Transcript: `transcripts/979499467901827.txt` · Card: `979499467901827.json`

---

### 2026-05-18 — [Date Picker Design Best Practices](https://www.facebook.com/reel/1059078393502662)

This reel demonstrates how to optimize date pickers for efficiency and accessibility. It covers the use of presets, range highlighting, multi-month views, keyboard shortcuts, and mobile-specific layouts.

**Principles:** `Efficiency` · `Anticipation` · `Visual Feedback` · `Flexibility` · `Context` · `Accessibility` · `Responsive Design` · `Touch Targets`

**UI patterns:** Date Picker, Date Range Picker, Presets, Calendar Grid, Input Field, Bottom Sheet, Multi-month view

**Before → After:** From a basic single-month calendar requiring multiple clicks to a comprehensive date picker with presets, range selection, and keyboard accessibility.

**Tags:** UX Design, UI Design, Date Picker, Accessibility, Mobile Design, Interaction Design, Product Design

Transcript: `transcripts/1059078393502662.txt` · Card: `1059078393502662.json`

---

### 2026-05-16 — [Search Bar Design System](https://www.facebook.com/reel/1487183219540241)

This lesson breaks down search as a five-part system rather than a single input field. It covers optimizing placeholders, recent searches, autocomplete ranking, keyboard accessibility, and zero-results recovery.

**Principles:** `Onboarding through microcopy (What, How, Scope)` · `Friction reduction via one-tap reuse` · `Popularity-based ranking over alphabetical sorting` · `Keyboard accessibility (WCAG 2.4.7 compliance)` · `Recovery paths for zero-result states`

**UI patterns:** Search Input, Placeholder Text, Recent Searches List, Autocomplete Suggestions, Category Badges, Focus Ring, Zero Results / Empty State

**Before → After:** Transforms a basic 'Search' input into a comprehensive system including recent history, ranked suggestions, and recovery options for failed queries.

**Tags:** UX Design, UI Design, Search Bar, Accessibility, Interaction Design

Transcript: `transcripts/1487183219540241.txt` · Card: `1487183219540241.json`

---

### 2026-05-14 — [The Peak-End Rule in UX Design](https://www.facebook.com/reel/1458686142145780)

This lesson explains the Peak-End Rule, a psychological principle where users judge an experience based on its most intense point and its end. By designing intentional peaks and polishing the final interaction, designers can significantly improve user memory and satisfaction.

**Principles:** `Peak-End Rule` · `User Delight` · `Memory Bias` · `Error Handling`

**UI patterns:** Line charts, Checkout summary, Success state animation, Search bar, Filters, Error messages, Onboarding checklist

**Before → After:** A standard checkout success screen (Cold Ending) is compared to one with a confetti animation (Joyful Ending), showing a 40% increase in memory recall.

**Tags:** UX Design, UI Design, Psychology, User Experience, Product Design

Transcript: `transcripts/1458686142145780.txt` · Card: `1458686142145780.json`

---

### 2026-05-11 — [The Zeigarnik Effect in UX](https://www.facebook.com/reel/1402071608435107)

This lesson explains the Zeigarnik Effect, a psychological principle where unfinished tasks stay in active memory longer than completed ones. It demonstrates how to use 'open loops' in onboarding and profile completion to drive user retention, while cautioning that it only works for outcomes users actually value.

**Principles:** `Zeigarnik Effect` · `Open Loops` · `User Motivation Alignment` · `Goal Gradient Effect`

**UI patterns:** Progress bars, Onboarding checklists, Profile strength indicators, Gamification elements

**Before → After:** A comparison between a fully completed onboarding checklist (100%) which leads to user forgetfulness, and an incomplete checklist (80%) which creates a psychological 'pull' for the user to return.

**Tags:** UX Design, Psychology, Onboarding, User Retention, Zeigarnik Effect

Transcript: `transcripts/1402071608435107.txt` · Card: `1402071608435107.json`

---

### 2026-05-09 — [The Serial Position Effect in UI Design](https://www.facebook.com/reel/1159162060607416)

This lesson explains how the serial position effect causes users to remember the first and last items in a sequence best. It provides actionable tips for organizing navbars, landing pages, and onboarding flows to maximize impact.

**Principles:** `Serial Position Effect` · `Primacy Effect` · `Recency Effect`

**UI patterns:** Navbar, Call to Action (CTA), Landing Page, Testimonial, Logo Wall, Onboarding Carousel

**Before → After:** Optimizing the placement of critical UI elements (logos, CTAs, USPs) to the start and end of sequences to maximize user recall.

**Tags:** UX Design, UI Design, Psychology, Serial Position Effect, Conversion Optimization

Transcript: `transcripts/1159162060607416.txt` · Card: `1159162060607416.json`

---

### 2026-05-06 — [5 Animation Timing Secrets for UI](https://www.facebook.com/reel/899027719817805)

This lesson provides specific duration guidelines for different types of UI animations to ensure a responsive and professional user experience. It covers optimal timing for entrances, exits, feedback, attention-grabbing elements, and staggered lists.

**Principles:** `Entrance animations should be 200-300ms.` · `Exit animations should be roughly 30% faster than entrances (150-200ms).` · `Interactive feedback (hover/press) should be under 100ms (Doherty Threshold).` · `Attention-grabbing animations should be 500-800ms with a bounce to be noticeable but not annoying.` · `Staggered list items should have a 50ms delay between each item.`

**UI patterns:** Modals, Page transitions, Panels, Buttons, Toggles, Error alerts, Notifications, Staggered lists

**Before → After:** Compares 'Too Fast', 'Perfect', and 'Too Slow' timings for each animation category to demonstrate the ideal feel.

**Tags:** UI Design, UX Design, Motion Design, Animation Timing, Interaction Design

Transcript: `transcripts/899027719817805.txt` · Card: `899027719817805.json`

---

### 2026-05-05 — [5 Rules for Better Error States](https://www.facebook.com/reel/1011539707965282)

This reel provides five actionable tips to improve UX by properly handling error states. It covers matching error types to UI patterns, providing recovery paths, and using live validation to prevent errors before they occur.

**Principles:** `Match the error type to the surface` · `Always offer a way out (recovery actions)` · `Severity drives surface selection` · `Write human-readable copy` · `Prevent errors with live validation`

**UI patterns:** Modals, Toasts, Inline validation, Input fields, Action buttons (Retry, Refresh), Progress indicators

**Before → After:** A generic 'Error 500' modal with an 'OK' button is transformed into a contextual 'Lost connection' toast with 'Try again' and 'Refresh' options.

**Tags:** UX Design, UI Design, Error States, Form Validation, Product Design, User Experience

Transcript: `transcripts/1011539707965282.txt` · Card: `1011539707965282.json`

---

### 2026-05-01 — [5 Essential Navigation Patterns for UX](https://www.facebook.com/reel/1274160754364058)

This reel explains when and how to use five common navigation patterns: bottom tabs, sidebars, hamburger menus, command palettes, and breadcrumbs. It provides specific rules for mobile versus desktop and highlights common pitfalls to avoid to ensure better user retention.

**Principles:** `Limit bottom tabs to 3-5 items for mobile visibility and reachability.` · `Use sidebars for desktop when content is hierarchical or exceeds 5 sections.` · `Reserve hamburger menus for secondary content on mobile; avoid them for primary navigation.` · `Command palettes are shortcuts for power users, not a replacement for primary navigation.` · `Use breadcrumbs only for hierarchies deeper than 2 levels to show position, not as a primary navigation tool.`

**UI patterns:** Bottom Tab Bar, Persistent Sidebar, Hamburger Menu, Command Palette, Breadcrumbs

**Tags:** UX Design, UI Design, Navigation Patterns, Information Architecture, Mobile UX, Desktop UI

Transcript: `transcripts/1274160754364058.txt` · Card: `1274160754364058.json`

---

### 2026-04-29 — [6 Essential Form States for Better UX](https://www.facebook.com/reel/26902587206039051)

This lesson outlines the six critical states every form field needs to ensure accessibility and a robust user experience. It provides specific rules for default, focus, error, success, disabled, and loading states to prevent common usability bugs.

**Principles:** `Accessibility` · `Contrast Ratio` · `Visual Feedback` · `Inclusive Design` · `State Management` · `Error Prevention`

**UI patterns:** Input Field, Form Validation, Helper Text, Error Message, Success Indicator, Loading Spinner, Disabled State

**Before → After:** Comparison between apps that only ship two form states versus a complete system of six essential states (Default, Focus, Error, Success, Disabled, Loading).

**Tags:** UI Design, UX Design, Forms, Accessibility, Design Systems, Input Fields

Transcript: `transcripts/26902587206039051.txt` · Card: `26902587206039051.json`

---

### 2026-04-27 — [5 Rules for Better Tooltips](https://www.facebook.com/reel/1280965717578919)

This reel outlines five essential rules for designing user-friendly tooltips, focusing on timing, visual clarity, and responsiveness. It teaches how to avoid common pitfalls like 'noisy' instant triggers and content that gets cut off by screen edges.

**Principles:** `Intentionality (300ms delay to confirm intent)` · `Visual Hierarchy and Connection (using arrows/tails)` · `Responsive Positioning (flipping near edges)` · `Accessibility and Dismissibility (multiple exit routes)` · `Content Conciseness (max 300px width, one sentence)`

**UI patterns:** Tooltips, Hover states, Buttons, Viewport boundaries

**Before → After:** A transformation from a 'cheap' tooltip (instant, no arrow, long text, cut off by edges) to a 'premium' tooltip (delayed, arrowed, concise, and responsive).

**Tags:** UX Design, UI Design, Micro-interactions, Tooltips, Product Design

Transcript: `transcripts/1280965717578919.txt` · Card: `1280965717578919.json`

---

### 2026-04-24 — [5 Rules for Better Dropdowns](https://www.facebook.com/reel/1291637032335837)

This lesson outlines five essential rules for designing functional and accessible dropdown menus. It covers touch target sizes, viewport-aware positioning, keyboard accessibility, search functionality for long lists, and optimal animation speeds.

**Principles:** `Touch target size (44px minimum)` · `Visual affordance` · `Viewport awareness` · `Accessibility (Keyboard navigation)` · `Efficiency (Search vs Scroll)` · `Motion design (150ms duration)`

**UI patterns:** Dropdown menu, Select input, Search bar, Caret icon, Hover states, Keyboard shortcuts, List virtualization

**Before → After:** A small, low-contrast dropdown without a caret (Before) is transformed into a larger, high-contrast dropdown with a clear caret icon and hover feedback (After).

**Tags:** UI Design, UX Design, Accessibility, Interaction Design, Web Development, Design Systems

Transcript: `transcripts/1291637032335837.txt` · Card: `1291637032335837.json`

---

### 2026-04-22 — [Mastering CSS z-index](https://www.facebook.com/reel/1723715535134023)

This lesson explains the fundamental rules of CSS z-index, including the requirement for positioning and the concept of stacking contexts. It also introduces the isolation property and visual debugging tools in Chrome DevTools to resolve layering bugs.

**Principles:** `Stacking Context` · `CSS Positioning` · `CSS Isolation` · `Visual Debugging`

**UI patterns:** Dropdown, Modal, Card, Tooltip, Chrome DevTools Layers Panel

**Before → After:** A dropdown menu incorrectly hidden behind a modal window is resolved by understanding stacking contexts and positioning rules.

**Tags:** CSS, Frontend Development, Web Design, UI/UX, Debugging

Transcript: `transcripts/1723715535134023.txt` · Card: `1723715535134023.json`

---

### 2026-04-20 — [5 Loading Patterns for Better UX](https://www.facebook.com/reel/966287759692721)

This lesson breaks down the five essential loading patterns and when to use each based on duration and predictability. It covers skeletons, spinners, progress bars, optimistic UI, and the 'show nothing' rule for short delays.

**Principles:** `Use skeletons for predictable layouts (cards, lists) when wait is > 300ms` · `Use spinners for short, unknown durations (< 3s), but avoid for full page loads` · `Use progress bars for known percentages and long waits (> 3s) to build trust` · `Use optimistic UI for high-success actions (likes, saves) for instant feedback` · `Show nothing for very short waits (< 300ms) to avoid flashing loading states`

**UI patterns:** Skeleton Screen, Loading Spinner, Progress Bar, Optimistic UI, Empty State

**Before → After:** Shows a comparison between a 'Skeleton Flash' (incorrect for 200ms) and 'Show Nothing' (correct for 200ms).

**Tags:** UX Design, UI Design, Loading States, Skeleton Screens, Optimistic UI, Design Systems

Transcript: `transcripts/966287759692721.txt` · Card: `966287759692721.json`

---

### 2026-04-18 — [Toasts done right.](https://www.facebook.com/reel/2149760112506033)

This reel teaches five essential rules for designing toast notifications: optimal positioning, severity-based timing, stacking limits, user-controlled dismissibility, and accessible color coding. It emphasizes creating non-intrusive, informative UI elements that respect user workflow.

**Principles:** `Context-aware positioning` · `Severity-based timing` · `User control and freedom` · `Accessibility through redundant coding` · `Natural motion with spring physics`

**UI patterns:** Toast Notifications, Snackbars, Close Buttons, Icons, Notification Stacks

**Before → After:** Contrasts centered toasts (which block content) with corner or top-aligned toasts that remain non-intrusive.

**Tags:** UI Design, UX Design, Notifications, Accessibility, Design Systems

Transcript: `transcripts/2149760112506033.txt` · Card: `2149760112506033.json`

---

### 2026-04-16 — [5 Rules for Better Empty States](https://www.facebook.com/reel/1626204088711096)

This lesson explains how to transform boring empty states into engaging user experiences. It highlights five key strategies: using illustrations, adopting a human tone, providing clear primary actions, designing for specific contexts, and leveraging empty states for onboarding.

**Principles:** `Visual Communication` · `Brand Voice` · `Human-Centered Design` · `Actionability` · `Contextual Awareness` · `Onboarding`

**UI patterns:** Empty State, Illustration, Primary Button (CTA), Error Message, Search Results, Filters, Onboarding Placeholder

**Before → After:** A transition from 'dead' empty states (blank screens or technical error logs) to 'alive' empty states (screens with helpful illustrations, friendly copy, and clear calls to action).

**Tags:** UI Design, UX Design, Empty States, Product Design, Onboarding, Copywriting

Transcript: `transcripts/1626204088711096.txt` · Card: `1626204088711096.json`

---

### 2026-04-10 — [Mastering the Golden Ratio in UI](https://www.facebook.com/reel/1242263874610523)

This lesson demonstrates how to apply the golden ratio (1.618) to spacing, layout, and typography to create visual harmony. By using this mathematical constant, designers can replace random values with a structured rhythm used by leading tech brands like Apple and Stripe.

**Principles:** `Golden Ratio (1.618)` · `Visual Rhythm` · `Proportional Layout` · `Typographic Hierarchy` · `Mathematical Spacing`

**UI patterns:** Spacing Scale, Dashboard Layout, Sidebar, Typography Hierarchy, Content Cards

**Before → After:** A comparison between 'Random' padding and 'Golden' spacing based on the 1.618 multiplier.

**Tags:** UI Design, UX Design, Golden Ratio, Typography, Layout Design, Design Systems, Visual Hierarchy

Transcript: `transcripts/1242263874610523.txt` · Card: `1242263874610523.json`
