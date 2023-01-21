import { useEffect, useState } from "react";
import getProducts from "../../utils/getProducts";
import { Item, List, Name, Info } from "./Products.styled";

const Products = ({data, modal}) => {

    return(
        <List>
            {data && data.map(item => {
                return <Item key={item.id} onClick={()=>modal(item)} style={{backgroundColor: item.color}}>
                    <Info>Id: {item.id}</Info>
                    <Name>Name: {item.name}</Name>
                    <Info>Year: {item.year}</Info>
                </Item>
            })}
        </List>
    )
}

export default Products;