<template>
  <div class="webtool-explanation">
    <div class="description">
        <img class="iprofun-img" src="../assets/iProFun.jpg" v-on:click="enlargeImage"/>

        This novel integrative analysis tool screens for proteogenomic functional traits
        (iProFun) altered by CNAs and DNA methylations. Specifically, we are interested in (1) detecting genes with “cascading
        effects” on downstream molecular traits, i.e. a gene’s DNA
        alterations have associations with its cis mRNA expression
        levels, and global and phospho protein abundances and (2)
        identifying associations unique to certain type(s) of molecular
        trait(s), in particular unique to global/phospho protein levels.
    </div>
    <modal name="iprofun-enlarged" :width="860" :height="700">
        <!--hi-->
      <img class="iprofun-img-modal" src="../assets/iProFun.jpg" >
    </modal>
  </div>
</template>

<script>
export default {
    name: 'DetailBox',
    methods: {
        enlargeImage() {
            this.$modal.show('iprofun-enlarged');
        }
    }
}
</script>

<style scoped>
    .webtool-explanation {
        /*background-color: #416788;*/
        border: solid 3px #416788;
        padding: 20px;
        margin: 10px auto;
        font-weight: normal;
        font-size: .85em;
    }

    .description {
        color: black;
        font-weight: bold;
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
    .iprofun-img {
        margin-bottom: 5px;
        cursor: -moz-zoom-in;
        cursor: -webkit-zoom-in;
        cursor: zoom-in;
    }

    .iprofun-img-modal {
        /*margin: 20px auto;*/
        padding: 50px;
    }

</style>
