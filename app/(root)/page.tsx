
import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

async function Home() {
  const loggedIn =await getLoggedInUser()
  console.log(loggedIn)

    return(<section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
          type='greeting' 
          title='Welcome' 
          user={loggedIn?.name || 'Guest'}
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