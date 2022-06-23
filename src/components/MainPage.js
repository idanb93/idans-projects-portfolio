import Projects from './Projects';
import Cards from './Cards';
import Footer from './Footer';
import Intro from './Intro';
import AboutMe from './AboutMe';
import Boxes from './Boxes';

function MainPage() {

    return (
        <>
            <Intro />
            <AboutMe />
            <Cards />
            <Projects/>
            <Boxes/>
            <Footer />
        </>
    )
}

export default MainPage;