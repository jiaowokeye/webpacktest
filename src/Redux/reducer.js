const reducer=(state={"listData":[1,2,3,4]},active)=>{
    //active事件、行为   active.type 事件行为的类型
    switch(active.type){
        case "ADD_ITEM":
            //添加内容 需要返回一个新的state
            var newState={}
            newState.listData=state.listData.concat(["新的数据"])
            return newState;
            break;
        default:
            return state;
    }
}
export default reducer;