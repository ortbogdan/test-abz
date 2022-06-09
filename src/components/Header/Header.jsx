import { Logo, Button } from "../index";
import { ButtonsBox, HeaderWrapper, HeaderBox } from "./Header.styled";
import { Container } from "../index";

export const Header = () => {
    return <HeaderWrapper>
        <Container>
        <HeaderBox>
        <Logo />
        <ButtonsBox>       
         <Button>Users</Button>
         <Button>Sing up</Button>
        </ButtonsBox>
        </HeaderBox>
        </Container>
    </HeaderWrapper>
}