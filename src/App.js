import { useEffect, useState } from "react";
import { getProducts, getProductById } from "./utils/getProducts";
import SearchId from "./components/SearchId/SearchId";
import Products from "./components/Products/Products";
import Pagination from "./components/Pagination/Pagination";
import Modal from "./components/Modal/Modal";

let oneProduct = [];
let total = null;

function App() {

  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");
  const [totalPage, setTotalPage] = useState("");
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);

const itemPerPage = "5";

 useEffect(() => {
  getProducts(page, itemPerPage).then(res => {
    setProducts(res.data);
    setTotalPage(res.total_pages);
    total = res.total;
  })
}, [page, id])

useEffect(() => {
 if(!id) {
  return
 };
 getProductById(id).then(res => {
  setProducts([res.data]);
  setTotalPage(res.total_pages);
 })
}, [id])

const onClickNextPage = () => {
setPage(prev => prev + 1)
}

const onClickPreviousPage = () => {
  setPage(prev => prev - 1)
}

const changeVisible = (item) => {
  window.addEventListener('click', onCloseWindow);
  window.addEventListener('keydown', onCloseWindow);
  setVisible(prev => !prev);
  oneProduct.push(item);
}

const onCloseWindow = (e) => {
  if(e.currentTarget === e.target || e.code === "Escape") {
    setVisible(prev => !prev)
  }
  window.removeEventListener("click", onCloseWindow);
  window.removeEventListener("click", onCloseWindow)
}
  return (
    <>
      <SearchId search={e => setId(e.currentTarget.value.trim())} value={id} totalPage={total}/>
      <Products data={products} modal={changeVisible}/>
      {totalPage > 1 && <Pagination count={totalPage} previousPage={onClickPreviousPage} nextPage={onClickNextPage} current={page}/>}
      {visible && <Modal info={oneProduct} closeModal={onCloseWindow}/>}
      </>
  );
}

export default App;
