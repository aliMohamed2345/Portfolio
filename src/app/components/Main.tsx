import Home from './Home'
import Separator from './Separator'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
const Main = () => {
    return (<div className="main position-relative  rounded-3 overflow-hidden">
        <Separator title="Home" id='home' />
        <Home />
        <Separator title="About Me" id='about' />
        <About />
        <Separator title="Skills" id='skills' />
        <Skills />
        <Separator title="Portfolio" id='portfolio' />
        <Portfolio />
        <Contact />
    </div>);
}

export default Main;