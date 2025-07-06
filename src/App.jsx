import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Form from './pages/Form'
import ListNews from './pages/ListNews'
import { NewsProvider } from './context/NewsContext'

function App() {
  return (
    <NewsProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<ListNews />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </NewsProvider>
  )
}

export default App
