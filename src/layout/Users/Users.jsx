import { Container, Card, Section, Button, Preloader } from "../../components";
import { UsersSectionTitle, UsersList } from "./Users.styled";


export const Users = ({users, showMore, isLoading }) => {
    return <Section>
        <Container>
            <UsersSectionTitle>Working with GET request</UsersSectionTitle>
            <UsersList>{users.map(user => <li key={user.id}>
                <Card user={user}/>
            </li>)}</UsersList>
            {isLoading && <Preloader/>}
            <Button onClick={showMore}>Show more</Button>
        </Container>
    </Section>
}