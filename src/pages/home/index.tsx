import React, { useState } from 'react'
import HeaderComponent from '../../components/header/HeaderComponent'
import CarouselView from '../../components/carousel/Carousel'
import Form from '../../components/form/Form'
import DrawerComponent from '../../components/form/components/DrawerComponent'
import FooterComponent from '../../components/footer/FooterComponent'
import CompanyProfile from '../../components/about/CompanyProfile'

const HomePage = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <DrawerComponent {...{open,onClose,title:"Cart"}}>
        jkhijijuhg
      </DrawerComponent>
      <HeaderComponent showDrawer={showDrawer} />
      <CarouselView/>
      <Form/>
      <CompanyProfile/>
      <FooterComponent/>
    </div>
  )
}

export default HomePage
