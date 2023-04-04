import React, { useState } from "react";
import debounce from "lodash.debounce";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [dbValue, saveToDb] = useState("");
  
  
  const handleChange = (event) => {
    const nextValue = event.target.value;
    const debounceSave = debounce(() => saveToDb(nextValue), 1000);
    
    setValue(nextValue);
    debounceSave();
  };

  return (
    <main>
      <h1>Blog</h1>
      <textarea value={value} onChange={handleChange} rows={5} cols={50} />
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
