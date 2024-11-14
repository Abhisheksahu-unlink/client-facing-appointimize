import { Button, Col, Row } from 'antd';
import React from 'react'
import SelectComponent from './components/SelectComponents';
import TimePickerComponent from './components/TimePicker';
import DatePickerComponent from './components/DatePicker';

const Form = () => {
  const staff =
    [
      { value: '1', label: 'Jack' },
      { value: '2', label: 'Lucy' },
      { value: '3', label: 'Tom' },
    ]
    const service =
    [
      { value: '1', label: 'Hair Cutting' },
      { value: '2', label: 'Facial' },
      { value: '3', label: 'Rebonding' },
    ]

    const CustomCol = ({children}:any)=>{
        return(

         
            <Col xs={{ flex: '100%' }}
            sm={{ flex: '100%' }}
            md={{ flex: '50%' }}
            lg={{ flex: '25%' }}
            xl={{ flex: '25%' }} className='shedule_appointment-row-column'>   {children}</Col>
        )
    }
  return (
    <>
    <div className="container pt-4 pb-4 mr-auto ml-auto mb-10">
        <h3 className='text-center schedule-appointment-heading'>Please Schedule your Appontment</h3>
      <Row className='shedule_appointment-row'>
      <CustomCol className='shedule_appointment-row-column'><SelectComponent placeholder="Select Service" options={service}/></CustomCol>
      <CustomCol className='shedule_appointment-row-column'><SelectComponent placeholder="Select Staff" options={staff}/></CustomCol>
      <CustomCol className='shedule_appointment-row-column'><DatePickerComponent/></CustomCol>
      <CustomCol className='shedule_appointment-row-column'><TimePickerComponent/></CustomCol>
      <Button className='booknow-button' type="primary">Add To Cart</Button>
    </Row>
    </div>
    </>
  )
}

export default Form;
