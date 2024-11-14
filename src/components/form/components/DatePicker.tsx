import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const DatePickerComponent: React.FC = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
  </Space>
);

export default DatePickerComponent;