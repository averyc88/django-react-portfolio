import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';  // Replace with your Django server's URL

// Fetch Education data
export const fetchEducation = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/educations/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching education data:', error);
        throw error;
    }
};

// Fetch Experience data
export const fetchExperience = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/experiences/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching experience data:', error);
        throw error;
    }
};
