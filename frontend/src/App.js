import { useState } from 'react';
import './App.css';

function MyTable(props) {
  return (
  props.list == undefined || props.list == [] ?
  <h1>load data</h1> :
  <table>
    <tr>
      <th>id</th>
      <th>memo</th>
    </tr>
    {
    props.list.map((e) => {
      <tr>
        <td>e.id</td>
        <td>e.memo</td>
      </tr>
    })
    }
</table>);
}

function App() {

  const [data, setData] = useState([]);
  fetch("/api/memo")
  .then(res => res.json())
  .then(res => setData(res));

  return (
    <div className="App">
        <form method="post" action="/api/memo">
          <label for="data"> your memo </label>
          <input
            type="text"
            id="data"
            name="data"
            placeholder='type your memo'>
          </input>
          <button> submit </button>
        </form>
        <MyTable list={data}/>
    </div>
  );
}

export default App;
