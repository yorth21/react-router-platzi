import { Link, Outlet } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa6'
import { useBlogs } from '../../hooks/useBlogs'

function Blog () {
  const { blogs, loading } = useBlogs()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='max-w-3xl mx-auto px-4 py-2'>
      <h1 className='text-2xl font-medium'>Blog's</h1>

      <div className='flex gap-8 my-2'>
        <nav>
          <ul className='flex flex-col gap-1'>
            <li className=''>
              <Link to='/blog/new' className='flex justify-center gap-2 items-center bg-blue-700 hover:bg-blue-600 py-1 text-sm text-white font-semibold rounded-lg transition-colors'>
                <FaPlus className='text-white' />
                Nuevo Post
              </Link>
            </li>
            {blogs.map(post => (
              <BlogLink post={post} key={post.slug} />
            ))}
          </ul>
        </nav>

        <Outlet />
      </div>

    </div>
  )
}

function BlogLink ({ post }) {
  return (
    <li className='underline'>
      <Link className='' to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
}

export { Blog }
