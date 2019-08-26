import Taro, { Component } from '@tarojs/taro'
import { AtSegmentedControl } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'

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
      <AtSegmentedControl
        values={parkTitles[currentLng].slice()}
        onClick={this.handleClick}
        current={currentParkIndex}
      />
    )
  }
}

export default Parks
