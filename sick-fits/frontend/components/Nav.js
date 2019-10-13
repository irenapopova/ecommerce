import Link from 'next/link';
import NavStyle from `./styles/NavStyles`;


const Nav = () => (
    <NavStyles>
     <Link href="/items">
         <a>Items</a>
         </Link>
     <Link href="/sell">
         </Link>
      <Link href="/signup">
         <a>Signup</a>
         </Link>
     <Link href="orders">
         <a>Orders</a>
         </Link>
    <Link href="me">
        <a>Account</a>
      </Link>
    
   
    </NavStyles>
);

export default Nav;