import Header from './features/Header/Header';
import Calculator from './features/Calculator/Calculator';
import './App.scss';
import Bag from './icons/Bag';
import photo from './images/maasloop_desktop.png';
import mobilePhoto from './images/maasloop.png';

function App() {
  return (
    <div className="app">
      <Header />
      <section className="hero">
        <h1>Inteligentna kruszarka, która zamienia szkło w piasek.</h1>
        <div className="image-group">
          <picture>
            <source srcSet={photo} media="(min-width: 600px)"></source>
            <img className="image-group__image" src={mobilePhoto} alt="Product" />
          </picture>
          <div className="image-group__text-wrapper">
            <button className="image-group__button"><Bag /></button>
            <div className="image-group__text">
              <h2 className="image-group__headline">Płać 5 razy mniej za wywóz odpadów szklanych.</h2>
              <p>Kruszarka zmniejsza gabaryty szklanych śmieci, a Ty płacisz PIĘ-CIO-KROT-NIE niższe rachunki za ich wywóz.</p>
            </div>
          </div>
        </div>
      </section>
      <Calculator />
      <section className="cta">
        <p className="cta__paragraph">To na co wydasz zaoszczędzoną gotówkę?</p>
        <button className="cta__button">KUP <span className="price">8499 zł</span></button>
        <h2 className="cta__headline">Brzmi dobrze? Uważaj. Dopiero się rozkręcamy!</h2>
      </section>
    </div>
  );
}

export default App;
