const ToggleButton = ({ isToggle, setToggle }) => {
  return (
    <label
      htmlFor="toggle"
      className="bg-gray-300 shadow-sm border cursor-pointer relative w-20 h-10 rounded-full"
      onChange={(e) => setToggle(e.target.checked)}
    >
      <input type="checkbox" name="toggle" id="toggle" className="invisible" />
      <span
        className={`w-2/5 h-4/5  absolute rounded-full  ${
          isToggle ? "bg-primary left-11" : "bg-gray-600 left-1"
        }  top-1 transition-all duration-500`}
      />
    </label>
  );
};

export default ToggleButton;
