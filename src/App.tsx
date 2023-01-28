import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

interface InputState {
    feet: number;
    inches: number;
    weight: number;
}
interface ResultState {
    height: number;
    weight: number;
    BMI: number;
}
function App() {
    const [inputState, setInputState] = useState<InputState>({feet:0,inches:0,weight:0});
    const [resultState, setResultState] = useState<ResultState>({height:0,weight:0,BMI:0});
    const updateResults=()=>{
        let heightInCm = InchesToCm(inputState.feet,inputState.inches);
        let weightInKg = PoundsToKg(inputState.weight);
        let BMI = CalculateBMI(heightInCm, weightInKg)
        setResultState({height: heightInCm, weight:weightInKg, BMI})
    }
    return (
    <div className="box">
        <div className="wave"></div>
        <div className="main-content">
            <h1 className="title">Annies BMI Calculator</h1>
            <div className="input form-field">
                {/*  Feet Input*/}

                <input className="text-input" style={{width: "40px"}} type="number" min={1} step={1} title={"Feet"}
                       onChange={(e) => setInputState({...inputState, feet: +e.target.value})}/>
                <p className="units" style={{marginRight: "1px"}}>ft</p>
                {/*  Inches Input*/}
                <input className="text-input" style={{width: "50px"}} type="number" min={1} step={1}
                       title={"Inches"} onChange={(e) => setInputState({...inputState, inches: +e.target.value})}/>
                <p className="units" style={{marginRight: "30px"}}>in</p>
                {/*  Weight Input*/}
                <input className="text-input" style={{width: "80px", textAlign: "right"}} type="number"
                       onChange={(e) => setInputState({...inputState, weight: +e.target.value})}/>
                <p className="units">lbs</p>
            </div>
            <div className="box" style={{marginTop: "13px"}} onClick={updateResults} >
                <a href="#" className="btn btn-white btn- animate">Calculate</a>
            </div>
            <div className="results">
                <p>Height = {resultState.height.toFixed(1)} cm</p>
                <p>Weight = {resultState.weight.toFixed(1)} Kg</p>
                <p>BMI = {resultState.BMI.toFixed(1)}</p>
        </div>
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
