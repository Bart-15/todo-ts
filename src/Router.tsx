import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditTodo from '../src/components/Todos/Edit';
import Todo from '../src/components/Todos';
import AddTodo from '../src/components/Todos/Add';
import ToggleDarkMode from '../src/components/Styled/ToggleBtn';


const RouterComponent = () => {
    return (  
        <Router>
            <ToggleDarkMode />
            <Routes>
                <Route path="/" element={<Todo />}/>
                <Route path="/todo/:id" element={<EditTodo />} />
                <Route path="/add-todo" element={<AddTodo />} />
            </Routes>
        </Router>    
    );
}

export default RouterComponent;