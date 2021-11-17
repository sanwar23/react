const initialState = { 
    
    name: '',
    address: '',
    mobile: '',
    college: '',
    btn: 'Add',
    errors: {
        name: '',
        address: '',
        mobile: '',
        college: ''
    }
}

const userReducer = (state= initialState ,action) => {
    console.log(state.name);
    console.log(action.payload);

    switch(action.type){
        case 'add_user':
            return {
                // ...state,
                name:action.payload.name,
                address:action.payload.address,
                mobile:action.payload.mobile,
                college:action.payload.college,
            };
        case 'edit_user':
            return {
                 ...state,
                btn: 'update',
                name:action.payload.name,
                address:action.payload.address,
                mobile:action.payload.mobile,
                college:action.payload.college,
            }
        default:
            return state;
    }
}
export default userReducer;