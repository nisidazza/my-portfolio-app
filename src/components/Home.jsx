import React from 'react';
import "./Home.css"
import nl2br from 'react-newline-to-break'; 

class Home extends React.Component {
    render(){
        let introText = "Hi, \nI'm Nisida,\nWeb Developer."
        return (
            <div className="home-container">
                <div className="intro-text">
                    {nl2br(introText)}
                </div>
            </div>
        )
    }
}

export default Home;