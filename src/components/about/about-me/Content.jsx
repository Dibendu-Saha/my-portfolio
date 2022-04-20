import { Button, Card } from "../../common/wrapper/AppComponents";

function Content() {
    return (
        <>
            <>
                {/* <Card height="15rem" width="30rem" style="dark">
                <p>Hi, I'm Dibendu Saha.</p>
            </Card>

            <Card height="15rem" width="30rem">
                Crash-landed on earth around three decades back,
                somewhere in the year 1990...
            </Card>

            <Card height="15rem" width="30rem" style="dark">
                ...and the crash site? Far in North-east India, in the state of Assam!
            </Card>

            <Card height="15rem" width="30rem">
                I love to Sketch. Capture shots. Ride.
                Oh and yes. Cook. Big Fan of Jamie Oliver (alright. alright. Gordon Ramsay too!)
            </Card>

            <Card height="15rem" width="30rem" style="dark">
                Graduated with a Bachelor's degree in
                Electronics &amp; Communication, yet landed up in IT
                (it's still a good thing).
            </Card>

            <div className="btn-wrapper">
                <Card height="15rem" width="30rem">
                    <Button
                        title="Know about my professional experience..."
                        type="none"
                        link="/work"
                    />
                </Card>
            </div> */}
            </>

            <p>Hi, I'm <span className="highlight">Dibendu Saha</span>. I hail from northeast India and currently based in Bangalore.</p>

            <p>
                I design web user interfaces and hook them up with backend API's to build complete data-driven solutions
                for end-clients. I've worked with organizations like <span className="highlight">Wells Fargo</span> and
                had offers from the likes of <span className="highlight">EY, Danske Bank</span> and <span className="highlight">Siemens</span>.
                Currently I'm a Technical Consultant at <span className="highlight">Hewlett Packard Enterprise</span>.
            </p>

            <p>
                I've earned quite a few recognitions for my work and the successful release cycles. I also hold a certification
                in Azure Fundamentals from Microsoft.
            </p>

            <p>
                I speak four languages &#8212; English, Hindi, Assamese and my native-tongue &#8212; Bengali.
                Enjoy cooking to make wholesome foods for my loved ones. You would find my YouTube history littered in recipe videos
                from many food vloggers. I'm also into biking and occasionally nowhere to be found on weekends. I'm part of a professional
                rider's groups. So, both solo trips and group rides.
            </p>
        </>
    )
}

export default Content;