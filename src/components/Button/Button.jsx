import { PrimaryBtn } from "./Button.styled"


export const Button = ({ children, disabled }) => {
    if (disabled) { return < PrimaryBtn type="button" disabled > {children}</PrimaryBtn > } else {
        return < PrimaryBtn type="button" > {children}</PrimaryBtn >
    }
        
}