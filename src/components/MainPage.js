import Projects from './Projects';
import Cards from './Cards';
import Footer from './Footer';
import Intro from './Intro';
import AboutMe from './AboutMe';

function MainPage() {

    return (
        <>
            <Intro />
            <AboutMe />
            <Cards />
            <Projects />
            <Footer />
        </>
    )
}

export default MainPage;