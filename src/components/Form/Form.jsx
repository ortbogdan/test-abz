import { Button, NumberFormatCustom, InputHelperText } from '../index';
import { useState, useEffect } from 'react';
import { UserForm, InputLabel, UploadFileInput, FileInputBox, Placeholder, SuccessSignBox, SuccessSignTitle } from './Form.styled';
import successImg from '../../images/success-image.svg'
import PropTypes from 'prop-types';
import { isValid, getPosition, normalizePhone } from '../../services';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material';
export const Form = ({addUser, isUserAdded}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position_id, setPosition_id] = useState(1);
    const [photo, setPhoto] = useState('');
    const [positions, setPositions] = useState([]);
  
  const handleSubmit = async event => {
    event.preventDefault();
    const normalizedPhone = normalizePhone(phone);
    const newUser = { name, email, phone: normalizedPhone, position_id, photo }
      await addUser(newUser);
      event.target.reset();
  }
    useEffect(() => {
        if (positions.length) return;
        async function fetchPosition() {
        try {
            const { positions } = await getPosition();
            setPositions(positions);
        } catch (error) {
            console.log(error);
        }
      } 
        fetchPosition();
    })
  return isUserAdded ? <SuccessSignBox><SuccessSignTitle>User successfully registered</SuccessSignTitle><img src={successImg} alt="User successfully added!" /></SuccessSignBox> : <UserForm onSubmit={handleSubmit}>
    
      <TextField
        id="name"
        label="Name"
        
        value={name}
        onChange={e => setName(e.target.value)}
        error={isValid(name, 'name')}
        fullWidth
        style={{ marginBottom: '50px', maxWidth: '380px' }}
        required
        helperText=' '
        FormHelperTextProps={
        
           {component: InputHelperText}
        
        }
      />
    
    
    <TextField
        id="email"
        label="Email"
        value={email}
        onChange={e =>  setEmail(e.target.value)}
        error={isValid(email, 'email')}
        fullWidth
        helperText=' '
        style={{ marginBottom: '50px', maxWidth: '380px' }}
        required
        FormHelperTextProps={
           {component: InputHelperText}
        }
    />
    <TextField
        id="phone"
        label="Phone"
        onChange={setPhone}
        error={isValid(normalizePhone(phone), 'phone')}
        fullWidth
        style={{ marginBottom: '25px', maxWidth: '380px' }}
        required
        helperText="+38 (XXX) XXX - XX - XX"
        InputProps={{
               inputComponent: NumberFormatCustom,
        }}
    />
    <FormControl style={{marginBottom: '50px'}}>
            <FormLabel
              style={{
                fontFamily: 'inherit',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '26px',
                color: 'inherit'
              }}
            >
              Select your position
            </FormLabel>
            <RadioGroup
              aria-labelledby="Select your position"
              required
            >
              {positions.map(({id, name}) => (
                <FormControlLabel
                  onChange={() => setPosition_id(id)}
                  checked={id===position_id}
                  key={id}
                  control={
                    <Radio
                      sx={{
                        color: 'default',
                        '&.Mui-checked': {
                          color: '#00BDD3',
                        },
                      }}
                    />
                  }
                  label={name}
                />
              ))}
            </RadioGroup>
          </FormControl>
    <InputLabel htmlFor='file-input'>
          <FileInputBox>
            Upload
        <UploadFileInput id='file-input'  type="file" onChange={e =>setPhoto(e.target.files[0])} />
          </FileInputBox>
      <Placeholder>{photo ? photo.name : 'Upload your photo'}</Placeholder>
          </InputLabel>
    {(name && email && phone && photo) ? <Button type="submit">Sing up</Button> : <Button disabled>Sing up</Button>} 
    </UserForm>}
  
Form.propTypes = {
  addUser: PropTypes.func.isRequired,
  isUserAdded: PropTypes.bool.isRequired,
};