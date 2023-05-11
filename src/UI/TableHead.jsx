import React from 'react'

const TableHead = ({className, children}) => {
  return (
    <th className={`${className} py-3 px-4`}>{children}</th>
  )
}

export default TableHead