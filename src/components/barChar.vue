<template>
    <section>
        <h1 class="is-size-2">Top 10 Players</h1>
          <ve-bar :data="chartData"></ve-bar>

    </section>
</template>

<script>
export default {
    name: 'barChar',
    props: ['Playerdata'],
    
    data(){
        return{
            
            topTen: [],
            chartData: {
          columns: ['Player', 'PPG', 'REB', 'AST'],
          rows: [
            { 'Player': 'Wilt Chamberlain', 'PPG': 30.1, 'REB':22.9, "AST":4.4 },
            { 'Player': 'Michael Jordan', 'PPG': 30.1, 'REB':6.2, "AST":5.3},
            { 'Player': 'Lebron James', 'PPG': 27.2, 'REB':7.4, "AST":7.2},
            { 'Player': 'Bob Pettit', 'PPG': 26.4, 'REB':16.2, "AST":3.0},
            { 'Player': 'Kevin Durant', 'PPG': 27.1, 'REB':7.1, "AST":3.9},
            { 'Player': 'Elgin Baylor', 'PPG': 27.4, 'REB':13.5, "AST":4.3},
            { 'Player': 'Larry Bird', 'PPG': 23.3, 'REB':10.0, "AST":6.3},
            { 'Player': 'Oscar Robertson', 'PPG': 25.7, 'REB':7.5, "AST":9.5},
            { 'Player': 'Kareem Abdul-Jabbar', 'PPG':24.6, 'REB':11.2, "AST":3.6 },
            { 'Player': 'Anthony Davis', 'PPG': 23.4, 'REB':10.3, "AST":1.9 },
          ]
        },
        }
    },
    
}
</script>

<style>

</style>

