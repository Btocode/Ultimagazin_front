
const TableData = ({children, className}) => {
  return (
    <td className={` ${className} py-[15px] px-4`}>{children}</td>
  )
}

export default TableData