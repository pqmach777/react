import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid'

class AddProject extends React.Component {
    constructor(props) {
        super(props);
        this.state ={newProject: {}}
    }
    static defaultProps = {
        categories: ['Front-End', 'Full-Stack', 'React-Redux']
    }
    handleSubmit(e){
        if(this.refs.title.value === ''){
            alert('title is required');
        }
        else{
            this.setState({newProject: {
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, ()=>{
                this.props.addProject(this.state.newProject);
            })
        }
        e.preventDefault();
    }
    
    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        })        
        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    <div>
                        <label>Title</label><br />
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>Category</label><br />
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <button>Submit</button>
                </form>
            </div> 
        );
    }
}


AddProject.propTypes = {
    
};

export default AddProject
