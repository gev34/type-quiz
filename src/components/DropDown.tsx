import React from "react"
import { DataProps } from "./GetData";

interface Props {
    onClick: () => void;
    DropDownValue:boolean;
    showMensClothes:boolean;
    onClickForMensClothes:()=> void;
    data:Array<DataProps>;
}

export const DropDown:React.FC<Props> = ({onClick , DropDownValue ,showMensClothes , onClickForMensClothes , data}) => {
    return (
        <div>
            <button onClick={onClick}>DropDown</button>
            {DropDownValue && (
                <div>
                    <button onClick={onClickForMensClothes}>Men's Clothes</button>
                    <button>Item 2</button>
                    <button>Item 3</button>
                    <button>Item 4</button>
                    <div>
                        {showMensClothes && (
                            <div>
                                {data.map((item) => {
                                    if(item.category === "men's clothing"){
                                       return (
                                        <div>
                                            {item.price}
                                        </div>
                                       )
                                    }
                                })}
                            </div>
                        )}
                    </div>
                </div>

            )}
        </div>
    )
}