import { useEffect } from "react"; // Ensure this is imported
import { useSelector, useDispatch } from "react-redux";
import { adduser, addUserPrepare, setUsers } from "./userSlice"; // Ensure you have a setUsers action
import { useRef } from "react";

const Users = () => {
  const users = useSelector((state) => state.usersReducer.users);
  const dispatch = useDispatch();
  const userNameRef = useRef();
  const userEmailRef = useRef();

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Dispatch an action to store fetched users in Redux
        dispatch(setUsers(data)); // Use setUsers to store the fetched users
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, [dispatch]);

  return (
    <>
      <h2>Users:</h2>
      <div>
        <input placeholder='Name' ref={userNameRef} />
        <input placeholder='Email' ref={userEmailRef} />
        <button
          onClick={() =>
            dispatch(
              adduser({
                name: userNameRef.current?.value,
                email: userEmailRef.current?.value,
              })
            )
          }
        >
          Add User
        </button>
        <button
          onClick={() =>
            dispatch(
              addUserPrepare(
                userNameRef.current?.value,
                userEmailRef.current?.value,
              )
            )
          }
        >
          Add Prepare User
        </button>
      </div>
      <div>
        {users.length > 0 ? (
          users.map((item) => (
            <div key={item.id}>
              {item.id} . {item.name} , {item.email}
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </>
  );
};

export default Users;