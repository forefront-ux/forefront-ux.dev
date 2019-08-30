import Taro, { Component } from '@tarojs/taro'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'

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
    contentStore.toggleLanguages()
  }
  render () {
    const { contentStore: { languageTitles, languagesShow, currentLng, cancelText } } = this.props
    return (
      <AtActionSheet isOpened={languagesShow} cancelText={cancelText[currentLng]}>
        {languageTitles.slice().map((language, index) => (
          <AtActionSheetItem key={language.title} onClick={() => this.handleClick(index)}>
            {language.title}
          </AtActionSheetItem>
        ))}
      </AtActionSheet>
    )
  }
}

export default Languages
