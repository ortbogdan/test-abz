import { Header, Button, Container, Section, Preloader, Card, Form } from "./components";
import * as Scroll from 'react-scroll';
import { getUsers, getToken, setNewUser } from "./services/api";
import { useState, useEffect } from "react";
import { Title, HeroBox, HeroSection, UsersList } from "./App.styled";
export const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState(null)
  
  const addUser = async newUser => {
    const { name, email, phone, position_id, photo } = newUser;
    try {
            const token = await getToken();
            const formData = new FormData();
             formData.append('name', name);
             formData.append('email', email);
             formData.append('phone', phone);
             formData.append('position_id', position_id);
             formData.append('photo', photo);
      const { success } = await setNewUser(formData, token);
      if (success) {
        setUsers(prevUsers => [...newUser, ...prevUsers])
      }
        } catch (error) {
            console.log(error);
        }
  }
  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const {users, total_users} = await getUsers(page);
        page === 1 ? setUsers(users) : setUsers(prevItems => [...prevItems, ...users]);
        setTotalUsers(total_users);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, [page])
  const onShowMoreBtnClick = () => {
    console.log(page);
    setPage(prevPage => prevPage + 1);
    setTimeout(() => { Scroll.animateScroll.scrollToBottom(); }, 700);
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
            {totalUsers !== users.length && <Button onClick={onShowMoreBtnClick}>Show more</Button>}
            </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div>
            <Title>Working with POST request</Title>
            <Form addUser={addUser}/>
          </div>
        </Container>
      </Section>
    </>
  );
}


