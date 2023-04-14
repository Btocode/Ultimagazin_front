
const TextAreaField = ({name, label, required, value, setValue}) => {
  return (
    <div className="flex flex-col w-full my-2">
        <label htmlFor={name} className=' capitalize px-1 tracking-wide'>{label}</label>
        <textarea 
        name={name}
        cols="30" 
        rows="4"
        className={`outline-none w-full  px-4 py-3 rounded-lg`}
        required={required}
        value={value}
        onChange={setValue}
        ></textarea>

    </div>
  )
}

export default TextAreaField