import TextField from '@mui/material/TextField';
import { NumberFormatCustom } from './components/NumberFormatCustom';
import PropTypes from 'prop-types';
// import { isValid } from '../../services/isValid';
export const Input = ({ type, onChange, style, ...other }) => {
    
    switch (type) {
        case 'name':
            return <TextField  fullWidth label="Name" id="name" style={style}
            required
            {...other}
            // helperText={error ? 'Input name' : ''}
            // error={isValid(value, 'name')}
            onChange={onChange} />
        case 'email':
            return <TextField style={style}
            fullWidth
            id="email"
            label="Email"
            type="email"
            required
            onChange={onChange} />
        case 'phone':
            return <TextField helperText="+38 (XXX) XXX - XX - XX"
            fullWidth
            id="phone"
            label="Phone"
            type="tel"
            style={style}
            required
            InputProps={{
               inputComponent: NumberFormatCustom,
            }}
            onChange={onChange} />
        
        default: return 
    }
 
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  error: PropTypes.bool
};
