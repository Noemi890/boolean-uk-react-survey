import { useState } from "react";
import { Radio } from "./Radio.jsx";
import { Checkbox } from "./Checkbox.jsx";
import { text, initialState, checkboxes } from "../vars/vars";
import AnswersList from "./AnswersList.jsx";

// My solution is a lot complicated than it should be
// Probably I'm going to get back at this during summer break and refactor it

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formDetails, setFormDetails] = useState(initialState)
  const [answersList, setAnswersList] = useState([])

  const handleChange = event => {
   const {name, value, checked, type} = event.target
    if (type === 'checkbox') {
      if (!checked) {
        const index = formDetails.timeSpent.indexOf(value)
        const timeSpent = formDetails.timeSpent.slice(0)
        timeSpent.splice(index, 1)
        setFormDetails({...formDetails, timeSpent})
      }
      else {
        setFormDetails({...formDetails, timeSpent: [...formDetails.timeSpent, value]})
      }
    }
    else {
    setFormDetails({...formDetails, [name]: value})
    }
  }

  const onSubmit = event => {
    event.preventDefault()
    setAnswersList([...answersList, formDetails])
    setFormDetails(initialState)
    checkboxes.forEach(check => check.checked = false)
    event.target.reset()
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList}/>
      </section>
      <section className="main__form">
        {
        <form className="form" onSubmit={onSubmit}>
          <h2>{text.title}</h2>
          <div className="form__group radio">
            <h3>{text.radioTitle}</h3>
            <ul>
              <Radio handleChange={handleChange}/>
            </ul>
          </div>
          <div className="form__group">
            <h3>{text.checkTitle}</h3>
            <ul>
              <Checkbox 
                handleChange={handleChange}/>              
            </ul>
          </div>
          <label>
            {text.textTitle}
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={handleChange}>
            </textarea>
          </label>
          <label>
            {text.username}
            <input
            type="text"
            name="username"
            value={formDetails.username} 
            onChange={handleChange}
            />
          </label>
          <label>
            {text.email}
            <input
              type="email"
              name="email"
              value={formDetails.email} 
              onChange={handleChange}
            />
          </label>
            <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
        }
      </section>
    </main>
  )
}

export default Main;
