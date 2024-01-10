import ReactDOM from 'react-dom/client'
import Providers from './store/Providers'
import App from './App'
import './styles/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('page-root') as HTMLDivElement
)

root.render(
  <Providers>
    <App />
  </Providers>
)
