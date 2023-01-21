import {nanoid} from "nanoid";
import { WrapperModal, ModalView, Text, Title } from "./Modal.styled";

const Modal = ({info, closeModal}) => {

    return (
        <WrapperModal onClick={closeModal}>
            {info && info.map(({id, name, year, color, pantone_value}) => {
     return <ModalView key={nanoid()}>
                <Text>Id: {id}</Text>
                <Title>Name: {name}</Title>
                <Text>Year: {year}</Text>
                <Text value={color}>Color: {color}</Text>
                <Text value={pantone_value}>Pantone: {pantone_value}</Text>
            </ModalView>
        })}
        </WrapperModal>
    )

}

export default Modal;