'use client'

import styles from './styles.module.css'
import React, { useState } from "react";
import { PieChart } from 'react-minimal-pie-chart';


function SocialSharing() {

  const [amount, setamount] = useState(0.00)

  function setInput (e) {

  }
  // .toLocaleString('en-US', {maximumFractionDigits: 2, minimumFractionDigits: 2})

  return (
    <>

    <div className={styles.pieChartContainer}>
    <PieChart className={styles.pieChart}
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>;
  </div>

    <br/>
    </>
  )
}

export default SocialSharing;
