import React ,{Component} from "react"
import ReactDOM from "react-dom"
import "./redux.css"
import store from "./store"
console.log(store.getState())
class ListWrap extends React.Component{
    constructor(props){
      super(props);
      this.state=store.getState()
    }
    componentWillMount(){
      
      store.subscribe(()=>{
        console.log("监听最新更新")
        this.setState(store.getState())
      })
    }
    render(){
      return <div className="list-wrap">
          <List listData={this.state.listData}/>
          <Btn/>
      </div>  
    }
}
class Btn extends React.Component{
  constructor(props){
    super(props)
  }
  fnClick(){
    var Action={
      type:"ADD_ITEM"
    }
    console.log("触发Action")
    store.dispatch(Action)
  }
  componentWillMount(){
    store.subscribe(function(){
      console.log(store.getState())
    })
  }
  render(){
    return <div>
        <button onClick={()=>this.fnClick()}>添加内容</button>
    </div>
  }
}
class List extends React.Component{
  constructor(props){
    super(props)
    
  }
  render(){
    return  (
      <ul>
          {
            this.props.listData.map((ele,index)=><li key={index}>{ele}</li>)
          }
      </ul>
    )
    
  }
}
ReactDOM.render(
    <ListWrap/>,document.getElementById("root")
)