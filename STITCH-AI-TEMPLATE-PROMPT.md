# Stitch AI Prompt for Business Card Templates

## Context
Generate modern, professional digital business card templates for a web application. Each template should be unique in layout and style while maintaining a dark theme aesthetic.

## Design Requirements

### General Specifications
- **Aspect Ratio**: 1.586:1 (standard business card proportions)
- **Theme**: Dark background (#102217 or similar dark green-black tones)
- **Primary Color**: #2bee79 (neon green) - should be customizable
- **Font**: Be Vietnam Pro
- **Style**: Glassmorphic design with backdrop-filter blur effects
- **Icons**: Material Symbols Outlined

### Template Variations Needed

Generate 6 different template layouts with these characteristics:

---

## Template 1: Classic Professional
**Layout**: Horizontal split design
- Left side: Profile image (circular, 4-6rem diameter)
- Right side: Name, title, company, location stacked vertically
- Bottom: Social icons in a row (mail, phone, website, LinkedIn, GitHub)
- Background: Dark gradient with subtle pattern overlay
- Accent: Neon green (#2bee79) for job title
- Special Feature: Glassmorphic card with border glow effect

---

## Template 2: Minimalist Center
**Layout**: Centered vertical design
- Top: Large circular profile image (6rem)
- Center: Name (large, bold), title (accent color), company, location
- Middle: Bio text in a subtle box
- Bottom: Social icons spread horizontally
- Background: Solid dark with radial gradient spotlight
- Accent: Accent color for title and icon backgrounds
- Special Feature: Clean spacing, lots of breathing room

---

## Template 3: Modern Asymmetric
**Layout**: Diagonal split design
- Top-left: Small profile image (3rem) with name beside it
- Diagonal line dividing card from top-right to bottom-left
- Right side: Title, company, location in accent color
- Left bottom: Bio text
- Bottom-right: Social icons in a compact grid (2x3)
- Background: Two-tone dark gradient following diagonal
- Special Feature: Dynamic diagonal composition

---

## Template 4: Corporate Elite
**Layout**: Top banner design
- Top banner: Dark accent color strip with profile image overlapping
- Profile: Large circular image (5rem) centered, half in banner
- Below: Name (centered, large), title, company
- Middle: Bio in a glassmorphic box
- Bottom: Social icons with labels in a horizontal row
- Background: Dark with subtle geometric pattern
- Special Feature: Professional banner header

---

## Template 5: Creative Bold
**Layout**: Side panel design
- Left panel: Solid accent color (20% width) with profile image and social icons vertically stacked
- Right panel: Name (large), title, company, location, bio
- Profile: Square image with rounded corners in left panel
- Icons: Vertical stack in left panel with accent background
- Background: Dark right side with subtle texture
- Special Feature: Bold color panel, modern layout

---

## Template 6: Tech Futuristic
**Layout**: Grid-based design
- Top-left: Profile image (4rem) in a hexagonal frame
- Top-right: Name and title in a grid cell
- Middle-left: Company and location in a grid cell
- Middle-right: Bio in a grid cell
- Bottom: Social icons in individual grid cells with hover effects
- Background: Dark with circuit board pattern or tech grid
- Accent: Neon green glowing lines between grid cells
- Special Feature: Futuristic grid layout with glowing borders

---

## HTML Structure Template

For each design, generate HTML with this structure:

```html
<!DOCTYPE html>
<html class="dark" lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>Business Card Template [NUMBER]</title>
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#2bee79",
            "background-dark": "#102217",
          },
          fontFamily: {
            "display": ["Be Vietnam Pro", "sans-serif"]
          }
        }
      }
    }
  </script>
  <style>
    .glass-panel {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
  </style>
</head>
<body class="bg-background-dark font-display min-h-screen flex items-center justify-center p-8">
  
  <!-- Business Card Container -->
  <div class="relative w-full max-w-2xl aspect-[1.586/1] rounded-xl overflow-hidden shadow-2xl">
    
    <!-- Background with gradient/pattern -->
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('GRADIENT_OR_PATTERN')">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
    </div>
    
    <!-- Card Content -->
    <div class="relative h-full w-full p-8 flex flex-col justify-between z-10">
      
      <!-- TEMPLATE SPECIFIC LAYOUT HERE -->
      <!-- Include: Profile image, Name, Title, Company, Location, Bio, Social Icons -->
      
    </div>
  </div>

</body>
</html>
```

---

## Sample Data to Use

```
Name: Sarah Connor
Title: Product Designer
Company: Skynet Systems
Location: Los Angeles, CA
Bio: Crafting digital experiences for the future. Passionate about user-centered design and innovation.
Email: sarah@skynet.com
Phone: +1 (555) 123-4567
Website: https://sarahconnor.com
LinkedIn: linkedin.com/in/sarahconnor
GitHub: github.com/sarahconnor
```

---

## Design Elements to Include

### Profile Image
- Circular or square with rounded corners
- Border with accent color or white/transparent
- Size: 3-6rem depending on template
- Placeholder: Use a gradient or icon if no image

### Typography
- Name: 1.5-2.5rem, font-weight: 700-800
- Title: 0.875-1.25rem, accent color, font-weight: 600
- Company: 0.75-1rem, rgba(255,255,255,0.8)
- Location: 0.7-0.9rem, rgba(255,255,255,0.6) with location icon
- Bio: 0.75-0.95rem, rgba(255,255,255,0.85), line-height: 1.5

### Social Icons
- Size: 2-3rem circular buttons
- Background: Glassmorphic or solid with transparency
- Icons: Material Symbols (mail, call, language, work for LinkedIn, code for GitHub)
- Colors: 
  - Email: white background, black icon
  - Phone: green tint (rgba(34,197,94,0.25))
  - Website: blue tint (rgba(59,130,246,0.25))
  - LinkedIn: sky blue (rgba(14,165,233,0.25))
  - GitHub: white tint (rgba(255,255,255,0.2))

### Effects
- Glassmorphic panels: `backdrop-filter: blur(10px)`
- Shadows: `box-shadow: 0 20px 60px rgba(0,0,0,0.3)`
- Hover effects: `transform: scale(1.05)` or `translateY(-2px)`
- Borders: `border: 1px solid rgba(255,255,255,0.1)`

---

## Output Format

For each template, provide:
1. **Template Name**: e.g., "Classic Professional"
2. **Complete HTML file** with inline Tailwind CSS
3. **Key Features**: List 3-4 unique characteristics
4. **Best Use Case**: Who this template is ideal for

---

## Additional Notes

- Ensure all templates are responsive and look good at different sizes
- Use consistent spacing and alignment
- Make accent color easily customizable (use CSS variables or inline styles)
- Include hover states for interactive elements
- Ensure text is always readable against backgrounds
- Use semantic HTML structure
- Keep designs modern and professional

---

## Example Prompt for Stitch AI

"Create a modern digital business card template with a dark theme (#102217 background). The layout should be [DESCRIBE SPECIFIC TEMPLATE LAYOUT]. Include a circular profile image, name in large bold text, job title in neon green (#2bee79), company name, location with icon, a short bio section, and social media icons (email, phone, website, LinkedIn, GitHub) at the bottom. Use glassmorphic design with backdrop-filter blur effects. The card should have a 1.586:1 aspect ratio. Use Be Vietnam Pro font and Material Symbols icons. Make it look professional and modern with subtle animations on hover."

---

## Customization Points

Each template should allow easy customization of:
1. **Accent Color**: Primary color for highlights (#2bee79 default)
2. **Background**: Gradient or pattern
3. **Layout**: Position of elements
4. **Typography**: Font sizes and weights
5. **Icon Style**: Solid or outlined
6. **Border Style**: Rounded corners, glow effects

---

Generate these 6 templates and we'll integrate them into the React application where users can select their preferred template in the "Theme & Style" section.
