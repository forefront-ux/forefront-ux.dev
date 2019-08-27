import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtDivider } from 'taro-ui'
import './index.scss'

class AttractionItems extends Component {
  render () {
    const { attractions } = this.props
    return attractions.map(attraction => (
      <View className='list-item' key={attraction.name}>
        <Image className='list-image' mode='aspectFit' src={attraction.src} alt={attraction.alt} />
        <View className='list-item-name'>{attraction.name}</View>
        <View className='list-item-area'>{attraction.area}</View>
        <AtDivider />
      </View>
    ))
  }
}

export default AttractionItems
