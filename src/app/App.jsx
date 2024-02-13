import { app as appClasName } from './App.module.css';
// import Exercise from '@/lecture/46-use-callback-vs-use-memo';
import { SearchBar } from '@/components';

function App() {
  return (
    <div className={appClasName}>
      {/* <Exercise /> */}
      <SearchBar />
    </div>
  );
}

export default App;
