import React, { useEffect, useState } from "react";
import { getContentfulData } from "../../../utils/getContentfulData";
import Project from "../../Project/Project";

const classes = {
  container: {
    background: '#fff',
    display: "flex",
    height: 'auto !important',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  projectsList: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    height: "80%",
    alignItems: "center",
  },
  title: {
    marginBottom: "5vmin",
    padding: "40px 10px",
    fontSize: "2.5em",
  },
  mvmin: {
    margin: '40vmin 12vmin !important'
  }
};

const SectionThree = () => {
  const [ProjectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContentfulData("projects");

        let newState = [];
        data.map((item) => {
          let { value } = item.fields.desc.content[0].content[0];
          let { url } = item.fields.img.fields.file;
          let { title, link } = item.fields;

          let desc = value.slice(0, 110).concat("...");

          let project = { desc, title, url, link };
          newState = [...newState, { ...project }];
          return true;
        });

        setProjectData(newState);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section style={classes.container} className="sec_5">
        <h3 style={classes.title}>Most Recent Projects</h3>
        <div style={classes.projectsList}>
          {ProjectData.map((item, i) => {
            const { title, desc, url, link } = item;
            return (
              <Project
                title={title}
                desc={desc}
                link={link}
                url={url}
                key={i}
              />
            );
          })}
        </div>
        <button className="btn btn-primary my-4" style={classes.mvmin}>See All Projects</button>
      </section>
    </div>
  );
};

export default SectionThree;
