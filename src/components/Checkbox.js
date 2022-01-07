import React, {useState} from 'react'; 

function Checkbox(props) {
    const {index, ingredient, togglePreference} = props;
    const [checked, setChecked] = useState(false); 

    const handleChange = () => { 
      console.log(checked)
      setChecked(!checked); 
      // togglePreference(ingredient); 
      
    }; 

    return (
      <fieldset id={'checkbox'+index} key={index} className="space-y-5">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id={index}
                            name="checkBoxItem"
                            onChange={handleChange()}
                            type="checkbox"
                            className="focus:ring-brand-orange h-4 w-4 text-brand-orange border-gray-300 rounded" 
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={index} className="font-medium text-gray-700">
                            {ingredient}
                          </label>
                        </div>
                      </div>
                    </fieldset>
    )
  }

export default Checkbox;
  