import { DropDown } from "./components/DropDown";
import { useState , useEffect} from "react";
import { getData } from "./components/GetData";
function App() {
  const [DropDownValue , setDropDownValue] = useState(false)
  const [data , setData] = useState([])
  const [showMensClothes , setShowMensClothes] = useState(false)


  const onClick = () => {
    setDropDownValue(!DropDownValue);
  }
  const onClickForMensClothes = () => {
        setShowMensClothes(!showMensClothes)
  }
  useEffect(()=>{
    getData(setData);
  },[])
 // console.log(data)
  return (
    <div className="App">
          <DropDown onClick = {onClick} DropDownValue = {DropDownValue} onClickForMensClothes = {onClickForMensClothes} showMensClothes = {showMensClothes} data = {data}/>
    </div>
  );
}

export default App;
