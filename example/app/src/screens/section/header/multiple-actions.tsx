import React from 'react'
import {HeaderWithMultipleActions as _HeaderWithMultipleActions} from 'caracat-react-native-kitty'
import { HeaderDecorator } from '../decorator'

const HeaderWithMultipleActions = () => {
  return (
    <HeaderDecorator>
    <_HeaderWithMultipleActions/>
    </HeaderDecorator>
  )
}

export default HeaderWithMultipleActions
