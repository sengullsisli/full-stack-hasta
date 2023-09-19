import React from 'react';
import Axios from "axios";

const DeletePatientConfirmation = ({ patient, onDelete }) => {
    const handleDelete = () => {

        Axios.delete(`http://localhost:8089/api/v1/hasta/${patient.hasta_id}`)
            .then(response => {
                console.log('Hasta başarıyla silindi.');
                onDelete(patient.hasta_id);
            })
            .catch(error => {
                console.error('Hasta silme hatası:', error);
            });
    };

    return (
        <div>
            <h2>Hasta Silme Onayı</h2>
            <p>{`Hasta: ${patient.hasta_first_name} ${patient.hasta_last_name}`}</p>
            <p>Gerçekten silmek istiyor musunuz?</p>
            <button onClick={handleDelete}>Evet</button>
            <button onClick={() => onDelete(null)}>Hayır</button>
        </div>
    );
};

export default DeletePatientConfirmation;
