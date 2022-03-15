import MainLogo from '../../icons/MainLogo';
import ArrowDown from '../../icons/ArrowDown';
import Hamburger from '../../icons/Hamburger';
import Close from '../../icons/Close';
import useMediaQuery from '../../hooks/useMediaQuery';
import styles from './Header.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

function MenuToggle({open, ...otherProps}) {
  if (open) return <Close {...otherProps}/>;
  else return <Hamburger {...otherProps}/>;
}

function Header() {
  const isLg = useMediaQuery('(min-width: 1024px)');
  const [navOpen, setNavOpen] = useState(false);

 

  return (
    <header className={styles.header}>
      <MainLogo className={styles.logo}/>
      <nav className={clsx(styles.navigation, navOpen && styles['navigation--open'])}>
        <ul>
          <li><a href="/">Policz zyski</a></li>
          <li><a href="/">O produkcie</a></li>
          <li><a href="/">Kontakt</a></li>
          <li><a href="/">FAQ</a></li>
          {!isLg && <li><button>Kup</button></li>}
        </ul>
      </nav>
      <div className={styles.selector}>
        <div>PL</div>
        <ArrowDown />
      </div>
      {isLg ? <button>Kup</button> : <MenuToggle open={navOpen} onClick={() => {setNavOpen(!navOpen);}}/>}
    </header>
  );
}

export default Header;
