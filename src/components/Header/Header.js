import React from 'react';
import Nav from './Nav';
import Social from './Social';
import ProfileImage from '../../img/profileImage.PNG';
import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="profile-container">
                    <img src={ProfileImage} alt="Steven Wang"/>
                    <button id="0" onClick={this.props.onClick}>
                        <h1>Steven Wang</h1>
                    </button>
                    <h3>Full Stack Web Developer</h3>
                </div>
                <div className="mobile">
                    <Nav onClick={this.props.onClick}/>
                    <Social/>
                </div>
            </header>
        );
    }
}

export default Header;