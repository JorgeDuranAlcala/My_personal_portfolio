import React, { createContext } from "react";
import { Link } from "react-router-dom";
import wolf from "../../assets/img/wolf.png";
import wolfBlue from "../../assets/img/wolf-blue.png";
import Toolbar from "../ToolBar/Toolbar";

export const AppContext = createContext();

const myThemes = {
  projects: {
    color: "rgba(0,0,0,0.8)",
  },
  home: {
    color: "#fff",
  },
  blog: {
    color: "rgba(0,0,0,0.8)",
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: "",
      wolfChange: false,
      themes: myThemes.home,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        this.setState({ sticky: "sticky", wolfChange: true });
      } else {
        this.setState({ sticky: "", wolfChange: false });
      }
    });
  }

  render() {
    const { sticky, wolfChange, themes } = this.state;

    return (
      <>
        <AppContext.Provider value={themes}>
          <nav className={sticky}>
            <div className="wolf-icon">
              <img src={wolfChange ? wolfBlue : wolf} alt="wolf-icon" />
            </div>
            <h3 className="logo">
              <Link className={`link`} to="/">
                Jorge Duran
              </Link>
            </h3>
            <Toolbar />
          </nav>
        </AppContext.Provider>
      </>
    );
  }
}

export default Navbar;
