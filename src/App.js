import './App.css';
import React, {useState, useEffect} from 'react';
function App() {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);
  const [selected6, setSelected6] = useState(false);
  const [selected7, setSelected7] = useState(false);
  const [selected8, setSelected8] = useState(false);
  const [selected9, setSelected9] = useState(false);
  const textInput=React.useRef();
  useEffect(()=>{
    setSelected1(false);
    setSelected2(false);
    setSelected3(false);
    setSelected4(false);
    setSelected5(false);
    setSelected6(false);
    setSelected7(false);
    setSelected8(false);
    setSelected9(false);
  },[]);
  function handleSubmit(e){
    e.preventDefault();
    let num= textInput.current.value;
    switch(num){
      case '1':
        setSelected1(true);
        setSelected2(false);
        setSelected3(false);
        setSelected4(false);
        setSelected5(false);
        setSelected6(false);
        setSelected7(false);
        setSelected8(false);
        setSelected9(false);
        break;
      case '2':
        setSelected1(false);
        setSelected2(true);
        setSelected3(false);
        setSelected4(false);
        setSelected5(false);
        setSelected6(false);
        setSelected7(false);
        setSelected8(false);
        setSelected9(false);
        break;
        case '3':
          setSelected1(false);
          setSelected2(false);
          setSelected3(true);
          setSelected4(false);
          setSelected5(false);
          setSelected6(false);
          setSelected7(false);
          setSelected8(false);
          setSelected9(false);
          break;
          case '4':
            setSelected1(false);
            setSelected2(false);
            setSelected3(false);
            setSelected4(true);
            setSelected5(false);
            setSelected6(false);
            setSelected7(false);
            setSelected8(false);
            setSelected9(false);
            break;
            case '5':
              setSelected1(false);
              setSelected2(false);
              setSelected3(false);
              setSelected4(false);
              setSelected5(true);
              setSelected6(false);
              setSelected7(false);
              setSelected8(false);
              setSelected9(false);
              break;
              case '6':
                setSelected1(false);
                setSelected2(false);
                setSelected3(false);
                setSelected4(false);
                setSelected5(false);
                setSelected6(true);
                setSelected7(false);
                setSelected8(false);
                setSelected9(false);
                break;
                case '7':
                  setSelected1(false);
                  setSelected2(false);
                  setSelected3(false);
                  setSelected4(false);
                  setSelected5(false);
                  setSelected6(false);
                  setSelected7(true);
                  setSelected8(false);
                  setSelected9(false);
                  break;
                  case '8':
                    setSelected1(false);
                    setSelected2(false);
                    setSelected3(false);
                    setSelected4(false);
                    setSelected5(false);
                    setSelected6(false);
                    setSelected7(false);
                    setSelected8(true);
                    setSelected9(false);
                    break;
                    case '9':
                      setSelected1(false);
                      setSelected2(false);
                      setSelected3(false);
                      setSelected4(false);
                      setSelected5(false);
                      setSelected6(false);
                      setSelected7(false);
                      setSelected8(false);
                      setSelected9(true);
                      break;
          default:
            break;



    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className= "wrapper">
          <div className ="left">
            <form className="input-form" onSubmit={handleSubmit}>
              <input ref={textInput} className = 'input-box'/>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="right">
          <div className= {`box ${selected1 && `change_color`}`}> 1 </div>
          <div className= {`box ${selected2 && `change_color`}`}> 2 </div>
          <div className= {`box ${selected3 && `change_color`}`}> 3 </div>
          <div className= {`box ${selected4 && `change_color`}`}> 4 </div>
          <div className= {`box ${selected5 && `change_color`}`}> 5 </div>
          <div className= {`box ${selected6 && `change_color`}`}> 6 </div>
          <div className= {`box ${selected7 && `change_color`}`}> 7 </div>
          <div className= {`box ${selected8 && `change_color`}`}> 8 </div>
          <div className= {`box ${selected9 && `change_color`}`}> 9 </div>
        </div>
      </header>
    </div>
  );
}

export default App;
