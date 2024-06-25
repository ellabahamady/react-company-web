import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import image1 from '../../assets/pricing1.svg';
import image2 from '../../assets/pricing2.svg';
import image3 from '../../assets/pricing3.svg';

function Pricing() {
    return (
        <>
        <Container>
            <Row>
                <Col md={4} sm={12}>
                    <Card>
                        <Card.Img variant="top" src={ image1 } className="pricing-image" />
                        <Card.Body>
                            <Card.Title>Basic</Card.Title>
                            <ListGroup>
                                <ListGroup.Item>Mencatat barang masuk</ListGroup.Item>
                                <ListGroup.Item>Mencatat barang keluar</ListGroup.Item>
                                <ListGroup.Item>Mencatat Keuntungan</ListGroup.Item>
                                <ListGroup.Item className="pricing-description-no">Dapat menganalisa hasil penjualan dengan CHART</ListGroup.Item>
                                <ListGroup.Item className="pricing-description-no">Support 7x24 Jam</ListGroup.Item>
                                <ListGroup.Item className="pricing-description-no">Export data ke Excel</ListGroup.Item>
                                <ListGroup.Item className="pricing-description-no">AI Prediksi penghasilan</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={12}>
                    <Card>
                        <Card.Img variant="top" src={ image2 } className="pricing-image" />
                        <Card.Body>
                            <Card.Title>Business</Card.Title>
                            <ListGroup>
                            <ListGroup.Item>Mencatat barang masuk</ListGroup.Item>
                                <ListGroup.Item>Mencatat barang keluar</ListGroup.Item>
                                <ListGroup.Item>Mencatat Keuntungan</ListGroup.Item>
                                <ListGroup.Item>Dapat menganalisa hasil penjualan dengan CHART</ListGroup.Item>
                                <ListGroup.Item>Support 7x24 Jam</ListGroup.Item>
                                <ListGroup.Item className="pricing-description-no">Export data ke Excel</ListGroup.Item>
                                <ListGroup.Item className="pricing-description-no">AI Prediksi penghasilan</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={12}>
                    <Card>
                        <Card.Img variant="top" src={ image3 } className="pricing-image" />
                        <Card.Body>
                            <Card.Title>Entrepreneur </Card.Title>
                            <ListGroup>
                                <ListGroup.Item>Mencatat barang masuk</ListGroup.Item>
                                <ListGroup.Item>Mencatat barang keluar</ListGroup.Item>
                                <ListGroup.Item>Mencatat Keuntungan</ListGroup.Item>
                                <ListGroup.Item>Dapat menganalisa hasil penjualan dengan CHART</ListGroup.Item>
                                <ListGroup.Item>Support 7x24 Jam</ListGroup.Item>
                                <ListGroup.Item>Export data ke Excel</ListGroup.Item>
                                <ListGroup.Item>AI Prediksi penghasilan</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Pricing;