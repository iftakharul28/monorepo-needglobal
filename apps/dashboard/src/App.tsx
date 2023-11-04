import { BrowserRouter } from 'react-router-dom';
import Router from './routers';
import 'notyf/notyf.min.css';
import '@iftakhar/ui/lib/cjs/index.css';
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
