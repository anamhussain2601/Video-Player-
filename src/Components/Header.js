import React,{Component} from 'react';
import '../App.css';
class Header extends Component{
    render(){
        return(
            <div className="Header">
                <div className="logo">React Starter App</div>
                <ul className = 'Header-Row'>
                    <li className="Header-Element"><a  href='#'>Salahuddin</a></li>
                    <li className="Header-Element"><a  href='#'>Salahuddin</a></li>
                    <li className="Header-Element"><a  href='#'>Salahuddin</a></li>
                    <li className="Header-Element"><a  href='#'>Salahuddin</a></li>
                </ul>
       
            </div>
        );
    }
      
;

}
export default Header;