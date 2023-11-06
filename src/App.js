import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './App.css';
import ReactTable from './components/ReactTable';




function App() {
  return (
    <div className="react-table-container">
      <h1 className='table-heading'>Material React Table Example</h1>      
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ReactTable />
      </LocalizationProvider>
    </div>
  );
}

export default App;
