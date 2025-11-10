import { supabase } from '../../lib/supabase'
import { useState } from 'react'

const SignUpPage = () => {
  const [email, setEmail] = useState('')

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email })
    if (error) alert(error.message)
    else alert('Check your email for login link!')
  }

  return (
    <div>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

export default SignUpPage
