import { useState } from 'react';
import './Calculator.module.scss';

function Calculator() {
  const [bins, setBins] = useState(20);
  const [cost, setCost] = useState(20);

  const getResult = () => (
    (12 * (bins * cost - bins * cost / 5)).toFixed()
  );

  const changeBinInput = ({ target: { value } }) => {
    if (!isNaN(value) && value >= 0) {
      setBins(value);
    }
  };

  const changeCostInput = ({ target: { value } }) => {
    if (!isNaN(value) && value >= 0) {
      setCost(value);
    }
  };

  return (
    <section className="calculator">
      <h2>Ile zaoszczędzisz?</h2>
      <p>Rachunek jest prosty.</p>
      <form>
        <div>
          <label htmlFor="bins">Ile pojemników na szkło zapełniasz miesięcznie?</label>
          <input id="bins" name="bins" type="text" value={bins} onChange={changeBinInput}/>
        </div>
        <div>
          <label htmlFor="cost">Ile płacisz za wywóz jednego pojemnika na szkło?</label>
          <input id="cost" name="cost" type="text" value={cost} onChange={changeCostInput}/>
        </div>
        <div>
          Dzięki kruszarce zaoszczędzisz <span>{getResult()} zł</span> rocznie.
        </div>
      </form>
    </section>
  );
}

export default Calculator;
