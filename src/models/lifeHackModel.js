const data = [
  {
    id: 1,
    name: '샐리',
    title: '정말 추천하는 곳',
    content: '내 인생의 전환점. 근처 마트 중 코스트코가 품질이나 가격면에서 가장 좋습니다. 추천합니다.',
    image: '',
    rating: 4.3

  },
  {
    id: 2,
    name: '묘묘',
    title: '생각보다 돈이 더 많이 듭니다.',
    content: '콩코디아 캠퍼스 주변이 번화가라 수업끝나고 놀기에 좋았어요 하지만 그만큼 돈이 더 많이 든다는 점..',
    // image: "require('@/images/concordiaReview.jpg')",
    // 200 근데 안뜸 image: './assets/concordiaReview.jpg',
    image: require('@/assets/concordiaReview.jpg'),
    rating: 3.8
  },
  {
    id: 2,
    name: '묘묘',
    title: '생각보다 돈이 더 많이 듭니다.',
    content: '콩코디아 캠퍼스 주변이 번화가라 수업끝나고 놀기에 좋았어요 하지만 그만큼 돈이 더 많이 든다는 점..',
    image: '',
    rating: 3.8
  },
  {
    id: 2,
    name: '묘묘',
    title: '생각보다 돈이 더 많이 듭니다.',
    content: '콩코디아 캠퍼스 주변이 번화가라 수업끝나고 놀기에 좋았어요 하지만 그만큼 돈이 더 많이 든다는 점..',
    image: '',
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
