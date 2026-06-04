import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'clean-url-rewrites',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const map = { '/pricing': '/pricing.html', '/privacy': '/privacy.html', '/terms': '/terms.html', '/refund': '/refund.html' }
          if (map[req.url]) req.url = map[req.url]
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
