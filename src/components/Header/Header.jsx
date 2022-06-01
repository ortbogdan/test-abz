import { Logo, Button } from "../index";
import { ButtonsBox, HeaderWrapper } from "./Header.styled";

export const Header = () => {
    return <HeaderWrapper>
        <Logo />
        <ButtonsBox>
         <Button>Users</Button>
         <Button>Sing up</Button>
        </ButtonsBox>
    </HeaderWrapper>
}