import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        experience: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/generate-cv', formData, {
                responseType: 'blob',
            });
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `CV_${formData.name}.pdf`;
            link.click();
        } catch (error) {
            console.error('Error generating CV:', error);
        }
    };

    return (
        <div style={{ margin: '20px' }}>
            <h1>Generador de Currículums</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Experiencia: </label>
                    <textarea name="experience" value={formData.experience} onChange={handleChange} required />
                </div>
                <button type="submit">Generar CV</button>
            </form>
        </div>
    );
}

export default App;