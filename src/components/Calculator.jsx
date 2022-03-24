import { useState } from 'react'
import Result from "./Result";
const Calculator = () => {

const [packPrice, setPackPrice] = useState(0);
const [packsPerWeek, setPacksPerWeek] = useState(0);
const [juicePrice, setJuicePrice] = useState(20);
const [juicePerWeek, setJuicePerWeek] = useState(1);

  return (
    <div className="container">
      <section className="packsPerWeek">
        <label htmlFor="packInput">How many packs do you smoke in a week?</label>
        <input id="packInput" type="number" onChange={(e) => {setPacksPerWeek(e.target.valueAsNumber)}}/>
      </section>
      <section className="pricePerPack">
        <label htmlFor="priceInput">How much do you pay per pack?</label>
        <input id="priceInput" type="number" onChange={(e) => {setPackPrice(e.target.valueAsNumber)}}></input>
      </section>
        <div className='optionalInput'>
            <input type="checkbox" id='juicePricing' defaultChecked />
            <section>
                <input type="number" id='juicePrice' defaultValue={20} onChange={(e) => {setJuicePrice(e.target.valueAsNumber)}}/>
            <p>If you know how much a 30ml bottle of vape juice will cost you, feel free to enter it here. 
                Otherwise we'll use a rough average of $20 for North America. 
                Shop around, and you could save even more! </p>
            </section>
        </div>
      <Result juicePerWeek={juicePerWeek} juicePrice={juicePrice} packPrice={packPrice} packsPerWeek={packsPerWeek}/>
    </div>
  );
};

export default Calculator;
