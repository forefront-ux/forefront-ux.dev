import { observable } from 'mobx'
import Taro from '@tarojs/taro'
import groupBy from 'lodash/groupBy'
import dataLandAttractionsCN from '../data/land/attractions_cn'
import dataLandAttractionsEN from '../data/land/attractions_en'
import dataLandAttractionsJP from '../data/land/attractions_jp'
import dataSeaAttractionsCN from '../data/sea/attractions_cn'
import dataSeaAttractionsEN from '../data/sea/attractions_en'
import dataSeaAttractionsJP from '../data/sea/attractions_jp'
import dataLandMeetCharactersCN from '../data/land/meet_characters_cn'
import dataLandMeetCharactersEN from '../data/land/meet_characters_en'
import dataLandMeetCharactersJP from '../data/land/meet_characters_jp'
import dataSeaMeetCharactersCN from '../data/sea/meet_characters_cn'
import dataSeaMeetCharactersEN from '../data/sea/meet_characters_en'
import dataSeaMeetCharactersJP from '../data/sea/meet_characters_jp'
import dataLandShowCN from '../data/land/show_cn'
import dataLandShowEN from '../data/land/show_en'
import dataLandShowJP from '../data/land/show_jp'
import dataSeaShowCN from '../data/sea/show_cn'
import dataSeaShowEN from '../data/sea/show_en'
import dataSeaShowJP from '../data/sea/show_jp'
import dataLandAreaCN from '../data/land/area_cn'
import dataLandAreaEN from '../data/land/area_en'
import dataLandAreaJP from '../data/land/area_jp'
import dataSeaAreaCN from '../data/sea/area_cn'
import dataSeaAreaEN from '../data/sea/area_en'
import dataSeaAreaJP from '../data/sea/area_jp'

const systemInfo = Taro.getSystemInfoSync()

const contentStore = observable({
  statusBarHeight: systemInfo.statusBarHeight,
  cancelText: {
    en: 'Cancel',
    cn: '取消',
    jp: 'キャンセル'
  },
  languages: ['en', 'cn', 'jp'],
  languageTitles: [
    { title: 'English' },
    { title: '简体中文' },
    { title: '日本语' }
  ],
  currentLngIndex: 1,
  currentLng: 'cn',
  languagesShow: false,
  parks: ['land', 'sea'],
  parkTitles: {
    en: ['Disney Land', 'Disney Sea'],
    cn: ['迪士尼乐园', '迪士尼海洋'],
    jp: ['ディズニーランド', 'ディズニーシー']
  },
  currentParkIndex: 1,
  currentPark: 'sea',
  parksShow: false,
  categories: {
    en: 'Interesting',
    cn: '兴趣',
    jp: '楽しみ方'
  },
  types: ['attraction', 'show', 'character'],
  typesTitles: {
    en: {
      attraction: 'Attractions',
      show: 'Parades and Shows',
      character: 'Character Greetings'
    },
    cn: {
      attraction: '游乐设施',
      show: '游行娱乐表演',
      character: '明星迎宾会'
    },
    jp: {
      attraction: 'アトラクション',
      show: 'パレード/ショー',
      character: 'キャラクターグリーティング'
    }
  },
  typesFilter: {
    attraction: true,
    show: true,
    character: true
  },
  filterShow: false,
  data: {
    en: {
      land: {
        area: dataLandAreaEN,
        attractions: dataLandAttractionsEN,
        meet_charaters: dataLandMeetCharactersEN,
        show: dataLandShowEN
      },
      sea: {
        area: dataSeaAreaEN,
        attractions: dataSeaAttractionsEN,
        meet_charaters: dataSeaMeetCharactersEN,
        show: dataSeaShowEN
      }
    },
    cn: {
      land: {
        area: dataLandAreaCN,
        attractions: dataLandAttractionsCN,
        meet_charaters: dataLandMeetCharactersCN,
        show: dataLandShowCN
      },
      sea: {
        area: dataSeaAreaCN,
        attractions: dataSeaAttractionsCN,
        meet_charaters: dataSeaMeetCharactersCN,
        show: dataSeaShowCN
      }
    },
    jp: {
      land: {
        area: dataLandAreaJP,
        attractions: dataLandAttractionsJP,
        meet_charaters: dataLandMeetCharactersJP,
        show: dataLandShowJP
      },
      sea: {
        area: dataSeaAreaJP,
        attractions: dataSeaAttractionsJP,
        meet_charaters: dataSeaMeetCharactersJP,
        show: dataSeaShowJP
      }
    },
  },
  setLng(index) {
    this.currentLngIndex = index < 0 ? 0 : index
    this.currentLng = index < 0 ? 'en' : this.languages[index]
  },
  setPark(index) {
    this.currentParkIndex = index < 0 ? 0: index
    this.currentPark = index < 0 ? 'land' : this.parks[index]
  },
  setTypeFilter(filter) {
    this.typesFilter = {
      ...this.typesFilter,
      [filter]: !this.typesFilter[filter]
    }
  },
  toggleLanguages() {
    this.languagesShow = !this.languagesShow;
  },
  toggleParks() {
    this.parksShow = !this.parksShow;
  },
  toggleCategroies() {
    this.filterShow = !this.filterShow;
  },
  getTabbarText(currentLng) {
    return [
      {
        title: this.categories[currentLng]
      },
      {
        title: this.parkTitles[currentLng][this.currentParkIndex]
      },
      {
        title: this.languageTitles[this.currentLngIndex].title
      }
    ]
  },
  getAttractions(currentLng = 'en', currentPark = 'sea') {
    const areas = this.data[currentLng][currentPark].area
    const attractions = groupBy(this.data[currentLng][currentPark].attractions, 'area')
    const shows = groupBy(this.data[currentLng][currentPark].show, 'area')
    const characters = groupBy(this.data[currentLng][currentPark].meet_charaters, 'area')
    return areas.map(area => ({
      ...area,
      attractions: attractions[area.name] || [],
      shows: shows[area.name] || [],
      characters: characters[area.name] || []
    }))
  }
})
export default contentStore
