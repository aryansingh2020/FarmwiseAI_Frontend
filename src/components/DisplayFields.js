import React from 'react';
import { useSelector } from 'react-redux';

const DisplayFields = () => {
  const fields = useSelector((state) => state.fields);

  return (
    <div>
      <h2>Display Fields</h2>
      {fields.map((field, index) => (
        <div key={index}>
          <p>Name: {field.name}</p>
          <p>Type: {field.type}</p>
          <p>Validation: {field.validation}</p>
          <p>Data: {field.data}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DisplayFields;
