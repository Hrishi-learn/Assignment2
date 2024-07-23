import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editImage, setEditImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    if (name && description && image) {
      if (editIndex !== null) {
        // Update existing item
        const updatedItems = items.map((item, index) =>
          index === editIndex
            ? { ...item, name: editName, description: editDescription, image: editImage || item.image }
            : item
        );
        setItems(updatedItems);
        setEditIndex(null);
      } else {
        // Add new item
        setItems([...items, { name, description, image }]);
      }
      resetForm();
    }
  };

  const handleEdit = (index) => {
    const item = items[index];
    setEditIndex(index);
    setEditName(item.name);
    setEditDescription(item.description);
    setEditImage(item.image);
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    if (editIndex === index) {
      // Reset form if the edited item is deleted
      resetForm();
    }
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setImage(null);
    setEditName('');
    setEditDescription('');
    setEditImage(null);
  };

  return (
    <div className="App">
      <h1>Image Uploader</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={editIndex !== null ? editName : name}
          onChange={(e) => (editIndex !== null ? setEditName(e.target.value) : setName(e.target.value))}
        />
        <input
          type="text"
          placeholder="Description"
          value={editIndex !== null ? editDescription : description}
          onChange={(e) => (editIndex !== null ? setEditDescription(e.target.value) : setDescription(e.target.value))}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => (editIndex !== null ? setEditImage(URL.createObjectURL(e.target.files[0])) : handleImageChange(e))}
        />
        <button onClick={handleSubmit}>
          {editIndex !== null ? 'Update' : 'Submit'}
        </button>
      </div>
      <div className="card-container">
        {items.map((item, index) => (
          <div key={index} className="card">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
