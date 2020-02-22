import React from 'react';
import styled from 'styled-components'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const ProjectButton = styled.button`
    font-family: 'Cambay', sans-serif;
    font-size: 1.5rem;
    background-color: dodgerblue;
    color: white;
    border: none;
    border-radius: 10px;
    outline: none !important;
    width: 130px;
    padding: 10px;
    padding-top: 15px;
    margin: 0 10px;
`;

function ProjectCard(props){
    return(
        <Card>
            <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>{props.stack}</CardSubtitle>
            <CardText>{props.desc}</CardText>
            <CardText>My Roles:</CardText>
            <ul>
                <li>{props.roles[0]}</li>
                <li>{props.roles[1]}</li>
            </ul>
            <div className="button-container">
                <ProjectButton onClick={() => {
                    window.open(props.projectURL, '_blank');
                }}>View Project</ProjectButton>
                <ProjectButton onClick={() => {
                    window.open(props.gitHubURL, '_blank');
                }}>View Code</ProjectButton>
            </div>
            </CardBody>
        </Card>
    );
}

export default ProjectCard;