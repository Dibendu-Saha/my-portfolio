import About from "../about/About";
import Header from "../header/Header";
import Home from "../home/Home";
import "./Main.css"

function Main() {
    return (
        <>
            <Header />

            <main>
                <Home />
                <About />
            </main>
        </>
    );
}

export default Main;