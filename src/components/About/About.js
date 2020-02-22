import React from 'react';
import './About.css';

class About extends React.Component{
    render(){
        return(
            <div className="about">
                <h1>About Me</h1>
                <div className="text">
                    <p>
                    I lived throughout most of my life on the computer ever since I was a kid. There were goals I've had during my previous time in which were unrelated to computer science. However, I realized that they were uninteresting to me and they only have the money factor remaining as a positive in my eyes. From now on, I've dedicated my life towards my computer and want to have a career that revolves around using one. I hope to succeed along with my peers in the future as full stack web developers.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;