import { useState, useEffect } from "react";
import axios from "axios";

interface Expense {
  id: number,
  userId: number,
  name: string,
  vendor: string,
  value: number
}

const useGetExpenses = (userId: number, timestamp: number) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!userId) return


    setIsLoading(true);

    axios.get(`http://localhost:3001/user_expenses/${userId}`)
    .then((response) => {
      setExpenses(response.data);
      setIsLoading(false);
    })
    .catch((err) => {
      setError(err)
      setIsLoading(false);
    });
  }, [userId, timestamp])


  return {
    expenses,
    isLoading,
    error
  }
}

export default useGetExpenses;