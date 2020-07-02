import React, { Component } from 'react';
import ReactPlayer from "react-player";
import './Body.css';

class Body extends Component {
    render() {
        return (
            <div>
                <div id="background">
                </div>
                <div className="body">
                <div className="album-text">
                    <h3>Introducing the Latest EP happiness</h3>
                </div>
                <div className="soundcloud-player">
                    <ReactPlayer url="https://soundcloud.com/reffjey/sets/happiness"/>   
                </div>
                </div>
            </div>
        );
      }
    }
    
export default Body;