import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Languages from '../../components/languages'
import Parks from '../../components/parks'
import Attractions from '../../components/attractions'
import './index.scss'

@inject('contentStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: 'Resort Guide'
  }

  render () {
    return (
      <View className='land'>
        <Parks />
        <Attractions />
        <Languages />
      </View>
    )
  }
}

export default Index
