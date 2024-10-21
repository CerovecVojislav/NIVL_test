import { Provider, useDispatch, useSelector } from 'react-redux';


export default function MainComponent(){
    const displayText = useSelector(state => state.displayText);
    return(
        <h1>{displayText.value}</h1>
        
    )
};