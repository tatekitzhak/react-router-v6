import { createStore, combineReducers } from "redux";
import counter from "@/store/useSelector_useDispatch2/reducers/type";

/**
 * https://javarevisited.blogspot.com/2021/09/usedispatch-and-use.html#axzz7e5eV0DSF
 */

const store = createStore(counter);

export default store;



