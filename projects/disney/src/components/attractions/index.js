import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtAccordion } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import AttractionItems from '../attraction-items'
import './index.scss'

@inject('contentStore')
@observer
class Attractions extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (index, value) {
    this.setState({
      [index]: value
    })
  }
  render () {
    const { contentStore: { currentLng, currentPark } } = this.props
    const results = this.props.contentStore.getAttractions(currentLng, currentPark);
    return (
      <View className='list'>
        {results.map(result => (
          <AtAccordion
            key={result.id}
            open={this.state[result.id]}
            onClick={value => this.handleClick(result.id, value)}
            title={result.name}
          >
            <AttractionItems attractions={result.attractions} />
          </AtAccordion>
        ))}
      </View>
    )
  }
}

export default Attractions
