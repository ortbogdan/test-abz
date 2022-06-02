import { Button, Container } from "../../components"
import { HeroSection, HeroBox, HeroTitle, HeroInfo } from "./Hero.styled"
export const Hero = () => {
    return <HeroSection>
        <Container>
         <HeroBox>
          <HeroTitle>Test assignment for front-end developer</HeroTitle>
          <HeroInfo>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</HeroInfo>
          <Button>Sing up</Button>
         </HeroBox>
        </Container>
    </HeroSection>
}