import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem'

class Projects extends React.Component {
    constructor(props) {
        super(props);
        
    }
    deleteProject(id){
        this.props.onDelete(id);
    }
    render() {
        let projectItems;
        //test to see if there are any projects
        
        if(this.props.projects){
            projectItems = this.props.projects.map(project => {
                return(
                    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
                )
            })
        }
        return (
            <div>Projects
                {projectItems}
            </div> 
        );
    }
}


Projects.propTypes = {
    
};

export default Projects
