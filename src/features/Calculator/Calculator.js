import { useState } from 'react';
import './Calculator.module.scss';

function Calculator() {
  const [bins, setBins] = useState(20);
  const [cost, setCost] = useState(20);

  const getResult = () => (
    12 * (bins * cost - bins * cost / 5)
  );

  return (
    <section className="calculator">
      <h2>Ile zaoszczędzisz?</h2>
      <p>Rachunek jest prosty.</p>
      <form>
        <div>
          <label htmlFor="bins">Ile pojemników na szkło zapełniasz miesięcznie?</label>
          <input id="bins" name="bins" type="text" value={bins} onChange={({ target: { value } }) => setBins(value)}/>
        </div>
        <div>
          <label htmlFor="cost">Ile płacisz za wywóz jednego pojemnika na szkło?</label>
          <input id="cost" name="cost" type="text" value={cost} onChange={({ target: { value } }) => setCost(value)}/>
        </div>
        <div>
          Dzięki kruszarce zaoszczędzisz <span>{getResult()}</span> rocznie.
        </div>
      </form>
    </section>
  );
}

export default Calculator;
