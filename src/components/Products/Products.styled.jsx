import styled from 'styled-components';


export const List = styled.ul`
width: 400px;
margin: 0 auto 40px;
padding: 0;
`;

export const Item = styled.li`
box-sizing: border-box;
list-style: none;
cursor: pointer;
border-radius: 4px;
padding: 4px;

&:not(:last-of-type) {
    margin-bottom: 10px;
}

&:hover, &:focus {
    border: 5px solid rgba(0, 0, 0, 0.6);
}
`;

export const Name = styled.h1`
margin: 0;
margin-bottom: 5px;
font-size: 22px;
`;

export const Info = styled.p`
margin: 0;

&:not(:last-of-type) {
    margin-bottom: 5px;
}
`



