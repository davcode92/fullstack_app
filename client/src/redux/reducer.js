import { ADD_USER, DELETE_USER, EDIT_USER, GET_USERS } from "./actionTypes";

const initialState = {
    loading: true,
    users: null,
};


const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case GET_USERS:
      return { ...state, users: payload, loading: false};
    case ADD_USER:
      return {...state, users: [...state.users, payload] };

      case EDIT_USER:
        return {
          ...state, 
          users: state.users.map((el) => (el._id === payload._id ? payload : el)),
        };

        case DELETE_USER:
          return {...state,
             users: state.users.filter((el) => el._id !== payload),
            };
    
    default: 
        return state;
  }
};

export default reducer;