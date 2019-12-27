import {createStore} from "redux"
import {HeaderReducer} from "../reducers/index"

const HeaderStore = createStore(HeaderReducer)


export {HeaderStore}