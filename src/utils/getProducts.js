
export const getProducts = async(page, limit) => {
try {
    const data = await fetch(`https://reqres.in/api/products?page=${page}&per_page=${limit}`)
    if(data.status === 404) throw new Error(alert(`This products or ${page} not found :(`))
    const result = await data.json()
    return await result
} catch (error) {
    if(error.status === 500) {
        console.log("Server error, please try again :(");
    } else {
        console.log(error.message);
    }
}
};

export const getProductById = async(id) => {
    try {
        const data = await fetch(`https://reqres.in/api/products?id=${id}`)
        if(data.status === 404) throw new Error(alert(`Id: ${id} not found :(`))
        const result = await data.json()
        return await result
    } catch (error) {
        if(error.status === 500) {
            console.log("Server error, please try again :(")
        } else {
            console.log(error);
        }
    }
};
