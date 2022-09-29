import React from "react";
import { DataProps } from "./GetData";
import "./DropDown.css";

interface Props {
  onClick: () => void;
  DropDownValue: boolean;
  showMensClothes: boolean;
  onClickForMensClothes: () => void;
  data: Array<DataProps>;
  onClickForWomensClothes: () => void;
  showWomensClothes: boolean;
  onClickForJewelery: () => void;
  showJewelery: boolean;
  showElectronics: boolean;
  onClickForElectronics: () => void;
}

export const DropDown: React.FC<Props> = ({
  onClick,
  DropDownValue,
  showMensClothes,
  onClickForMensClothes,
  data,
  onClickForWomensClothes,
  showWomensClothes,
  showJewelery,
  onClickForJewelery,
  onClickForElectronics,
  showElectronics,
}) => {
  return (
    <div>
      <button className="main-button" onClick={onClick}>
        DropDown
      </button>

      {DropDownValue && (
        <div>
          <div className="buttons">
            <button onClick={onClickForMensClothes}>Men's Clothing</button>
            <button onClick={onClickForWomensClothes}>Women's Clothing</button>
            <button onClick={onClickForJewelery}> Jewelery</button>
            <button onClick={onClickForElectronics}>Electronics</button>
          </div>

          {showMensClothes && (
            <div className="items">
              {data.map((item) => {
                if (item.category === "men's clothing") {
                  return (
                    <div className="item" key = {item.id + ''}>
                      <div>
                        <img src={item.image} />
                      </div>
                      <div>Price : {item.price} $</div>
                      <div>Rating : {item.rating.rate} / 5</div>
                    </div>
                  );
                }
              })}
            </div>
          )}
          {showWomensClothes && (
            <div className="items">
              {data.map((item) => {
                if (item.category === "women's clothing") {
                  return (
                    <div className="item" key = {item.id + ''}>
                      <div>
                        <img src={item.image} />
                      </div>
                      <div>Price : {item.price} $</div>
                      <div>Rating : {item.rating.rate} / 5</div>
                    </div>
                  );
                }
              })}
            </div>
          )}
          {showJewelery && (
            <div className="items">
              {data.map((item) => {
                if (item.category === "jewelery") {
                  return (
                    <div className="item" key = {item.id + ''}>
                      <div>
                        <img src={item.image} />
                      </div>
                      <div>Price : {item.price} $</div>
                      <div>Rating : {item.rating.rate} / 5</div>
                    </div>
                  );
                }
              })}
            </div>
          )}
          {showElectronics && (
            <div className="items">
              {data.map((item) => {
                if (item.category === "electronics") {
                  return (
                    <div className="item" key = {item.id + ''}>
                      <div>
                        <img src={item.image} />
                      </div>
                      <div>Price : {item.price} $</div>
                      <div>Rating : {item.rating.rate} / 5</div>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
