import { Button } from '../index';
import { useState, useEffect } from 'react';
import { getPosition, setUser, getToken } from '../../services/api';
export const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position_id, setPosition_id] = useState(1);
    const [photo, setPhoto] = useState('');
    const [positions, setPositions] = useState([]);
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const token = await getToken();
            const data = { name, email, phone, position_id, photo }
            const user = await setUser(data, token);
        console.log(user);
        } catch (error) {
            console.log(error);
        }
        
        // resetForm();
    }
    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setPosition_id(1);
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
    return <form onSubmit={handleSubmit}>
        <div><label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        id="name"
        onChange={e => setName(e.target.value)}
        value={name}
      /></div>
      <div><label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        required
        id="email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      /></div>
      <div><label htmlFor="number">Phone</label>
      <input
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        required
        id="number"
        onChange={e => setPhone(e.target.value)}
        value={phone}
        /></div>
      
      
    <fieldset>
      <legend>Select your position</legend>
      {positions.map(({name, id}) => <div key={id}>
          <input type="checkbox" onChange={() => setPosition_id(id)} checked={id===position_id} id={id} name={name}/>
        <label htmlFor={id}>{name}</label>
        </div>)}
    </fieldset>
    <div>
      <label htmlFor="photo">Photo</label>
      <input
        type="file"
        name="photo"
        accept=".jpeg,.jpg"
        required
        id="photo"
        onChange={e => setPhoto(e.target.files[0])}
        /></div>
      <Button type="submit">Sing up</Button>
    </form>
}