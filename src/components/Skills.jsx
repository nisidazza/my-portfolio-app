import React from "react";
import "./Skills.css";

class Skills extends React.Component{
    render() {
        return(
            <div className="skills-container">
                <h1 className="title">Skills</h1>
                <h5>Front End Development</h5>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h5>Back End Development</h5>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>SQLite3 / PostgreSQL</li>
                    <li>Knex.js</li>
                    <li>REST API</li>
                </ul>

            </div>
        )
    }
}

export default Skills