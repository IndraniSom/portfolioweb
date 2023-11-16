# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
const clientX = event.touches 
  ? event.touches[0].clientX 
  : event.clientX;
    const delta =(clientX -lastX.current)/viewport.width;
    laptopRef.current.rotation.y+=delta*0.01*Math.PI;
    lastX.current=clientX;
    rotationSpeed.current=delta *0.01*Math.PI;