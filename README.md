<div align="center">

# Invoice Platform 📊

Modern and user-friendly invoice management platform built with the latest web technologies.

![Hero Image](/public/landingpage.png)

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Auth.js](https://img.shields.io/badge/Auth.js-4318FF?style=for-the-badge&logo=auth0&logoColor=white)](https://authjs.dev/)
[![Zod](https://img.shields.io/badge/Zod-3068B7?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
[![Conform](https://img.shields.io/badge/Conform-000000?style=for-the-badge&logo=conform&logoColor=white)](https://conform.guide/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Mailtrap](https://img.shields.io/badge/Mailtrap-239BCD?style=for-the-badge&logo=mailtrap&logoColor=white)](https://mailtrap.io/)
[![jsPDF](https://img.shields.io/badge/jsPDF-FF0000?style=for-the-badge&logo=adobe&logoColor=white)](https://parall.ax/products/jspdf)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## ✨ Features

<div align="center">

| Feature               | Description                                            |
| --------------------- | ------------------------------------------------------ |
| 🎨 **Modern UI/UX**   | Intuitive and beautiful user interface using shadcn/ui |
| 🔒 **Authentication** | Secure user authentication with Auth.js                |
| 📱 **Responsive**     | Fully responsive design for all devices                |
| 📊 **Dashboard**      | Comprehensive analytics and invoice management         |
| 📄 **PDF Export**     | Generate and download professional PDF invoices        |
| 📧 **Email**          | Automated email notifications for invoices             |
| 🔄 **Real-time**      | Real-time updates and notifications                    |

</div>

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/invoice-platform.git

# Navigate to the project
cd invoice-platform

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application

## 🛠️ Tech Stack

<details>
<summary>Click to expand tech stack details</summary>

### Core Framework

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking

### Authentication & Form Management

- **[Auth.js](https://authjs.dev/)** - Authentication for Next.js
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[Conform](https://conform.guide/)** - Form validation library

### Database & ORM

- **[Neon](https://neon.tech/)** - Serverless Postgres database
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM

### UI Components & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components

### Additional Features

- **[Mailtrap](https://mailtrap.io/)** - Email delivery service
- **[jsPDF](https://rawgit.com/MrRio/jsPDF/master/docs/index.html)** - Client-side PDF generation

### Deployment

- **[Vercel](https://vercel.com)** - Platform for frontend deployment

</details>

## 📸 Screenshots

<div align="center">

### Dashboard

![Dashboard](/public/hero.png)

### Invoices View

![Dashboard](/public/hero2.png)

### Invoice Creation

![Hero Image](/public/hero3.png)

</div>

## 🔐 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

| Variable                | Description                   |
| ----------------------- | ----------------------------- |
| `AUTH_SECRET`           | Secret key for authentication |
| `EMAIL_SERVER_USER`     | SMTP server username          |
| `EMAIL_SERVER_PASSWORD` | SMTP server password          |
| `EMAIL_SERVER_HOST`     | SMTP server host              |
| `EMAIL_SERVER_PORT`     | SMTP server port              |
| `EMAIL_FROM`            | Email sender address          |
| `MAILTRAP_TOKEN`        | Mailtrap API token            |
| `DATABASE_URL`          | PostgreSQL database URL       |

```
AUTH_SECRET=""

EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_FROM=

MAILTRAP_TOKEN=

DATABASE_URL=""
```
