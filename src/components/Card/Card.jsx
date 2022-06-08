import { Thumb, CardWrapper } from "./Card.styled";
import PropTypes from 'prop-types';
import { normalizeString } from "../../services/normalizeString";
import coverImg from '../../images/photo-cover.svg'
export const Card = ({user}) => {
    const { name, photo, position, email, phone } = user;
    return <CardWrapper>
      <Thumb>{photo ? <img src={photo} alt={name} width='70' height='70' /> : <img src={coverImg} alt='No avatar' width='70' height='70'/>}</Thumb>
        <p>{normalizeString(name)}</p>
        <div>
          <p>{normalizeString(position)}</p>
          <p>{normalizeString(email)}</p>
          <p>{phone}</p>  
        </div>
    </CardWrapper>
}


Card.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string,
    position: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  })
};