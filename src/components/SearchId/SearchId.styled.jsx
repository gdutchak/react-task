import styled from "styled-components";

export const Text = styled.p`
padding-left: 20px;
`

export const Input = styled.input`
display: block;
margin: 0 auto 20px;
width: 150px;
padding: 4px;
border: 1px solid gainsboro;

&:hover, &:focus {
    border: 2px solid blue;
}
`