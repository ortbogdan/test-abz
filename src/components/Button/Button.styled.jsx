import styled from 'styled-components';

export const PrimaryBtn = styled.button`
width: 100px;
height: 34px;
border-radius: 80px;
border: none;
background-color: rgb(244, 224, 65);
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
:hover,
:focus {
    background-color: rgb(255, 227, 2);
}
:disabled {
    background-color: rgb(180, 180, 180);
}
`