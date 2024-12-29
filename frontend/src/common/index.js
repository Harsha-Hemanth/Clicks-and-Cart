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
    }

}

export default summaryApi