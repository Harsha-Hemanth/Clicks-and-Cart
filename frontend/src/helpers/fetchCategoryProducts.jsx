import summaryApi from '../common'

const fetchCategoryProducts = async(category)=>{
    const response = await fetch(summaryApi.getCategoryProducts.url,{
        method: summaryApi.getCategoryProducts.method,
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            category: category
        })
    })

    const dataResponse = await response.json()

    return dataResponse
}

export default fetchCategoryProducts