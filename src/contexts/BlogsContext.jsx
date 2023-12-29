import { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import blogsJson from '../mocks/blogs.json'

const BlogsContext = createContext()

function BlogsProvider ({ children }) {
  const {
    item: blogs,
    saveItem: setBlogs,
    loading
  } = useLocalStorage('blogs', blogsJson || [])

  const saveBlog = (newBlog) => {
    const currentBlogs = [...blogs]
    currentBlogs.push(newBlog)
    setBlogs(currentBlogs)
  }

  const editBlog = (newBlog) => {
    const currentBlogs = [...blogs]
    const index = currentBlogs.findIndex(blog => blog.slug === newBlog.slug)
    currentBlogs[index] = newBlog
    setBlogs(currentBlogs)
  }

  const deleteBlog = (slug) => {
    const currentBlogs = [...blogs]
    const newBlogs = currentBlogs.filter(blog => blog.slug !== slug)
    setBlogs(newBlogs)
  }

  return (
    <BlogsContext.Provider
      value={{
        blogs,
        loading,
        saveBlog,
        editBlog,
        deleteBlog
      }}
    >
      {children}
    </BlogsContext.Provider>
  )
}

export { BlogsProvider, BlogsContext }
