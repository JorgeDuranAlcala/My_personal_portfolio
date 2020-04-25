import React, { useEffect, useState } from "react";
import { getContentfulData } from "../../../utils/getContentfulData";
import Project from "../../Project/Project";

const classes = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    padding: '20mvin 0vmin'
},
myProjects_list: {
    width: '100%',
    height: '80%',
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: '12vmin'
  }
};

const AllProjects = () => {
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
    <>
      <div style={classes.container} className="my_projects">
        <h1>All My Projects</h1>
        <div style={classes.myProjects_list}>
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
      </div>
      <div style={classes.container}>
        <h1>All My Projects</h1>
      </div>
    </>
  );
};

export default AllProjects;
