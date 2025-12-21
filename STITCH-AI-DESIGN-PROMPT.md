# Stitch AI Design Prompt for Digital Business Card Generator

## Project Overview

I need UI designs for a **Digital Business Card Generator** web application. This is a full-stack MERN application that allows users to create, customize, and share professional digital business cards with QR codes.

## Project Context

### Technology Stack
- **Frontend**: React 19, Vite, React Router DOM
- **Backend**: Node.js, Express, MongoDB
- **Styling**: Inline styles (React style objects)
- **Current Design**: Modern gradient backgrounds, glassmorphism effects, smooth animations

### Current Color Scheme
- **Primary Gradient**: Purple to violet (`#667eea` to `#764ba2`)
- **Accent Colors**: 
  - Blue: `#6366f1` (primary actions)
  - Green: `#10b981` (success/create)
  - Red: `#ef4444` (delete/danger)
- **Neutral Colors**: 
  - Dark: `#1f2937`
  - Gray: `#6b7280`
  - Light Gray: `#f3f4f6`

### Design Style
- Modern, professional SaaS application
- Glassmorphism with backdrop blur
- Gradient backgrounds
- Smooth animations and transitions
- Card-based layouts
- Responsive design

## Pages to Design

### 1. HOME PAGE (Landing Page)

**Current Structure:**
```
- Fixed navbar at top (white with blur effect)
- Hero section with:
  - Badge: "✨ Professional Digital Cards"
  - Main heading: "Create Stunning Digital Business Cards"
  - Subtitle explaining the service
  - Two CTAs: "Get Started Free" and "Sign In"
- Features section with 6 cards:
  - Customizable Design (🎨)
  - QR Code Generation (📱)
  - Share Everywhere (🔗)
  - Lightning Fast (⚡)
  - Secure & Private (🔒)
  - Multiple Cards (📊)
- Bottom CTA section
```

**Design Requirements:**
- Make it more visually appealing and modern
- Add illustrations or graphics (suggest placement)
- Improve the hero section with better visual hierarchy
- Make feature cards more engaging with hover effects
- Add social proof section (testimonials/stats)
- Improve spacing and typography
- Suggest better icon usage or custom illustrations
- Mobile-responsive layout

**Key Elements to Enhance:**
- Hero section needs more visual impact
- Feature cards could use better iconography
- Add a "How it works" section (3-4 steps)
- Include a preview/demo section showing sample cards
- Better call-to-action placement

### 2. DASHBOARD PAGE

**Current Structure:**
```
- Fixed navbar at top
- Header section:
  - Welcome message: "👋 Welcome back, [Name]!"
  - Subtitle: "You have X business cards"
  - "Create New Card" button (green gradient)
- Card grid displaying all user's cards:
  - Each card shows:
    - Profile image (circular, 80px)
    - Name (large, bold)
    - Job title
    - Company name
    - Email and phone
    - Three action buttons: View, Edit, Delete
- Empty state if no cards:
  - Large icon (🪪)
  - Message: "No cards yet"
  - Description
  - "Get Started" button
```

**Design Requirements:**
- Improve card layout and visual hierarchy
- Better organization of card information
- Add quick stats section (total cards, views, shares)
- Improve action buttons design
- Add search/filter functionality design
- Better empty state with illustration
- Add card sorting options (recent, alphabetical)
- Improve profile image display
- Add hover effects and micro-interactions
- Consider list view vs grid view toggle

**Key Elements to Enhance:**
- Card thumbnails need better design
- Action buttons could be more intuitive
- Add quick actions (duplicate card, share link)
- Better visual feedback for interactions
- Add card status indicators (public/private)

### 3. EDIT CARD PAGE (also applies to Create Card)

**Current Structure:**
```
- Fixed navbar at top
- Page header:
  - Title: "✏️ Edit Business Card"
  - Subtitle: "Update your card details..."
- Two-column layout:
  
  LEFT COLUMN (Form):
  - Personal Details section:
    - Full Name (required)
    - Email (required)
    - Phone
  - Professional Details section:
    - Job Title
    - Company Name
    - Website URL
    - Location
  - Social Media section:
    - LinkedIn URL
    - GitHub URL
    - Instagram URL
    - Twitter URL
  - Profile Image section:
    - Current image preview (if exists)
    - File upload input
    - Upload status
  - Theme Customization section:
    - Color picker
    - Font selector dropdown
  - Submit button: "Update Business Card"
  
  RIGHT COLUMN (Live Preview):
  - Sticky preview card showing:
    - Profile image
    - Name, title, company
    - Contact information
    - Social media links
    - All styled with selected theme
```

**Design Requirements:**
- Improve form layout and grouping
- Better input field design with icons
- Improve file upload area (drag & drop zone)
- Better theme customization UI
- Add template selection (multiple card designs)
- Improve live preview with better card designs
- Add more customization options:
  - Background patterns
  - Card layouts (3-4 templates)
  - Icon styles
- Better visual feedback during editing
- Add undo/redo functionality design
- Improve color picker UI
- Add preset color schemes
- Better font preview

**Key Elements to Enhance:**
- Form sections need better visual separation
- Input fields could use better styling
- File upload needs drag-and-drop visual
- Live preview should be more prominent
- Add template gallery
- Theme customization needs better UI
- Add preview in different sizes (mobile, desktop)

## Design Specifications

### Typography
- **Headings**: Bold, modern sans-serif
- **Body**: Clean, readable sans-serif
- **Current Font**: Inter (can suggest alternatives)

### Spacing
- Consistent padding and margins
- Use 8px grid system
- Generous whitespace

### Components to Design
1. **Buttons**: Primary, Secondary, Danger, Ghost
2. **Input Fields**: Text, Email, URL, File upload, Color picker
3. **Cards**: Dashboard cards, Feature cards, Preview cards
4. **Navigation**: Fixed navbar with blur effect
5. **Modals**: Confirmation dialogs, Success messages
6. **Empty States**: Illustrations and messaging
7. **Loading States**: Spinners, skeleton screens

### Interactions to Consider
- Hover effects on cards and buttons
- Click animations
- Form validation feedback
- Success/error messages
- Loading states
- Smooth transitions between states

## Technical Constraints

### Implementation
- Designs will be implemented using **React inline styles** (style objects)
- No CSS frameworks (no Tailwind, Bootstrap, etc.)
- Must work with current gradient background approach
- Should maintain glassmorphism effects
- All animations via CSS transitions

### Responsive Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## Deliverables Needed

For each page, please provide:

1. **High-fidelity mockups** showing:
   - Desktop view (1440px width)
   - Tablet view (768px width)
   - Mobile view (375px width)

2. **Component specifications**:
   - Exact colors (hex codes)
   - Font sizes and weights
   - Spacing measurements
   - Border radius values
   - Shadow specifications
   - Animation timings

3. **Interactive states**:
   - Default state
   - Hover state
   - Active/clicked state
   - Disabled state
   - Loading state
   - Error state

4. **Micro-interactions**:
   - Button hover effects
   - Card hover effects
   - Form field focus states
   - Success animations
   - Loading animations

## Design Goals

### Primary Goals
1. **Professional**: Look like a modern SaaS product
2. **Intuitive**: Easy to understand and use
3. **Engaging**: Visually appealing with smooth interactions
4. **Trustworthy**: Inspire confidence in users
5. **Accessible**: Clear contrast, readable text

### User Experience Goals
- Reduce cognitive load
- Clear visual hierarchy
- Obvious call-to-actions
- Smooth, delightful interactions
- Fast perceived performance

## Inspiration & References

### Style References
- Modern SaaS applications (Notion, Linear, Vercel)
- Glassmorphism design trend
- Gradient-heavy designs
- Card-based layouts
- Micro-interactions and animations

### Avoid
- Cluttered layouts
- Too many colors
- Inconsistent spacing
- Poor contrast
- Overly complex animations

## Additional Context

### User Flow
1. User lands on **Home Page**
2. Clicks "Get Started" → Register
3. Redirected to **Dashboard** (empty state)
4. Clicks "Create New Card" → Create Card Page
5. Fills form, sees live preview
6. Saves card → Back to **Dashboard** (shows card)
7. Can click "Edit" → **Edit Card Page**
8. Can click "View" → Public Card Page

### Key Features to Highlight in Design
- **QR Code Generation**: Automatic QR codes for sharing
- **Live Preview**: Real-time card preview while editing
- **Multiple Cards**: Users can create unlimited cards
- **Customization**: Colors, fonts, layouts
- **Easy Sharing**: Download as PNG/PDF, share via URL

## Questions to Consider

1. Should we add illustrations? If yes, what style? (line art, 3D, abstract)
2. Should we use custom icons or emoji?
3. Should we add animations? What kind? (subtle, playful, minimal)
4. Should we add a dark mode option?
5. Should we show sample cards on the home page?
6. Should we add a pricing section (even if free)?
7. Should we add user testimonials?
8. Should we show card templates in a gallery?

## Output Format

Please provide:
1. **Figma file** or **high-resolution images** (PNG/JPG)
2. **Design specifications document** with:
   - Color palette
   - Typography scale
   - Spacing system
   - Component library
3. **Annotations** explaining design decisions
4. **Responsive behavior** notes
5. **Animation specifications** (timing, easing)

## Priority

**High Priority:**
1. Dashboard Page (most used)
2. Edit/Create Card Page (core functionality)
3. Home Page (first impression)

**Medium Priority:**
4. Component library
5. Responsive designs
6. Micro-interactions

## Timeline

Please provide designs that can be implemented using React inline styles without requiring additional CSS frameworks or libraries.

---

## Example Current Design (for reference)

**Current Home Page Style:**
```javascript
{
  wrapper: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    paddingTop: '120px'
  },
  card: {
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
  }
}
```

**Current Button Style:**
```javascript
{
  button: {
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: '#fff',
    padding: '1.25rem 3rem',
    borderRadius: '12px',
    fontWeight: '700',
    boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)',
    transition: 'all 0.3s ease'
  }
}
```

---

## Final Notes

- Focus on creating a cohesive design system
- Ensure all designs are implementable with inline React styles
- Prioritize user experience and clarity
- Make it feel premium and professional
- Consider accessibility (contrast, font sizes)
- Think about the emotional response we want (trust, excitement, ease)

Thank you! Looking forward to seeing your creative designs that will elevate this business card generator to the next level! 🎨✨
