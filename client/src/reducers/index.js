import { combineReducers } from "redux";
import posts from "./posts";

// export default combinedReducers({
//   posts: posts,
// });

//  OR it's the same but more lisible // considering the key and the value is
//  the same we could keep only 1 posts as well

export default combineReducers({ posts });
