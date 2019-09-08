import React  from 'react'


const ProjectSummary = ({project}) =>{
    const erdal = "posted by erdalaydin"
        return (
            <div className="project-list section">


                <div className="card z-depth-0 project summary">
                    <div className="card-content grey-text text-darken-3">
                        <span className="cart-title">{project.title}</span>
                        <p>{erdal}</p>
                        <p className="grey-text">3rd September, 2am</p>
                    </div>
                </div>


            </div>
        )
}


export default ProjectSummary