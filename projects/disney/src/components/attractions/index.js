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
      0: true,
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
      9: true,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (index, value) {
    this.setState({
      [index]: value
    })
  }
  render () {
    const { contentStore: { currentLng, currentPark, typesFilter: { attraction, show, character } } } = this.props
    const results = this.props.contentStore.getAttractions(currentLng, currentPark);
    if (show || attraction || character) {
      return (
        <View className='list'>
          {results.map(result => ((show && result.shows.length) || (attraction && result.attractions.length) || (character && result.characters.length)) && (
              <AtAccordion
                key={result.id}
                open={this.state[result.id]}
                onClick={value => this.handleClick(result.id, value)}
                title={result.name}
                hasBorder={false}
              >
                {show ? <AttractionItems items={result.shows} type='show' /> : null}
                {attraction ? <AttractionItems items={result.attractions} type='attraction' /> : null}
                {character  ? <AttractionItems items={result.characters} type='character' /> : null}
              </AtAccordion>
            ))
          }
        </View>
      )
    }
    return null;
  }
}

export default Attractions
