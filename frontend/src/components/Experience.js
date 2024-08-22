import React, { useEffect, useState } from 'react';
import { fetchExperience } from '../services/api';

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
        <div>
            <h2>Experience</h2>
            <ul>
                {experience.map((item) => (
                    <li key={item.id} style={{ marginBottom: '20px' }}>
                        <h3>{item.title} - {item.company}</h3>
                        <p><strong>Years:</strong> {item.years}</p>
                        <p><strong>Description:</strong> {item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;
