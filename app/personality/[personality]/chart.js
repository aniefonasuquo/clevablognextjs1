'use client'

import { PieChart } from 'react-minimal-pie-chart';

export default function Chart ({equity, bonds, cash}) {

  return (
    <>
          <PieChart data={[
                  { title: 'equity', value: equity, color: 'grey' },
                  { title: 'bonds', value: bonds, color: 'rgb(21, 15, 102' },
                  { title: 'cash', value: cash, color: 'green' },
                ]}
              />
    </>
  )
}