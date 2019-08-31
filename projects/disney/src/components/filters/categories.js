import Taro, { Component } from '@tarojs/taro'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'

@inject('contentStore')
@observer
class Categories extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleClick(value) {
    const { contentStore } = this.props
    contentStore.setTypeFilter(value)
    contentStore.toggleCategroies()
  }
  handleCancel() {
    const { contentStore } = this.props
    contentStore.toggleCategroies()
  }
  render () {
    const { contentStore: { typesFilter, typesTitles, types, filterShow, currentLng, cancelText } } = this.props
    return (
      <AtActionSheet isOpened={filterShow} cancelText={cancelText[currentLng]} onCancel={this.handleCancel}>
        {types.slice().map(type => (
          <AtActionSheetItem key={type} onClick={() => this.handleClick(type)}>
            {typesTitles[currentLng][type]} {typesFilter[type] ? '✅' : null}
          </AtActionSheetItem>
        ))}
      </AtActionSheet>
    )
  }
}

export default Categories
