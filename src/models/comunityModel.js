
const data = [
  {
    id: 1,
    region: 'NORTHAMERICA',
    country: 'CANADA',
    name: '샐리',
    title: '정말 추천하는 곳',
    content: '내 인생의 전환점. 근처 마트 중 코스트코가 품질이나 가격면에서 가장 좋습니다. 추천합니다.',
    image: '',
    rating: 4.3,
    home: '홈스테이',
    airplane: '에어차이나'

  }
]

export default {
  coumnityList (query) {
    return new Promise(resolve => {
      setTimeout(() => {
        // eslint-disable-next-line no-undef
        resolve(data)
      }, 200)
    })
  }
}
