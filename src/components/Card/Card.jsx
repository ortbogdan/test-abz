import { Thumb, CardWrapper } from "./Card.styled";
import PropTypes from 'prop-types';
import { normalizeString } from "../../services";
import coverImg from '../../images/photo-cover.svg'
import { CardTooltip } from "../index";


export const Card = ({user}) => {
    const { name, photo, position, email, phone } = user;
    return <CardWrapper>
      <Thumb>{photo ? <img src={photo} alt={name} width='70' height='70' /> : <img src={coverImg} alt='No avatar' width='70' height='70'/>}</Thumb>
      <CardTooltip title={name} placement="bottom" enterDelay={250} children ><p>{normalizeString(name)}</p></CardTooltip>
      
        <div>
          <CardTooltip title={position} placement="bottom" enterDelay={250}><p>{normalizeString(position)}</p></CardTooltip>
          <CardTooltip title={email} placement="bottom" enterDelay={250}><p>{normalizeString(email)}</p></CardTooltip>
          <CardTooltip title={phone} placement="bottom" enterDelay={250}><p>{phone}</p></CardTooltip>  
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

