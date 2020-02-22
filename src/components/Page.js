import React from 'react';
import Intro from './Intro/Intro';
import Project from './Project/Project';
import Skills from './Skills/Skills';
import About from './About/About';
import Contact from './Contact/Contact';

function Page(props){
    switch(props.currentPage){
        case 0:
            return <Intro/>;
        case 1:
            return <Project/>;
        case 2:
            return <Skills/>;
        case 3:
            return <About/>;
        case 4:
            return <Contact/>;
        default: 
            return <Intro/>;
    }
}

export default Page;