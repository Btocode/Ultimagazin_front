const TableHead = ({ className, children }) => {
    return <th className={`${className} py-3 px-4 whitespace-nowrap`}>{children}</th>;
  };
  
  export default TableHead;