# Foliox

Foliox is a CMS-powered portfolio builder built using Next.js and Payload CMS. It allows users to create and manage their portfolio content with ease, powered by a headless CMS and styled with Tailwind CSS. Ideal for developers, designers, and creatives looking for a flexible and scalable portfolio setup.

## Features

- Payload CMS integration for rich content management  
- Responsive UI built with Tailwind CSS  
- Dynamic pages like Home, About, Projects, and Blogs  
- Nodemailer-powered contact form  
- PostgreSQL for structured database storage  
- Clean, modular component structure for easy customization  

## Tech Stack

- Frontend: Next.js, Tailwind CSS, React  
- Backend: Payload CMS  
- Database: PostgreSQL  
- Email Service: Nodemailer  
- Dev Tools: TypeScript, Turbopack, dotenv  

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/randomCOSMOS/Foliox.git
cd Foliox
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root and configure the following variables:

```env
DATABASE_URI = postgres://user:password@localhost:5432/your_database
PAYLOAD_SECRET = yoursuperscretkey  
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 465
SMTP_USER = your_email@example.com
SMTP_PASS = your_app_password
```

## Running the Project

### Development

```bash
npm run dev
```
Runs the Next.js frontend and Payload CMS locally on port 5000.

### Build

```bash
npm run build
```

