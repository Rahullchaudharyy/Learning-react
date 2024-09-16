
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todo = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Todo List</h2>
            <ul className="space-y-4">
                {todos.map((value) => (
                    <li
                        key={value.id}
                        className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm"
                    >
                        <span className="text-lg">{value.text}</span>
                        <button
                            onClick={() => dispatch(removeTodo(value.id))}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200"
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
