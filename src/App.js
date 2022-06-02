import { Header } from "./components";
import { Hero, Users } from "./layout";
import { getUsers } from "./services/api";
import { useState, useEffect } from "react";
export const App = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    // if (users.length === 0) {
    //   return
    // }
    async function fetchUsers() {
      try {
        const items = await getUsers();
        setUsers(items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, [])
  
  return (
    <>
      <Header />
      <Hero />
      <Users users={ users }/>
    </>
  );
}


