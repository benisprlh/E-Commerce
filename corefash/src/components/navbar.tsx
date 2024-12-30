'use client';
import Link from 'next/link';
import logoutActions from '@/actions/logout';
export default function Navbar({ loginState }: { loginState: boolean }) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <h1 className="btn btn-ghost text-xl">CoreFash</h1>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href={'/'}>Homepage</Link>
            </li>
            <li>
              <Link href={'/products'}>Products</Link>
            </li>
            <li>
              <Link href={'/wishlist'}>Wishlist</Link>
            </li>
            <li>{loginState ? <button onClick={() => logoutActions()}>Logout</button> : <Link href={'/login'}>Login</Link>}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
