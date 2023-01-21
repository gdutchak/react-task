import { Wrapper, LinkNavigation, ListPagination, ItemPagination, ItemAccent } from "./Pagination.styled";

const Pagination = ({count, previousPage, nextPage, current}) => {

    let arr = [];
    for (let i = 1; i <= count; i++) {
        arr.push([i])
    }

return (
    <Wrapper>
        { current !== 1 && <LinkNavigation onClick={previousPage} href="#">&#171; previous</LinkNavigation>}
        <ListPagination>
            { arr && arr.map(item => {
                if(parseInt(item) === current) {
                   return <ItemAccent key={item}>{item}</ItemAccent>
                }
                return <ItemPagination key={item}>{item}</ItemPagination>
            }) }
        </ListPagination>
        { current !== count && <LinkNavigation onClick={nextPage} href="#">next &#187;</LinkNavigation>}
    
    </Wrapper>
)
}

export default Pagination;