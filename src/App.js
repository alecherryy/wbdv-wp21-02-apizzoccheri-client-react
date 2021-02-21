import logo from './logo.svg';
import './App.scss';
import { CourseTable } from './templates/components/CourseTable/CourseTable';
import { Form } from './templates/components/Form/Form';
import { Constrain } from './templates/layouts/constrain/Constrain';

function App() {
  return (
    <div className="App">
      <Constrain >
        <Form title="Add a new course" />
      </Constrain>
      <CourseTable />
    </div>
  );
}

export default App;
