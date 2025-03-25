import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/PortFolio/',
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[tj]sx?$/,
  },
});
