import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'

class AttractionItems extends Component {
  render () {
    const { attractions } = this.props
    return attractions.map(attraction => (
      <View className='list-item' key={attraction.name}>
        <Image className='list-image' lazyLoad mode='aspectFill' src={attraction.src} alt={attraction.alt} />
        <View className='list-text'>
          <View className='list-item-name'>{attraction.name}</View>
          {attraction.desc ? <View className='list-item-desc'>{attraction.desc}</View> : null}
          <View className='list-item-hot'>
            {attraction.fastpass ? <Text className='list-item-fastpass'>FASTPASS</Text> : null}
            {attraction.new ? <Text className='list-item-new'>NEW</Text> : null}
          </View>
        </View>
      </View>
    ))
  }
}

export default AttractionItems
