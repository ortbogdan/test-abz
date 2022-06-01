import { Button } from "../../components"
import { HeroSection, HeroBox, HeroTitle } from "./Hero.styled"
export const Hero = () => {
    return <HeroSection>
        <HeroBox>
        <HeroTitle>Test assignment for front-end developer</HeroTitle>
        <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
        <Button>Sing up</Button>
        </HeroBox>
    </HeroSection>
}