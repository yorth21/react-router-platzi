import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useBlogs } from '../../hooks/useBlogs'
import { FaPencil, FaTrashCan } from 'react-icons/fa6'

function BlogPost () {
  const { blogs, deleteBlog } = useBlogs()

  const navigate = useNavigate()
  const { slug } = useParams()
  const auth = useAuth()

  const blogPost = blogs.find(post => post.slug === slug)
  if (!blogPost) return <Navigate to='/blog' />

  let canDelete = false
  let canEdit = false

  if (auth.user) {
    const isAuthor = blogPost.author === auth.user.userName

    canDelete = auth.user.roles.includes('admin') || isAuthor
    canEdit = auth.user.roles.some(role => ['admin', 'editor'].includes(role)) || isAuthor
  }

  const handleDeleteBlog = (slug) => {
    deleteBlog(slug)
    navigate('/blog')
  }

  const hendleEditBlog = (slug) => {
    navigate(`/blog/edit/${slug}`)
  }

  return (
    <div className='flex-1'>
      <div className='bg-neutral-100 border border-neutral-200 rounded-lg p-4 flex flex-col'>
        <div className='flex justify-between'>
          <h2 className='text-xl'>{blogPost.title}</h2>
          <span className='text-sm text-neutral-700'>{blogPost.author}</span>
        </div>
        <p>{blogPost.content}</p>

        <div className='flex gap-2'>
          {canDelete && (

            <button
              className='bg-red-700 hover:bg-red-600 p-2 text-sm text-white font-semibold rounded-lg mt-2 transition-colors'
              onClick={() => handleDeleteBlog(blogPost.slug)}
            >
              <FaTrashCan />
            </button>
          )}

          {canEdit && (
            <button
              className='bg-amber-600 hover:bg-amber-500 p-2 text-sm text-white font-semibold rounded-lg mt-2 transition-colors'
              onClick={() => hendleEditBlog(blogPost.slug)}
            >
              <FaPencil />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export { BlogPost }
