import { useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [isRerender, setIsRerender] = useState(true);
  if (isRerender) {
    fetch("/api/memo")
    .then(res => res.json())
    .then(res => setData(res));
    setIsRerender(false);
  }

  function postMemo(e) {
    fetch("/api/memo", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: e.target.elements.data.value
      })
    }).then(() => setIsRerender(true))
    return false;
  }

  return (
    <div className="App">
      <form method='GET' action="/" onSubmit={postMemo}>
        <label for="data"> your memo </label>
        <input
          type="text"
          id="data"
          name="data"
          placeholder='type your memo'/>
          <button>submit</button>
      </form>
      <ul>
        {data.map((num) => <li key={num.id}>{num.data}</li>)}
      </ul>
    </div>
  );
}

export default App;
