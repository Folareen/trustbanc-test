import React, { useContext } from 'react'
import logo from '../../assets/blue-trustbanc-logo.png'
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TransferWithinAStationRoundedIcon from "@mui/icons-material/TransferWithinAStationRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import './left-pane.css'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { AuthContext } from '../../context/AuthContext';

const LeftPane = () => {
    const {user, setUser} = useContext(AuthContext)
  return (
    <nav className='dashboard__left'>

      <div className='logo'>
          <img src={logo} />
      </div>

      <a href='/#' className="nav-link nav-link--active">
        <HomeRoundedIcon />
        <span>
          home
        </span>
      </a>

      <a href='#' className="nav-link">
        <TransferWithinAStationRoundedIcon />
        <span>
          transfer
        </span>
      </a>

      <a href='#' className="nav-link">
        <TrendingUpRoundedIcon />
        <span>
          target and savings
        </span>
      </a>

      <a href='#' className="nav-link">
        <PhoneIphoneRoundedIcon />
        <span>
          airtime and bills
        </span>
      </a>

      <a href='#' className="nav-link">
        <CreditCardRoundedIcon />
        <span>
          cards
        </span>
      </a>

      <a href='#' className="nav-link">
        <CreditCardRoundedIcon />
        <span>
          cards
        </span>
      </a>

      <a href='' className="nav-link">
        <BusinessCenterRoundedIcon />
        <span>
          loans
        </span>
      </a>

      <a href='' className="nav-link">
        <SettingsRoundedIcon />
        <span>
          settings
        </span>
      </a>

      <button className='logout-btn' onClick={() => setUser(null)}>
        <ExitToAppRoundedIcon/>
        <span>
          logout
        </span>
      </button>

    </nav>
  )
}

export default LeftPane