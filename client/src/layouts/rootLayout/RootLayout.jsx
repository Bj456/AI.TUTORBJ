import { supabase } from '../lib/supabase'
import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const RootLayout = () => {
  const [session, setSession] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const currentSession = supabase.auth.session()
    setSession(currentSession)

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (!session) navigate('/sign-in')
    })
  }, [])

  return (
    <div className="rootLayout">
      <header>
        <a href="/" className="logo">AI TUTOR</a>
        <div className="user">
          {session ? (
            <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
          ) : (
            <button onClick={() => navigate('/sign-in')}>Sign In</button>
          )}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
