import './bootstrap'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./{Pages,components}/**/*.jsx', {
      eager: true,
    })
    return pages[`./Pages/${name}.jsx`] || pages[`./components/${name}.jsx`] || null
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
