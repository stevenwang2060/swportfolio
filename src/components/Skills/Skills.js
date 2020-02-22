import React, { useState } from 'react';
import skillData from '../../data/skillData';
import SkillCard from './SkillCard';
import './Skills.css'
import GitHubCalendar from 'react-github-calendar';

import { faHtml5, faCss3, faLess, faSass,
    faReact, faNodeJs, faJsSquare 
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'

function Skills(){
    const [data] = useState(skillData);
    return(
        <div className="skill">
            <h1>My Skills</h1>
            <div className="skill-container">
                <SkillCard icon={faHtml5} name={data[0].skillName}/>
                <SkillCard icon={faCss3} name={data[1].skillName}/>
                <SkillCard icon={faLess} name={data[2].skillName}/>
                <SkillCard icon={faReact} name={data[3].skillName}/>
                <SkillCard icon={faNodeJs} name={data[4].skillName}/>
                <SkillCard icon={faCode} name={data[5].skillName}/>
            </div>

            <GitHubCalendar username='stevenwang2060' />
        </div>
    );
}

export default Skills;