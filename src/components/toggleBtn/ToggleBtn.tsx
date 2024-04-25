import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { computeValue, displayValue, setToggleBtn } from "../../services/store/store";
import { useSelector } from "react-redux";


const ToggleBtn: React.FC = () => {
    const dispatch = useDispatch()
    const mode = useSelector((state:any) => state.mode);

    const handleClickBtn = () => {
        dispatch(setToggleBtn(!mode))
        localStorage.setItem("mode", JSON.stringify(!mode))
        dispatch(displayValue(""))
        dispatch(computeValue(""))
    }

    return (
    <>
        <button onClick={() => handleClickBtn()}>Calculator {mode ? "on" : "off"}</button>
    </>
    );
}

export default ToggleBtn;