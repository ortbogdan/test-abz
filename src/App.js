import { Container, Button, Section, Preloader, Card, Form, Header} from "./components";
import { getUsers, getToken, setNewUser } from "./services";
import { useState, useEffect } from "react";
import { Title, HeroBox, UsersList, HeroSection } from "./App.styled";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState(null)

  const [isUserAdded, setIsUserAdded] = useState(false);
 
  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const { users, total_users } = await getUsers(page);
        page === 1 ? setUsers(users) : setUsers(prevItems => [...prevItems, ...users]);
        setTotalUsers(total_users);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, [page]);

  useEffect(() => {
    if (isUserAdded === false) return
    async function fetchNewUsers() {
      try {
        // setLoading(true);
        const { users, total_users } = await getUsers(1);
        setUsers(users);
        setTotalUsers(total_users);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchNewUsers();
  }, [isUserAdded]);
  
  const onShowMoreBtnClick = () => {
    setPage(prevPage => prevPage + 1);
  }
  
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
      const data = await setNewUser(formData, token);
      if (data.success) {
        setIsUserAdded(true);
      } else {
        console.log(data.message);
      }
        } catch (error) {
            console.log(error);
        }
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
            <Title id="users">Working with GET request</Title>
            <UsersList>{users.map(user => <li key={user.id}>
                <Card user={user}/>
            </li>)}</UsersList>
            {loading && <Preloader/>}
            {totalUsers !== users.length && <Button onClick={onShowMoreBtnClick} style={{width: '120px'}}>Show more</Button>}
            </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div>
            <Title id="sing-up">Working with POST request</Title>
              {loading && <Preloader/>}
              <Form addUser={addUser} isUserAdded={isUserAdded} />
          </div>
        </Container>
      </Section>
    </>
  );
}


