
import { Select } from 'antd';

import React from 'react'

const SelectComponents = ({placeholder, options}:any) => {
  return (
    <Select
    showSearch
    mode="multiple"
      allowClear
    placeholder={placeholder}
    filterOption={(input, option:any) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={options}
  />
  )
}

export default SelectComponents
