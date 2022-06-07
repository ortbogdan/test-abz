import TextField from '@mui/material/TextField';
import { UploadFileInput, InputBox } from './Input.styled';
import * as React from 'react';
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';

export const Input = ({ type, onChange, style }) => {
    
    switch (type) {
        case 'name':
            return <TextField  fullWidth label="Name" id="name" style={style}
            required
            // minLength="2"
            // maxLength="60"
            onChange={onChange} />
        case 'email':
            return <TextField style={style}
            fullWidth
            id="email"
            label="Email"
            type="email"
            required
            // pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            // minLength="2"
            // maxLength="100"
            onChange={onChange} />
        case 'phone':
            return <TextField helperText="+38 (XXX) XXX - XX - XX"
            fullWidth
            id="phone"
            label="Phone"
            type="tel"
            style={style}
            required
            // inputProps={ { pattern: `^[\+]{0,1}380([0-9]{9})$)`} }
            // // 
            InputProps={{
               inputComponent: NumberFormatCustom,
            }}
                onChange={onChange} />
        case 'file': 
            return <label class="form-control"> 
              <UploadFileInput  onChange={onChange} class="form-control" type="file" placeholder="Прикрепите файл" />
 	          <button> 
 		             Прикрепить файл
 	          </button> 
            </label>
        
        default: return 
    }
 
}

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => {
        console.log(values);
        onChange(
            values.formattedValue
        );
      }}
    mask="_"
    format="+38 (0##) ###-##-##"
    />
  );
});




NumberFormatCustom.propTypes = {
  onChange: PropTypes.func.isRequired,
};