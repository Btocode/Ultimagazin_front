import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

const Modal = ({ items, modal, setModal }) => {
  const modalRef = useRef("");

  // out side disable functionality
  useEffect(() => {
    const closeModal = (e) => {
      if (!modalRef.current?.contains(e.target)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", closeModal);

    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, []);

  return (
    <div
      className={` ${
        modal ? " scale-100" : " scale-0"
      } duration-500 transition-all absolute top-0 left-0 bottom-0 right-0 w-full h-screen flex flex-col items-center justify-center bg-dark/20`}
    >
      <article
        ref={modalRef}
        className="sm:w-full md:w-[400px] w-[500px] p-4 rounded-lg shadow-lg bg-light relative"
      >
        <div className="flex flex-col ">
          {items.map((item) => (
            <Modal.List key={item.id} path={item.path}>
              {item.name}
            </Modal.List>
          ))}
        </div>
        <MdOutlineClose
          onClick={() => setModal(false)}
          className=" absolute right-0 top-0 -translate-y-8 translate-x-8 text-4xl cursor-pointer bg-dark/30 rounded-full"
        />
      </article>
    </div>
  );
};

export default Modal;

Modal.List = ({ children, path }) => {
  return (
    <Link
      className=" cursor-pointer capitalize font-medium tracking-wide py-3 border-b  text-center inline-block hover:bg-primary hover:bg-opacity-30 rounded-lg"
      to={path}
    >
      {children}
    </Link>
  );
};
