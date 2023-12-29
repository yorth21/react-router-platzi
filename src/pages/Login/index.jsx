import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import users from '../../mocks/users.json'

function Login () {
  const auth = useAuth()
  const [userName, setUserName] = useState('')

  const login = (e) => {
    e.preventDefault()
    auth.login({ userName })
  }

  return (
    <div className='max-w-3xl mx-auto px-4 py-2'>
      <h1 className='text-2xl font-medium'>Login</h1>

      <form onSubmit={login} className='flex flex-col'>
        <label htmlFor='userName'>Escribe tu nombre de usuario</label>
        <div className='flex gap-2 mt-2'>
          <input
            id='userName'
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='Nombre de usuario'
            className='border border-black rounded-lg px-2 bg-neutral-100 focus:outline-none focus:border-blue-700'
          />
          <button
            type='submit'
            className='bg-blue-700 hover:bg-blue-600 py-1 px-4 text-sm text-white font-semibold rounded-lg transition-colors'
          >
            Entrar
          </button>
        </div>
      </form>

      <div className='mt-2'>
        <h3 className='text-lg'>Lista usuarios (solo uso en la demo)</h3>
        <ul>
          {users && users.map(user => (
            <li key={user.userName}>{user.userName}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { Login }
