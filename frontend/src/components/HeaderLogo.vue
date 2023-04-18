<template>
    <div class="header-logo">
        <div>
            <div class="level">
                <div class="level-left site-name">
                    <div class="level-item">
                        iProFun
                    </div>
                </div>
                <div class="level-right institution-logos">
                    <img class="level-item" src="../assets/logo_combined.png" />
                </div>
            </div>
            <div class="cptac-description">
                NCI supported <a href="https://proteomics.cancer.gov/programs/cptac">Clinical Proteomic Tumor Analysis Consortium (CPTAC)</a>,
                is a comprehensive and coordinated effort to accelerate the understanding of the molecular
                basis of cancer through the application of large-scale proteome (proteins) and genome (DNA and RNA)
                analysis technologies to different cancer types. CPTAC is composed of expertise in proteomics, genomics,
                cancer biology, oncology, and clinical chemistry, while creating open community resources that
                are widely used by the cancer community.
                <div v-if="tumor == 'CCRCC'">
                <p>This page provides integrative analysis results for identifying DNA-level alterations perturbing functional molecular traits at pre-determined FDR rate from CPTAC-CCRCC discovery project. To view the data as a co-expression network, visit the <a href="http://ccrcc.cptac-network-view.org/"> CPTAC Interactive Network Portal</a>.</p>
                <p>For more information, please see the publication <a href="https://www.ncbi.nlm.nih.gov/pubmed/31675502">Fenyo et al. Cell. 2019</a>.</p>
                </div>
                <div v-if="tumor == 'LUAD'">
                <p>This page provides integrative analysis results for identifying DNA-level alterations perturbing functional molecular traits at pre-determined FDR rate from CPTAC-LUAD discovery project.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-logo",
        computed: {
            tumor() {
                return this.$store.state.tumor;
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
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
    
    .institution-logos {
        text-align: center;
    }

    .institution-logos > img {
        height: 72px;
    }

    .site-name {
        font-size: 3em;
        font-weight: bold;
        margin-left: 10px;
        margin-top: 12px;
    }

    .cptac-description {
        font-size: small;
        text-align: left;
        font-weight: bold;
        margin: 15px;
    }

    .cptac-description p {
        margin-top: 2px;
        margin-bottom: 0;
    }

</style>