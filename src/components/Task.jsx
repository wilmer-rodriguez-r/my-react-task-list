import { isValidElement } from "react";

export const Task = (props)=>{

    const {name, checked} = props;

    return (
        <li>
            <>
                <input type="checkbox" id="miCheckbox" checked={checked} readOnly/>
                <label htmlFor="miCheckbox" style={{textDecoration: checked ? 'line-through' : 'none' }}>{name}</label>
            </>
        </li>
    );
}