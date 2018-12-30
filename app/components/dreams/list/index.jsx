import React from 'react';
import './index.css';

const DreamsList = ({ dreams }) => (
  <ul>
    {
      dreams.map(d => (
        <li>{d.description}</li>
      ))
    }
  </ul>
);

export default DreamsList;
