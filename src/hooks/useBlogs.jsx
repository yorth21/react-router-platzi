import { useContext } from 'react'
import { BlogsContext } from '../contexts/BlogsContext'

function useBlogs () {
  const blogs = useContext(BlogsContext)

  return blogs
}

export { useBlogs }
