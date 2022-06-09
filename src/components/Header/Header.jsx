import { Logo, Button } from "../index";
import { ButtonsBox, HeaderWrapper, HeaderBox } from "./Header.styled";
import { Container } from "../index";

export const Header = () => {
    return <HeaderWrapper>
        <Container>
        <HeaderBox>
        <Logo />
                <ButtonsBox> 
               
         <Button><a href="#users">Users</a></Button>
         <Button><a href="#sing-up">Sing up</a></Button>
        </ButtonsBox>
        </HeaderBox>
        </Container>
    </HeaderWrapper>
}