# 🏠 FurnAI — AI-Powered 3D Interior Design & IoT Smart Space Platform

> A comprehensive platform for **3D interior design**, **AI-driven furniture generation**, and **IoT-based safety monitoring** — built to run on edge devices like the **NVIDIA Jetson Nano**.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r182-black?logo=three.js)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)

---

## 🎯 What We're Solving

This project addresses **two key challenges** in modern smart spaces:

### 1. 🏗️ Intelligent Interior Design (3D Floorplan Editor)
Designing room layouts is traditionally slow and expensive. Our web-based **3D floorplan editor** lets users:
- Draw walls, define rooms, and place furniture in a **2D blueprint** view
- Instantly switch to an immersive **3D walkthrough** with realistic lighting
- Use **AI (FurnAI)** to automatically generate and place furniture
- Apply textures, colors, and materials to walls and floors
- Export high-quality renders of their designs

### 2. 🦺 PPE Safety Monitoring (Jetson Nano + YOLO)
Workplace safety compliance is critical. Our **PPE-Watch** module uses a trained **YOLOv8** model to detect Personal Protective Equipment (helmets, gloves, vests, eye protection) in real-time via:
- **Webcam feed** or **uploaded images**
- Deployable on **NVIDIA Jetson Nano** for edge inference
- Also runs on **Mac (M-series)** and **desktop GPUs**

---

## ✨ Features

### 3D Floorplan Editor
| Feature | Description |
|---|---|
| **Wall Drawing** | Draw walls with precise measurements, thickness, and height controls |
| **CSG Operations** | Boolean geometry (union, subtract, intersect) for complex architectural shapes |
| **Wall Joining** | Smart wall joining with corner snapping for clean floor plans |
| **Room Detection** | Automatic room detection from enclosed wall boundaries |
| **Furniture Placement** | Drag-and-drop 3D furniture models with rotation, scaling, and positioning |
| **FurnAI** | AI-powered furniture generation — describe what you want and it appears |
| **Texture & Materials** | Apply textures to walls and floors with configurable tiling |
| **Lighting Presets** | Day, Night, Studio, and Sunset lighting environments |
| **Render Gallery** | Capture and browse high-quality renders of your designs |
| **Floorplan Import** | Upload a reference image and trace over it to create your layout |
| **Calibration** | Calibrate measurements against real-world dimensions |
| **Project Management** | Save, load, and manage multiple design projects |
| **Google OAuth** | Secure authentication with Google Sign-In |
| **3D Model Import** | Import custom `.glb`/`.gltf` 3D models |
| **SAM3D Masking** | Segment Anything Model integration for 3D object masking |

### PPE-Watch (Jetson Nano)
| Feature | Description |
|---|---|
| **Real-time Detection** | Live webcam PPE detection using YOLOv8 |
| **Edge Deployment** | Optimized for NVIDIA Jetson Nano (also runs on Mac M-series) |
| **Web Interface** | Gradio-based UI for easy interaction |
| **Multi-class Detection** | Detects helmets, gloves, vests, eye protection, and more |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, TypeScript, Vite 7 |
| **3D Engine** | Three.js (r182), React Three Fiber, Drei |
| **CSG** | three-bvh-csg for boolean geometry operations |
| **State Management** | Zustand with Immer middleware |
| **Styling** | Tailwind CSS 3.4 |
| **Icons** | Lucide React |
| **Auth** | Google OAuth (@react-oauth/google) |
| **AI/ML** | YOLOv8 (PPE detection), FurnAI (furniture generation) |
| **Edge Hardware** | NVIDIA Jetson Nano |
| **Deployment** | Vercel (web app) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **npm** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/Akashhh739/vercel.git
cd vercel

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` (or your network IP with `--host`).

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
NEW/
├── public/                  # Static assets (logo, demo video)
├── sam3d/                   # SAM3D integration for 3D masking
├── src/
│   ├── components/
│   │   ├── editor/          # 3D editor components
│   │   │   ├── Scene.tsx        # Main Three.js scene & canvas
│   │   │   ├── WallManager.tsx  # Wall rendering with CSG
│   │   │   ├── FloorManager.tsx # Floor/room rendering
│   │   │   ├── FurnitureManager.tsx  # Furniture placement
│   │   │   ├── RenderGallery.tsx     # Render captures
│   │   │   └── ...
│   │   └── layout/          # UI layout components
│   │       ├── Sidebar.tsx      # Main toolbar & tools
│   │       ├── Topbar.tsx       # Top navigation bar
│   │       ├── RightSidebar.tsx # Properties panel
│   │       ├── FurnAIModal.tsx  # AI furniture generation
│   │       └── ...
│   ├── store/
│   │   └── floorplanStore.ts  # Zustand state management
│   ├── App.tsx               # Root application component
│   └── main.tsx              # Entry point
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── vercel.json               # Vercel deployment config
```

---

## 🖥️ Deployment

### Vercel (Web App)
The app is configured for **Vercel** deployment with SPA routing:

```bash
# Deploy to Vercel
npx vercel --prod
```

### Jetson Nano (PPE-Watch)
```bash
# Copy the PPE-Watch deploy folder to Jetson Nano
scp -r PPE-watch/ jetson@<JETSON_IP>:~/

# On the Jetson Nano
pip install -r requirements.txt
python app.py
```

---

## 📄 License

This project is part of an IoT and AI research initiative.

---

**Built with ❤️ using React, Three.js, and AI**
