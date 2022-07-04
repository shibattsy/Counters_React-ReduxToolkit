import Counter from './components/Counter';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { counterSlice } from './store/reducers/CounterSlice';
import './App.scss';

function App() {
  const { counters } = useAppSelector(state => state.counterReducer);
  const { createCounter } = counterSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="app">
      <button onClick={() => dispatch(createCounter())}>Create Counter</button>
      <div className='wrap'>
        {counters.map((el, index) => {
          return (
            <Counter key={el.id} counter={el} index={index} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
