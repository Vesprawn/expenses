import { useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: number,
  name: string
}

const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setIsLoading(true);

    axios.get('http://localhost:3001/users').then((response) => {
      console.log('response', response);
      setUsers(response.data);
      setIsLoading(false);
    })
    .catch((err) => {

      console.log('response', err);
      setError(err)
      setIsLoading(false);
    });
  }, [])


  return {
    users,
    isLoading,
    error
  }
}

export default useGetUsers;