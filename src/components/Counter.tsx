import { FC, useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";
import { ICounter } from "../models/ICounter";
import { counterSlice } from "../store/reducers/CounterSlice";
import './Counter.scss';

interface CounterProps {
  counter: ICounter,
  index: number
}
const Counter: FC<CounterProps> = ({ counter, index }) => {
  const { increment, decrement, deleteCounter } = counterSlice.actions;
  const dispatch = useAppDispatch();
  const isForth = !((index + 1) % 4) && index > 0;
  useEffect(() => {
    if (isForth) {
      let timerId = setInterval(() => { dispatch(increment(counter.id)) }, 1000);
      return () => {
        clearInterval(timerId);
      }
    }
  }, [isForth, counter.id, dispatch, increment]);
  return (
    <div className='counter'>
      <div>{`Score:${counter.score}`}</div>
      {!isForth &&
        <div>
          <button onClick={() => dispatch(increment(counter.id))}>+</button>
          <button onClick={() => dispatch(decrement(counter.id))}>-</button>
        </div>}
      <button onClick={() => dispatch(deleteCounter(counter.id))}>Delete</button>
    </div>
  );
};

export default Counter;