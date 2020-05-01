<template>
    <div v-if="data.length">
    <div class="rating-area">
      <input type="hidden"  >
    </div>
    <ul>
      <li v-for="(item,idx) in data" v-bind:key="idx" >
        <a><img v-if="item.image" v-bind:src="item.image" /></a>
        <p>{{item.rating}}</p>
        <!-- <img v-if="item.image" v-bind:src="item.image" /> -->
         {{item.name}}
         <p> {{item.title}} </p>
        <p>{{item.content}}</p>
      </li>
    </ul>
  </div>
  <div v-else>
    {{query}} 검색어로 찾을수 없습니다 
  </div>
</template>

<script>

export default {
  //    template: '#search-result',
  props: ['data', 'query'],
  data () {
    return {
      rating: 0
    }
  },
  watch: {
    data () {
      let averageOfRate = 0
      let sum = 0
      for (let i = 0; i < this.data.length; i++) {
        sum += this.item[i].rating
        console.log(sum)
      }
      averageOfRate = sum / this.data.length
      this.rating = averageOfRate
      console.log(averageOfRate)
      console.log(this.rating)
    }
  }
}

</script>
