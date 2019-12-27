import {createStore} from "redux";

//一開始拿到的資料
const data = {
  message: [
    {
      key: "1",
      name: '神Q',
      message: '嗨！大家好啊！'
    }, {
      key: "2",
      name: '小馬',
      message: '早安啊！昨天有沒有好好發文？'
    }, {
      key: "3",
      name: '王子',
      message: 'ㄛ！別說了，那真的超級累！'
    }, {
      key: "4",
      name: '神Q',
      message: '哈哈哈！加油啦！再一下就結束了！'
    }, {
      key: "5",
      name: '王子',
      message: '結束後我一定要爆睡一頓！'
    }
  ]
}

const addMessage = message => ({type: "addMessage", payload: message});

/*
將一開始拿到的資料指定給第一個參數state， state = data
第二個參數action會在執行動作時傳入當初設定的指令物件，
例如執行addNum時會將整個物件丟給action

*/
const rootReducer = (state = data, action) => {
  //用switch.type來判斷指令為何
  switch (action.type) {
    case "addMessage":
      
      action.payload.key = String(state.message.length+1);
      return { ...state, message: [...state.message, action.payload] };
    default:
      //沒有符合執行動作的條件就不做處理直接回傳
      return state
  }
}

//託付剛剛的一番辛苦完成的Reducer
const store = createStore(rootReducer);

export default store;

// window.store = store;
// window.addMessage = addMessage;

