  import axios from 'axios';
  import React, { useEffect, useState } from 'react';
  import './github.css';
  import Navbar from './navbar';
  import { Avatar, Button, Typography } from '@mui/material';

  const Github = () => {
    const [data, setData] = useState(null);
    const [id,setId] = useState('tom')

    useEffect(() => {
      const fetchData = async (val) => {
        try {
          const response = await axios.get(`https://api.github.com/users/${id}`, {
            headers: {
              Authorization:'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'
            }
          }); 
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData(); 
    }, [id]); 

    console.log(data);

    function handleClick(val) {
      setId(val);
      console.log(val);
    }

    return (
      <div className='outer-box'>
        <Navbar handleClick={handleClick} />
        <header>
          <div className='main-content'>
            <div className='avatar'>
              <Avatar
                src={data?.avatar_url} 
                sx={{ width: '400px', height: '400px', margin: '0 auto' }}
              />
               <div style={{textAlign:'center',color:'white'}}><h1>{id === 'rahul-prakash-y' ? 'Rahul Bot' : id}</h1></div>
            </div>
            <div className='info'>
              <div className='info-box'>
                <Typography>Name: {data?.login}</Typography>
                <Typography>
                  Joined Date: User started journey on{' '}
                  {data?.created_at?.split('T')[0]} 
                </Typography>
                <Typography>Total Repositories: {data?.public_repos}</Typography>
                <Typography>Followers: {data?.followers}</Typography>
                <Typography>Following: {data?.following}</Typography>
                <a href={data?.html_url} >
                  <Button variant='contained'>Click to See Profile</Button>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  };

  export default Github;
