// QualificationSelect.js

import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const sections = {
  Education: 'education', // Update with the actual ID of the education section
  'Course/Certification': 'certification', // Update with the actual ID of the certification section
  'Work Experience': 'experience', // Update with the actual ID of the work experience section
};

export default function QualificationSelect({ onChange }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (value) => {
    onChange({ target: { value } });

    // Scroll to the selected section
    const sectionId = sections[value];
    const section = document.getElementById(`${sectionId}-section`); // Append "-section" to the ID

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }

    handleClose();
  };

  return (
    <div
      style={{
        display: 'inline-block',
        position: 'relative',
        transition: 'background-color 0.3s ease', // Add smooth transition
        color: 'white',
      }}
      onMouseEnter={handleOpen} // Show dropdown on hover
      onMouseLeave={handleClose} // Hide dropdown when not hovered
    >
      <span
        style={{
          color: '#ff0000', // Red color
          cursor: 'pointer',
        }}
      >
        Qualification
      </span>
      <IconButton
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
        }}
      >
        <ArrowDropDownIcon />
      </IconButton>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 1,
            borderRadius: '10px', // Dropdown border radius
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Dropdown box shadow
            backdropFilter: 'blur(5px)', // Apply blur to the background
            border: '1px solid white', // Dropdown border
          }}
        >
          {Object.keys(sections).map((name) => (
            <MenuItem key={name} onClick={() => handleSelect(name)}>
              {name}
            </MenuItem>
          ))}
        </div>
      )}
    </div>
  );
}
