// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { VitePWA } from 'vite-plugin-pwa';

// https://astro.build/config
export default defineConfig({
  site: 'https://supervision-teaching-site.vercel.app',
  integrations: [
    mdx(),
    sitemap(),
  ],

  // Markdown 配置
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  vite: {
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind.js'],
      },
    },
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: false,
        },
        manifest: {
          name: '计算机系统监理师备考指南',
          short_name: '监理师备考',
          description: '系统化的计算机系统监理师考试复习指南，支持离线访问',
          theme_color: '#000000',
          background_color: '#000000',
          display: 'standalone',
          orientation: 'portrait-primary',
          scope: '/',
          start_url: '/',
          lang: 'zh-CN',
          categories: ['education', 'reference'],
          icons: [
            {
              src: '/pwa-icons/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-icons/icon-192x192-maskable.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'maskable',
            },
            {
              src: '/pwa-icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-icons/icon-512x512-maskable.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
            {
              src: '/pwa-icons/apple-touch-icon.png',
              sizes: '180x180',
              type: 'image/png',
            },
          ],
        },
        workbox: {
          cacheId: 'supervision-teaching-site',
          cleanupOutdatedCaches: true,
          skipWaiting: true,
          clientsClaim: true,
          navigationPreload: true,
          globPatterns: [
            '**/*.{html,css,js,woff,woff2,ttf,eot,ico}',
            '**/*.{png,jpg,jpeg,gif,svg,webp}',
            '**/pagefind/**/*.{js,json,pf_meta,pf_index,pf_fragment}',
          ],
          globIgnores: [
            '**/*.pdf',
            '**/01.pdf',
            '**/02.pdf',
          ],
          maximumFileSizeToCacheInBytes: 2 * 1024 * 1024,
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/.*\.html$/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'html-cache',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 7 * 24 * 60 * 60,
                },
                networkTimeoutSeconds: 5,
              },
            },
            {
              urlPattern: /\.(?:js|css)$/,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'static-resources',
                expiration: {
                  maxEntries: 200,
                  maxAgeSeconds: 30 * 24 * 60 * 60,
                },
              },
            },
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'image-cache',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 24 * 60 * 60,
                },
              },
            },
            {
              urlPattern: /\.(?:woff|woff2|ttf|eot)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'font-cache',
                expiration: {
                  maxEntries: 30,
                  maxAgeSeconds: 365 * 24 * 60 * 60,
                },
              },
            },
            {
              urlPattern: /\/pagefind\/.*/,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'pagefind-cache',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 7 * 24 * 60 * 60,
                },
              },
            },
            {
              urlPattern: /\.pdf$/,
              handler: 'NetworkOnly',
            },
          ],
        },
      }),
    ],
  },
});
