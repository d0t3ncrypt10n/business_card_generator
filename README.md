# 🪪 Digital Business Card Generator

A modern, full-stack web application for creating, customizing, and sharing beautiful digital business cards with QR codes, multiple templates, and real-time analytics.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)

## ✨ Features

- 🔐 **User Authentication** - Secure JWT-based registration and login
- 🪪 **Multiple Card Templates** - Choose from 3 professionally designed templates
- 🎨 **Theme Customization** - 6+ color schemes and custom branding
- 📸 **Profile Images** - Upload and manage profile photos
- 📊 **Analytics Dashboard** - Track views and shares in real-time
- 📱 **QR Code Generation** - Auto-generate scannable QR codes
- 🔗 **Public Sharing** - Share cards via custom URLs
- 💾 **Export Options** - Download as PNG or PDF
- 🌐 **Social Integration** - Link LinkedIn, GitHub, Instagram, Twitter
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Live Preview** - See changes in real-time as you edit
- 🔒 **Secure & Private** - Industry-standard security practices

## 🎯 Live Demo

- **Frontend:** [Coming Soon]
- **Backend API:** [Coming Soon]

## 📸 Screenshots

[Add screenshots here after deployment]

## 🚀 Tech Stack

### Frontend
- React 19
- React Router DOM v6
- Axios
- QRCode
- html2canvas & jsPDF
- Vite

### Backend
- Node.js & Express
- MongoDB & Mongoose
- JWT Authentication
- Bcrypt for password hashing
- Multer (file uploads)
- Helmet (security headers)
- Express Mongo Sanitize

## Project Structure

```
digital-business-card/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── cardController.js
│   │   │   └── uploadController.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Card.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── cardRoutes.js
│   │   │   └── uploadRoutes.js
│   │   ├── utils/
│   │   │   └── generateQR.js
│   │   └── server.js
│   └── package.json
│
└── Frontend/
    ├── src/
    │   ├── api/
    │   │   ├── authAPI.js
    │   │   └── cardAPI.js
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   └── CardPreview.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── CreateCard.jsx
    │   │   ├── EditCard.jsx
    │   │   └── PublicCard.jsx
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/business-card-db
JWT_SECRET=your_secret_key_here
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

5. Create uploads directory:
```bash
mkdir uploads
```

6. Start the server:
```bash
npm run dev
```

Backend will run on http://localhost:5000

### Frontend Setup

1. Navigate to Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend will run on http://localhost:5173

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Business Cards
- `POST /api/cards` - Create new card (protected)
- `GET /api/cards` - Get all user cards (protected)
- `GET /api/cards/:id` - Get single card (protected)
- `PUT /api/cards/:id` - Update card (protected)
- `DELETE /api/cards/:id` - Delete card (protected)
- `GET /api/cards/public/:id` - Get public card

### Upload
- `POST /api/upload` - Upload profile image (protected)

### QR Code
- `GET /api/qrcode/:cardId` - Generate QR code for card

## Usage

1. Register a new account or login
2. Navigate to Dashboard
3. Click "Create New Card"
4. Fill in your details:
   - Personal information (name, email, phone)
   - Professional details (title, company, website)
   - Social media links
   - Upload profile image
   - Customize theme (color, font)
5. See live preview on the right
6. Click "Create Card"
7. View, edit, or delete cards from Dashboard
8. Share cards via public URL
9. Download as PNG/PDF
10. Share QR code for easy access

## Features in Detail

### Card Customization
- Choose from multiple color schemes
- Select different fonts
- Upload custom profile images
- Add social media links

### Sharing Options
- Public URL for each card
- QR code generation
- Download as PNG
- Download as PDF
- Copy link to clipboard
- Native share API support

### Dashboard
- View all created cards
- Quick edit/delete actions
- Card preview thumbnails
- User profile management

## Security

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- File upload validation
- CORS enabled

## Future Enhancements

- Multiple card templates
- Analytics for card views
- Custom domains
- vCard export
- Email signature generation
- Team/organization features

## License

MIT

## Author

Built with ❤️ for digital networking


## 📋 Prerequisites

- Node.js v16 or higher
- MongoDB (local or Atlas)
- npm or yarn

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/business-card-generator.git
cd business-card-generator
```

### 2. Backend Setup

```bash
cd Backend
npm install

# Create .env file
cp .env.example .env

# Edit .env with your configuration
# Required variables:
# - MONGODB_URI
# - JWT_SECRET
# - FRONTEND_URL

# Create uploads directory
mkdir uploads

# Start development server
npm run dev
```

### 3. Frontend Setup

```bash
cd Frontend
npm install

# Create .env file (optional)
cp .env.example .env

# Start development server
npm run dev
```

### 4. Access the Application

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 🔐 Environment Variables

### Backend (.env)

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/business-card-db
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |

### Card Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/cards` | Create new card | Yes |
| GET | `/api/cards` | Get all user cards | Yes |
| GET | `/api/cards/:id` | Get single card | Yes |
| PUT | `/api/cards/:id` | Update card | Yes |
| DELETE | `/api/cards/:id` | Delete card | Yes |
| GET | `/api/cards/public/:id` | Get public card | No |

### Upload Endpoint

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/upload` | Upload image | Yes |

### QR Code Endpoint

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/qrcode/:cardId` | Generate QR code | No |

## 🏗️ Project Structure

```
business-card-generator/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── cardController.js
│   │   │   └── uploadController.js
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   ├── errorHandler.js
│   │   │   └── validation.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Card.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── cardRoutes.js
│   │   │   └── uploadRoutes.js
│   │   ├── utils/
│   │   │   └── generateQR.js
│   │   └── server.js
│   ├── uploads/
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
│
└── Frontend/
    ├── src/
    │   ├── api/
    │   │   ├── authAPI.js
    │   │   └── cardAPI.js
    │   ├── components/
    │   │   ├── CardPreview.jsx
    │   │   ├── ErrorBoundary.jsx
    │   │   └── Navbar.jsx
    │   ├── config/
    │   │   └── api.js
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── CreateCard.jsx
    │   │   ├── EditCard.jsx
    │   │   └── PublicCard.jsx
    │   ├── utils/
    │   │   └── validators.js
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── .env.example
    ├── .gitignore
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- MongoDB injection prevention
- Security headers with Helmet
- CORS configuration
- File upload validation
- Token expiration handling

## 🚀 Deployment

### Deploy to Vercel (Recommended)

This project is optimized for Vercel deployment. See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

**Quick Steps:**
1. Push code to GitHub
2. Import project in Vercel
3. Deploy Backend (set environment variables)
4. Deploy Frontend (update API URL)
5. Done! 🎉

### Alternative Platforms

**Backend:** Heroku, Railway, DigitalOcean, AWS
**Frontend:** Netlify, GitHub Pages, Cloudflare Pages

## 📚 Documentation

- [Installation Guide](INSTALLATION.md)
- [Deployment Guide](DEPLOYMENT_GUIDE.md)
- [Presentation Script](PRESENTATION_SCRIPT.md)
- [Security Guidelines](SECURITY.md)

## 🧪 Testing

```bash
# Backend
cd Backend
npm test

# Frontend
cd Frontend
npm test
```

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🗺️ Roadmap

- [x] User authentication system
- [x] Multiple card templates (3 designs)
- [x] View and share analytics
- [x] QR code generation
- [x] PNG/PDF export
- [x] Social media integration
- [ ] More templates (10+ designs)
- [ ] Custom domain support
- [ ] Advanced analytics with graphs
- [ ] Team/organization accounts
- [ ] NFC tag integration
- [ ] Apple Wallet / Google Pay
- [ ] Custom fonts
- [ ] Video backgrounds
- [ ] Email signature generator
- [ ] Mobile app (React Native)

## 📧 Contact

- **GitHub:** [@d0t3ncrypt10n](https://github.com/d0t3ncrypt10n)
- **Repository:** [business_card_generator](https://github.com/d0t3ncrypt10n/business_card_generator)

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB Atlas for cloud database
- Vercel for seamless deployment
- Material Symbols for beautiful icons
- All open-source contributors

---

**Made with ❤️ for modern networking**
