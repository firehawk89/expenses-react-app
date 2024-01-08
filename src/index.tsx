import ReactDOM from 'react-dom/client'
import ModalContextProvider from './store/modal-context'
import App from './App'
import './styles/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('page-root') as HTMLDivElement
)

root.render(
  <ModalContextProvider>
    <App />
  </ModalContextProvider>
)
