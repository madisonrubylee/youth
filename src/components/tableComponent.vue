<template>
  <table class="board-list-1s">
    <colgroup>
        <col style="width:9%;">
        <col style="width:79%;">
        <col style="width:12%;"><!-- 2017-03-10 수정 : colgroup 영역 전체 복사+붙여넣기해주세요(각 항목 간격 수정) -->
    </colgroup>
    <thead>
        <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">등록일/당첨자 발표일</th>
        </tr>
    </thead>
    <tbody>
    <div v-if="data.length">
      <tr v-for="(item,idx) in data" v-bind:key="idx" class="notice_fix"> 
        <td>중요</td>          
        <td class="subject"><strong class="FG01">일반 </strong>
          <a href="">{{item.title}}</a>
        </td>
        <td>2020.02.26</td>
      </tr>
    </div>
    </tbody>
  </table>
</template>

<script>

export default {
  //    template: '#search-result',
  props: ['data'],
  data () {
    return {
      rating: 0
    }
  }
}

</script>
