import Taro, { Component } from '@tarojs/taro'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'

@inject('contentStore')
@observer
class Parks extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleClick(value) {
    const { contentStore } = this.props
    contentStore.setPark(value)
    contentStore.toggleParks()
  }
  handleCancel() {
    const { contentStore } = this.props
    contentStore.toggleParks()
  }
  render () {
    const { contentStore: { parkTitles, parksShow, currentLng, currentParkIndex, cancelText } } = this.props
    return (
      <AtActionSheet isOpened={parksShow} cancelText={cancelText[currentLng]} onCancel={this.handleCancel}>
        {parkTitles[currentLng].slice().map((park, index) => (
          <AtActionSheetItem key={park} onClick={() => this.handleClick(index)}>
            {park} {currentParkIndex == index ? '✅' : null}
          </AtActionSheetItem>
        ))}
      </AtActionSheet>
    )
  }
}

export default Parks
