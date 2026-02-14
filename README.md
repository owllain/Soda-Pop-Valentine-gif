# 🥤 Soda-Pop-Valentine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Una experiencia web interactiva y altamente personalizada diseñada para celebrar momentos especiales. **Soda-Pop-Valentine** combina una estética retro-moderna con mecánicas de personalización profunda, permitiendo navegar por recuerdos compartidos a través de un viaje visual y sonoro único.

![Soda Pop Aesthetics](https://raw.githubusercontent.com/owllain/Soda-Pop-Valentine/main/public/-raw-images/background.png)

## ✨ Características Principales

### 🍭 Dualidad de Temas (Sweet & Evil)

El proyecto cuenta con un sistema de temas dinámico que transforma la experiencia por completo:

- **Modo Sweet**: Una paleta pastel vibrante (rosas, azules y púrpuras) inspirada en la cultura Pop y burbujeante.
- **Modo Evil**: Una transición inmersiva a tonos oscuros, rojos sangre y neones, inspirada en la estética "dark pop" y temas como _Your Idol_.
- **Transición Fluida**: Cambios de fondo, filtros de imagen (`mix-blend-mode`) y animaciones holográficas que reaccionan instantáneamente al tema elegido.

### 📸 Memory Carousel & SodaImage

- **Efectos Visuales**: Todas las imágenes pasan por un filtro personalizado de capas y modos de fusión para unificar la estética del proyecto.
- **Interactividad**: Carrusel adaptado para dispositivos móviles con gestos táctiles y modales de detalle con zoom dinámico.

### 🎙️ Soda Mixtape (Cassette Player)

Un reproductor de música integrado estilo cassette retro que se sincroniza con la experiencia:

- **Sincronización Inteligente**: La música cambia automáticamente según el tema seleccionado (Sweet/Evil).
- **Retro Feel**: Animaciones de carrete giratorio sincronizadas con la reproducción.

## 🚀 Stack Tecnológico

- **Framework**: [React](https://reactjs.org/) con [TypeScript](https://www.typescriptlang.org/) para un desarrollo robusto.
- **Bundler**: [Vite](https://vitejs.dev/) para una recarga ultrarrápida.
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) con configuraciones personalizadas de variables CSS para el sistema de temas.
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/) para transiciones líquidas y [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) para celebraciones visuales.
- **Iconografía**: [Lucide React](https://lucide.dev/) + [Google Material Symbols](https://fonts.google.com/icons).

## 🛠️ Instalación y Uso

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/owllain/Soda-Pop-Valentine.git
   cd Soda-Pop-Valentine
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:

   ```bash
   npm run dev
   ```

4. **Construir para producción**:
   ```bash
   npm run build
   ```

## 💖 Personalización

La lógica del contenido se encuentra centralizada en `src/constants.tsx` y la configuración de tracks en `src/data/config.json`, lo que facilita la actualización de memorias, fotos y música sin tocar la arquitectura principal.

---

Diseñado con amor por [owllain](https://github.com/owllain). 🥤✨💀❤️
