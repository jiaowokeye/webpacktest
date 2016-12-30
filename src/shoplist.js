import React from "react";
import ReactDOM from "react-dom";
import "./shoplist.css"
import {Header,Content,Footer} from "./components/common1"
class Action {

}
/**
 * 
 * 
 * @class Page
 * @extends {React.Component}
 */
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state={}
        this.state={
            "classData":[],
            "shopData":[],
            "classID":0
        }
        var _this=this;
        $.getJSON("http://datainfo.duapp.com/shopdata/getclass.php",function(data){
            _this.setState({
               "classData":data
            })
        })
        this.changeData();
        Action.changeValue=(value)=>{
            console.log(value);
            this.setState({
                "classID":value
            })
            this.changeData(value);
        }
    }
    changeData(value){
        var value=value?value+1:0
        var _this=this;
        var url="http://datainfo.duapp.com/shopdata/getGoods.php?classID="+value+"&callback=?";
        console.log(url)
        $.get(url,function(data){
            _this.setState({
               "shopData":data
            })
            console.log(data);
        })
    }
    render(){
        return <div id="page" className="page">
            <Header title={this.props.title} hasback={this.props.hasback} hasRightBtn={this.props.hasRightBtn}/>
            <SubHeader classData={this.state.classData}/>
            <Content hasFooter={this.props.hasFooter} hasSubHeader={this.props.hasSubHeader} >
                <ShopWrap shopData={this.state.shopData} hasIScroll={this.props.hasIScroll}/>
            </Content>
            <Footer hasFooter={this.props.hasFooter} active={this.props.active}/>
        </div>
    }
}
class SubHeader extends React.Component{
    constructor(props){
        super(props);
       
    }
    fnClick(index){
        Action.changeValue(index);
        console.log(index);
    }
    render(){
        return <ul className="subHeader">
            {
                this.props.classData.map((ele,index)=>{
                    return <li key={index} onClick={this.fnClick.bind(this,index)}>{ele.className} </li>
                })
            }
        </ul> 
    }
}
class ShopWrap extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.hasIScroll)
        return (
            <div id="myScroll" className={this.props.hasIScroll?"shopboxscroll":"shopbox"}>
                 <ul className="shoplist">
                    {
                        this.props.shopData.map((ele,index)=><li key={index}>
                        <a href="" className="pic"><img src={ele.goodsListImg} alt="" /></a>
                        <p className="pro-name">{ele.goodsName}</p>
                        </li>)
                    }
                </ul>  
            </div>
        )
    }
    componentDidMount(){
        var myScroll=new IScroll("#myScroll")
    }

}
ReactDOM.render(
    <Page hasFooter={true}  title={"新品上市"} hasIScroll={true} hasSubHeader={true} active={1} hasRightBtn={<a>搜索</a>}/>,
    document.getElementById("root")
)
