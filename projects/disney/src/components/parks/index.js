import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSegmentedControl } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'

@inject('contentStore')
@observer
class Parks extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(value) {
    const { contentStore } = this.props
    contentStore.setPark(value)
  }
  render () {
    const { contentStore: { parkTitles, currentLng, currentParkIndex } } = this.props
    return (
      <View className='parks'>
        <AtSegmentedControl
          values={parkTitles[currentLng].slice()}
          onClick={this.handleClick}
          current={currentParkIndex}
        />
      </View>
    )
  }
}

export default Parks
