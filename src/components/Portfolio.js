import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Portfolio() {

    return (
        <Container id="portfolio" class="content-container">
                  <div id="portfolio" class="row">
        <div class="col-lg-12 title">
          <h1>Portfolio</h1>
        </div>
      </div>
            <Row>
                <Col sm = {4}>
                    <div class="card">
                        <img src="../public/img/Dinnerandashow300.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </Col>
                <Col sm = {4}>
                    <div class="card">
                        <img src="../public/img/Dinnerandashow300.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </Col>
                <Col sm = {4}>
                    <div class="card">
                        <img src="../public/img/Dinnerandashow300.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )

}

export default Portfolio;