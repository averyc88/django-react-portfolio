import React, { useEffect, useState } from 'react';
import { fetchEducation } from '../services/api';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';


const Education = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const getEducationData = async () => {
            try {
                const data = await fetchEducation();
                setEducation(data);
            } catch (error) {
                console.error('Failed to fetch education data:', error);
            }
        };

        getEducationData();
    }, []);

    return (
        <Container>
            <h2 className="my-4 text-start">Education</h2>
            <Row>
                {education.map((item) => (
                <Col md="6" lg="4" key={item.id} className="mb-4 d-flex align-items-stretch">
                    <Card className="w-100">
                    <CardBody>
                        <CardTitle tag="h5">{item.degree} - {item.school}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Years: {item.years}</CardSubtitle>
                        <CardText><strong>Completed:</strong> {item.completed ? 'Yes' : 'No'}</CardText>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Education;
