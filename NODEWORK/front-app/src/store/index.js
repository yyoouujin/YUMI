import { createSlice, configureStore } from '@reduxjs/toolkit';

//count reduce
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


//login reduce
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


//store 내 reduce 등록!(reducer 내 지정된 이름으로 바로 사용가능)
let store = configureStore({
  reducer:{ 
    counter:counterSlice.reducer,
    login:loginSlice.reducer
   }
});

export {counterSlice, store, loginSlice};


/*
redux를 여러개 사용하기 위함 redux-toolkit

*/
