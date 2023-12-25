import React, { useState } from 'react';
import './Collapsible.css'; // Assume you have a separate CSS file for Collapsible

export default function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-container">
      <button className="collapsible" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}
