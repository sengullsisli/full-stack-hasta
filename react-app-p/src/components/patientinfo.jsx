import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './patientinfo.css';
import EditPatientForm from './editPatient';
import DeletePatientConfirmation from './deletePatient';
import AddPatientForm from './addPatient';
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const PatientInfo = () => {
    const [patients, setPatients] = useState([]);
    const [editPatient, setEditPatient] = useState(null);
    const [confirmDeletePatient, setConfirmDeletePatient] = useState(null);
    const [showAddPatientForm, setShowAddPatientForm] = useState(false);
    const [showDeletePatientForm, setShowDeletePatientForm] = useState(false);
    const [showEditPatientForm, setShowEditPatientForm] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:8089/api/v1/hasta')
            .then(response => {
                setPatients(response.data);
            })
            .catch(error => {
                console.error('Veri çekme hatası:', error);
            });
    }, []);

    const handleDelete = (patientId) => {
        Axios.delete(`http://localhost:8089/api/v1/hasta/${patientId}`)
            .then(response => {
                console.log('Hasta başarıyla silindi.');
                setConfirmDeletePatient(null);
                setShowDeletePatientForm(false);

                setPatients(prevPatients => prevPatients.filter(patient => patient.hasta_id !== patientId));
            })
            .catch(error => {
                console.error('Hasta silme hatası:', error);
            });
    };

    const handleUpdate = (updatedPatient) => {
        setEditPatient(null);
        setShowEditPatientForm(false);


        setPatients(prevPatients => {
            return prevPatients.map(patient => {
                if (patient.hasta_id === updatedPatient.hasta_id) {
                    return updatedPatient;
                } else {
                    return patient;
                }
            });
        });
    };

    const handleEditForm = (patient) => {
        setEditPatient(patient);
        setShowEditPatientForm(true);
    };

    const handleDeleteConfirmation = (patient) => {
        setConfirmDeletePatient(patient);
        setShowDeletePatientForm(true);
    };

    const handleAdd = (newPatient) => {

        setPatients(prevPatients => [...prevPatients, newPatient]);
    };

    const toggleAddPatientForm = () => {
        setShowAddPatientForm(!showAddPatientForm);
    };

    const toggleEditPatientForm = () => {
        setShowEditPatientForm(!showEditPatientForm);
    };

    const toggleDeletePatientForm = () => {
        setShowDeletePatientForm(!showDeletePatientForm);
    };

    return (
        <div className="patient">
            <h1>Hasta Bilgi:</h1>
            <div>
                <button onClick={toggleAddPatientForm} className="add-button">
                    <FaPlus /> {showAddPatientForm ? 'Vazgeç' : 'Hasta Ekle'}
                </button>
                {showAddPatientForm && <AddPatientForm onAdd={handleAdd} />}

                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Birthdate</th>
                        <th>İşlemler</th>
                    </tr>
                    </thead>
                    <tbody>
                    {patients.map(data => (
                        <tr key={data.hasta_id}>
                            <td>{data.hasta_id}</td>
                            <td>{data.hasta_first_name}</td>
                            <td>{data.hasta_last_name}</td>
                            <td>{data.hasta_birthdate}</td>
                            <td>
                                <button
                                    onClick={() => handleEditForm(data)}
                                    className="edit-button"
                                >
                                    <FaEdit /> Düzenle
                                </button>
                                <button
                                    onClick={() => handleDeleteConfirmation(data)}
                                    className="delete-button"
                                >
                                    <FaTrash /> Sil
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {showEditPatientForm && editPatient && (
                <EditPatientForm
                    patient={editPatient}
                    onUpdate={handleUpdate}
                />
            )}

            {showDeletePatientForm && confirmDeletePatient && (
                <DeletePatientConfirmation
                    patient={confirmDeletePatient}
                    onDelete={handleDelete}
                />
            )}
        </div>
    );
};

export default PatientInfo;
