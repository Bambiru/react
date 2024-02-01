import { app as appClasName } from './App.module.css';
import Exercise from '@/lecture/40-side-effects';

console.log(appClasName);

function App() {
  return (
    <div className={appClasName}>
      <Exercise />
    </div>
  );
}

export default App;
