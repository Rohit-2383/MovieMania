
import './tabSwitcherStyle.scss'

import React, { useState } from 'react'

const Tabswitcher = ({data,handleSwitch}) => {

    const [selectedTab,setSelectedTab]=useState(0)
    const [left,setLeft]=useState(0)

    function activeTab(tab,idx){
        setLeft(idx*100)
        setTimeout(()=>{
            setSelectedTab(idx)
        },400)
        handleSwitch(tab,idx)
    }

  return (
    <div className="switchingTabs">
        <div className="tabItems">
            {
                data.map((tab,idx)=>(
                    <span key={idx} 
                    className={`tabItem ${selectedTab===idx?'active':''}`}
                    onClick={()=>activeTab(tab,idx)}
                    >
                        {tab}
                    </span>
                ))
            }
            <span className='movingBg' style={{left:left}}></span>
        </div>
    </div>
  )
}

export default Tabswitcher