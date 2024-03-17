import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useGetUsers from "../hooks/useGetUsers";
import useGetExpenses from "../hooks/useGetExpenses";
import Modal from "../components/Modal";
import { useState } from "react";
import axios from "axios";


const UserPage = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState<boolean>(false);
  const {
    users, 
    isLoading: isUsersLoading,
    error: usersError
  } = useGetUsers();

  const [timestamp, setTimestamp] = useState<number>(0);

  const [newExpense, setNewExpense] = useState<string>('');
  const [newVendor, setNewVendor] = useState<string>('');
  const [newValue, setNewValue] = useState<string>('');

  const {id} = useParams();
  const user = users.find(a => a.id === Number(id));

  const {
    expenses, 
    isLoading: isExpensesLoading,
    error: expensesError
  } = useGetExpenses(Number(id), timestamp);


  console.log('expenses', expenses)

  const closeModal = () => {
    setNewExpense('');
    setNewVendor('');
    setNewValue('0');
    setIsModalDisplayed(false);
  }

  const saveExpense = () => {
    axios.post('http://localhost:3001/expense', {
      newExpense,
      newVendor,
      newValue,
      userId: id
    });
    setTimestamp(new Date().getTime())
    window.location.reload() // <- TODO nasty workaround for testing fix
    closeModal();
  }

  const total = expenses.reduce((prev, curr) => prev + curr.value, 0).toFixed(2);

  return(<>

    <Link to='/'>Home</Link>

    <section className="p-4">
      <h1 className="text-3 xl mb-2">{user?.name}'s Expenses</h1>
      <table className='table-auto w-1/2'>
        <thead>
          <tr>
            <th className="text-left">Item</th>
            <th className="text-left">Where</th>
            <th className="text-right">Cost</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr
              className="odd:bg-white even:bg-slate-400" 
              key={expense.id}>
              <td className="text-left">{expense.name}</td>
              <td className="text-left">{expense.vendor}</td>
              <td className="text-right">{expense.value}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td className="text-right">Total:</td>
            <td className="text-right">{total}</td>
          </tr>
        </tfoot>
      </table>
      <button onClick={() => {setIsModalDisplayed(true)}}>Add Expense</button>
    </section>
    <Modal isOpen={isModalDisplayed} onClose={() => {closeModal()}}>
      <div className="text-right">
      Expense Name: <input placeholder="e.g. Coffee" className="border border-solid border-black my-1" type="text" value={newExpense} onChange={(e) => setNewExpense(e.target.value)}/><br />
      Vendor: <input placeholder="e.g. Starbucks" type="text" className="border border-solid border-black my-1" value={newVendor} onChange={(e) => setNewVendor(e.target.value)}/><br />
      Value: <input placeholder="10.00" type="text" className="border border-solid border-black my-1" value={newValue} onChange={(e) => setNewValue(e.target.value)}/>

      </div>
      <div className="text-right">
      <button className="mr-1 border border-solid border-black px-1" onClick={saveExpense}>Save</button>
      <button className="border border-solid border-black px-1" onClick={closeModal}>Cancel</button>
      </div>
    </Modal>
  </>);
}

export default UserPage;

