import Menu from '../Menu';
import {Component} from "react";
import React from "react";
import theater from "../../images/theater.jpg";
import '../../styles/HomePage.css';

class App extends Component {

    render() {
        return (
            <div className="HomePage">
                <Menu/>
                <div className="text">
                    <h3>Theater</h3>
                    <img src={theater} alt={"logo"} className='circus'/>
                    <p>Theatre or theater is a collaborative form of performing art that uses live performers, typically actors or actresses, to present the experience of a real or imagined event before a live audience in a specific place, often a stage.
                        The performers may communicate this experience to the audience through combinations of gesture, speech, song, music, and dance.
                        Elements of art, such as painted scenery and stagecraft such as lighting are used to enhance the physicality, presence and immediacy of the experience.
                        The specific place of the performance is also named by the word "theatre" as derived from the Ancient Greek θέατρον (théatron, "a place for viewing"), itself from θεάομαι (theáomai, "to see", "to watch", "to observe").
                        Modern Western theatre comes, in large measure, from the theatre of ancient Greece, from which it borrows technical terminology, classification into genres, and many of its themes, stock characters, and plot elements.
                        Theatre artist Patrice Pavis defines theatricality, theatrical language, stage writing and the specificity of theatre as synonymous expressions that differentiate theatre from the other performing arts, literature and the arts in general.
                        Modern theatre includes performances of plays and musical theatre.
                        The art forms of ballet and opera are also theatre and use many conventions such as acting, costumes and staging.
                        They were influential to the development of musical theatre; see those articles for more information.</p>
                </div>
            </div>
        );
    }
}

export default App;
