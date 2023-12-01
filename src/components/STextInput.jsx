const STextInput = ( {val, onChange, placeHolder}) => {
  return (
        <input
          type="text"
          placeholder={placeHolder}
          value={val || ""}
          onChange={(e) => onChange(e.target.value)}
          className="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
        />
  )
}

export default STextInput