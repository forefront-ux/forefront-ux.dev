import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'

class AttractionItems extends Component {
  renderDefiniton(definitions) {
    if (definitions) {
      return (
        <View className='definition'>
          {definitions.slice().map(definition => (
            <View key={`${definition.name}${definition.value}`}>{definition.name}: {definition.value}</View>
          ))}
        </View>
      )
    }
    return null;
  }
  render () {
    const { items, type } = this.props
    let clsName = 'list-item'
    if (type == 'show') {
      clsName += ' list-item show'
    }
    if (type == 'character') {
      clsName += ' list-item character'
    }
    return items && items.map(item => (
      <View className={clsName} key={`${item.area}${item.name}`}>
        <Image className='list-image' lazyLoad mode='aspectFill' src={item.src} alt={item.alt} />
        <View className='list-text'>
          <View className='list-item-name'>{item.name}</View>
          {item.desc ? <View className='list-item-desc'>{item.desc}</View> : null}
          {this.renderDefiniton(item.definitions)}
          <View className='list-item-hot'>
            {item.iconTag && type == 'attraction' ? <Text className='list-item-fastpass'>FASTPASS</Text> : null}
            {item.iconTag && type != 'attraction' ? <Text className='list-item-fastpass'>{item.iconTag}</Text> : null}
            {item.new ? <Text className='list-item-new'>NEW</Text> : null}
          </View>
        </View>
      </View>
    ))
  }
}

export default AttractionItems
