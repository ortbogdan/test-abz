import { Header, Button, Container, Section, Preloader, Card } from "./components";

import { getUsers } from "./services/api";
import { useState, useEffect } from "react";
import { Title, HeroBox, HeroSection, UsersList } from "./App.styled";
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
          <h1>Test assignment for front-end developer</h1>
          <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
          <Button>Sing up</Button>
         </HeroBox>
        </Container>
      </HeroSection>
      <Section>
        <Container>
            <div>
            <Title>Working with GET request</Title>
            <UsersList>{users.map(user => <li key={user.id}>
                <Card user={user}/>
            </li>)}</UsersList>
            {loading && <Preloader/>}
            <Button onClick={onShowMoreBtnClick}>Show more</Button>
            </div>
        </Container>
    </Section>
    </>
  );
}


