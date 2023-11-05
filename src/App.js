import logo from './logo.svg';
import './App.css';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

//recommended flat structure for data, but not required (nested data is fine, but takes more setup in column definitions)
//must be memoized or stable (useState, useMemo, defined outside of the component, etc.)
const data = [
  {
    name: 'John', // key "name" matches `accessorKey` in ColumnDef down below
    age: 30, // key "age" matches `accessorKey` in ColumnDef down below
  },
  {
    name: 'Sara',
    age: 25,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
