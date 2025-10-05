import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import { ThemeProvider } from './context/theme-provider'
import WeatherDashboard from './pages/weather_dashboard'
import CityPage from './pages/city_page'


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<WeatherDashboard />} />
            <Route path='/city/:cityName' element={<CityPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
