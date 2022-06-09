
export function isValid(string, type) {
    switch (type) {
        case 'name':
            if (string==='') return
            if (string.length <= 2) {
                return true
            }
            else if (string.length >= 60) {
                return true
            } else {
                return false;
            }
        case 'email':
            if (string === '') return;
           return  string.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) === null  
            
        case 'phone':
            if (string === '') return;
            return string.match(/^[/+]{0,1}380([0-9]{9})$/) === null;
            // ^[\+]{0,1}380([0-9]{9})$
        default:
            return false;
    }
}