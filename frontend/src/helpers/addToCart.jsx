import summaryApi from "../common"

const addToCart = async(e, id)=>{
    e?.stopPropagation()
    e?.preventDefault()

    const response = await fetch(summaryApi.addToCart.url,{
        method: summaryApi.addToCart.method,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({productId:id})
    })

    const responseData = await response.json()

    return responseData
}

export default addToCart