import React from 'react'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import './account-banner.css'

const AccountBanner = () => {
  return (
    <div className='account-banner'>

      <h4>
        My Account(s)
      </h4>

      <span className='line'></span>

      <div className='card-carousel'>

        <div className='left-arrow'>
          <ArrowBackIosNewRoundedIcon />
        </div>
 
        <div className='card-details'>

          <div className='card-details__top'>
            <h5 className='account-type'>
              savings account
            </h5>
            <p className='account-number'>
              0061789943
            </p>
          </div>

          <div className='card-details__bottom'>
            <h5 className='available'>
              available balance
            </h5>
            <p className='value'>
              ₦ 400,000.56
            </p>
            <p className='book'>
              Book balance: ₦ 400,000.56
            </p>
          </div>

        </div>

        <div className='right-arrow'>
          <ArrowForwardIosRoundedIcon />
        </div>

      </div>
      
    </div> 
  )
}

export default AccountBanner