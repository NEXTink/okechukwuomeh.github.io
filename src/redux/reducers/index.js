import React from "react";
import {combineReducers} from "redux";
import Theme from  './themeReducer';
export default  AllReducers => combineReducers({
    ThemeBg: Theme,
})




