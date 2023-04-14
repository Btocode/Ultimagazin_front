import {MdSearch} from 'react-icons/md'

const Search = ({className}) => {
  return (
    <div className={`w-[300px] sm:w-full h-[40px] mx-auto relative text-black bg-secondary ${className} rounded-full`}>
          <input
            className=" w-full h-full border-1 rounded-full bg-transparent outline-none  px-4 border border-white "
            type="text"
            id="text"
            name="text"
            placeholder="search here"
          />
        <MdSearch className="absolute top-1 right-2 text-3xl text-primary " />
    </div>
  )
}

export default Search