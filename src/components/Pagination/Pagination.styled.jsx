import styled from "styled-components";

export const Wrapper = styled.div`
margin: 0 auto 20px;
width: 300px;
display: flex;
justify-content: space-evenly;
align-items: center;
`

export const LinkNavigation = styled.a`
text-decoration: none;
color: black;
transition: transform 500ms easy;

&:hover, &:focus {
transform: scale(1.2);
}
`

export const ListPagination = styled.ul`
margin: 0;
width: 100px;
padding: 0;
display: flex;
justify-content: space-evenly;
align-items: center;
`

export const ItemPagination = styled.li`
list-style: none;
font-size: 14px;
`

export const ItemAccent = styled.li`
list-style: none;
font-width: 700;
font-size: 18px;
`