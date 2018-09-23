import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="light"  light expand="md" className="page-footer font-small lighten-5 pt-0">
                <div style={{backgroundColor: '#A9A9A9' ,marginTop:'8%'}}>
                    <Container fluid={true}>
                        <Row className="py-4 d-flex align-items-center">
                            <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
                            </Col>
                            <Col md="6" lg="7" className="text-center text-md-right">
                            <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></a></li>
                    </ul>
                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
               
            </Footer>
        );
    }
}

export default FooterPage;