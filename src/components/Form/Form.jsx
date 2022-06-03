import { Button } from '../index';
import { useState, useEffect } from 'react';
import { getPosition } from '../../services/api';
export const Form = ({addUser}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position_id, setPosition_id] = useState(1);
    const [photo, setPhoto] = useState('');
    const [positions, setPositions] = useState([]);
  const handleSubmit = async event => {
      event.preventDefault();
      const newUser = {name, email, phone, position_id, photo}
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
    return <form onSubmit={handleSubmit}>
        <div><label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        required
        id="name"
        onChange={e => setName(e.target.value)}
      /></div>
      <div><label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        required
        id="email"
        onChange={e => setEmail(e.target.value)}
        
      /></div>
      <div><label htmlFor="number">Phone</label>
      <input
        type="tel"
        name="phone"
        pattern="^[\+]{0,1}380([0-9]{9})$)"
        placeholder="+380"
        required
        id="number"
        onChange={e => setPhone(e.target.value)}
        />
      </div>
      
      
    <fieldset>
      <legend>Select your position</legend>
      {positions.map(({name, id}) => <div key={id}>
          <input type="checkbox" onChange={() => setPosition_id(id)} checked={id===position_id} id={id} name={name}/>
        <label htmlFor={id}>{name}</label>
        </div>)}
    </fieldset>
    <div>
      <input
        type="file"
        name="photo"
        accept=".jpeg,.jpg"
        placeholder="Upload your photo"
        required
        id="photo"
        onChange={e => setPhoto(e.target.files[0])}
        />
      </div>
      {(name && email && phone && photo) ? <Button type="submit">Sing up</Button> : <Button disabled>Sing up</Button>}
      
    </form>
}