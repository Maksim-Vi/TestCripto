import { Container } from '@mui/system'
import React from 'react'
import Nav from './HeaderNav/Nav'
import HeaderContent from './HeaderContent/index'
import'./header.scss';
import { TablesData } from '../Table';
import InfoSlider from './HeaderContent/InfoSlider';

const Header = () => {
  return (
    <Container className='header_container' maxWidth="sx" >
        <Nav />
        <InfoSlider />
        <HeaderContent />
        <TablesData />
    </Container>
  )
}

export default Header