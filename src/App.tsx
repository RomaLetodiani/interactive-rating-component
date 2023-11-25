import RateState from './components/rateState';
import ThankState from './components/thankState';
import { useState } from 'react';

function App() {
  const [rateState, setRateState] = useState(true);
  const [val, setVal] = useState(0);
  return (
    <div className="content">
      <div className="card">
        {rateState ? (
          <RateState val={val} setRateState={setRateState} setVal={setVal} />
        ) : (
          <ThankState val={val} />
        )}
      </div>
    </div>
  );
}

export default App;
