import { Header, Button, Container } from "./components";
import { Users } from "./layout";
import { getUsers } from "./services/api";
import { useState, useEffect } from "react";
import { Title, HeroBox, HeroInfo, HeroSection } from "./App.styled";
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
      <HeroSection>
        <Container>
         <HeroBox>
          <Title>Test assignment for front-end developer</Title>
          <HeroInfo>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</HeroInfo>
          <Button>Sing up</Button>
         </HeroBox>
        </Container>
      </HeroSection>
      <Users users={users} showMore={onShowMoreBtnClick} isLoading={loading}/>
    </>
  );
}


