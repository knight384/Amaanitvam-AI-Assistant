# Amaanitvam Foundation AI Portal

An AI-powered NGO platform designed to improve volunteer engagement, donation awareness, and community interaction through an intelligent conversational assistant.

## Overview

Amaanitvam Foundation AI Portal is a modern full-stack web application built to support NGO operations and user engagement through AI-driven experiences.

The platform provides:

*   **Interactive NGO Landing Page**: Showcasing mission, stats, and initiatives.
*   **AI-Powered Assistant (Amaan AI)**: A real-time streaming chatbot integrated with Gemini for NGO-specific guidance.
*   **Volunteer Management**: Role-based opportunity exploration and application system.
*   **Donation Awareness**: Interactive impact visualization and fundraising progress tracking.

---

# Features

## AI Assistant Dashboard
*   **Real-time Streaming**: Powered by Gemini 1.5 Flash for low-latency, responsive conversations.
*   **Smart Suggestions**: Context-aware prompt cards to help users get started.
*   **Rich Formatting**: Supports Markdown and GFM for clear, professional responses.
*   **Session Management**: Ability to stop streams and clear chat history.
*   **Empathetic Persona**: Custom-tuned system instructions for the "Amaan" AI personality.

## Landing Page
*   **Modern NGO Showcase**: Premium dark-mode aesthetic with glassmorphism.
*   **Impact Stats**: Dynamic visualization of lives impacted and project reach.
*   **Core Initiatives**: Highlighting key projects like *Saksham* and *Tele-Assistance*.
*   **Fluid Animations**: Smooth transitions using Motion for a high-end feel.

## Volunteer Experience
*   **Role Identification**: Specific categories like Tech Mentor, Content Creator, and Outreach.
*   **Interactive Application**: Smooth multi-step form experience with real-time feedback.
*   **Ambassador Program**: Encourages long-term community leadership.

## Donation & Impact
*   **Interactive Fundraising Bar**: Real-time visualization of campaign progress (e.g., Himalayan Digital Lab).
*   **Impact Tiers**: Transparent breakdown of how specific amounts (in ₹) transform lives.
*   **Secure Payment UI**: Trust-focused donation flow with SSL encryption indicators.

---

# Tech Stack

## Frontend
*   **React 18** (Vite-powered)
*   **TypeScript**
*   **Tailwind CSS** (Modern v4 processing)
*   **Motion** (formerly Framer Motion)
*   **Lucide React** (Iconography)

## Backend
*   **Node.js & Express**
*   **Vite Middleware** (Development HMR)
*   **tsx** (TypeScript Execution)

## AI Integration
*   **@google/genai** (Gemini AI SDK)
*   **React-Markdown** (Rich text rendering)

---

# Project Structure

```bash
/
├── server.ts            # Express server entry point
├── package.json         # Scripts and dependencies
├── src/
│   ├── App.tsx          # Main routing & layout
│   ├── main.tsx         # React entry point
│   ├── index.css        # Global styles & Tailwind layers
│   ├── components/      # Reusable UI parts
│   │   ├── layout/      # Navbar, Footer
│   │   └── ui/          # (Optional) shadcn-style components
│   ├── pages/           # Route views
│   │   ├── Home.tsx
│   │   ├── Assistant.tsx
│   │   ├── Volunteer.tsx
│   │   └── Donate.tsx
│   └── lib/             # Utilities (cn, gemini configs)
```

---

# Installation & Setup

## 1. Clone & Install
```bash
npm install
```

## 2. Environment Variables
Create a `.env` file in the root:
```env
GEMINI_API_KEY=your_google_ai_studio_key_here
```

## 3. Run Development Server
```bash
npm run dev
```
The app will be accessible at `http://localhost:3000`.

---

# AI Assistant Details

The assistant, **Amaan**, is configured to provide specific guidance on:
- **Volunteering**: Details on how to join roles like Tech Mentor.
- **Donations**: Directing users to impact categories.
- **NGO Mission**: Explaining the foundation's focus on technological equity.
- **Project Specifics**: *Saksham*, *Tele-Assistance*, and *Amaanitvam Hubs*.

---

# UI/UX Highlights
*   **Responsive Precision**: Mobile-first code with desktop-grade density.
*   **Custom Typography**: Utilizing "Manrope" for a professional yet accessible NGO feel.
*   **Interactive Feedback**: Shimmering progress bars and heartbeat indicators for donation impact.

---

# Author
Developed for the Amaanitvam Foundation Full Stack Developer Assignment.
