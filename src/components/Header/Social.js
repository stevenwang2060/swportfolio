import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faCaretSquareUp } from '@fortawesome/free-solid-svg-icons'

class Social extends React.Component{
    render(){
        return(
            <div className="links">
                <div onClick={() => {
                    window.open('https://github.com/stevenwang2060', '_blank');
                }}>
                    <FontAwesomeIcon icon={faGithubSquare} />
                </div>
                <div onClick={() => {
                    window.open('https://zeit.co/stevenwang2060', '_blank');
                }}>
                    <FontAwesomeIcon icon={faCaretSquareUp} />
                </div>
            </div>
        );
    }
}

export default Social;