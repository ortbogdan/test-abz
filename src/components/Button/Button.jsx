import { PrimaryBtn } from "./Button.styled"
import PropTypes from 'prop-types';

export const Button = ({ children, disabled, onClick, type='button', ...other}) => {
    
    if (disabled) { return < PrimaryBtn type={type} disabled {...other}> {children}</PrimaryBtn > }
    else {
        return < PrimaryBtn type={type} onClick={onClick} {...other}> {children}</PrimaryBtn >
    }
        
}

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string
};