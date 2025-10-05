import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import { ThemeProvider } from './context/theme-provider'


function App() {


  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
