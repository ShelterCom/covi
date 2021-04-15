import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function symptoms () {
  return (
    <div>
      <br />
      <h1>Common symptoms include:</h1>
      <br />
      <Container fluid>
        <Row>
          <Col sm>
            <h3>Fever</h3>
            <br />
            <iframe title='common' src='https://giphy.com/embed/l4pSWx5JvWjnOHYXu' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen />
            <br />
          </Col>
          <Col sm>
            <h3>Tiredness</h3>
            <br />
            <iframe title='tired' src='https://giphy.com/embed/LTYT5GTIiAMBa' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen />
            <br />
          </Col>
          <Col sm>
            <h3>Dry Cough</h3>
            <br />
            <iframe title='dry' src='https://giphy.com/embed/L3Qzm7hzIZrXuN1OTu' width='418' height='360' frameBorder='0' class='giphy-embed' allowFullScreen />
            <br />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container fluid>
        <h1>Other Symptoms include</h1>
        <br />
        <Row>
          <Col sm>
            <h3>Shortness of Breath</h3>
            <br />
            <iframe title='prePains' src='https://giphy.com/embed/KhK0dtcWKJ1pS' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen />
            <br />
          </Col>
          <Col sm>
            <h3>Aches and Pains</h3>
            <br />
            <iframe title='pains' src='https://giphy.com/embed/3oriO9FSHKK5dBlsWY' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen />
            <br />
          </Col>
          <Col sm>
            <h3>Sore Throat</h3>
            <br />
            <iframe title='throat' src='https://giphy.com/embed/l3V0dTVCyPDYEtxBK' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen />
            <br />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
    </div>
  )
}

export default symptoms
