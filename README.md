# FurnAI — AI-Powered 3D Interior Design Editor

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r182-black?logo=three.js)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Deployed](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)

A web-based 3D interior design editor. Draw a floorplan, switch to an immersive 3D walkthrough, and use AI to generate and place furniture automatically.

## Features

| Feature | Description |
|---|---|
| **Wall Drawing** | Draw walls with precise measurements, thickness, and height controls |
| **CSG Operations** | Boolean geometry (union, subtract, intersect) for complex architectural shapes |
| **Room Detection** | Automatic room detection from enclosed wall boundaries |
| **Furniture Placement** | Drag-and-drop 3D furniture with rotation, scaling, and positioning |
| **FurnAI** | AI-powered furniture generation — describe what you want and it appears |
| **Texture & Materials** | Apply textures to walls and floors with configurable tiling |
| **Lighting Presets** | Day, Night, Studio, and Sunset environments |
| **Render Gallery** | Capture and browse high-quality renders |
| **Floorplan Import** | Upload a reference image and trace over it |
| **3D Model Import** | Import custom `.glb`/`.gltf` models |
| **Project Management** | Save, load, and manage multiple projects |
| **Google OAuth** | Secure authentication with Google Sign-In |

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript, Vite 7 |
| 3D Engine | Three.js (r182), React Three Fiber, Drei |
| CSG | three-bvh-csg for boolean geometry |
| State | Zustand with Immer |
| Styling | Tailwind CSS 3.4 |
| Auth | Google OAuth |
| Deployment | Vercel |

## Getting Started

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

```bash
npm run build   # production build
npm run preview # preview build locally
```
