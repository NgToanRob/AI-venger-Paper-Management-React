import React, { useState } from 'react';
import axios from 'axios';

function ProfilePage() {
  const [domains, setDomains] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDomainChange = (event) => {
    setDomains(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/update-domains/', { domains });
      setSuccessMessage('Domains updated successfully!');
    } catch (error) {
      setErrorMessage('An error occurred while updating domains.');
    }
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="domains">Interested Domains:</label>
          <input
            type="text"
            id="domains"
            value={domains}
            onChange={handleDomainChange}
          />
        </div>
        <button type="submit">Update Domains</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default ProfilePage;
