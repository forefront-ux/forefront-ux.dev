import { observable } from 'mobx'
import dataLandAttractionsCN from '../data/land/attractions_cn'
import dataLandAttractionsEN from '../data/land/attractions_en'
import dataLandAttractionsJP from '../data/land/attractions_jp'
import dataSeaAttractionsCN from '../data/sea/attractions_cn'
import dataSeaAttractionsEN from '../data/sea/attractions_en'
import dataSeaAttractionsJP from '../data/sea/attractions_jp'
import dataLandAttractionsWFCN from '../data/land/attractions_with_fastpass_cn'
import dataLandAttractionsWFEN from '../data/land/attractions_with_fastpass_en'
import dataLandAttractionsWFJP from '../data/land/attractions_with_fastpass_jp'
import dataSeaAttractionsWFCN from '../data/sea/attractions_with_fastpass_cn'
import dataSeaAttractionsWFEN from '../data/sea/attractions_with_fastpass_en'
import dataSeaAttractionsWFJP from '../data/sea/attractions_with_fastpass_jp'
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

const contentStore = observable({
  languages: ['en', 'cn', 'jp'],
  languageTitles: [
    { title: 'English' },
    { title: '简体中文' },
    { title: '日本语' }
  ],
  currentLngIndex: 0,
  currentLng: 'en',
  parks: ['land', 'sea'],
  parkTitles: {
      en: ['Disney Land', 'Disney Sea'],
      cn: ['迪士尼乐园', '迪士尼海洋'],
      jp: ['東京ディズニーランド', '東京ディズニーシー']
  },
  currentParkIndex: 0,
  currentPark: 'land',
  data: {
    en: {
      land: {
        attractions: dataLandAttractionsEN,
        attractions_with_fastpass: dataLandAttractionsWFEN,
        meet_charaters: dataLandMeetCharactersEN,
        show: dataLandShowEN
      },
      sea: {
        attractions: dataSeaAttractionsEN,
        attractions_with_fastpass: dataSeaAttractionsWFEN,
        meet_charaters: dataSeaMeetCharactersEN,
        show: dataSeaShowEN
      }
    },
    cn: {
      land: {
        attractions: dataLandAttractionsCN,
        attractions_with_fastpass: dataLandAttractionsWFCN,
        meet_charaters: dataLandMeetCharactersCN,
        show: dataLandShowCN
      },
      sea: {
        attractions: dataSeaAttractionsCN,
        attractions_with_fastpass: dataSeaAttractionsWFCN,
        meet_charaters: dataSeaMeetCharactersCN,
        show: dataSeaShowCN
      }
    },
    jp: {
      land: {
        attractions: dataLandAttractionsJP,
        attractions_with_fastpass: dataLandAttractionsWFJP,
        meet_charaters: dataLandMeetCharactersJP,
        show: dataLandShowJP
      },
      sea: {
        attractions: dataSeaAttractionsJP,
        attractions_with_fastpass: dataSeaAttractionsWFJP,
        meet_charaters: dataSeaMeetCharactersJP,
        show: dataSeaShowJP
      }
    },
  },
  setLng(index) {
    this.currentLngIndex = index < 0 ? 0 : index;
    this.currentLng = index < 0 ? 'en' : this.languages[index];
  },
  setPark(index) {
    this.currentParkIndex = index < 0 ? 0: index;
    this.currentPark = index < 0 ? 'land' : this.parks[index];
  }
})
export default contentStore
