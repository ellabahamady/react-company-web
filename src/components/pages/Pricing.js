import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Pricing() {
    return (
        <>
        <Container>
            <Row id="pricing">
                <Col md={12} sm={12} className="pricing-title">
                    <h2>Packages</h2>
                </Col>
                <Col md={4} sm={12} className="pricing-item">
                    <Card>
                        <Card.Body>
                            <Card.Title>Basic - Rp 1.000.000</Card.Title>
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
                <Col md={4} sm={12} className="pricing-item">
                    <Card>
                        <Card.Body>
                            <Card.Title>Business - Rp 2.000.000</Card.Title>
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
                <Col md={4} sm={12} className="pricing-item">
                    <Card>
                        <Card.Body>
                            <Card.Title>Entrepreneur - Rp 3.000.000 </Card.Title>
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