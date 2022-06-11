import "./NavBar.css";
import {
    Link,
    Element,
} from "react-scroll";
const NavBar = () => {
    return (
        <div className='NavBar'>

            <ul>
                <li>
                    <Link activeClass="active" to="welcome" spy={true} smooth={true} offset={0} duration={750} >
                        <h1>codethulu.dev</h1>
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={750} >
                        <h1>about</h1>
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={750} >
                        <h1>projects</h1>
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={750} >
                        <h1>contact</h1>
                    </Link>
                </li>
            </ul>


        </div>
    );

}
export default NavBar;