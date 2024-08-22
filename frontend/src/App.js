import React from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
        <div className="App">
            <Card className="text-center mb-5 py-5 bg-light border-0">
                <CardBody>
                <CardTitle tag="h1" className="display-3 font-weight-bold mb-3">
                    Avery Chen
                </CardTitle>
                <CardText className="custom-sub-card-text">
                    Software Engineer
                </CardText>
                </CardBody>
            </Card>
            
            <main>
                <Education />
                <Experience />
            </main>
        </div>
    );
}

export default App;
