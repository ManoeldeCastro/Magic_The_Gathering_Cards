import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { AuthProvider } from './contexts/AuthProvider'
import { MainProvider } from './contexts/MainProvider'
import { I18nextProvider } from 'react-i18next'
import i18n from './lib/i18n'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <MainProvider>
          <RouterProvider router={router} />
        </MainProvider>
      </AuthProvider>
    </I18nextProvider>
  )
}

export default App
