import { useState } from "react";
import { checkboxes } from "../vars/vars";

export const Checkbox = ({handleChange}) => {

   const changeCheck = (event, check) => {
    const myValue = event.target.checked
    check.checked = myValue
    console.log('myValue', myValue)
   }

    return (
        checkboxes.map((check, index) => {
            return (
                <li key={index}>
                  <label>
                    <input 
                      name="spend-time"
                      type="checkbox"
                      value={check.value}
                      checked={check.checked}
                      onChange={(event) => {
                        changeCheck(event, check)
                        handleChange(event)}}/>
                      {check.text}
                  </label>
                </li>
            )
        })
    )
}