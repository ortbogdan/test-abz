import styled from 'styled-components';

export const Thumb = styled.div`
    width: 70px;
    height:70px;
    overflow: hidden;
    border-radius: 50% 50%;
> img {
    object-fit: cover;
}
`
export const CardWrapper = styled.article`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 width: 282px;
 height: 254px;

 border-radius: 10px;
 padding: 20px;

 text-align: center;
 background-color: rgb(255, 255, 255);
`