<template>
   <div class="radar">
    <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
  </div>
</template>

<script>
  export default {
    props: ['player1', 'player2'],
    data () {
      this.chartSettings = {
        labelMap: {
          'PPG': 'PPG',
          'APG': 'APG',
          'REB': 'REB',
          'FG%': 'FG%',
          'FT%': 'FT%',
          'PER': 'PER'
        }
      }
      return {
        chartData: {
          columns: ['Name','PPG', 'APG', 'REB', 'FG%', 'FT%', 'PER'],
          rows: [
            {'Name':this.player1.Player, 'PPG': this.player1.CareerPoints, 'APG': this.player1.CareerAssists, 'REB': this.player1.CareerTotalRebounds, 'FG%': this.player1.CareerFieldGoalPercentage, 'FT%': this.player1.CareerFreeThrowPercentage, 'PER': this.player1.CareerPlayerEfficiencyRating },
            {'Name':this.player2.Player, 'PPG': this.player2.CareerPoints, 'APG': this.player2.CareerAssists, 'REB': this.player2.CareerTotalRebounds, 'FG%': this.player2.CareerFieldGoalPercentage, 'FT%': this.player2.CareerFreeThrowPercentage, 'PER': this.player2.CareerPlayerEfficiencyRating },
            
          ]
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.radar{
  
}
</style>
