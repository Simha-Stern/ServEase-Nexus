import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
import { resolve } from 'path';


config({ path: resolve(__dirname, '../.env') });
const my_port = Number(process.env.CLIENT_PORT);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: my_port,
    strictPort: true,
    watch: {
      usePolling: true
    }
  }
})
