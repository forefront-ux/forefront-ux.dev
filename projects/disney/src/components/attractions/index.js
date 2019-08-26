import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtDivider } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'

@inject('contentStore')
@observer
class Attractions extends Component {
  render () {
    const { contentStore: { data, currentLng, currentPark } } = this.props
    const attractions = data[currentLng][currentPark].attractions.slice();
    return (
      <View className='list'>
        {attractions.map(attraction => (
          <View className='list-item' key={attraction.name}>
            <View className='at-row'>
              <View className='at-col at-col__offset-1 at-col-2'>
                <Image className='list-image' src={attraction.src} alt={attraction.alt} />
              </View>
              <View className='at-col at-col__offset-1 at-col-6 at-col--wrap'>
                <View className='list-item-name'>{attraction.name}</View>
                <View className='list-item-area'>{attraction.area}</View>
              </View>
            </View>
            <AtDivider />
          </View>
        ))}
      </View>
    )
  }
}

export default Attractions
