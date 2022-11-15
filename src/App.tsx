import React, { useState } from 'react';

import NavBar from './components/NavBar';

import { Masonry } from '@mui/lab';
import './App.css';
import {
  Link,
  Element,
} from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';

import photo from './images/profile-pic.png'
import paint from './images/paint.png'
import warwick from './images/warwick.jpg'
import mh from './images/mh.jpg'
import twitter_logo from './images/twitter_logo.svg';
import email_logo from './images/message-logo.svg';
import linkedin_logo from './images/linkedin-logo.svg';
import github_logo from './images/github-logo.svg';
import projectsList from './components/projectsList';
import current from './components/current';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import './components/projectCard.css'
import "animate.css/animate.min.css";

function App() {
  const [projects, setProjects] = useState(projectsList.filter((project: { tags: string | string[]; }) => project.tags.includes("favourites")));
  const allProjects = () => {
    setProjects(projectsList);
  }
  const filterProjects = (e: string) => {
    setProjects(projectsList.filter((project: { tags: string | string[]; }) => project.tags.includes(e)));
    if (e == "c/c++") {
      setProjects(projectsList.filter((project: { tags: string | string[]; }) => project.tags.includes("c") || project.tags.includes("c++")));
    }
  }
  const filterProjectsTitle = (e: string) => {
    setProjects(projectsList.filter((project: { name: string; description: string; }) => project.name.toUpperCase().includes(e.toUpperCase()) || project.description.toUpperCase().includes(e.toUpperCase())));
  }
  return (

    <>
      <ParallaxProvider>
        {/* <SideLinks /> */}
        <NavBar />
        <div className='welcome'>

          <h1> CODETHULU </h1>
          <h2>brendan bell is a software engineer and graphic designer</h2>

          <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={750} >
            <div className='down-button'></div>
          </Link>
        </div>
        <div className='container m-top-50 h-full'>
          <Element name="about" className="element"></Element>
          <ScrollAnimation animateIn="animate__fadeInLeft" >
            <h1>hi, my name is Brendan.</h1>
          </ScrollAnimation>
          <ParallaxBanner
            className='parallax-banner'
            layers={[
              {
                image: mh,
                speed: -10,
              },
              {
                image: paint,
                speed: -15,
              },
              {
                image: photo,
                speed: -20,
              },
            ]}
            style={{ aspectRatio: '2 / 1', marginBottom: '30px', marginTop: '30px', borderRadius: '10px' }}

          />
          <p className='m-top-50'>i'm a software engineer and graphic designer. I am currently studying Computer Science at The University of Warwick, whilst trying to find time for all of my other projects. </p>
          {/* <Split style='left' text="i'm a software engineer and graphic designer, and i love to work on projects that allow me to apply my creative approach to solving problems. currently i am enjoying working on projects for the web and mobile, and game development." image={photo}></Split> */}
          {/* <Split style='right' text="i am currently studying Computer Science at the University of Warwick, where i am publicity officer at the Computing Society and deputy chair of Warwick Labour. " image={warwick}></Split> */}

        </div>
        <div className='container m-top-50'>
          <Element name="current" className="element"></Element>
          <ScrollAnimation animateIn="animate__fadeInRight">
            <h1 className='rtl'>here are some of the exciting things i'm working on right now</h1>
          </ScrollAnimation>

          <ProjectShowcase allProjects={current} filterProjects={null} filterProjectsTitle={null} projects={current} />


        </div>
        <div className='container m-top-50'>
          <Element name="projects" className="element"></Element>
          <ScrollAnimation animateIn="animate__fadeInLeft">
            <h1>here are some things i have made:</h1>
          </ScrollAnimation>

          <ProjectShowcase allProjects={allProjects} filterProjects={filterProjects} filterProjectsTitle={filterProjectsTitle} projects={projects} />


        </div>
        <div className='container m-top-50 h-full'>
          <Element name="contact" className="element"></Element>
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
      </ParallaxProvider>
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
  name: string; year: string; description: string; tags: string[]; image: string; filterProjects: any;
}
const ProjectCard = (props: ProjectCardProps) => {
  return (

    <div className='project-card'>


      <div className={'image image-' + props.image}></div>
      <h1> {props.name} </h1>
      <h2> {"[ " + props.year + " ]"} </h2>
      <p> {props.description}</p>
      <div className='center'>
        {props.tags.map((e) => {
          return (
            <Tag name={e} filterProjects={props.filterProjects} />
          );
        })}
      </div>

    </div >
  )
}

const ProjectShowcase = (props: { allProjects: any; filterProjects: any; filterProjectsTitle: any; projects: any }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <>
      {/* <Element name="projects" className="element"></Element> */}
      {/* //if filterProjects not null */}
      {props.filterProjects != null ?
        <>
          <div className='divider'></div>

          <div className='center m-top-50'>
            <Tag name='favourites' filterProjects={props.filterProjects} />
            <Tag name='rust' filterProjects={props.filterProjects} />
            <Tag name='c/c++' filterProjects={props.filterProjects} />
            <Tag name='python' filterProjects={props.filterProjects} />
            <Tag name='java' filterProjects={props.filterProjects} />
            <Tag name='haskell' filterProjects={props.filterProjects} />
            <Tag name='games' filterProjects={props.filterProjects} />
            <Tag name='web-dev' filterProjects={props.filterProjects} />
            <Tag name='all' filterProjects={props.allProjects} />
          </div>
        </>
        : <></>}

      <div className='inner-container h-auto m-top-50'>
        <Masonry
          columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
          spacing={2}
          defaultHeight={50}
          defaultColumns={3}
          defaultSpacing={2}
        >
          {props.projects.map((e: { name: string; year: string; titleCard: boolean; description: string; tags: string[]; image: string; showcase: boolean; }) => {
            return (
              <ProjectCard name={e.name} year={e.year} description={e.description} tags={e.tags} image={e.image} filterProjects={props.filterProjects} />
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

interface TagProps {
  name: string; filterProjects: any;
}
const Tag = (props: TagProps) => {
  let colour: string;
  if (props.name === "java" || props.name === "javascript") {
    colour = 'orange'
  } else if (props.name === "haskell") {
    colour = 'purple'
  } else if (props.name === "rust") {
    colour = 'rust'
  } else if (props.name === "c") {
    colour = 'green'
  } else if (props.name === "c++") {
    colour = 'leonard'
  } else if (props.name === "c/c++") {
    colour = 'cppc'
  } else if (props.name === "php" || props.name === "web-dev" || props.name === "javacc") {
    colour = 'grass'
  } else if (props.name === "games") {
    colour = 'rose'
  } else if (props.name === "ai") {
    colour = 'pink'
  } else if (props.name === "sql") {
    colour = 'red'
  } else if (props.name === "postgresql" || props.name === "pathfinding" || props.name === "functional") {
    colour = 'cobalt'
  } else if (props.name === "html" || props.name === "swift" || props.name === "favourites") {
    colour = 'fire'
  } else if (props.name === "css") {
    colour = 'blue'
  } else if (props.name === "typescript" || props.name === "react") {
    colour = 'ocean'
  } else if (props.name === "python") {
    colour = 'snake'
  } else {
    colour = "";
  }

  return (
    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={750} >
      <button className={"tag " + colour} onClick={() => props.filterProjects(props.name)}>{props.name}</button>
    </Link>

  );
}