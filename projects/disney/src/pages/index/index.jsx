import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Languages from '../../components/languages'
import Attractions from '../../components/attractions'
import Nav from '../../components/nav'
import Filter from '../../components/filter'

@inject('contentStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: 'Resort Guide'
  }

  render () {
    const { contentStore: { filterShow, statusBarHeight }} = this.props;
    const pagePaddingTop = (statusBarHeight + 40) + 'px';
    return (
      <View style={{ paddingTop: pagePaddingTop }}>
        <Nav />
        {filterShow ? <Filter /> : null}
        <Attractions />
        <Languages />
      </View>
    )
  }
}

export default Index
