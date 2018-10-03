<template>
  <div class="hello">
    <h1 class="is-size-1">{{ msg }}</h1>
    <br/>

    <div class="container">
      <loading
     :show="show"
     :label="label">
      <div class="columns">
        <selectPlayer start=1945 :Players='Playerdata' ident='test2'/>
        <div class="column is-size-2"
          >VS
          <br/>
          <button v-on:click="calcWinner" class="is-medium button is-success">GO</button>
        </div>
        <selectPlayer start=2181 :Players='Playerdata' ident='test1'/>
    </div>
      </loading>
      
    </div>
    <div class="container winning-message" v-if="winner">
      <img class="p_img" :src="winningPlayer.PlayerImage"/>
      <p>{{winingMessage}}</p>
      <button v-on:click="clearWinner" class="button is-danger">Clear</button>
    </div>
    <br/>
    <br/>
     <br/>
    <br/>
     <br/>
    <br/>
    
      <div v-if="winner" class="parent radar">
        <div class="child">
          <div>
        <table class="table is-bordered">
          <thead>
            <tr>
              <th>Category</th>
              <th>{{playerOne.Player}}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>PPG</th>
              <td>{{playerOne.CareerPoints}}</td>
            </tr>
            <tr>
              <th>APG</th>
              <td>{{playerOne.CareerAssists}}</td>
            </tr>
            <tr>
              <th>REB</th>
              <td>{{playerOne.CareerTotalRebounds}}</td>
            </tr>
            <tr>
              <th>FG%</th>
              <td>{{playerOne.CareerFieldGoalPercentage}}</td>
            </tr>
            <tr>
              <th>FT%</th>
              <td>{{playerOne.CareerFreeThrowPercentage}}</td>
            </tr>
            <tr>
              <th>PER</th>
              <td>{{playerOne.CareerPlayerEfficiencyRating}}</td>
            </tr>
            <tr>
              <th>NPV Salary</th>
              <td>${{this.playerOne.Salary}}</td>
            </tr>
          </tbody>
        </table>
      </div>    
        </div>
        <div>
          <testRadar :player1='winningPlayer' :player2='runnerUp'/>
        </div>
        <div class="child">
          <div>
        <table class="table is-bordered">
          <thead>
            <tr>
              <th>Category</th>
              <th>{{playerTwo.Player}}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>PPG</th>
              <td>{{playerTwo.CareerPoints}}</td>
            </tr>
            <tr>
              <th>APG</th>
              <td>{{playerTwo.CareerAssists}}</td>
            </tr>
            <tr>
              <th>REB</th>
              <td>{{playerTwo.CareerTotalRebounds}}</td>
            </tr>
            <tr>
              <th>FG%</th>
              <td>{{playerTwo.CareerFieldGoalPercentage}}</td>
            </tr>
            <tr>
              <th>FT%</th>
              <td>{{playerTwo.CareerFreeThrowPercentage}}</td>
            </tr>
            <tr>
              <th>PER</th>
              <td>{{playerTwo.CareerPlayerEfficiencyRating}}</td>
            </tr>
            <tr>
              <th>Salary</th>
              <td>${{playerTwo.Salary}}</td>
            </tr>
          </tbody>
        </table>
      </div>    
        </div>
      </div>
 
  </div>
</template>

<script>
import testChart from './testChart';
import selectPlayer from './selectPlayer';
import axios from 'axios';
import testRadar from './testRadar';
import loading from 'vue-full-loading'


export default {
  name: 'HelloWorld',
  components: {
    testChart,
    selectPlayer,
    testRadar
  },
  
  data () {
    return {
      msg: 'Who is the Real MVP?',
      show: true,
      label: 'Loading...',
      winner: false,
      winingMessage: '',
      winningPlayer: {"ItemID":1001,"PlayerID":"chambwi01","Colleges":"University of Kansas","BirthDate":"August 21, 1936","Wt":"275","Ht":"7-1","Pos":"C","To":"1973","From":"1960","PlayerURL":"https://www.basketball-reference.com/players/c/chambwi01.html","Player":"Wilt Chamberlain*","LetterURL":"https://www.basketball-reference.com/players/c/","BirthCity":"Philadelphia","BirthState":"Pennsylvania","CareerGames":"1045","CareerPoints":"30.1","CareerTotalRebounds":"22.9","CareerAssists":"4.4","CareerFieldGoalPercentage":"54","CareerThreePointFieldGoalPercentage":"0","CareerFreeThrowPercentage":"51.1","CareerEffectiveFieldGoalPercentage":"0","Win Share per Game":"0.236650718","CareerPlayerEfficiencyRating":"26.1","CareerWinShares":"247.3","Shoots":"Right","PlayerImage":"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/chambwi01.jpg","Ranking":"14.72720882"},
      runnerUp: {"ItemID":1001,"PlayerID":"chambwi01","Colleges":"University of Kansas","BirthDate":"August 21, 1936","Wt":"275","Ht":"7-1","Pos":"C","To":"1973","From":"1960","PlayerURL":"https://www.basketball-reference.com/players/c/chambwi01.html","Player":"Wilt Chamberlain*","LetterURL":"https://www.basketball-reference.com/players/c/","BirthCity":"Philadelphia","BirthState":"Pennsylvania","CareerGames":"1045","CareerPoints":"30.1","CareerTotalRebounds":"22.9","CareerAssists":"4.4","CareerFieldGoalPercentage":"54","CareerThreePointFieldGoalPercentage":"0","CareerFreeThrowPercentage":"51.1","CareerEffectiveFieldGoalPercentage":"0","Win Share per Game":"0.236650718","CareerPlayerEfficiencyRating":"26.1","CareerWinShares":"247.3","Shoots":"Right","PlayerImage":"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/chambwi01.jpg","Ranking":"14.72720882"},
      Playerdata: [],
      playerOne: {"ItemID":1001,"PlayerID":"chambwi01","Colleges":"University of Kansas","BirthDate":"August 21, 1936","Wt":"275","Ht":"7-1","Pos":"C","To":"1973","From":"1960","PlayerURL":"https://www.basketball-reference.com/players/c/chambwi01.html","Player":"Wilt Chamberlain*","LetterURL":"https://www.basketball-reference.com/players/c/","BirthCity":"Philadelphia","BirthState":"Pennsylvania","CareerGames":"1045","CareerPoints":"30.1","CareerTotalRebounds":"22.9","CareerAssists":"4.4","CareerFieldGoalPercentage":"54","CareerThreePointFieldGoalPercentage":"0","CareerFreeThrowPercentage":"51.1","CareerEffectiveFieldGoalPercentage":"0","Win Share per Game":"0.236650718","CareerPlayerEfficiencyRating":"26.1","CareerWinShares":"247.3","Shoots":"Right","PlayerImage":"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/chambwi01.jpg","Ranking":"14.72720882"},
      playerTwo: {"ItemID":1001,"PlayerID":"chambwi01","Colleges":"University of Kansas","BirthDate":"August 21, 1936","Wt":"275","Ht":"7-1","Pos":"C","To":"1973","From":"1960","PlayerURL":"https://www.basketball-reference.com/players/c/chambwi01.html","Player":"Wilt Chamberlain*","LetterURL":"https://www.basketball-reference.com/players/c/","BirthCity":"Philadelphia","BirthState":"Pennsylvania","CareerGames":"1045","CareerPoints":"30.1","CareerTotalRebounds":"22.9","CareerAssists":"4.4","CareerFieldGoalPercentage":"54","CareerThreePointFieldGoalPercentage":"0","CareerFreeThrowPercentage":"51.1","CareerEffectiveFieldGoalPercentage":"0","Win Share per Game":"0.236650718","CareerPlayerEfficiencyRating":"26.1","CareerWinShares":"247.3","Shoots":"Right","PlayerImage":"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/chambwi01.jpg","Ranking":"14.72720882"},
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
  },
  methods:{
    calcWinner: function(){
    this.winner = false;
    let player1 = this.Playerdata[document.getElementById('test2').selectedIndex];
    let player2 = this.Playerdata[document.getElementById('test1').selectedIndex];
    this.playerOne = player1;
    this.playerTwo = player2;

    if(player1.Ranking > player2.Ranking){
      this.winningPlayer = player1;
      this.runnerUp = player2;
      this.winingMessage = "With an overall Player Ranking of " + player1['Adjusted Ranking'] + " " + player1.Player + " is a better player then " + player2.Player + " who has an overall Player Ranking of " + player2['Adjusted Ranking'];
      
    }
    else if(player1.Ranking == player2.Ranking) {
      this.winningPlayer = player1;
      this.runnerUp = player2;
      this.winingMessage = "With an overall Player Ranking of " + player1['Adjusted Ranking'] + " " + player1.Player + " is a better player then " + player2.Player + " who has an overall Player Ranking of " + player2['Adjusted Ranking'];
    }
    else{
      this.winningPlayer = player2;
      this.runnerUp = player1;
      this.winingMessage = "With an overall Player Ranking of " + player2['Adjusted Ranking'] + " " + player2.Player + " is a better player then " + player1.Player + " who has an overall Player Ranking of " + player1['Adjusted Ranking'];
    }
    this.winner = true;
  },
  clearWinner: function(){
    this.winner = false;
  }
  },
  
  created: function(){
        axios.get('https://api.mozenda.com/rest?WebServiceKey=D185B582-0CDB-41EE-B299-1C357F17A82B&Service=Mozenda10&Operation=View.GetItems&ViewID=11389&PageNumber=1&ResponseFormat=JSON').then(res => {
            this.Playerdata = res.data.Item;
            axios.get('https://api.mozenda.com/rest?WebServiceKey=D185B582-0CDB-41EE-B299-1C357F17A82B&Service=Mozenda10&Operation=View.GetItems&ViewID=11389&PageNumber=2&ResponseFormat=JSON').then(response => {
            for (let iCount = 0; iCount < 1000; iCount++){
              this.Playerdata.push(response.data.Item[iCount])
            }
            axios.get('https://api.mozenda.com/rest?WebServiceKey=D185B582-0CDB-41EE-B299-1C357F17A82B&Service=Mozenda10&Operation=View.GetItems&ViewID=11389&PageNumber=3&ResponseFormat=JSON').then(response2 => {
            for (let iCount = 0; iCount < 1000; iCount++){
              this.Playerdata.push(response2.data.Item[iCount])
            }
            axios.get('https://api.mozenda.com/rest?WebServiceKey=D185B582-0CDB-41EE-B299-1C357F17A82B&Service=Mozenda10&Operation=View.GetItems&ViewID=11389&PageNumber=4&ResponseFormat=JSON').then(response3 => {
            for (let iCount = 0; iCount < response3.data.Item.length; iCount++){
              this.Playerdata.push(response3.data.Item[iCount])
            }
        }).catch(err =>{
            console.log(err);
            
        });
        }).catch(err =>{
            console.log(err);
            
        });
        }).catch(err =>{
            console.log(err);
            
        });
        }).catch(err =>{
            console.log(err);
            
        });
         
        
    },
  computed: {
    selectPlayer: function(){
      return document.getElementById('test1').value
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p_img{
  border: black solid 3px;
}
.is-success{
  background-color: #228b22;
}
.is-danger{
  background-color: #dc143c;
}
.parent{
  display: grid;
  grid-template: auto auto auto /1fr 1fr 1fr;
  grid-row-gap: 60px;
}
.child{
  margin: auto;
}
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
.winning-message{
  margin-top: 100px;
  width: 65%;
}
</style>
