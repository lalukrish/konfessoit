import React, { useState } from 'react';

function UpdateUserProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: name,
      email: email
    };

    fetch('/updateuserprofile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log('data',data.data)
        // do something with response, like display a success message
      })
      .catch(error => {
        console.error(error);
        // handle error, like displaying an error message to the user
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />

      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateUserProfile;
