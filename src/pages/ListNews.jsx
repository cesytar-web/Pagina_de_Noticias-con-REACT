import { useContext, useEffect } from 'react'
import { NewsContext } from '../context/NewsContext'

function ListNews() {
  const { news } = useContext(NewsContext)

  // Este useEffect se ejecuta una vez al montar el componente
  useEffect(() => {
    console.log('📰 Noticias desde el contexto:', news)
  }, [news])

  return (
    <div>
      <h2>news list</h2>
      {news.length === 0 ? (
        <p>there is no news.</p>
      ) : (
        news.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <small>Fecha: {item.date}</small>
          </div>
        ))
      )}
    </div>
  )
}

export default ListNews
