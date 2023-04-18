<template>
  <div id="app">
    <HeaderLogo/>
    <div class="columns is-desktop">
      <div class="column is-one-quarter-desktop">
        <Intro />
        <DetailBox />
      </div>
      <div class="column">
        <Input />
        <TableContainer />
        <WebtoolExplanation />
      </div>
    </div>
  </div>
</template>

<script>
import DetailBox from './components/DetailBox.vue'
import Input from './components/Input.vue'
import HeaderLogo from './components/HeaderLogo.vue'
import Intro from './components/Intro.vue'
import TableContainer from './components/TableContainer.vue'
import WebtoolExplanation from './components/WebtoolExplanation.vue'

export default {
  name: 'app',
  components: {
      DetailBox,
    HeaderLogo,
    Input,
    Intro,
    WebtoolExplanation,
      TableContainer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin: 0 40px;
  /*margin-top: 60px;*/
}
</style>
