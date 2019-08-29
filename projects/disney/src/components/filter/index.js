import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components'
import { AtSegmentedControl, AtDivider, AtSwitch } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'

@inject('contentStore')
@observer
class Filter extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleTypeFilter = this.handleTypeFilter.bind(this)
  }
  handleClick(value) {
    const { contentStore } = this.props
    contentStore.setPark(value)
  }
  handleTypeFilter(type, value) {
    console.log(type, value)
  }
  render () {
    const { contentStore: { parkTitles, currentLng, currentParkIndex, types, typesTitles, typesFilter, statusBarHeight } } = this.props
    const titles = typesTitles[currentLng]
    const filterTop = (statusBarHeight + 44) + 'px';
    return (
      <View className='filter' style={{ top: filterTop}}>
        <AtSegmentedControl
          values={parkTitles[currentLng].slice()}
          onClick={this.handleClick}
          current={currentParkIndex}
        />
        <AtDivider lineColor='#DDD' />
        {types.slice().map(type => (
          <AtSwitch key={type} title={titles[type]} checked={typesFilter[type]} onChange={value => this.handleTypeFilter(type, value)} />
        ))}
      </View>
    )
  }
}

export default Filter
