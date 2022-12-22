import"../stylesheets/home.css"
import handleSet from '../images/handleset.jpg'
import {Row, Col, Container} from 'react-bootstrap'
export default function Home(){
    
    return(

        <Container>
            <Row>
                <Col sm={8}>
                    <h1> American Made Products for Everything Armwrestling</h1>

                    <h2> EST. 2021</h2>
                </Col>
                <Col sm={4}>
                    <img src={handleSet} alt="HandleSet" width="100%" height="auto"/>
                </Col>
            </Row>
        </Container>
    )
}