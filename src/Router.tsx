import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditTodo from '../src/components/Todos/Edit';
import Todo from '../src/components/Todos';

const RouterComponent = () => {
    return (  
        <Router>
            <Routes>
                <Route path="/" element={<Todo />}/>
                <Route path="/todo/:id" element={<EditTodo />} />
            </Routes>
        </Router>    
    );
}

export default RouterComponent;