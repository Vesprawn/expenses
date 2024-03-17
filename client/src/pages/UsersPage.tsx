import { Link } from "react-router-dom";
import useGetUsers from "../hooks/useGetUsers";

const UsersPage = () => {
  const {

    users, 
    isLoading: isUsersLoading,
    error: usersError
  } = useGetUsers();

  const isLoading = () => {
    if (isUsersLoading) return true

    return false
  }

  if (usersError) return (<>Error.</>);

  return(<section className="p-2">
    <h1 className="mb-2">Expenses</h1>
    <ul>
      {
      (isLoading()) 
        ? <>Loading...</>
        : users.map(user => (
        <li>
          <Link key={user.id} to={`/user/${user.id}`}>{user.name}</Link>
        </li>
        ))
        
      }
    </ul>
  </section>);
}

export default UsersPage;

