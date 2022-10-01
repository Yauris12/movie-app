import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import AppRouter from './routes/AppRouter'
import 'rc-pagination/assets/index.css'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'
import global_ja from './translations/ja/global.json'
import LanguageDetector from 'i18next-browser-languagedetector'
import { AppProvider } from './context/movieContext'
import { HashRouter as Router } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'es',
    resources: {
      es: {
        global: global_es,
      },
      en: {
        global: global_en,
      },
      ja: {
        global: global_ja,
      },
    },
  })
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <SkeletonTheme baseColor='rgba(0, 0, 0, 0.4)' highlightColor='#003049'>
    <Router>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </Router>
  </SkeletonTheme>
)
