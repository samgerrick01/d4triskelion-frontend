import { combineReducers } from "redux";

import members from "./member";
import auth from "./auth";

export const reducers = combineReducers({ members, auth });
