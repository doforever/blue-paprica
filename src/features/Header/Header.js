import MainLogo from '../../icons/MainLogo';
import ArrowDown from '../../icons/ArrowDown';
import Hamburger from '../../icons/Hamburger';
import Close from '../../icons/Close';
import useMediaQuery from '../../hooks/useMediaQuery';
import styles from './Header.module.scss';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

function MenuToggle({open, ...otherProps}) {
  if (open) return <Close {...otherProps}/>;
  else return <Hamburger {...otherProps}/>;
}

function Header() {
  const isLg = useMediaQuery('(min-width: 1024px)');
  const [navOpen, setNavOpen] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lang, setLang] = useState('PL');
  const languages = ['PL', 'EN', 'DE', 'GB'];

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={clsx(styles.header, isSticky && styles['header--sticky'])}>
      <div className={styles['inner-wrapper']}>
        <MainLogo className={styles.logo}/>
        <nav className={clsx(styles.navigation, navOpen && styles['navigation--open'])}>
          <ul>
            <li><a href="/">Policz zyski</a></li>
            <li><a href="/">O produkcie</a></li>
            <li><a href="/">Kontakt</a></li>
            <li><a href="/">FAQ</a></li>
            {!isLg && <li><button className={styles.button}>Kup</button></li>}
          </ul>
        </nav>
        <ul className={clsx(styles.selector, selectOpen && styles['selector--open'])}>
          <div className={styles.options}>
            <li
              className={clsx(styles.option, styles['option--active'])}
              onClick={() => {setSelectOpen(false);}}
            >{lang}</li>
            {languages.map(l => ( l !== lang &&
              <li 
                key={l} 
                className={styles.option}
                onClick={() => {setLang(l); setSelectOpen(false);}}
              >{l}</li>
            ))}
          </div>
          <button onClick={() => { setSelectOpen(!selectOpen); }}>
            <ArrowDown className={styles.selector__toggle}/>
          </button>
        </ul>
        {isLg 
          ? <button className={styles.button}>Kup</button> 
          : <button><MenuToggle open={navOpen} onClick={() => {setNavOpen(!navOpen);}}/></button>
        }
      </div>
    </header>
  );
}

export default Header;
