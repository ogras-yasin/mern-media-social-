export default (posts = [], action) => {
  // reudcer us a function it accept a state and a type
  // if(action.type === "CREATE"){
  //     return
  // }
  switch (action.type) {
    case "FETCH_ALL":
      return posts;
      break;
    case "CREATE":
      return posts;
      break;

    default:
      return posts;
      break;
  }
};

// the state should always be equal to something thats why we specifying this empty array

// STATE The first parameter is a STATE and the second is a TYPE
// const reducer =  (state, action) => {
//     // reudcer us a function it accept a state and a type
//     // if(action.type === "CREATE"){
//     //     return
//     // }
//     switch (action.type) {
//       case "FETCH_ALL":
//         return state;
//         break;
//       case "CREATE":
//         return state;
//         break;

//       default:
//         break;
//     }
//   };
