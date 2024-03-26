function Success(message) {
    return {
        render: message,
        type: "success",
        isLoading: false,
        autoClose: 3000
    }
}

function Failed(error) {
    return {
        render: error,
        type: "error",
        isLoading: false,
        autoClose: 3000
    }

}

export {Success, Failed};