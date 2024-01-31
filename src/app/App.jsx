import Exercise from '@/lecture/37-3-react-from-exercise.jsx';
import { app as appClassName } from './App.module.css';
console.log(appClassName);
function App() {
  return (
    <div className={appClassName}>
      <Exercise />
    </div>
  );
}

export default App;
