import React, { Component } from 'react'

 class CreateProjects extends Component {
    state= {
        title: "",
        content: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);    
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3"> Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title"  onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea type="text" id="content" className="materialize-textarea"  onChange={this.handleChange}></textarea>
                    </div>
                    <div  className="input-field">
                        <button className="btn red lighten-1 z-depth-0">Create </button>
                    </div>
                </form>
                
            </div>
        )
    }
}


export default CreateProjects