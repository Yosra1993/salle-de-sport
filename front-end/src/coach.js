import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Mask, Fa, View, CardImage, CardTitle, CardText, Button} from 'mdbreact';

class SocialPage extends Component {
  render() {
    return(
      <Container style={{maxWidth: '80%'}}>
            <h2 className="h1-responsive font-weight-bold my-5 text-center">Coachs</h2>

        <Row>
          <Col md="12">
            <div className="card-group my-5">
              <Card personal className="mb-md-0 mb-4">
                <View hover>
                  <CardImage top src="https://trainme.co/img/profile/be3087e74e9100d4bc4c6268cdbe8456.jpg" alt="Card image cap"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
                <CardBody>
                  <a><CardTitle>NICOLAS</CardTitle></a>
                  <a className="card-meta">Musculation Coach</a>
                  <CardText>NICOLAS living in New York.</CardText>
                
                </CardBody>
              </Card>

              <Card personal className="mb-md-0 mb-4">
                <View hover>
                  <CardImage top src="https://s3-media2.fl.yelpcdn.com/bphoto/rs6CzhjLth8tQTzxtpV_gQ/ls.jpg" alt="Card image cap"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
                <CardBody>
                  <a><CardTitle>Elena Ishbulatova</CardTitle></a>
                  <a className="card-meta">Fitness Coach</a>
                  <CardText>Elena living in San Francisco.</CardText>
                 
                </CardBody>
              </Card>

              <Card personal className="mb-md-0 mb-4">
                <View hover>
                  <CardImage top src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReIMtQFqFLzBaOdeD7rU0Hg68tBktAzvIi5K_0no0WZftHduZv" alt="Card image cap"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
                <CardBody>
                  <a><CardTitle>Sara</CardTitle></a>
                  <a className="card-meta">Boxing Coach</a>
                  <CardText>Sara living in Tokyo.</CardText>
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