import React from 'react'
import './main-dashboard.css'
import AccountBanner from '../account-banner/AccountBanner'
import DashboardHeader from '../dashboard-header/DashboardHeader'
import TransactionHistory from '../transaction-history/TransactionHistory'

const MainDashboard = () => {
  return (
      <main className='dashboard__main'>

        <DashboardHeader />

        <div className='dashboard__main--body'>

        <div className='dashboard__main--left'>
          <AccountBanner />
          <TransactionHistory />

        </div>

        </div>



        

      </main>
  )
}

export default MainDashboard