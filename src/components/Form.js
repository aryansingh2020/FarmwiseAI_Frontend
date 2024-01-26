import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addField, resetFields } from '../store/actions';

const Form = () => {
  const dispatch = useDispatch();
  const [field, setField] = useState({
    name: '',
    type: 'text',
    validation: '',
    data: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setField((prevField) => ({ ...prevField, [name]: value }));
  };

  const handleAddField = () => {
    dispatch(addField(field));
    setField({
      name: '',
      type: 'text',
      validation: '',
      data: '',
    });
  };

  const handleResetFields = () => {
    dispatch(resetFields());
  };

  return (
    <div>
      <label>Field Name:</label>
      <input
        type="text"
        name="name"
        value={field.name}
        onChange={handleInputChange}
      />

      <label>Field Type:</label>
      <select name="type" value={field.type} onChange={handleInputChange}>
        <option value="text">Text Box</option>
        <option value="dropdown">Drop-Down</option>
        <option value="date">Date Picker</option>
      </select>

      <label>Field Validation:</label>
      <input
        type="text"
        name="validation"
        value={field.validation}
        onChange={handleInputChange}
      />

      <label>Field Data (Dropdown):</label>
      <input
        type="text"
        name="data"
        value={field.data}
        onChange={handleInputChange}
      />

      <button onClick={handleAddField}>Add Field</button>
      <button onClick={handleResetFields}>Reset Fields</button>
    </div>
  );
};

export default Form;
