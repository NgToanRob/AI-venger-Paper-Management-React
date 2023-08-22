import API_BASE_URL from '../apiConfig';

export const isAuthenticated = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}check_authentication/`, {
        method: 'GET',
        credentials: 'include', // Include cookies in the request
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.authenticated;
      } else {
        console.error('Error checking authentication:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('An error occurred:', error);
      return false;
    }
  };
  