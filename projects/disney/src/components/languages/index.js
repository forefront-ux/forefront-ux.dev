import Taro, { Component } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'

@inject('contentStore')
@observer
class Languages extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(value) {
    const { contentStore } = this.props
    contentStore.setLng(value)
  }
  render () {
    const { contentStore: { languageTitles, currentLngIndex } } = this.props
    return (
      <AtTabBar
        fixed
        tabList={languageTitles.slice()}
        onClick={this.handleClick}
        current={currentLngIndex}
      />
    )
  }
}

export default Languages
