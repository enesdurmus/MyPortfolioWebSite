import "./home.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Home() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 75,
            strings: ["Computer Engineering Student", "Developer", "Gamer"],
        });
    }, []);

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
                    <h3>
                        I'm a <span ref={textRef}></span> 
                    </h3>

                    <a href="#portfolio">
                        <img src="assets/downArrow.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
