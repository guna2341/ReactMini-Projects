import React, { useState } from 'react';
import './navbar.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = ({ handleClick }) => {
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleClick(userId); 
  };

  return (
    <div className="nav">
      <div className="logo">
        <div className="img-cover">
          <img src="https://cdn-1.webcatalog.io/catalog/github/github-icon.png" alt="GitHub Icon" />
        </div>
        <p className="text">GitHub Profile Finder</p>
      </div>

      <div className="input-box">
        <Paper
          component="form"
          onSubmit={handleSubmit} 
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, height: 40 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search By Username"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>

      <div className="menu">
        <MenuIcon sx={{ width: '40px', height: '50px', color: 'bisque' }} />
      </div>
    </div>
  );
};

export default Navbar;
