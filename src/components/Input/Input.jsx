import TextField from '@mui/material/TextField';

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
                inputProps={ { pattern: `^[\+]{0,1}380([0-9]{9})$)`} }
            // 
            onChange={onChange}/>
        default: return 
    }
 
}
// { marginBottom: '50px', maxWidth: '380px' }