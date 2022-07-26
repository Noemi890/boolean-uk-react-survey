import { radioButtons } from '../vars/vars'

export const Radio = ({handleChange}) => {
  return (
      <>
      {
        radioButtons.map((btn, index) => {
          return (
              <li key={index}>
                <input 
                  id={btn.id}
                  type="radio"
                  name='color'
                  value={btn.value}
                  onChange={handleChange}/>
                <label htmlFor={btn.id}>{btn.value}</label>
              </li>
          )
        })
      }
      </>
  )
}