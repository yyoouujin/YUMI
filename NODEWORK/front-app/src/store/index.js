import { createSlice, configureStore } from '@reduxjs/toolkit';

//count Store
const counterSlice = createSlice({
  name:'counterSlice',
  initialState:{count:0},
  reducers:{
    up:(state, action)=>{
      //state.count += action.inc;
      state.count += action.payload;
    },
    down:(state, action) => {
      //state.count -= action.inc;
      state.count -= action.payload;
    }
  }
});


//login Store
const loginSlice = createSlice({
  name:"loginSlice",
  initialState:{username:"유진", email:"yyoouujin"},
  reducers : {setUsername:(state, action) => {
    state.username = action.username;
  },
  setEmail:(state, action) => {
    state.email = action.email;
  }}
});


let store = configureStore({
  reducer:{ 
    counter:counterSlice.reducer,
    login:loginSlice.reducer
   }
});

export {counterSlice, store, loginSlice};