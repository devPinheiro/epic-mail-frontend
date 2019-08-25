import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import navReducer from "./nav.reducer";
import mailReducer from "./mail.reducer";
import inboxReducer from "./inbox.reducer";
import sentReducer from "./sent.reducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  nav: navReducer,
  mail: mailReducer,
  inbox: inboxReducer,
  sent: sentReducer
});
