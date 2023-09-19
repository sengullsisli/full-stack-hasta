import React, { useState, useEffect } from 'react';
import Axios from "axios";

const EditPatientForm = ({ patient, onUpdate }) => {
    const [editedPatient, setEditedPatient] = useState(patient);

    useEffect(() => {
        setEditedPatient(patient);
    }, [patient]);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setEditedPatient({ ...editedPatient, [name]: value });
    };

    const handleSubmit = () => {
        Axios.put(`http://localhost:8089/api/v1/hasta`, editedPatient)
            .then(response => {
                console.log('Hasta başarıyla güncellendi.');
                onUpdate(editedPatient);

                // Güncelleme başarılı olduktan sonra eski kaydı sil
                Axios.delete(`http://localhost:8089/api/v1/hasta/${patient.id}`)
                    .then(() => {
                        console.log('Eski hasta kaydı başarıyla silindi.');
                    })
                    .catch(error => {
                        console.error('Eski hasta kaydı silme hatası:', error);
                    });
            })
            .catch(error => {
                console.error('Hasta güncelleme hatası:', error);
            });
    };

    return (
        <div>
            <h2>Hasta Düzenleme Formu</h2>
            <form>
                <label>İsim:</label>
                <input
                    type="text"
                    name="hasta_first_name"
                    value={editedPatient.hasta_first_name}
                    onChange={handleInputChange}
                />
                <label>Soyisim:</label>
                <input
                    type="text"
                    name="hasta_last_name"
                    value={editedPatient.hasta_last_name}
                    onChange={handleInputChange}
                />
                <label>Doğum Tarihi:</label>
                <input
                    type="date"
                    name="hasta_birthdate"
                    value={editedPatient.hasta_birthdate}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={handleSubmit}>
                    Güncelle
                </button>
            </form>
        </div>
    );
};

export default EditPatientForm;
