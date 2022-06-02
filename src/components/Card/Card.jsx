import { Thumb, CardWrapper } from "./Card.styled";
import { NoAvatarImg } from "./components/NoAvatarImg";
export const Card = ({user}) => {
    const { name, photo, position, email, phone } = user;
    return <CardWrapper>
        <Thumb>{photo ? <img src={photo} alt={name} /> : <NoAvatarImg/>}</Thumb>
        <p>{name.length < 20 ? name : (name.slice(0, 20) + '...')}</p>
        <div>
          <p>{position.length < 20 ? position : (position.slice(0, 20) + '...')}</p>
          <p>{email.length < 30 ? email : (email.slice(0, 30) + '...')}</p>
          <p>{phone}</p>  
        </div>
    </CardWrapper>
}