import Header from '../../components/header/header';
import './admin.css';
import React, { useState } from 'react';
import { FaUserMd, FaUserInjured, FaPlus, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('patients');
  
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [userType, setUserType] = useState('patient');
  
  const [searchTerm, setSearchTerm] = useState('');

  const [editingUser, setEditingUser] = useState(null);
  
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-123-4567', age: 35, gender: 'Male' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-987-6543', age: 28, gender: 'Female' },
  ]);
  
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. Sarah Johnson', email: 'sarah@example.com', phone: '555-111-2222', specialization: 'Cardiology' },
    { id: 2, name: 'Dr. Michael Brown', email: 'michael@example.com', phone: '555-333-4444', specialization: 'Neurology' },
  ]);
  
  // Formular nou utilizator (daca mai pe urma vrei, iti adaugi tu singur ce mai vrei)
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    ...(userType === 'patient' ? { age: '', gender: '' } : { specialization: '' })
  });

  // Filtrare
  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredDoctors = doctors.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (d.specialization && d.specialization.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (editingUser) {
        if (userType === 'patient') {
        setPatients(patients.map(p => p.id === editingUser.id ? { ...editingUser, ...newUser } : p));
        } else {
        setDoctors(doctors.map(d => d.id === editingUser.id ? { ...editingUser, ...newUser } : d));
        }
    } else {
        if (userType === 'patient') {
        setPatients([...patients, { ...newUser, id: patients.length + 1 }]);
        } else {
        setDoctors([...doctors, { ...newUser, id: doctors.length + 1 }]);
        }
    }

    setNewUser({
        name: '',
        email: '',
        phone: '',
        ...(userType === 'patient' ? { age: '', gender: '' } : { specialization: '' })
    });
    setShowCreateForm(false);
    setEditingUser(null);
};


  const handleDeleteUser = (id, type) => {
    if (type === 'patient') {
      setPatients(patients.filter(p => p.id !== id));
    } else {
      setDoctors(doctors.filter(d => d.id !== id));
    }
  };

    const handleEditClick = (user, type) => 
    {
        setUserType(type);
        setEditingUser(user);
        setNewUser({
            name: user.name,
            email: user.email,
            phone: user.phone,
            ...(type === 'patient'
            ? { age: user.age, gender: user.gender }
            : { specialization: user.specialization })
        });
        setShowCreateForm(true);
    };


  return (
    <div className="admin">
        <Header />
        <div className="admin-page">
            
        <h1>Admin Dashboard</h1>
        
        <div className="tabs">
            <button 
            className={`tab-btn ${activeTab === 'patients' ? 'active' : ''}`}
            onClick={() => setActiveTab('patients')}
            >
            <FaUserInjured /> Pacienți
            </button>
            <button 
            className={`tab-btn ${activeTab === 'doctors' ? 'active' : ''}`}
            onClick={() => setActiveTab('doctors')}
            >
            <FaUserMd /> Doctori
            </button>
        </div>
        
        <div className="action-bar">
            <div className="search-box">
            <FaSearch />
            <input
                type="text"
                placeholder={`Caută ${activeTab === 'patients' ? 'pacienți' : 'doctori'}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
            <button 
            className="add-btn"
            onClick={() => {
                setUserType(activeTab === 'patients' ? 'patient' : 'doctor');
                setShowCreateForm(true);
            }}
            >
            <FaPlus /> Adaugă {activeTab === 'patients' ? 'pacient' : 'doctor'}
            </button>
        </div>
        
        {/* Formular creare a unui cont nou */}
        {showCreateForm && (
            <div className="create-form">
            <h2>{editingUser ? `Editează ${userType === 'patient' ? 'Pacient' : 'Doctor'}` : `Adaugă ${userType === 'patient' ? 'Pacient Nou' : 'Doctor Nou'}`}</h2>
            <form onSubmit={handleCreateUser}>
                <div className="form-group">
                <label>Nume complet</label>
                <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    required
                />
                </div>
                
                <div className="form-row">
                <div className="form-group">
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label>Telefon</label>
                    <input
                    type="tel"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                </div>
                
                {userType === 'patient' ? (
                <div className="form-row">
                    <div className="form-group">
                    <label>Vârstă</label>
                    <input
                        type="number"
                        name="age"
                        value={newUser.age}
                        onChange={handleInputChange}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label>Gen</label>
                    <select
                        name="gender"
                        value={newUser.gender}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Selectează</option>
                        <option value="Male">Masculin</option>
                        <option value="Female">Feminin</option>
                        <option value="Other">Altul</option>
                    </select>
                    </div>
                </div>
                ) : (
                <div className="form-group">
                    <label>Specializare</label>
                    <input
                    type="text"
                    name="specialization"
                    value={newUser.specialization}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                )}
                
                <div className="form-actions">
                <button type="button" onClick={() => setShowCreateForm(false)}>
                    Anulează
                </button>
                <button type="submit" className="primary">
                    Salvează
                </button>
                </div>
            </form>
            </div>
        )}
        
        {/* Lista de utilizatori */}
        <div className="user-list">
            {activeTab === 'patients' ? (
            <table>
                <thead>
                <tr>
                    <th>Nume</th>
                    <th>Contact</th>
                    <th>Vârstă</th>
                    <th>Gen</th>
                    <th>Acțiuni</th>
                </tr>
                </thead>
                <tbody>
                {filteredPatients.map(p => (
                    <tr key={p.id}>
                    <td>
                        <div className="user-info">
                        <div className="avatar patient"><FaUserInjured /></div>
                        {p.name}
                        </div>
                    </td>
                    <td>
                        <div>{p.email}</div>
                        <div>{p.phone}</div>
                    </td>
                    <td>{p.age}</td>
                    <td>{p.gender}</td>
                    <td>
                        <button 
                            className="icon-btn"
                            onClick={() => handleEditClick(p, 'patient')}
                        >
                        <FaEdit />
                        </button>
                        <button 
                            className="icon-btn danger"
                            onClick={() => handleDeleteUser(p.id, 'patient')}
                        >
                        <FaTrash />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            ) : (
            <table>
                <thead>
                <tr>
                    <th>Nume</th>
                    <th>Contact</th>
                    <th>Specializare</th>
                    <th>Acțiuni</th>
                </tr>
                </thead>
                <tbody>
                {filteredDoctors.map(d => (
                    <tr key={d.id}>
                    <td>
                        <div className="user-info">
                        <div className="avatar doctor"><FaUserMd /></div>
                        {d.name}
                        </div>
                    </td>
                    <td>
                        <div>{d.email}</div>
                        <div>{d.phone}</div>
                    </td>
                    <td>{d.specialization}</td>
                    <td>
                        <button 
                            className="icon-btn"
                            onClick={() => handleEditClick(d, 'doctor')}
                        >
                        <FaEdit />
                        </button>
                        <button 
                        className="icon-btn danger"
                        onClick={() => handleDeleteUser(d.id, 'doctor')}
                        >
                        <FaTrash />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
        </div>
        </div>
    </div>
    
  );
};

export default Admin;