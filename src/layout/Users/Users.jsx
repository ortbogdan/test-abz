import { Container, Card, Section, Button } from "../../components";
import { UsersSectionTitle, UsersList } from "./Users.styled";

export const Users = ({users}) => {
    return <Section>
        <Container>
            <UsersSectionTitle>Working with GET request</UsersSectionTitle>
            <UsersList>{users.map(user => <li key={user.id}>
                <Card user={user}/>
            </li>)}</UsersList>
            <Button>Show more</Button>
        </Container>
    </Section>
}