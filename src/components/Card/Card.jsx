import { Thumb, CardWrapper } from "./Card.styled";
export const Card = ({user}) => {
    const { name, photo, position, email, phone } = user;
    // console.log(name.split())
    return <CardWrapper>
        <Thumb><img src={photo} alt={name} /></Thumb>
        <p>{name}</p>
        <div>
          <p>{position}</p>
          <p>{email}</p>
          <p>{phone}</p>  
        </div>
    </CardWrapper>
}