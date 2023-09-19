import React, { useState } from 'react';
import Axios from "axios";

const AddPatientForm = ({ onAdd }) => {
    const [newPatient, setNewPatient] = useState({
        hasta_first_name: '',
        hasta_last_name: '',
        hasta_birthdate: ''
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setNewPatient({ ...newPatient, [name]: value });
    };

    const handleAdd = () => {
        Axios.post('http://localhost:8089/api/v1/hasta', newPatient)
            .then(response => {
                console.log('Yeni hasta başarıyla eklendi.');
                onAdd(newPatient);
                setNewPatient({
                    hasta_first_name: '',
                    hasta_last_name: '',
                    hasta_birthdate: ''
                });
            })
            .catch(error => {
                console.error('Hasta ekleme hatası:', error);
            });
    };

    return (
        <div>
            <h2>Hasta Ekleme Formu</h2>
            <form>
                <label>İsim:</label>
                <input
                    type="text"
                    name="hasta_first_name"
                    value={newPatient.hasta_first_name}
                    onChange={handleInputChange}
                />
                <label>Soyisim:</label>
                <input
                    type="text"
                    name="hasta_last_name"
                    value={newPatient.hasta_last_name}
                    onChange={handleInputChange}
                />
                <label>Doğum Tarihi:</label>
                <input
                    type="date"
                    name="hasta_birthdate"
                    value={newPatient.hasta_birthdate}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={handleAdd}>
                    Hasta Ekle
                </button>
            </form>
        </div>
    );
};

export default AddPatientForm;
