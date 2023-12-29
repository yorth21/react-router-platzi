import { useAuth } from '../../hooks/useAuth'

function Logout () {
  const auth = useAuth()

  const logout = (e) => {
    e.preventDefault()
    auth.logout()
  }

  return (
    <div className='max-w-3xl mx-auto px-4 py-2'>
      <h1 className='text-2xl font-medium'>Logout</h1>

      <form onSubmit={logout} className='flex flex-col'>
        <label>Seguro que quieres salir?</label>

        <div>
          <button type='submit' className='bg-red-700 hover:bg-red-600 py-1 px-4 text-sm text-white font-semibold rounded-lg mt-2 transition-colors'>
            Salir
          </button>
        </div>
      </form>
    </div>
  )
}

export { Logout }
