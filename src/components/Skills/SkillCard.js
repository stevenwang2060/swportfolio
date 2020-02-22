import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillCard(props){
    return(
        <div className="skill-card">
            <FontAwesomeIcon icon={props.icon}/>
            <p>{props.name}</p>
        </div>
    );
}

export default SkillCard;