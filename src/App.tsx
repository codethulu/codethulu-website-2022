import React, { useState } from 'react';
import { Masonry } from '@mui/lab';
import './App.css';
import {
  Link,
  Element,
} from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';

import logo from './images/logo.svg';
import photo from './images/profile-pic.jpg'
import warwick from './images/warwick.jpg'
import twitter_logo from './images/twitter_logo.svg';
import email_logo from './images/message-logo.svg';
import linkedin_logo from './images/linkedin-logo.svg';
import github_logo from './images/github-logo.svg';

import projectsList from './components/projectsList';
import './components/projectCard.css'
import "animate.css/animate.min.css";

function App() {
  const [projects, setProjects] = useState(projectsList.filter((project: { tags: string | string[]; }) => project.tags.includes("favourites")));
  const allProjects = () => {
    setProjects(projectsList);
  }
  const filterProjects = (e: string) => {
    setProjects(projectsList.filter((project: { tags: string | string[]; }) => project.tags.includes(e)));
  }
  const filterProjectsTitle = (e: string) => {
    setProjects(projectsList.filter((project: { name: string; description: string; }) => project.name.toUpperCase().includes(e.toUpperCase()) || project.description.toUpperCase().includes(e.toUpperCase())));
  }
  return (
    <>
      <SideLinks />
      <div className='welcome'>

        <h1> CODETHULU </h1>
        <h2>brendan bell is a software engineer and graphic designer</h2>

        <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={750} >
          <div className='down-button'></div>
        </Link>
      </div>
      <div className='container m-top-50'>
        <Element name="about" className="element"></Element>
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <h1>hi, my name is Brendan.</h1>
        </ScrollAnimation>
        <Split style='left' text="i'm a software engineer and graphic designer, and i love to work on projects that allow me to apply my creative approach to solving problems. currently i am enjoying working on projects for the web and mobile, and game development." image={photo}></Split>
        <Split style='right' text="i am currently studying Computer Science at the University of Warwick, where i am publicity officer at the Computing Society and deputy chair of Warwick Labour. " image={warwick}></Split>

      </div>
      <div className='container m-top-50'>
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <h1>here are some things i have made:</h1>
        </ScrollAnimation>

        <ProjectShowcase allProjects={allProjects} filterProjects={filterProjects} filterProjectsTitle={filterProjectsTitle} projects={projects} />


      </div>
      <div className='container m-top-50 h-full'>
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <h1>get in touch!</h1>
        </ScrollAnimation>
        <p className='m-top-50'>interested in working with me, or even just want to talk about any of my work? please don't hesitate to get in contact!</p>
        <div className='center'>
          <div className='m-top-50'></div>
          <a href='mailto: brendan@codethulu.dev'><button className='contact-button m-top-20'><img src={email_logo} className='contact-logo'></img>  Email</button></a>
          <a href='https://github.com/codethulu'><button className='contact-button m-top-20'><img src={github_logo} className='contact-logo'></img>  Github</button></a>
          <a href='https://twitter.com/Codethulu_'><button className='contact-button m-top-20'><img src={twitter_logo} className='contact-logo'></img>  Twitter</button></a>
          <a href='https://www.linkedin.com/in/brendan-bell-34b282202/'><button className='contact-button m-top-20'><img src={linkedin_logo} className='contact-logo'></img>  LinkedIn</button></a>

        </div>

      </div>
    </>
  );
}
export default App;

interface SplitProps {
  style: string;
  text: string;
  image: any;
}


const Split = (props: SplitProps) => {
  switch (props.style) {
    case 'left':
      return (
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <div className='split-box m-top-10vh'>
            <img src={props.image} className='split-pic greyscale'></img>
            <div className='inline m-left-20'>
              <p>{props.text}</p>
            </div>
          </div>
        </ScrollAnimation >
      );
    case 'right':
      return (
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <div className='split-box right-0 m-top-100 align-right'>
            <div className='inline'>
              <p>{props.text}</p>
            </div>
            <img src={props.image} className='split-pic m-left-20 greyscale'></img>

          </div>
        </ScrollAnimation>
      );
  }
  return (<></>);

}

interface ProjectCardProps {
  name: string; description: string; tags: string[]; image: string; filterProjects: any;
}
const ProjectCard = (props: ProjectCardProps) => {
  return (

    <div className='project-card'>


      <div className={'image image-' + props.image}></div>
      <h1> {props.name} </h1>
      <p> {props.description}</p>
      <div className='center'>
        {props.tags.map((e) => {
          let tagStyle = 'tag'
          if (e === "java" || e === "javascript") {
            tagStyle += ' orange'
          } else if (e === "haskell") {
            tagStyle += ' purple'
          } else if (e === "c") {
            tagStyle += ' green'
          } else if (e === "postgresql") {
            tagStyle += ' cobalt'
          } else if (e === "html" || e === "swift" || e === "favourites") {
            tagStyle += ' fire'
          } else if (e === "css" || e === "typescript") {
            tagStyle += ' ocean'
          } else if (e === "python") {
            tagStyle += ' snake'
          }
          return (
            <button className={tagStyle} onClick={() => props.filterProjects(e)}>{e}</button>
          );
        })}
      </div>

    </div >
  )
}

const ProjectShowcase = (props: { allProjects: any; filterProjects: any; filterProjectsTitle: any; projects: any }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(e.target.value)
    props.filterProjectsTitle(searchTerm)
  }
  return (
    <>
      {/* <Element name="projects" className="element"></Element> */}
      <div className='divider'></div>

      <div className='center m-top-50'>
        <button className="tag fire" onClick={() => props.filterProjects("favourites")}>FAVOURITES</button>
        <button className="tag snake" onClick={() => props.filterProjects("python")}>PYTHON</button>
        <button className="tag orange" onClick={() => props.filterProjects("java")}>JAVA</button>
        <button className="tag purple" onClick={() => props.filterProjects("haskell")}>HASKELL</button>
        <button className="tag" onClick={() => props.filterProjects("web-dev")}>WEB-DEV</button>
        <button className="tag" onClick={() => props.allProjects()}>ALL</button>

        {/* <input type="text" className='searchBar' placeholder='Search' value={searchTerm} onChange={handleSearchChange}></input>
        <div className='divider'></div> */}
      </div>

      <div className='inner-container h-auto m-top-50'>
        <Masonry
          columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
          spacing={2}
          defaultHeight={50}
          defaultColumns={3}
          defaultSpacing={2}
        >
          {props.projects.map((e: { name: string; titleCard: boolean; description: string; tags: string[]; image: string; showcase: boolean; }) => {
            return (
              <ProjectCard name={e.name} description={e.description} tags={e.tags} image={e.image} filterProjects={props.filterProjects} />
            );
          })}
        </Masonry>
      </div>


    </>
  );
}
const SideLinks = () => {
  return (
    <div>
      <div className='side-container left-side'>
        <a href='https://github.com/codethulu'><div className='link-logo github'></div></a>
        <a href='https://twitter.com/Codethulu_'><div className='link-logo twitter'></div></a>
        <a href='https://www.linkedin.com/in/brendan-bell-34b282202/'><div className='link-logo linkedin'></div></a>

        <div className='line'></div>
      </div>
      <div className='side-container right-side'>
        <p><a href='mailto: brendan@codethulu.dev'>brendan@codethulu.dev</a></p>
        <div className='line'></div>
      </div>
    </div>
  );
}