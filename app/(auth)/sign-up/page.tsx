import AuthFrom from '@/components/AuthFrom'
import React from 'react'

async function SignUp() {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthFrom type='sign-up'/>
    </section>
  )
}

export default SignUp