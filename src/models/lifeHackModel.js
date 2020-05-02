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
    
  },
  {
    id: 2,
    region: 'NORTHAMERICA', 
    country: 'CANADA',
    name: '묘묘',
    title: '생각보다 돈이 더 많이 듭니다.',
    content: '콩코디아 캠퍼스 주변이 번화가라 수업끝나고 놀기에 좋았어요 하지만 그만큼 돈이 더 많이 든다는 점..',
    // image: "require('@/images/concordiaReview.jpg')",
    // 200 근데 안뜸 image: './assets/concordiaReview.jpg',
    image: require('@/assets/reviewImg/concordiaReview.jpg'),
    rating: 3.8
  },
  {
    id: 3,
    region: 'EUROPE',
    country: 'FRANCE',
    name: 'maison',
    title: '다섯번째 파리 여행. 파리는 진리입니다. 꼭 가세요. 개인적으로 숙소는 에펠탑 근처에 잡는게 좋은것같아요.',
    content: '한인민박 절대 가지마세요 ㅋㅋㅋ 진짜 후회했습니다... 파리는 호텔이 너무 비싸니 최대한 일찍 숙소 예약하는게 좋을것같아요',
    image: require('@/assets/reviewImg/paris.jpg'),
    rating: 3.8
    
  },
  {
    id: 4,
    region: 'EUROPE',
    country: 'EU_ETC',
    name: '떠돌이',
    title: '여러분 기억하세요 그리스는 2박 충분합니다. 2박 .',
    content: '그리스는 정말 꿈의 도시죠 ㅎㅎ 그렇지만 2박이상은 하지 않아도 될 것 같습니다.',
    image: require('@/assets/reviewImg/greece.jpg'),
    rating: 3.8
  },
  {
    id: 5,
    region: 'ASIA',
    country: 'TAIWAN',
    name: '떠돌이',
    title: '여러분 기억하세요 그리스는 2박 충분합니다. 2박 .',
    content: '그리스는 정말 꿈의 도시죠 ㅎㅎ 그렇지만 2박이상은 하지 않아도 될 것 같습니다.',
    image: require('@/assets/reviewImg/taipei.jpg'),
    rating: 3.8
  }
]

export default {
  list (query) {
    return new Promise(resolve => {
      setTimeout(() => {
        // eslint-disable-next-line no-undef
        resolve(data)
      }, 200)
    })
  }
}
