import Taro, { Component } from '@tarojs/taro'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'
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
    contentStore.toggleParks()
  }
  render () {
    const { contentStore: { parkTitles, parksShow, currentLng, cancelText } } = this.props
    return (
      <AtActionSheet isOpened={parksShow} cancelText={cancelText[currentLng]}>
        {parkTitles[currentLng].slice().map((park, index) => (
          <AtActionSheetItem key={park} onClick={() => this.handleClick(index)}>
            {park}
          </AtActionSheetItem>
        ))}
      </AtActionSheet>
    )
  }
}

export default Parks
