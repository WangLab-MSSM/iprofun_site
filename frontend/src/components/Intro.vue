<template>
  <div class="intro">
      iProFun, an integrative analysis tool to screen for Proteogenomic Functional traits perturbed by DNA-level alterations. The goal is to characterize functional consequences of DNA-level alterations in tumors and to facilitate screening for cancer drivers contributing to tumor initiation and progression. Specifically, we consider three functional molecular quantitative traits: mRNA expression levels, global protein abundances, and phosphoprotein abundances, and three types of DNA-level alterations: mutation, copy number variation (CNV) and DNA methylation.
      <br>
      For more information, please see the publication at: <br>
      <a href="https://www.mcponline.org/content/18/8_suppl_1/S52/tab-article-info">
          Song et al. "Insights into impact of DNA copy number alteration and methylation on the proteogenomic landscape of human ovarian cancer via a multi-omics integrative analysis." Molecular & Cellular Proteomics 18, no. 8 suppl 1 (2019): S52-S65.
      </a>.
  </div>
</template>

<script>
export default {
    name: 'Intro',
}
</script>

<style scoped>
    .intro {
        background-color: #EEE0CB;
        padding: 20px;
        font-weight: bold;
        font-size: 0.85em;
        margin: 20px auto 10px;
        color: #40434E;
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
  color: #912F40;
}
</style>
