# 🌿 KeenKeeper

A sophisticated relationship management dashboard designed to help you nurture your most important connections. In a world of digital noise, KeenKeeper acts as your "personal shelf" for meaningful interactions—reminding you when it's time to reach out to mentors, colleagues, and family.

---

## 🚀 Technologies Used

This project is built with a modern, high-performance stack focusing on speed and clean user experience.

* **Core:** Next.js 16.2.3 (App Router) & React
* **Build Tool:** Turbopack (Next-generation incremental bundler)
* **Styling:** Tailwind CSS & DaisyUI
* **Charts:** Recharts (Interactive SVG charts)
* **Icons:** React Icons
* **State Management:** React Context API (for global timeline synchronization)
* **Data:** Local JSON-based persistent storage architecture

---

## ✨ Key Features

### 1. **Dynamic Relationship Tracking**
Every friend has a dedicated profile generated via **Dynamic Routing**. The system calculates "Days Since Contact" versus your personal "Frequency Goal," automatically flagging relationships as **On-Track** or **Overdue** to ensure no one is forgotten.

### 2. **Interactive Interaction Timeline**
Log "Quick Check-ins" (Call, Text, or Video) directly from a friend's profile. These interactions are immediately synced to a global **Timeline** using the React Context API, providing a historical log of your social health.

### 3. **Visual Analytics Dashboard**
The stats page features a beautiful, responsive **Donut Chart** built with Recharts. It provides a high-level breakdown of your communication habits (By Interaction Type), complete with rounded segments, hover tooltips, and custom branding.

---