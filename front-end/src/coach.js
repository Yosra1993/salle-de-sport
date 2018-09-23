import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Mask, Fa, View, CardImage, CardTitle, CardText, Button} from 'mdbreact';

class SocialPage extends Component {
  render() {
    return(
      <Container style={{maxWidth: '80%'}}>
        <Row>
          <Col md="12">
            <div className="card-group my-5">
              <Card personal className="mb-md-0 mb-4">
                <View hover>
                  <CardImage top src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg" alt="Card image cap"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
                <CardBody>
                  <a><CardTitle>Anna</CardTitle></a>
                  <a className="card-meta">Friends</a>
                  <CardText>Anna is a web designer living in New York.</CardText>
                
                </CardBody>
              </Card>

              <Card personal className="mb-md-0 mb-4">
                <View hover>
                  <CardImage top src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" alt="Card image cap"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
                <CardBody>
                  <a><CardTitle>John</CardTitle></a>
                  <a className="card-meta">Coworker</a>
                  <CardText>John is a copywriter living in Seattle.</CardText>
                 
                </CardBody>
              </Card>

              <Card personal className="mb-md-0 mb-4">
                <View hover>
                  <CardImage top src="https://mdbootstrap.com/img/Photos/Avatars/img%20(28).jpg" alt="Card image cap"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
                <CardBody>
                  <a><CardTitle>Sara</CardTitle></a>
                  <a className="card-meta">Coworker</a>
                  <CardText>Sara is a video maker living in Tokyo.</CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SocialPage;