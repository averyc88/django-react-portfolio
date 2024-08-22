import React, { useEffect, useState } from 'react';
import { fetchEducation } from '../services/api';

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
        <div>
            <h2>Education</h2>
            <ul>
                {education.map((item) => (
                    <li key={item.id} style={{ marginBottom: '20px' }}>
                        <h3>{item.degree} - {item.school}</h3>
                        <p><strong>Years:</strong> {item.years}</p>
                        <p><strong>Completed:</strong> {item.completed ? 'Yes' : 'No'}</p>
                        <p><strong>Description:</strong> {item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;
