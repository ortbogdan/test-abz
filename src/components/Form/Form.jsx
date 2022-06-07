import { Button, Input } from '../index';
import { useState, useEffect } from 'react';
import { getPosition } from '../../services/api';
import { UserForm } from './Form.styled';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
export const Form = ({addUser}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position_id, setPosition_id] = useState(1);
    const [photo, setPhoto] = useState('');
    const [positions, setPositions] = useState([]);
  const handleSubmit = async event => {
    event.preventDefault();
    const normalizedPhone = phone.split(/\)|\(|-|\s/).join('');
    const newUser = { name, email, phone: normalizedPhone, position_id, photo }
      console.log(newUser);
      await addUser(newUser);
      reset();
  }
  
  const reset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setPosition_id('');
    setPhoto('');
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
  return <UserForm onSubmit={handleSubmit}>
    <Input type={'name'} onChange={e => setName(e.target.value)} style={{ marginBottom: '50px', maxWidth: '380px' }} />
    <Input type={'email'} onChange={e => setEmail(e.target.value)} style={{ marginBottom: '50px', maxWidth: '380px' }} />
    <Input type={'phone'} onChange={setPhone} style={{ marginBottom: '25px', maxWidth: '380px' }} />
        
    
    <FormControl>
            <FormLabel
              style={{
                fontFamily: 'Nunito',
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
    
     {/* <div>
      <input
        type="file"
        name="photo"
        accept=".jpeg,.jpg"
        placeholder="Upload your photo"
        required
        id="photo"
        onChange={e => setPhoto(e.target.files[0])}
        />
      </div> */}
      <Input type={'file'} onChange={e => setPhoto(e.target.files[0])} />
      {(name && email && phone && photo) ? <Button type="submit">Sing up</Button> : <Button disabled>Sing up</Button>}
      
    </UserForm>
}