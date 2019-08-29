import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'

@inject('contentStore')
@observer
class Nav extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.contentStore.toggleFilter();
  }
  render () {
    const { contentStore: { parkTitles, currentLng, currentParkIndex, statusBarHeight } } = this.props
    return (
      <View className='nav' style={{ paddingTop: statusBarHeight + 'px'}}>
        <AtNavBar
          onClickLeftIcon={this.handleClick}
          color='#000'
          title={parkTitles[currentLng][currentParkIndex]}
          leftIconType='filter'
        />
      </View>
    )
  }
}

export default Nav
