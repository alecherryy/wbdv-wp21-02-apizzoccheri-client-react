import logo from './logo.svg';
import './App.scss';
import { CourseManager } from './components/CourseManager/CourseManager';
import { TrueFalse } from './components/Questions/TrueFalse/TrueFalse';

function App() {
  return (
    <div className="App">
      <CourseManager />
    </div>
  );
}

export default App;
