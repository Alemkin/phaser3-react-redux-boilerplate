import React from 'react'
import './index.scss'
import translations from '../../../translations'
import gameOptions from '../../../constants/gameOptions'
import { useSelector } from 'react-redux'

const t = translations.App

const style = {
  maxWidth: gameOptions.width,
  maxHeight: gameOptions.height
}

const App = () => {
  const clickedCount = useSelector((state) => state.counter.value)
  return (
    <div className='boilerplate-main' style={style}>
      <div aria-label='Counter tracking the amount of clicks on the floating image.' className='clicked-ui'>{`${t.clickImage} ${clickedCount} ${t.times}`}</div>
    </div>
  )
}

export default App
