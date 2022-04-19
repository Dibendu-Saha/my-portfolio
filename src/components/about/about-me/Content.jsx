import { Button, Card } from "../../common/wrapper/AppComponents";

function Content() {
    return (
        <>
            <Card height="15rem" width="30rem" style="dark">
                <p>Hi, I'm Dibendu Saha.</p>
                {/* <p>But you can just call me Deb.</p> */}
            </Card>

            <Card height="15rem" width="30rem">
                Crash-landed on earth around three decades back,
                somewhere in the year 1990...
                {/* Been around on this planet for a while now.. 31 years, 11 months, 10 days to be exact! */}
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
            </div>
        </>
    )
}

export default Content;