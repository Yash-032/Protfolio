import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my ProtFolio</span>
                        <h1>{`Hi I'm Yash Agarwal`}<span className="wrap"></span></h1>
                        <p>
                        Passionate web developer proficient in crafting engaging web experiences with a strong foundation in Data Structures and Algorithms, adept at optimizing performance and solving complex problems efficiently.
                        </p>
                        <button onClick={()=> console.log('Connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Headder Img"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
