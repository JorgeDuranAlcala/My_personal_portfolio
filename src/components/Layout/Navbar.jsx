import React from "react";
import { Link } from "react-router-dom";
import wolf from "../../assets/img/wolf.png";
import wolfBlue from "../../assets/img/wolf-blue.png";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            sticky: '',
            wolfChange: false,
         }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 60) {
                this.setState({ sticky: 'sticky', wolfChange: true })
            } else {
                this.setState({ sticky: '', wolfChange: false })
            }
        })
    }
    
    render() { 

        const { sticky, wolfChange } = this.state
        
        return (
            <>
                <nav className={sticky}>
                    <div className="wolf-icon">
                        <img src={wolfChange ? wolfBlue : wolf} alt="wolf-icon"/>
                    </div>
                    <h3 className="logo">Jorge Duran</h3>
                    <ul>
                        <li>
                            <Link className="link" to="/">Blog</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">My Projects</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">About Me</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}
 
export default Navbar;