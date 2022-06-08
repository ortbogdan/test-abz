import styled from 'styled-components';
export const UserForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`
export const InputLabel = styled.label`
display: flex;
align-items: center;
margin-bottom: 50px;
width: 100%;
height: 54px;

background: rgb(248, 248, 248);

border-top: 1px solid rgb(208, 207, 207);
border-right: 1px solid rgb(208, 207, 207);
border-bottom: 1px solid rgb(208, 207, 207);
border-radius: 4px;

cursor: pointer;
@media screen and (min-width: 412px) {
    width: 380px;
}
:hover, :focus {
    border-top: 1px solid rgba(0, 0, 0, 0.87);;
    border-right: 1px solid rgba(0, 0, 0, 0.87);;
    border-bottom: 1px solid rgba(0, 0, 0, 0.87);;
    
}
`
export const UploadFileInput = styled.input`
  display: none;
`
export const FileInputBox = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;

  width: 83px;
  height: 54px;

  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 4px 0px 0px 4px;
`
export const Placeholder = styled.span`
    margin-left: 16px;

    color: rgb(126, 126, 126);
`
export const SuccessSignBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const SuccessSignTitle = styled.h1`
margin-bottom: 50px;
`