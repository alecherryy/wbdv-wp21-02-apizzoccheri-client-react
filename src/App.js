import logo from './logo.svg';
import './App.scss';
import CourseTable from './templates/components/CourseTable/CourseTable';
import { Constrain } from './templates/layouts/constrain/Constrain';

function App() {
  return (
    <div className="App">
      <Constrain >
        <CourseTable />
      </Constrain>
    </div>
  );
}

export default App;
