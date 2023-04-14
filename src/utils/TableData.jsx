const TableData = ({children, className}) => {
    return (
      <td className={` ${className} py-2 px-4 whitespace-nowrap`}>{children}</td>
    )
  }
  
  export default TableData