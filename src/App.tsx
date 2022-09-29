import { DropDown } from "./components/DropDown";
import { useState, useEffect } from "react";
import { getData } from "./components/GetData";
function App() {
  const [DropDownValue, setDropDownValue] = useState(false);
  const [data, setData] = useState([]);
  const [showMensClothes, setShowMensClothes] = useState(false);
  const [showWomensClothes, setShowWomensClothes] = useState(false);
  const [showJewelery, setShowJewelery] = useState(false);
  const [showElectronics, setShowElectronics] = useState(false);

  useEffect(() => {
    getData(setData);
  }, []);

  const onClick = () => {
    setDropDownValue(!DropDownValue);
  };
  const onClickForMensClothes = () => {
    setShowMensClothes(!showMensClothes);
    setShowWomensClothes(false);
    setShowJewelery(false);
    setShowElectronics(false);
  };
  const onClickForWomensClothes = () => {
    setShowWomensClothes(!showWomensClothes);
    setShowMensClothes(false);
    setShowJewelery(false);
    setShowElectronics(false);
  };
  const onClickForJewelery = () => {
    setShowJewelery(!showJewelery);
    setShowMensClothes(false);
    setShowWomensClothes(false);
    setShowElectronics(false);
  };
  const onClickForElectronic = () => {
    setShowElectronics(!showElectronics);
    setShowMensClothes(false);
    setShowWomensClothes(false);
    setShowJewelery(false);
  };

  //console.log(data)
  return (
    <div className="App">
      <DropDown
        onClick={onClick}
        DropDownValue={DropDownValue}
        onClickForMensClothes={onClickForMensClothes}
        showMensClothes={showMensClothes}
        data={data}
        onClickForWomensClothes={onClickForWomensClothes}
        showWomensClothes={showWomensClothes}
        onClickForJewelery={onClickForJewelery}
        showJewelery={showJewelery}
        onClickForElectronics={onClickForElectronic}
        showElectronics={showElectronics}
      />
    </div>
  );
}

export default App;
