import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import { reducer as Authreducer } from "./Authentication/reducer";
import { reducer as Appcontrol } from "../Redux/AppControl/reducer";
import { reducer as Coursereducer } from "./CoursesControl/reducer";
import { reducer as Cartreducer } from "./Addtocartcontrol/reducer"; 
import { reducer as jobsearchreducer} from "./JobSearchcontrol/reducer";
import thunk from "redux-thunk";


const rootreducer=combineReducers({Authreducer,Appcontrol,Coursereducer,Cartreducer,jobsearchreducer})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))