import { useCallback, useRef, useState, useEffect } from "react";

const TokenSelectBox = ({
  label,
  items,
  setItems,
  value,
  setValue,
  isTrue,
  setIsTrue,
  setId,
}) => {
  const closeRef = useRef(null);

  useEffect(() => {
    function closeFunction(e) {
      if (!closeRef.current.contains(e.target)) {
        setIsTrue(null);
      }
    }

    window.addEventListener("mousedown", closeFunction);

    return () => {
      window.removeEventListener("mousedown", closeFunction);
    };
  }, []);

 
  //   handle selection
  const handleSelection = (item) => {
    setValue(item)
  };


  return (
    <div
      className={`${
        isTrue ? "scale-100 origin-bottom" : "scale-0"
      } duration-500 absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center`}
    >
      <div
        ref={closeRef}
        className="sm:w-full w-[400px] mx-auto  bg-light rounded-lg p-4 shadow-2xl"
      >
        <h2 className="text-center capitalize font-bold  text-primary py-2">
          {value ?? label}
        </h2>
        <div
          className="h-[300px] overflow-y-scroll scroll-smooth capitalize text-primary"
        >
          {items?.length > 0 ?
            items.map((item, index) => (
              <p
                onMouseDown={() => handleSelection(item)}
                className=" px-3 py-3 border-b border-primary border-opacity-30 cursor-pointer hover:bg-primary hover:bg-opacity-40 rounded-lg"
                key={item?.id}
              >
                {item?.name}
              </p>
            )) : <p>Not Found</p>}
        </div>
      </div>
    </div>
  );
};

export default TokenSelectBox;
