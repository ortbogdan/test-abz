import { Thumb, CardWrapper } from "./Card.styled";
import { NoAvatarImg } from "./components/NoAvatarImg";
import { normalizeString } from "../../services/normalizeString";
export const Card = ({user}) => {
    const { name, photo, position, email, phone } = user;
    return <CardWrapper>
        <Thumb>{photo ? <img src={photo} alt={name} /> : <NoAvatarImg/>}</Thumb>
        <p>{normalizeString(name)}</p>
        <div>
          <p>{normalizeString(position)}</p>
          <p>{normalizeString(email)}</p>
          <p>{phone}</p>  
        </div>
    </CardWrapper>
}