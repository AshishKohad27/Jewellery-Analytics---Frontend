import { combineReducers } from "@reduxjs/toolkit";
import summary from "./summary/summary.slice";
import customer from "./customer/customer.slice";

// When adding a new analytics domain (sale, inventory, user, etc.):
//   1. create ./<domain>/<domain>.action.js + ./<domain>/<domain>.slice.js
//   2. import its reducer here and add it to combineReducers below
//   3. consume via state.analytics.<domain>.*
export default combineReducers({
    summary,
    customer,
});
