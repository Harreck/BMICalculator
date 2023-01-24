import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

interface AppState {
    feet: number;
    inches: number;
    weight: number;
}
function App() {
    const [appState, setAppState] = useState<AppState>({feet:0,inches:0,weight:0});
    let heightInCm = InchesToCm(appState.feet,appState.inches);
    let weightInKg = PoundsToKg(appState.weight);
    let BMI = CalculateBMI(heightInCm, weightInKg)
    return (
    <div>
        <div className="box">
      {/*  Feet Input*/}
      <input value={appState.feet} type="number" min={1} step={1} title={"Feet"} onChange={(e)=>setAppState({...appState,feet:+e.target.value})}/>

        {/*  Inches Input*/}
      <input value={appState.inches} type="number" min={1} max={12} step={1} title={"Inches"} onChange={(e)=>setAppState({...appState,inches:+e.target.value})}/>

        {/*  Weight Input*/}
      <input value={appState.weight} type="number" onChange={(e)=>setAppState({...appState,weight:+e.target.value})}/>
        </div>
      <button>Calculate</button>
        <div>
            <p>Height in cm = {heightInCm}</p>
            <p>Weight in Kg = {weightInKg}</p>
            <p>The BMI is = {BMI}</p>
        </div>
    </div>
  );
}
function PoundsToKg (pounds:number){
    return pounds / 2.20462
}
function InchesToCm (feet:number, inches:number){
    let feetInInches = feet * 12;
    let inCm = (feetInInches + inches) * 2.54
    return inCm;
}
function CalculateBMI (height:number, weight:number){
    let heightInMeters = height/100;
    let bmi = weight / (heightInMeters * heightInMeters);
    return bmi;
}
export default App;
