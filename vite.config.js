import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'clean-url-rewrites',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const map = { '/pricing': '/pricing.html', '/privacy': '/privacy.html', '/terms': '/terms.html', '/refund': '/refund.html' }
          const path = req.url.split('?')[0]
          if (map[path]) req.url = map[path] + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '')
          next()
        })
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main:    'index.html',
        pricing: 'pricing.html',
        privacy: 'privacy.html',
        terms:   'terms.html',
        refund:  'refund.html',
      }
    }
  }
})
