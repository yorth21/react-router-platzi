import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { Profile } from './pages/Profile'
import { BlogPost } from './pages/Blog/BlogPost'
import { Login } from './pages/Login'
import { Logout } from './pages/Logout'
import { AuthProvider } from './contexts/AuthContext'
import { AuthRoute } from './routes/AuthRoute'
import { BlogsProvider } from './contexts/BlogsContext'
import { CreatePost } from './pages/Blog/CreatePost'
import { Blogs } from './pages/Blog/Blogs'
import { EditPost } from './pages/Blog/EditPost'

function App () {
  return (
    <BrowserRouter>
      <AuthProvider>
        <BlogsProvider>
          <Menu />

          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/blog' element={<Blog />}>
              <Route path='' element={<Blogs />} />
              <Route path='new' element={<CreatePost />} />
              <Route path='edit/:slug' element={<EditPost />} />
              <Route path=':slug' element={<BlogPost />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route
              path='/logout'
              element={
                <AuthRoute>
                  <Logout />
                </AuthRoute>
            }
            />
            <Route
              path='/profile'
              element={
                <AuthRoute>
                  <Profile />
                </AuthRoute>
            }
            />

            <Route path='*' element={<p>Not Found</p>} />
          </Routes>
        </BlogsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
