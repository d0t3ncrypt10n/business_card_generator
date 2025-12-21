# Business Card Generator - Backend

Node.js/Express backend API for the Digital Business Card Generator.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from example:
```bash
cp .env.example .env
```

3. Update environment variables in `.env`

4. Create uploads directory:
```bash
mkdir uploads
```

5. Start development server:
```bash
npm run dev
```

## Environment Variables

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/business-card-db
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## API Documentation

See main README.md for complete API documentation.

## Database Models

### User
- name
- email
- password (hashed)
- avatar
- timestamps

### Card
- userId (ref to User)
- name, title, company
- email, phone, website, location
- socialLinks (linkedin, github, instagram, twitter)
- profileImage
- theme (color, font, templateId)
- timestamps
