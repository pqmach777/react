import React, { Component } from 'react';
import AddProject from './components/AddProject';
import Projects from './components/Projects';
// import ProjectItem from './components/ProjectItem';
import uuid from 'uuid'

class App extends Component {
  constructor(prop){
    super(prop)
  }
  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Dating App',
          category: 'Front-End'
        },
        {
          id: uuid.v4(),
          title: 'School CRM',
          category: 'Full-Stack'
        },
        {
          id: uuid.v4(),
          title: 'ECommerce',
          category: 'React-Redux'
        }
      ]
    })
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({project: projects}); 
  }
  render() {
    return (
      <div >
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <AddProject addProject={this.handleAddProject.bind(this)} />
      </div>
    );
  }
}

export default App;
