import React from "react";
import ReactDOM from "react-dom";
import "./test.css"
import {Header,Content,Footer} from "./components/common1"
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return <div id="page" className="page">
            <Header title={this.props.title}/>
            <Content hasFooter={this.props.hasFooter}/>
            <Footer hasFooter={this.props.hasFooter}/>
        </div>
    }
}
ReactDOM.render(
    <Page hasFooter={false} title={"登录"}/>,
    document.getElementById("root")
)