
export function isValid(string, type) {
    switch (type) {
        case 'name':
            if (string==='') return
            if (string.length <= 2) {
                return true
            }
            else if (string.length >= 30) {
                return true
            } else {
                return false;
            }
           

            
            

        default:
            return false;
    }
}