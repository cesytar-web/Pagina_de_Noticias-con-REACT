import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const NewsContext = createContext()

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const savedNews = localStorage.getItem('news')
    if (savedNews) {
      setNews(JSON.parse(savedNews))
    } else {
      axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=eb11d0c1d3dc4d8eaa70a3c1ec4cb0a4')
        .then(response => {
          setNews(response.data.articles)
          localStorage.setItem('news', JSON.stringify(response.data.articles))
        })
        .catch(error => {
          console.error('Error al cargar noticias:', error)
        })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('news', JSON.stringify(news))
  }, [news])

  return (
    <NewsContext.Provider value={{ news, setNews }}>
      {children}
    </NewsContext.Provider>
  )
}
