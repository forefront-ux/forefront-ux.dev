import Taro, { Component } from '@tarojs/taro'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'

@inject('contentStore')
@observer
class Categories extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(value) {
    console.log(value)
    this.props.contentStore.toggleCategroies()
  }
  render () {
    const { contentStore: { typesTitles, types, filterShow, currentLng, cancelText } } = this.props
    return (
      <AtActionSheet isOpened={filterShow} cancelText={cancelText[currentLng]}>
        {types.slice().map(type => (
          <AtActionSheetItem key={type} onClick={this.handleClick}>
            {typesTitles[currentLng][type]}
          </AtActionSheetItem>
        ))}
      </AtActionSheet>
    )
  }
}

export default Categories
