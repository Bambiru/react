import { app as appClassName } from './App.module.css';
import Exercise from '@/lecture/42-1-external-lib-dom-control';

function App() {
  return (
    <div className={appClassName}>
      <Exercise />
    </div>
  );
}

export default App;
