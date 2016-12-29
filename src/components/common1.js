import React from "react";
class Header extends React.Component{
    constructor(...args) {
        super(...args);
    }
    render(){
        return <div className="header">
            <div className="header-btn">{"<"}</div>
            <div className="header-tit">{this.props.title}</div>
            <div className="header-btn">注册</div>
        </div>
    }
}
//fooer
class Footer extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {};
    }
    render() {
        var hasFooter={"display":this.props.hasFooter?"block":"none"}
        return <ul className="footer" style={hasFooter}>
            <li>首页</li>
            <li>商品页</li>
            <li>购物车</li>
            <li>我的</li>
        </ul>
    }
}
//content
class Content extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {};
    }
    render() {
        var hasFooter={"bottom":this.props.hasFooter?"50px":0}
        return <div className="content" style={hasFooter}><LoginList/></div>
    }
}
//content内容
class LoginList extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {"show":false,"rem":true,"password":"zhaike123","userName":"18535677667"};
    }
    fnShow(){
        this.setState({
            "show":this.refs["showBtn"].checked
        })
    }
    fnRem(){
        this.setState({
            "rem":this.refs["remBtn"].checked
        })
    }
    changePass(ev){
        this.setState({
            "password":ev.target.value.replace( /[\u4e00-\u9fa5]/g,"")
        })
    }
    changeUser(ev){
        this.setState({
            "userName":ev.target.value.replace(/[\u4e00-\u9fa5]/g,"")
        })
    }
    fnLogin(){
        console.log(this.state.userName)
        console.log(this.state.password)
        $.get("http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+this.state.userName+"&password="+this.state.password,function(data){
            console.log(data);
            alert("登录成功")
        })
    }
    render() {
        return <ul className="login-list">
            <li><input type="text" className="text-bar" onChange={this.changeUser.bind(this)} placeholder="请输入用户名" value={this.state.userName}/></li>
            <li><input type={this.state.show?"text":"password"}  className="text-bar" placeholder="请输入密码" onChange={this.changePass.bind(this)} value={this.state.password}/></li>
            <li>
                <label for="">
                    <input type="checkbox"  onClick={this.fnRem.bind(this)} defaultChecked={this.state.rem} ref="remBtn"/>
                    <span>记住密码</span>
                </label>
            </li>
            <li>
                <label for="">
                    <input type="checkbox" onClick={this.fnShow.bind(this)} defaultChecked={this.state.show} ref="showBtn"/>
                    <span>显示密码</span>
                </label>
                <a href="javascript:;">忘记密码？</a>
            </li>
            <li>
                <input type="button" className="login-in" value="登录" onClick={this.fnLogin.bind(this)}/>
            </li>
            <li>
                <input type="button" className="go-reg" value="注册"/>
            </li>
        </ul>
    }
}
export {Header,Content,Footer}