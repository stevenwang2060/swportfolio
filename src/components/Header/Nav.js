import React from 'react';

class Nav extends React.Component{
    render(){
        return(
            <nav>
                <button id="1" onClick={this.props.onClick}>Projects</button>
                <button id="2" onClick={this.props.onClick}>Skills</button>
                <button id="3" onClick={this.props.onClick}>About</button>
                <button id="4" onClick={this.props.onClick}>Contact</button>
            </nav>
        );
    }
}

export default Nav;