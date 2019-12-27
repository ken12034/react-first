  
import headerData from "../constants/headerData";
import { HEADER } from "../constants/header-type";


const HeaderReducer = (state = headerData, action) => {
  switch (action.type) {
    case HEADER: {
      action.payload.id = state.length + 1
      return [...state, action.payload]
    }
    default: {
      return state
    }
  }
};

export { HeaderReducer }
