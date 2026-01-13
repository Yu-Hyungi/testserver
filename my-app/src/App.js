import { BrowserRouter} from 'react-router-dom';
import RouterComponent from './RouterComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
