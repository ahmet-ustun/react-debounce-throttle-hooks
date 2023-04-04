import React, { useCallback, useState } from "react";
import debounce from "lodash.debounce";

import "./App.css";

function useDebounce(callback, delay) {
  const debounceCallback = useCallback(debounce(callback, delay), [delay]);
  return debounceCallback;
}

function App() {
  const [value, setValue] = useState("");
  const [dbValue, saveToDb] = useState("");
  const [delay, setDelay] = useState(0);

  const debounceSave = useDebounce((nextValue) => saveToDb(nextValue), delay);

  const handleChange = (event) => {
    const nextValue = event.target.value;
    setValue(nextValue);
    debounceSave(nextValue);
  };

  return (
    <main>
      <h1>Blog</h1>
      <textarea value={value} onChange={handleChange} rows={5} cols={50} />
      <section>
        <input
          type="number"
          value={delay}
          onChange={(event) => setDelay(event.target.value)}
        />
        <span>ms</span>
      </section>
      <section className="panels">
        <div>
          <h2>Editor (Client)</h2>
          {value}
        </div>
        <div>
          <h2>Saved (DB)</h2>
          {dbValue}
        </div>
      </section>
    </main>
  );
}

export default App;
