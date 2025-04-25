// ContactForm.js
import { useState } from 'react';
import { supabase } from '../supabase';

function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const { error } = await supabase.from('contacts').insert([{ name, message }]);
    if (error) alert('Error sending message: ' + error.message);
    else alert('Message sent successfully!');
  };

  return (
    <div>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default ContactForm;
