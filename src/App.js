import { Header } from "./components";
import { Hero, Users } from "./layout";
import { getUsers } from "./services/api";
import { useState, useEffect } from "react";
export const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    
    async function fetchUsers() {
      try {
        setLoading(true);
        const items = await getUsers(page);
        page === 1 ? setUsers(items) : setUsers(prevItems => [...prevItems, ...items]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
    fetchUsers();
  }, [page])
  const onShowMoreBtnClick = () => {
    console.log(page);
    setPage(prevPage => prevPage + 1);
  }
  return (
    <>
      <Header />
      <Hero />
      <Users users={users} showMore={onShowMoreBtnClick} isLoading={loading}/>
    </>
  );
}


