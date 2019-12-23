import React, { useState, useEffect } from 'react';
import { TunerDial } from './TunerDial';
import { FrequencyAnalyzer } from 'sound-analyzer';
import './App.css';

function App() {

  const [frequency, setFrequency] = useState(440);
  const [frequencyAnalyzer, setFrequencyAnalyzer] = useState();

  useEffect(() => {
    (async () => {
      const frequencyAnalyzer = new FrequencyAnalyzer();
      await frequencyAnalyzer.init();
      setFrequencyAnalyzer(frequencyAnalyzer);
      window.setInterval(() => setFrequency(frequencyAnalyzer.getFrequency), 500);
    })();
  }, [setFrequencyAnalyzer]);


  return (
    <div className="App">
      {frequencyAnalyzer ? <TunerDial frequency={frequency} /> : 'Loading'}
    </div>
  );
}

export default App;
