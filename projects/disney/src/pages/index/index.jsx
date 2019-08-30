import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Attractions from '../../components/attractions'
import Nav from '../../components/nav'
import Filters from '../../components/filters'

@inject('contentStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: 'Resort Guide'
  }

  render () {
    const { contentStore: { statusBarHeight }} = this.props;
    const pagePaddingTop = (statusBarHeight + 40) + 'px';
    return (
      <View style={{ paddingTop: pagePaddingTop }}>
        <Nav />
        <Attractions />
        <Filters />
      </View>
    )
  }
}

export default Index
