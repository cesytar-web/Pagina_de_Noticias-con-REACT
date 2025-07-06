import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NewsContext } from '../context/NewsContext'

function Form() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { news, setNews } = useContext(NewsContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newArticle = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleString()
    }

    
  console.log('Create news:', newArticle)

    setNews([...news, newArticle])
    navigate('/list')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New News</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Guardar Noticia</button>
    </form>
    
  )
}

export default Form
