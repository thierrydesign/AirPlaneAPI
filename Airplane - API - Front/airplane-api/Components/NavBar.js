import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
 
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" style={{backgroundColor:'white'}}>Inicio</Link>
      <Link href="/home" style={{backgroundColor:'white'}}>Usuarios</Link>
   </nav>
  );
};
 
export default Navbar;