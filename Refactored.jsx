import React, { useState, useEffect, useRef } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  const fetchUser = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    setLoading(true);
    setError(null);

    fetch(`https://api.example.com/users/${userId}`, {
      signal: abortControllerRef.current.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });
  };

  // componentDidMount + componentDidUpdate for userId changes
  useEffect(() => {
    fetchUser();

    // Cleanup function similar to componentWillUnmount
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [userId]); // re-run when userId changes

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={fetchUser}>Refresh</button>
    </div>
  );
}

export default UserProfile;
