import React from "react";
import {SuperButton} from "../../Common/SuperButton/SuperButton";
import {SuperCheckbox} from "../../Common/SuperCheckbox/SuperCheckbox";
import {SuperEditableSpan} from "../../Common/SuperEditableSpan/SuperEditableSpan";
import {SuperInputText} from "../../Common/SuperInputText/SuperInputText";
import {SuperRadio} from "../../Common/SuperRadio/SuperRadio";
import {SuperRange} from "../../Common/SuperRange/SuperRange";
import {SuperSelect} from "../../Common/SuperSelect/SuperSelect";

export const SuperComponents = () => {
    return (
        <div>
            <div>SuperComponents</div>
            <div>
                <SuperInputText/>
                <span style={{fontWeight: "bold"}}>InputText</span>
            </div>
            <div>
                <SuperButton> x </SuperButton>
                <span style={{fontWeight: "bold"}}>Button</span>
            </div>
            <div>
                <SuperCheckbox/>
                <span style={{fontWeight: "bold"}}>Checkbox</span>
            </div>
            <div>
                <SuperEditableSpan value={"Enter your text here..."}/>
                <span style={{fontWeight: "bold"}}>EditableSpan</span>
            </div>
            <div>
                <SuperSelect options={["x", "y", "z"]} value={"y"}/>
                <span style={{fontWeight: "bold"}}>Select</span>
            </div>
            <div>
                <SuperRadio name={"radio"} options={["x", "y", "z"]} value={"y"}/>
                <span style={{fontWeight: "bold", marginLeft: "10px"}}>Radio</span>
            </div>
            <div>
                <SuperRange value={50}/>
                <span style={{fontWeight: "bold"}}>Range</span>
            </div>
        </div>
    );
};