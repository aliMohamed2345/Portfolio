import Home from './Home'
import Separator from './Separator'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
const Main = () => {
    return (<div className="main position-relative col-12 col-md-9 col-sm-9 rounded-3 ">
        <Separator title="Home" id='home' />
        <Home />
        <Separator title="About Me" id='about' />
        <About />
        <Separator title="Skills" id='skills' />
        <Skills />
        <Separator title="Portfolio" id='portfolio' />
        <Portfolio />
    </div>);
}

export default Main;