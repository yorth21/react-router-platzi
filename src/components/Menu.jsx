import { NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function Menu () {
  const auth = useAuth()

  return (
    <div className='bg-cyan-200'>
      <nav className='max-w-3xl mx-auto p-4'>
        <ul className='flex gap-4 font-semibold'>
          {routes.map(route => {
            if (route.publicOnly && auth.user) return null
            if (route.private && !auth.user) return null

            return (
              <li key={route.to}>
                <NavLink
                  className={({ isActive }) => isActive ? 'text-red-600 underline' : 'text-blue-600'}
                  to={route.to}
                >
                  {route.text}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

const routes = []
routes.push({
  to: '/',
  text: 'Home',
  private: false
})
routes.push({
  to: '/blog',
  text: 'Blog',
  private: false
})
routes.push({
  to: '/profile',
  text: 'Profile',
  private: true
})
routes.push({
  to: '/login',
  text: 'Login',
  private: false,
  publicOnly: true
})
routes.push({
  to: '/logout',
  text: 'Logout',
  private: true
})

export { Menu }
