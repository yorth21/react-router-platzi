import { useAuth } from '../../hooks/useAuth'

function Profile () {
  const auth = useAuth()

  return (
    <div className='max-w-3xl mx-auto px-4 py-2'>
      <h1 className='text-2xl font-medium'>Perfil</h1>
      <p>Bienvenido, <span className='font-semibold'>{auth.user?.userName}</span></p>
    </div>
  )
}

export { Profile }
