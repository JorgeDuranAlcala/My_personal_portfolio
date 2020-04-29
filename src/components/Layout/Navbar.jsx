import React, { createContext } from "react";
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
      themes: myThemes.home,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60 ) {
        this.setState({ sticky: "sticky" });
      } else {
        this.setState({ sticky: "" });
      }
    });
  }

  render() {
    const { sticky, themes } = this.state;

    return (
      <>
        <AppContext.Provider value={themes}>
          <nav className={sticky}>
            <Toolbar />
          </nav>
        </AppContext.Provider>
      </>
    );
  }
}

export default Navbar;
