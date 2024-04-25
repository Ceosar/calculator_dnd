import React from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { computeValue, displayValue, setToggleBtn } from "../../services/store/store";

import { EyeOutlined, CodeOutlined } from "@ant-design/icons";

import classes from "./ToggleBtn.module.css"

const ToggleBtn: React.FC = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state: any) => state.mode);

    const handleClickBtn = () => {
        dispatch(setToggleBtn(!mode));
        localStorage.setItem("mode", JSON.stringify(!mode));
        dispatch(displayValue(""));
        dispatch(computeValue(""));
    };

    return (
        <button
        className={`${classes.toggle__wrapper} ${mode ? classes.on : classes.off} `}
        onClick={() => handleClickBtn()}
        >
        {mode ? (
            <div className={classes.toggle__on}>
                <EyeOutlined color="#eb2f96" />
            </div>
        ) : (
            <div className={classes.toggle__off}>
                <CodeOutlined />
            </div>
        )}
        </button>
    );
};

export default ToggleBtn;
