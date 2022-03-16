import { useState } from 'react';
import styles from './Calculator.module.scss';

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
    <section className={styles.calculator}>
      <h2 className={styles.headline}>Ile zaoszczędzisz?</h2>
      <p>Rachunek jest prosty.</p>
      <form noValidate className={styles.form}>
        <div className={styles['input-block']}>
          <label htmlFor="bins">Ile pojemników na szkło zapełniasz miesięcznie?</label>
          <input id="bins" name="bins" type="text" value={bins} onChange={changeBinInput}/>
        </div>
        <div className={styles['input-block']}>
          <label htmlFor="cost">Ile płacisz za wywóz jednego pojemnika na szkło?</label>
          <input id="cost" name="cost" type="text" value={cost} onChange={changeCostInput}/>
        </div>
        <div className={styles['result-block']}>
          Dzięki kruszarce zaoszczędzisz <span className={styles.result}>{getResult()} zł</span> rocznie.
        </div>
      </form>
    </section>
  );
}

export default Calculator;
