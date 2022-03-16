import Header from './features/Header/Header';
import Calculator from './features/Calculator/Calculator';
import './App.scss';
import Bag from './icons/Bag';

function App() {
  return (
    <div className="app">
      <Header />
      <section className="hero">
        <h1>Inteligentna kruszarka, która zamienia szkło w piasek.</h1>
        <div className="image-group">
          <picture>
            <source srcSet='/maasloop_desktop.png' media="(min-width: 600px)"></source>
            <img className="image-group__image" src='/maasloop.png' alt="Product" />
          </picture>
          <div className="image-group__text">
            <button className="image-group__button"><Bag /></button>
            <h2>Płać 5 razy mniej za wywóz odpadów szklanych.</h2>
            <p>Kruszarka zmniejsza gabaryty szklanych śmieci, a Ty płacisz PIĘ-CIO-KROT-NIE niższe rachunki za ich wywóz.</p>
          </div>
        </div>
      </section>
      <Calculator />
      <p>To na co wydasz zaoszczędzoną gotówkę?</p>
      <button>KUP <span className="price">8499 zł</span></button>
      <h2>Brzmi dobrze? Uważaj. Dopiero się rozkręcamy!</h2>
    </div>
  );
}

export default App;
