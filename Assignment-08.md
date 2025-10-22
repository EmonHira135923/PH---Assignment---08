# HERO.IO - Mobile & Web Applications

## Project Overview

HERO.IO হল একটি মোবাইল ও ওয়েব অ্যাপ্লিকেশন প্রজেক্ট যেখানে বিভিন্ন ধরনের apps ডেভেলপ করা হয়েছে।  
এই প্রজেক্টের মাধ্যমে ইউজাররা trending apps দেখতে, সার্চ করতে, ডাউনলোড/ইনস্টল করতে পারবে এবং app details দেখার সুবিধা পাবে।

---

## 🛠 Features

- **Banner Section:**

  - Hero image সহ Google Play & App Store download buttons
  - Attractive text overlay

- **Marketing Section:**

  - Total Downloads, Total Reviews, Active Apps counters
  - Icon support (Download, Star, Google Play)

- **Trending Apps Section:**

  - প্রথম ৮টি trending apps grid view-এ প্রদর্শিত
  - App card-এ: image, title, downloads, rating
  - Click করলে app details page এ navigate করে

- **All Apps Section:**

  - Search & Filter functionality
  - Loading spinner during search
  - No Apps Found message & Reset Search button

- **App Details Section:**

  - App Image, Title, Description, Downloads, Ratings, Likes
  - Install Button using LocalStorage
  - Ratings BarChart (Vertical) using Recharts
  - Detailed Description & AI features info

- **Footer Section:**
  - Logo & Social Links (Twitter, Facebook, LinkedIn)
  - Responsive Design

---

## 💻 Technologies Used

### Languages

- **JavaScript (ES6+)**
- **HTML5**
- **CSS3 / Tailwind CSS**

### Frameworks & Libraries

- **React 18**
- **React Router v6**
- **Tailwind CSS**
- **Recharts** (for rating charts)
- **React Icons** (`lucide-react`, `react-icons`)
- **React Toastify** (for notifications)

### Tools

- **LocalStorage** (Installed Apps tracking)
- **Vite / npm** for project bundling and development

---

## 📁 Project Structure

src/
│
├─ assets/
│ └─ All Image/ # সব images stored
│
├─ Components/
│ ├─ Banner.jsx
│ ├─ Marketing.jsx
│ ├─ ShowCard.jsx
│ ├─ TrendingApps.jsx
│ ├─ Footer.jsx
│ ├─ AppsDetails.jsx
│ ├─ AppsCardShow.jsx
│ └─ AppsAllCard.jsx
│
├─ Pages/
│ └─ 404ErrorPages/
│ └─ AppsNotFound.jsx
│
└─ App.jsx / index.jsx

## 🚀 Installation & Setup

1. Repository clone করুন:

```bash
git clone <repo-url>

### Install
*** npm install
*** npm run dev

```
