<template>
   <div>
    <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource">
    </fusioncharts>
  </div>
</template>

<script>

export default {
  name: 'testChart',
  data () {
    return {
    type: "pie3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Recommended Portfolio Split",
        subCaption: "For a net-worth of $1M",
        showValues: "1",
        showPercentInTooltip: "0",
        numberPrefix: "$",
        enableMultiSlicing: "1",
        theme: "fusion"
      },
      data: [
        {
          label: "Equity",
          value: "300000"
        },
        {
          label: "Debt",
          value: "230000"
        },
        {
          label: "Bullion",
          value: "180000"
        },
        {
          label: "Real-estate",
          value: "270000"
        },
        {
          label: "Insurance",
          value: "20000"
        }
      ]
    }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
