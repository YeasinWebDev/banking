
import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

function Home() {
  const loggedIn = {firstName: 'Yeasin', lastName: 'Arafat',email: 'arafat@gmail.com'}
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
          type='greeting' 
          title='Welcome' 
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and trasntion"
          />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250}/>
        </header>

        {/* Recent Transactions */}
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{},{}]}/>
    </section>
  )
}

export default Home