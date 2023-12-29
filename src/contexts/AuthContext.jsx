import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import users from '../mocks/users.json'
import { useLocalStorage } from '../hooks/useLocalStorage'

const AuthContext = createContext()

function AuthProvider ({ children }) {
  const navigate = useNavigate()
  const {
    item: user,
    saveItem: setUser
  } = useLocalStorage('user', null)

  const login = ({ userName }) => {
    const user = users.find(user => user.userName === userName)

    if (user) {
      setUser(user)
      navigate(-1)
    }
  }

  const logout = () => {
    setUser(null)
    navigate('/')
  }

  const auth = { user, login, logout }

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
