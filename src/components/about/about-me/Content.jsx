import { Button, Card, Highlight } from "../../common/wrapper/AppComponents";

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

            <p>
                Hi, I'm <Highlight>Dibendu Saha</Highlight>. I hail from the northeast Indian state of Assam and currently
                based in Bangalore.
            </p>

            <p>
                I design web user interfaces and hook them up with backend API's to build complete data-driven solutions
                for end-clients. I've worked with organizations like <Highlight>Wells Fargo</Highlight> and had offers from
                the likes of <Highlight>EY, Danske Bank</Highlight> and <Highlight>Siemens</Highlight>. Currently I'm a
                Technical Consultant at <Highlight>Hewlett Packard Enterprise</Highlight>.
            </p>

            <p>
                I've earned quite a few recognitions for my work and the successful release cycles. I also hold a certification
                in <a href="https://www.credly.com/badges/3c6991e8-43ec-4dc5-8006-d19ec9a456e6" target="_blank">Azure Fundamentals</a> from
                Microsoft.
            </p>

            <p>
                I'm well-versed in four languages &#8212; English, Hindi, Assamese and Bengali &#8212; my native-tongue.
                Enjoy cooking to make wholesome foods for my loved ones. I'm also into biking and occasionally nowhere to be found on weekends.
                I'm part of a professional rider's groups. So, both solo trips and group rides.
            </p>
        </>
    )
}

export default Content;