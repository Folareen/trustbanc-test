import React from 'react'
import './dashboard-header.css'
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

const DashboardHeader = () => {
  return (
        <div className='dashboard--header'>

          <button className='transfer'>
            make a transfer
          </button>

          <div className='profile-container'>

            <div className='profile-details'>
              <p className='name'>
                Abati Olawale
              </p>
              <p className='click'>
                Click to view profile
              </p>
            </div>

            <div className='avatar'>
              <Person2RoundedIcon fontSize='large' />
            </div>

          </div>

        </div>
  )
}

export default DashboardHeader