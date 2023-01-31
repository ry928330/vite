/*
 * @Author: ryyyyy
 * @Date: 2023-01-30 16:58:35
 * @LastEditors: ryyyyy
 * @LastEditTime: 2023-01-31 16:31:11
 * @FilePath: /first-vite/vite.config.js
 * @Description: 
 * 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy';
// https://vitejs.dev/config/
export default defineConfig({
  // base: '/dist/',
  plugins: [
    react(),
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // })
  ],
  esbuild: {
    // jsxInject: `import React from 'react'`,
  },
  experimental: {
    //基础路径进阶配置
    // renderBuiltUrl(fileName, { hostId, hostType, type}) {
    //   if (type == 'public') {
    //     return `http://127.0.0.1:5500/dist/${fileName}`
    //   }
    // }
  }
})
