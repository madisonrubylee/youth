<template>
    <div v-if="data.length">
    <ul>
      <li v-for="item in data" v-bind:key="item" >
        <img v-bind:src="item.image"> {{item.name}}
      </li>
    </ul>
  </div>
  <div v-else>
      
  </div>
</template>

<script>
export default {
  //    template: '#search-result',
  props: ['data', 'query']
}
</script>
