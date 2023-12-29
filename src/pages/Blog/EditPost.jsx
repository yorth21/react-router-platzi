import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useBlogs } from '../../hooks/useBlogs'

function EditPost () {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState({
    title: '',
    content: ''
  })
  const { blogs, editBlog } = useBlogs()

  useEffect(() => {
    const currentBlog = blogs.find(blog => blog.slug === slug)
    setPost(currentBlog)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPost = { ...post }
    editBlog(newPost)
    navigate(`/blog/${slug}`)
  }

  return (
    <div className='flex-1'>
      <form
        onSubmit={handleSubmit}
        className='bg-neutral-100 border border-neutral-200 rounded-lg p-4 flex flex-col'
      >
        <h2 className='text-xl'>Crear post</h2>
        <div className='flex flex-col'>
          <label htmlFor='title'>Titulo</label>
          <input
            id='title'
            type='text'
            placeholder='Titulo'
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className='border border-black rounded-lg px-2 bg-white focus:outline-none focus:border-blue-700'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='content'>Contenido</label>
          <textarea
            id='content'
            placeholder='Contenido'
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            className='border border-black rounded-lg px-2 bg-neutral-100 focus:outline-none focus:border-blue-700'
          />
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            className='bg-blue-700 hover:bg-blue-600 mt-2 py-1 px-4 text-sm text-white font-semibold rounded-lg transition-colors'
          >
            Editar
          </button>
        </div>
      </form>
    </div>
  )
}

export { EditPost }
