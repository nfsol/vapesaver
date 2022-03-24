import React from 'react'

const Result = (props) => {
  //juicePerDay={juicePerDay} juicePrice={juicePrice} packPrice={packPrice} packsPerDay={packsPerDay}
  const perWeekSavings = props.packsPerWeek * props.packPrice - (props.juicePerWeek * props.juicePrice);
  return (
    <div className='container'>
      <section className='resultSection'>
      <h2>Tomorrow, you could save: {perWeekSavings / 7}</h2>
      <h2>This week, you could save: {perWeekSavings}</h2>
      <h2>This month, you could save: {perWeekSavings * 4}</h2>
      <h2>This year, you could save: {perWeekSavings * 52}</h2>
      </section>
      </div>
  )
}

export default Result