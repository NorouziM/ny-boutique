import React,{Component} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

class LoginRegister extends Component {
    constructor(props) {
        super(props);
        this.state = { page:"login" }
    }
    formHandle = (page) =>{
        this.setState({ page:page });
    }
    render() { 
        return  (this.state.page==="login") ?  <LoginForm formHandle={this.formHandle} />  : <RegisterForm formHandle={this.formHandle} /> ;
    }
}
 
export default LoginRegister;