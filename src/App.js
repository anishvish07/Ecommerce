
import './App.css';
import Container from './Components/Container';
import NoteState from './Context/notes/noteState';


function App() {
  return (
    <div>
          <NoteState>
           
           <Container/>
           </NoteState>
    </div>
  );
}

export default App;
