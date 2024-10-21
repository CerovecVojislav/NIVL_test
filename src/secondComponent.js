import { Provider, useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native';
import { changeValue } from './slice/slice';

export default function MainComponent(){
    const displayText = useSelector(state => state.displayText);
    const dispatch = useDispatch();
    return(
        <>
        <h2>{displayText.value}</h2>
        <button onClick={() => dispatch(changeValue("Back to default."))}>Default button</button>

        </>
    )
};