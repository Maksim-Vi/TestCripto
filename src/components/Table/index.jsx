import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { checkIsSubscribedTickerBySymbol } from '../../API/utils'
import CriptoTable from './Table/CriptoTable'
import TabsTable from './Table/TabsTable'
import './tables.scss'
import { filterTabsData } from './utils'

export const TablesData = () => {

  const criptoTables = useSelector((state) => state.criptoTables.Tables)

  let [criptoTableData, setCriptoTableData] = useState(criptoTables)
  let [actibeTabIndex, setActiveTabIndex] = useState('USD')

  const changeTabIndex = (tabName) =>{
    setActiveTabIndex(tabName)
  }

  useEffect(()=>{
    setCriptoTableData(criptoTables)
  },[criptoTables])

  useEffect(()=>{
    checkIsSubscribedTickerBySymbol(actibeTabIndex)
  },[actibeTabIndex])


  return (
    <Container className="cripto_table_container" maxWidth="lg">
        <TabsTable actibeTabIndex={actibeTabIndex} changeTabIndex={changeTabIndex}/>
        <CriptoTable criptoTableData={filterTabsData(criptoTableData,actibeTabIndex)} actibeTabIndex={actibeTabIndex}/>
    </Container>
  )
}
