import React,{Component} from 'react'

class Login extends Component{
    render(){
        return(
            <div>
                <label>
                    账号：<input></input>
                </label>
                <label>
                    密码：<input></input>
                </label>
            </div>
        );
    }
}
export default Login;