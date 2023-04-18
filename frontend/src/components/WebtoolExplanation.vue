<template>
  <div class="webtool-explanation">
    <div class="description">
        <p>We employ an empirical FDR (eFDR) 0.1 to identify significant associations. Associations are indicated as  1 if the are identified at eFDR&lt;0.1, and are indicated as 0 if they are not.</p>

    </div>
  </div>
</template>

<script>
export default {
    name: 'WebtoolExplanation',
}
</script>

<style scoped>
    .webtool-explanation {
        background-color: #826C7F;
        padding: 20px;
        margin: 10px auto;
        font-weight: normal;
        font-size: .85em;
    }

    .description {
        color: white;
    }
h3 {
  margin: 10px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
