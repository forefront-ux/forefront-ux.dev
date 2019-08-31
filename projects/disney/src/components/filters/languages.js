import Taro, { Component } from '@tarojs/taro'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'

@inject('contentStore')
@observer
class Languages extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleClick(value) {
    const { contentStore } = this.props
    contentStore.setLng(value)
    contentStore.toggleLanguages()
  }
  handleCancel() {
    const { contentStore } = this.props
    contentStore.toggleLanguages()
  }
  render () {
    const { contentStore: { languageTitles, languagesShow, currentLng, currentLngIndex, cancelText } } = this.props
    return (
      <AtActionSheet isOpened={languagesShow} cancelText={cancelText[currentLng]} onCancel={this.handleCancel}>
        {languageTitles.slice().map((language, index) => (
          <AtActionSheetItem key={language.title} onClick={() => this.handleClick(index)}>
            {language.title} {currentLngIndex == index ? '✅' : null}
          </AtActionSheetItem>
        ))}
      </AtActionSheet>
    )
  }
}

export default Languages
