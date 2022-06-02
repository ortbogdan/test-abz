import { PrimaryBtn } from "./Button.styled"


export const Button = ({ children, disabled, onClick,  }) => {
    
    if (disabled) { return < PrimaryBtn type="button" disabled > {children}</PrimaryBtn > }
    else {
        return < PrimaryBtn type="button" onClick={onClick}> {children}</PrimaryBtn >
    }
        
}