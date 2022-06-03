import { PrimaryBtn } from "./Button.styled"


export const Button = ({ children, disabled, onClick, type }) => {
    
    if (disabled) { return < PrimaryBtn type={type} disabled > {children}</PrimaryBtn > }
    else {
        return < PrimaryBtn type={type} onClick={onClick}> {children}</PrimaryBtn >
    }
        
}