import { Fragment, useContext } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import AppContext from "../AppContext"
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { Auth } from 'aws-amplify'


function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  const {currentInfo} = useContext(AppContext)
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#books">Books</MobileNavLink>
            {currentInfo && currentInfo.admin ? <MobileNavLink href="#users">Users</MobileNavLink>:null}
            <MobileNavLink href="#account">Account</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            {Auth.currentAuthenticatedUser ? <MobileNavLink href="/login">Sign in</MobileNavLink>:<MobileNavLink onClick={()=>Auth.signOut()}>Sign Out</MobileNavLink>}
            
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
const {currentInfo} = useContext(AppContext)
return (
    <header className="py-10 bg-slate-700 text-gray-300">
      {currentInfo && currentInfo.admin ? <div className='absolute left-4 top-7 bg-slate-500 p-2 text-lg rounded-lg'>
        Admin Account
    </div> : null}
      
      <Container >
        <nav className="flex z-50 justify-between">
          <div className="flex items-center md:gap-x-12">
          <h2 className="text-2xl font-bold sm:truncate">
            <Link href="/" aria-label="Home">
              <>Library Management System</>
            </Link>
          </h2>
            <div className="hidden text-2xl md:flex md:gap-x-6">
              <Link href="/books">Books</Link>
              {currentInfo && currentInfo.admin ? <><Link href="users">Users</Link></>:<Link href="/account">Account</Link>}
              
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
          {Auth.currentAuthenticatedUser ? 
          (
            <div className="hidden md:block text-2xl">
              <button onClick={()=>Auth.signOut()}>Sign Out</button>
            </div>
          )
          : (
            <>
            <div className="hidden md:block">
              <Link href="/login">Sign in</Link>
            </div>
            <Button href="/register" color="blue">
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Button>
            </>
          )}
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
