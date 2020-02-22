import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

class Social extends React.Component{
    render(){
        return(
            <div className="links">
                <div onClick={() => {
                    window.open('https://github.com/stevenwang2060', '_blank');
                }}>
                    <FontAwesomeIcon icon={faGithubSquare} />
                </div>
            </div>
        );
    }
}

export default Social;