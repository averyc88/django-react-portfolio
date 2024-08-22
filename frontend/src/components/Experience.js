import React, { useEffect, useState } from 'react';
import { fetchExperience } from '../services/api';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const Experience = () => {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        const getExperienceData = async () => {
            try {
                const data = await fetchExperience();
                setExperience(data);
            } catch (error) {
                console.error('Failed to fetch experience data:', error);
            }
        };

        getExperienceData();
    }, []);

    return (
        <Container>
            <h2 className="my-4 text-start">Experience</h2>
            <Row>
                {experience.map((item) => (
                <Col md="6" lg="4" key={item.id} className="mb-4 d-flex align-items-stretch">
                    <Card className="w-100">
                    <CardBody>
                        <CardTitle tag="h5">{item.title} - {item.company}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Years: {item.years}</CardSubtitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Experience;
