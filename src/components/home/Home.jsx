import "./home.scss"

export default function Home() {
    return (
        <div className="home" id="home">

            <div className="left">
                <div className="imgContainer">
                    <img src="assets/foti1.jpeg" alt="" />
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Enes Durmus</h1>
                    <h3>Computer Engineering Student</h3>

                    <a href="#portfolio">
                        <img src="assets/indir (1).png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
