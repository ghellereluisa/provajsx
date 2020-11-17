import React from 'react';
import '../components/navbar.css'
import Logo from '../images/logo2.png'

class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar">         
                <ul>
                    <li><img src={Logo} alt="Logo Financ"></img></li>
                    <li>{this.props.btn1}</li>
                    <li>{this.props.btn2}</li>
                    <li className="borda">{this.props.btn3}</li>
                    <li className="borda">{this.props.btn4}</li>
                </ul>                
            </div>
        );
    }
}

export default NavBar;