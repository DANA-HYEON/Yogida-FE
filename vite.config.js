import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api/v1': 'http://yogida-env-1.eba-zrumtkkz.ap-northeast-2.elasticbeanstalk.com',
      '/images': 'http://yogida-env-1.eba-zrumtkkz.ap-northeast-2.elasticbeanstalk.com',
    },
  },
});
