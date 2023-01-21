import styled from "styled-components";

export const WrapperModal = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.9);
z-index: 100;
`

export const ModalView = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 300px;
padding: 6px;
background-color: white;
border-radius: 4px;
`

export const Text = styled.p`
margin: 0;

&:not(:last-of-type) {
    margin-bottom: 8px;
`

export const Title = styled.h1`
margin: 0;
margin-bottom: 8px;
font-size: 22px;
font-weigth: 500;
`