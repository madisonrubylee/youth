const data = [
  {
    id: 1,
    name: 'very-good',
    image: '../../images/smiling.png'
  },
  {
    id: 2,
    name: 'good',
    image: '../../images/smile.png'
  },
  {
    id: 3,
    name: 'so-so',
    image: '../../images/confused.png'
  },
  {
    id: 4,
    name: 'bad',
    image: '../../images/sad.png'
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
