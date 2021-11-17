export const userAdd = (params) => {
    return {
        type: 'add_user',
        payload : params
    };
}

export const editUser = (params) => {
    return {
        type : 'edit_user',
        payload : params
    }
}