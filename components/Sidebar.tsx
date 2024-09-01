"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './Footer'

function Sidebar({user}:SiderbarProps) {
    const pathname = usePathname()
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href={'/'} className='mb-12 flex cursor-pointer items-center gap-2 '>
            <Image src={'/icons/logo.svg'} width={34} height={34} alt='logo' className='xl:size-14 size-[24px]'/>

            <h1 className='sidebar-logo'>YPay</h1>
            </Link>
            {sidebarLinks.map((item) =>{
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
                    <Link href={item.route} key={item.label} className={cn('sidebar-link',{'bg-bank-gradient':isActive})}>
                        <div className="relative size-6">
                            <Image src={item.imgURL} fill alt={item.label} className={cn({'brightness-[3] inset-0':isActive})}/>
                        </div>
                            <span className={cn("sidebar-label", {'!text-white':isActive})}>{item.label}</span>
                    </Link>
                )
            })}
            User
        </nav>
        <Footer user={user}>

        </Footer>
    </section>
  )
}

export default Sidebar