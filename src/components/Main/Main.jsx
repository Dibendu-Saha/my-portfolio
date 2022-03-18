import About from "../About/About";
import Header from "../Header/Header";
import Home from "../Home/Home";
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