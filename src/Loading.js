import React from 'react';
import './Loading.css';

export default function Loading ({ label }) {
  return (
    <div className='Loading'>
      Loading {label}...
    </div>
  )
}
