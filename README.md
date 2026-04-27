# 🚀 Next.js Meetups App

A modern **Meetups application** built with the latest web technologies, focusing on performance, scalability, and clean user experience.

---

## 📌 Overview

This project is a full-stack Meetup platform where users can:

* Create new meetups
* Upload and store images
* View meetup details
* Browse meetups in a clean, responsive UI

It demonstrates best practices in **modern web development**, including secure data handling, server-side validation, and optimized asset storage.

---

## 🛠️ Tech Stack

* **Next.js (App Router)** – Modern React framework with server components
* **MongoDB** – NoSQL database for storing meetup data
* **AWS S3** – Scalable image storage
* **Tailwind CSS v4** – Utility-first styling with dark/light mode support
* **Zod** – Schema validation
* **XSS Protection** – Sanitizing user input for security

---

## ✨ Features

* 🌗 **Dark / Light Mode Toggle** (system-first + manual override)
* 📅 **Date & Time Scheduling** for meetups
* 🖼️ **Image Uploads** with cloud storage (S3)
* 🔐 **Secure Form Handling**

  * Client-side validation
  * Schema validation (Zod)
  * XSS sanitization
  * Server-side validation
* ⚡ **Optimized Performance** with Next.js App Router

---

## 🔒 Security Highlights

This app follows a **defense-in-depth approach**:

* Input validation on multiple layers
* Sanitization against XSS attacks
* Server-side verification before database insertion
* Controlled file uploads to cloud storage

---

## 📸 Screenshots

| All Meetups Page (Light-Mode)  | Meetup Detail Page (Light-Mode)  | Add New Meetup (Light-Mode)  |
| ------------- | ------------- | ------------- |
| ![Light Mode - All Meetup Page](/src/assets/images/app-screenshots/all-meetups(light).png) | ![Light Mode - Meetup Detail Page](/src/assets/images/app-screenshots/meetup-detail(light).png) | ![Light Mode - Add New Meetup Page](/src/assets/images/app-screenshots/add-new-meetup(light).png) |

| All Meetups Page (Dark-Mode)  | Meetup Detail Page (Dark-Mode)  | Add New Meetup (Dark-Mode)  |
| ------------- | ------------- | ------------- |
| ![Dark Mode - All Meetup Page](/src/assets/images/app-screenshots/all-meetups(dark).png) | ![Dark Mode - Meetup Detail Page](/src/assets/images/app-screenshots/meetup-detail(dark).png) | ![Dark Mode - Add New Meetup Page](/src/assets/images/app-screenshots/add-new-meetup(dark).png) |

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Mahmoud-S97/NextJS-Meetup-App.git
cd meetup-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env.local` file:

```env
MONGO_URI=your_mongodb_connection
MONGO_DB_NAME=your_db_name

AWS_ACCESS_KEY=your_access_key
AWS_SECRET_KEY=your_secret_key
AWS_REGION=your_region
S3_BUCKET=your_bucket_name
```

### 4. Run the development server

```bash
npm run dev
```

---

## 📁 Project Structure (Simplified)

```
/public
/src
  /app
    /meetups
    /api
      /meetups
  /assets
  /components
    /globals
    /layout
    /meetups
    /ui
  /constants
  /lib
  /services
    /api
      /meetups
    /aws
    /database
    /forms
  /types
  /utils
  /hooks
  /dummy-data
  
```

---

## 🚀 Future Improvements

* Image optimization with CDN (CloudFront)
* User authentication & authorization
* Pagination & search
* Multi-timezone support

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License

This project is open-source and available under the MIT License.

💙 Author

Mahmoud Saleh

Senior Front-End Developer