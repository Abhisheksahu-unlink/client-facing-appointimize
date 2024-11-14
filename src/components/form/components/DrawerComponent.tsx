import { Drawer } from 'antd';
import React from 'react';

const DrawerComponent = ({children,open=false, onClose, title}:any) => {
    return (
        <Drawer title={title} onClose={onClose} open={open}>
          {children}
        </Drawer>
    );
}

export default DrawerComponent;
