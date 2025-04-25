// SignUp.js
import { useState } from 'react';
import { supabase } from '../supabase';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert('Error signing up: ' + error.message);
    else alert('Check your email to confirm signup');
  };

  return (
    <div>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
