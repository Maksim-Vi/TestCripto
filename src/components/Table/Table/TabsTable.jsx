import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const TabsTable = (props) => {

  const tabsIndex = React.useRef(['USD','EUR','GBP'])
 
  return (
    <Box className='tabs_container'>{tabsIndex.current.map((tab,index)=>{
      const isActive = props.actibeTabIndex === tab
      return <Typography key={`tab_name_${index}`} 
                         className={`tab_name ${isActive && 'activeTab'}`} 
                         onClick={()=>{props.changeTabIndex(tab)}}
                         variant="span" component="div" gutterBottom>{tab}</Typography>
    })}</Box>
  )
}

export default TabsTable