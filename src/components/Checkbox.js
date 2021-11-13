function Checkbox(props) {
    const {label, alreadyGot} = props;

    return (
      <fieldset className="space-y-5">
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="item"
              name="item"
              type="checkbox"
              className="focus:ring-brand-orange h-4 w-4 text-brand-orange border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label className={"font-medium text-gray-700 "+ (alreadyGot ? 'line-through' : '')}>
              {label}
            </label>
          </div>
        </div>
      </fieldset>
    )
  }

export default Checkbox;
  