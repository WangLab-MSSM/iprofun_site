<template>
  <div class="input-container">
    <div class="instructions">
        <u>Directions</u>:
        Select a tumor of interest and enter genes to receive a sortable table of iProFun results.
        <div class="tumor-selector field has-addons">
                <b-select
                    placeholder="Select a tumor type"
                    v-model="selected"
                    type="is-info"
                >
                <option
                    v-for="tumor in tumors"
                    :value="tumor"
                    :key="tumor"
                >
                    {{ tumor }}
                </option>
            </b-select>
                <!--<b-button type="is-primary" @click="handleSubmit">Submit</b-button>-->
        </div>
        <div class="buttons">
                    <form @submit.prevent="handleSubmit">
                <b-field label="Genes of interest (comma-separated; blank for all genes)" >
                    <b-input v-model="inputGenes"></b-input>
                </b-field>
                <b-button :loading="loading" type="is-primary" rounded native-type="submit">Submit</b-button>
            </form>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: 'Input',
    data() {
        return {
            tumors: [ 'CCRCC', 'LUAD','GBM', 'HNSCC', 'PBT', 'LSCC'],
            selected: null,
            inputGenes: ''
        }
    },
    computed: {
        loading() {
            return this.$store.state.loading
        }
    },
    methods: {
        handleSubmit() {
            if (this.selected) {
                this.$store.dispatch(
                    'fetchTable',
                    {
                        tumor: this.selected,
                        genes: this.inputGenes.length ? this.inputGenes.split(',').map(el => el.trim().toUpperCase()) : [],
                    }
                )
            }
        },
    },
    mounted() {
        this.selected = 'CCRCC';
        this.inputGenes = 'SQSTM1,YY1,ERG,ARHGEF17'
        this.$store.dispatch(
                    'fetchTable',
                    {
                        tumor: this.selected,
                        genes: this.inputGenes.split(',').map(el => el.trim().toUpperCase()),
                    }
                )
    }
}

</script>

<style scoped>
    .input-container {
        background-color: #E0E0E2;
        padding: 10px;
        font-weight: bold;
        margin: 10px auto;
    }

    .instructions {
        margin: 5px auto;
    }

    h3 {
      margin: 0 0;
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
    label {
        font-size: small;
    }
    .tumor-selector {
        margin-top: 10px;
    }

    .buttons {
       display: flex;
        flex-direction: row;
    }

</style>
