import Taro, { Component } from '@tarojs/taro'
import { Block } from '@tarojs/components'
import { AtTabBar  } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import Languages from './languages'
import Categroies from './categories'
import Parks from './parks'
import './index.scss'

@inject('contentStore')
@observer
class Filters extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(value) {
    const { contentStore } = this.props;
    switch(value) {
      case 0:
        contentStore.toggleCategroies()
        break
      case 1:
        contentStore.toggleParks()
        break
      case 2:
        contentStore.toggleLanguages()
        break
      default:
        break
    }
  }
  render () {
    const { contentStore: { currentLng } } = this.props
    const tabList = this.props.contentStore.getTabbarText(currentLng);
    return (
      <Block>
        <AtTabBar
          fixed
          tabList={tabList.slice()}
          onClick={this.handleClick}
          current={-1}
        />
        <Categroies />
        <Parks />
        <Languages />
      </Block>
    )
  }
}

export default Filters
