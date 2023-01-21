
import { Input, Text } from "./SearchId.styled";

const SearchId = ({search, value, totalPage}) => {

return(
    <>
    <Text>You can to find favorite product by id:</Text>
    <Input type="number" name="product" onInput={ search } value={value} placeholder="Search product by id" min={1} max={totalPage}/>
    </>
)
}

export default SearchId;