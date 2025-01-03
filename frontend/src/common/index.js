const backendDomain = 'http://localhost:8080'

const summaryApi = {
    signUp: {
        url: `${backendDomain}/api/signup`,
        method: 'POST',
    },
    signIn: {
        url: `${backendDomain}/api/signin`,
        method: 'POST',
    },
    current_user: {
        url: `${backendDomain}/api/user-details`,
        method: 'GET',
    },
    logout: {
        url: `${backendDomain}/api/logout`,
        method: 'GET',
    },
    uploadProduct: {
        url: `${backendDomain}/api/upload-product`,
        method: 'POST',
    },
    products: {
        url: `${backendDomain}/api/products`,
        method: 'GET',
    },
    updateProduct: {
        url: `${backendDomain}/api/update-product`,
        method: 'POST',
    },
    getCategoryProduct: {
        url: `${backendDomain}/api/get-category-product`,
        method: 'GET',
    },
    getCategoryProducts: {
        url: `${backendDomain}/api/get-category-products`,
        method: 'POST',
    },
    getProductDetails: {
        url: `${backendDomain}/api/get-product-details`,
        method: 'POST',
    },
    addToCart: {
        url: `${backendDomain}/api/addtocart`,
        method: 'POST',
    },
    countCartProducts: {
        url: `${backendDomain}/api/count-cartproducts`,
        method: 'GET',
    },
    cartProducts: {
        url: `${backendDomain}/api/cartproducts`,
        method: 'GET',
    },
    updateCart: {
        url: `${backendDomain}/api/update-cart`,
        method: 'POST',
    },
    deleteCartProduct: {
        url: `${backendDomain}/api/delete-cartproduct`,
        method: 'POST',
    },
    searchProducts: {
        url: `${backendDomain}/api/search-products`,
        method: 'GET',
    },
    filterProducts: {
        url: `${backendDomain}/api/filter-products`,
        method: 'POST',
    },
    payment: {
        url: `${backendDomain}/api/checkout`,
        method: 'POST',
    }

}

export default summaryApi