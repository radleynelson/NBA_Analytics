webpackJsonp([2],{"1cKC":function(e,a){},"3+RT":function(e,a){},A7lZ:function(e,a){},DUcU:function(e,a){},Ls3F:function(e,a){},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("7+uW"),s={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",[t("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[t("div",{staticClass:"navbar-brand"},[t("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t("img",{attrs:{src:"https://files.slack.com/files-pri/TD0137HGB-FD4224WA1/goat_herder_logo.png",alt:"Bulma: a modern CSS framework based on Flexbox",width:"112",height:"28"}})]),e._v(" "),t("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[e._v("Home")]),e._v(" "),t("router-link",{staticClass:"navbar-item",attrs:{to:"/Data"}},[e._v("Data")]),e._v(" "),t("router-link",{staticClass:"navbar-item",attrs:{to:"/About"}},[e._v("About")]),e._v(" "),e._m(0)],1)])])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"}},[a("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),a("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),a("span",{attrs:{"aria-hidden":"true"}})])}]};var n={name:"App",components:{navBar:t("VU/8")({name:"navBar",data:function(){return{}}},s,!1,function(e){t("U674")},null,null).exports}},i={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"app"}},[a("navBar"),this._v(" "),a("img",{staticClass:"nbalogo",attrs:{src:"https://theundefeated.com/wp-content/uploads/2017/05/nba-logo.png"}}),this._v(" "),a("router-view")],1)},staticRenderFns:[]};var l=t("VU/8")(n,i,!1,function(e){t("Ls3F")},null,null).exports,o=t("/ocq"),c={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",[a("fusioncharts",{attrs:{type:this.type,width:this.width,height:this.height,dataFormat:this.dataFormat,dataSource:this.dataSource}})],1)},staticRenderFns:[]};var h=t("VU/8")({name:"testChart",data:function(){return{type:"pie3d",width:"100%",height:"400",dataFormat:"json",dataSource:{chart:{caption:"Recommended Portfolio Split",subCaption:"For a net-worth of $1M",showValues:"1",showPercentInTooltip:"0",numberPrefix:"$",enableMultiSlicing:"1",theme:"fusion"},data:[{label:"Equity",value:"300000"},{label:"Debt",value:"230000"},{label:"Bullion",value:"180000"},{label:"Real-estate",value:"270000"},{label:"Insurance",value:"20000"}]}}}},c,!1,function(e){t("3+RT")},"data-v-3f1f59c4",null).exports,d=t("mtWM"),p=t.n(d),y={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"column"},[t("h2",{staticClass:"is-size-3"},[e._v("Select Player")]),e._v(" "),t("div",{staticClass:"select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.vtest,expression:"vtest"}],attrs:{id:e.ident},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.vtest=a.target.multiple?t:t[0]}}},e._l(e.Players,function(a,r){return t("option",{key:a.ItemID,domProps:{value:r}},[e._v("\n                "+e._s(a.Player)+" \n            ")])})),e._v(" "),e.Players[e.vtest].PlayerImage?t("img",{staticClass:"pimg",attrs:{src:e.Players[e.vtest].PlayerImage}}):e._e()]),e._v(" "),t("div")])},staticRenderFns:[]};var v=t("VU/8")({name:"selectPlayer",props:["ident","Players","start"],data:function(){return{vtest:this.start}}},y,!1,function(e){t("A7lZ")},null,null).exports,m={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"radar"},[a("ve-radar",{attrs:{data:this.chartData,settings:this.chartSettings}})],1)},staticRenderFns:[]};var g=t("VU/8")({props:["player1","player2"],data:function(){return this.chartSettings={labelMap:{PPG:"PPG",APG:"APG",REB:"REB","FG%":"FG%","FT%":"FT%",PER:"PER"}},{chartData:{columns:["Name","PPG","APG","REB","FG%","FT%","PER"],rows:[{Name:this.player1.Player,PPG:this.player1.CareerPoints,APG:this.player1.CareerAssists,REB:this.player1.CareerTotalRebounds,"FG%":this.player1.CareerFieldGoalPercentage,"FT%":this.player1.CareerFreeThrowPercentage,PER:this.player1.CareerPlayerEfficiencyRating},{Name:this.player2.Player,PPG:this.player2.CareerPoints,APG:this.player2.CareerAssists,REB:this.player2.CareerTotalRebounds,"FG%":this.player2.CareerFieldGoalPercentage,"FT%":this.player2.CareerFreeThrowPercentage,PER:this.player2.CareerPlayerEfficiencyRating}]}}}},m,!1,function(e){t("DUcU")},"data-v-9d1d0bd8",null).exports,u=(t("B7eW"),{name:"HelloWorld",components:{testChart:h,selectPlayer:v,testRadar:g},data:function(){return{msg:"Who is the Real MVP?",show:!0,label:"Loading...",winner:!1,winingMessage:"",winningPlayer:{ItemID:1001,PlayerID:"chambwi01",Colleges:"University of Kansas",BirthDate:"August 21, 1936",Wt:"275",Ht:"7-1",Pos:"C",To:"1973",From:"1960",PlayerURL:"https://www.basketball-reference.com/players/c/chambwi01.html",Player:"Wilt Chamberlain*",LetterURL:"https://www.basketball-reference.com/players/c/",BirthCity:"Philadelphia",BirthState:"Pennsylvania",CareerGames:"1045",CareerPoints:"30.1",CareerTotalRebounds:"22.9",CareerAssists:"4.4",CareerFieldGoalPercentage:"54",CareerThreePointFieldGoalPercentage:"0",CareerFreeThrowPercentage:"51.1",CareerEffectiveFieldGoalPercentage:"0","Win Share per Game":"0.236650718",CareerPlayerEfficiencyRating:"26.1",CareerWinShares:"247.3",Shoots:"Right",PlayerImage:"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/chambwi01.jpg",Ranking:"14.72720882"},runnerUp:{ItemID:1001,PlayerID:"chambwi01",Colleges:"University of Kansas",BirthDate:"August 21, 1936",Wt:"275",Ht:"7-1",Pos:"C",To:"1973",From:"1960",PlayerURL:"https://www.basketball-reference.com/players/c/chambwi01.html",Player:"Wilt Chamberlain*",LetterURL:"https://www.basketball-reference.com/players/c/",BirthCity:"Philadelphia",BirthState:"Pennsylvania",CareerGames:"1045",CareerPoints:"30.1",CareerTotalRebounds:"22.9",CareerAssists:"4.4",CareerFieldGoalPercentage:"54",CareerThreePointFieldGoalPercentage:"0",CareerFreeThrowPercentage:"51.1",CareerEffectiveFieldGoalPercentage:"0","Win Share per Game":"0.236650718",CareerPlayerEfficiencyRating:"26.1",CareerWinShares:"247.3",Shoots:"Right",PlayerImage:"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/chambwi01.jpg",Ranking:"14.72720882"},Playerdata:[],playerOne:{ItemID:1001,PlayerID:"chambwi01",Colleges:"University of Kansas",BirthDate:"August 21, 1936",Wt:"275",Ht:"7-1",Pos:"C",To:"1973",From:"1960",PlayerURL:"https://www.basketball-reference.com/players/c/chambwi01.html",Player:"Wilt Chamberlain*",LetterURL:"https://www.basketball-reference.com/players/c/",BirthCity:"Philadelphia",BirthState:"Pennsylvania",CareerGames:"1045",CareerPoints:"30.1",CareerTotalRebounds:"22.9",CareerAssists:"4.4",CareerFieldGoalPercentage:"54",CareerThreePointFieldGoalPercentage:"0",CareerFreeThrowPercentage:"51.1",CareerEffectiveFieldGoalPercentage:"0","Win Share per Game":"0.236650718",CareerPlayerEfficiencyRating:"26.1",CareerWinShares:"247.3",Shoots:"Right",PlayerImage:"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/chambwi01.jpg",Ranking:"14.72720882"},playerTwo:{ItemID:1001,PlayerID:"chambwi01",Colleges:"University of Kansas",BirthDate:"August 21, 1936",Wt:"275",Ht:"7-1",Pos:"C",To:"1973",From:"1960",PlayerURL:"https://www.basketball-reference.com/players/c/chambwi01.html",Player:"Wilt Chamberlain*",LetterURL:"https://www.basketball-reference.com/players/c/",BirthCity:"Philadelphia",BirthState:"Pennsylvania",CareerGames:"1045",CareerPoints:"30.1",CareerTotalRebounds:"22.9",CareerAssists:"4.4",CareerFieldGoalPercentage:"54",CareerThreePointFieldGoalPercentage:"0",CareerFreeThrowPercentage:"51.1",CareerEffectiveFieldGoalPercentage:"0","Win Share per Game":"0.236650718",CareerPlayerEfficiencyRating:"26.1",CareerWinShares:"247.3",Shoots:"Right",PlayerImage:"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/chambwi01.jpg",Ranking:"14.72720882"},type:"pie3d",width:"100%",height:"400",dataFormat:"json",dataSource:{chart:{caption:"Recommended Portfolio Split",subCaption:"For a net-worth of $1M",showValues:"1",showPercentInTooltip:"0",numberPrefix:"$",enableMultiSlicing:"1",theme:"fusion"},data:[{label:"Equity",value:"300000"},{label:"Debt",value:"230000"},{label:"Bullion",value:"180000"},{label:"Real-estate",value:"270000"},{label:"Insurance",value:"20000"}]}}},methods:{calcWinner:function(){this.winner=!1;var e=this.Playerdata[document.getElementById("test2").selectedIndex],a=this.Playerdata[document.getElementById("test1").selectedIndex];this.playerOne=e,this.playerTwo=a,e.Ranking>a.Ranking?(this.winningPlayer=e,this.runnerUp=a,this.winingMessage="With an overall Player Ranking of "+e["Adjusted Ranking"]+" "+e.Player+" is a better player then "+a.Player+" who has an overall Player Ranking of "+a["Adjusted Ranking"]):e.Ranking==a.Ranking?(this.winningPlayer=e,this.runnerUp=a,this.winingMessage="With an overall Player Ranking of "+e["Adjusted Ranking"]+" "+e.Player+" is a better player then "+a.Player+" who has an overall Player Ranking of "+a["Adjusted Ranking"]):(this.winningPlayer=a,this.runnerUp=e,this.winingMessage="With an overall Player Ranking of "+a["Adjusted Ranking"]+" "+a.Player+" is a better player then "+e.Player+" who has an overall Player Ranking of "+e["Adjusted Ranking"]),this.winner=!0},clearWinner:function(){this.winner=!1}},created:function(){var e=this;p.a.get("https://api.mozenda.com/rest?WebServiceKey=D185B582-0CDB-41EE-B299-1C357F17A82B&Service=Mozenda10&Operation=View.GetItems&ViewID=11389&PageNumber=1&ResponseFormat=JSON").then(function(a){e.Playerdata=a.data.Item,p.a.get("https://api.mozenda.com/rest?WebServiceKey=D185B582-0CDB-41EE-B299-1C357F17A82B&Service=Mozenda10&Operation=View.GetItems&ViewID=11389&PageNumber=2&ResponseFormat=JSON").then(function(a){for(var t=0;t<1e3;t++)e.Playerdata.push(a.data.Item[t]);p.a.get("https://api.mozenda.com/rest?WebServiceKey=D185B582-0CDB-41EE-B299-1C357F17A82B&Service=Mozenda10&Operation=View.GetItems&ViewID=11389&PageNumber=3&ResponseFormat=JSON").then(function(a){for(var t=0;t<1e3;t++)e.Playerdata.push(a.data.Item[t]);p.a.get("https://api.mozenda.com/rest?WebServiceKey=D185B582-0CDB-41EE-B299-1C357F17A82B&Service=Mozenda10&Operation=View.GetItems&ViewID=11389&PageNumber=4&ResponseFormat=JSON").then(function(a){for(var t=0;t<a.data.Item.length;t++)e.Playerdata.push(a.data.Item[t])}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})},computed:{selectPlayer:function(){return document.getElementById("test1").value}}}),P={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"hello"},[t("h1",{staticClass:"is-size-1"},[e._v(e._s(e.msg))]),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"container"},[t("loading",{attrs:{show:e.show,label:e.label}},[t("div",{staticClass:"columns"},[t("selectPlayer",{attrs:{start:"1945",Players:e.Playerdata,ident:"test2"}}),e._v(" "),t("div",{staticClass:"column is-size-2"},[e._v("VS\n        "),t("br"),e._v(" "),t("button",{staticClass:"is-medium button is-success",on:{click:e.calcWinner}},[e._v("GO")])]),e._v(" "),t("selectPlayer",{attrs:{start:"2181",Players:e.Playerdata,ident:"test1"}})],1)])],1),e._v(" "),e.winner?t("div",{staticClass:"container winning-message"},[t("img",{staticClass:"p_img",attrs:{src:e.winningPlayer.PlayerImage}}),e._v(" "),t("p",[e._v(e._s(e.winingMessage))]),e._v(" "),t("button",{staticClass:"button is-danger",on:{click:e.clearWinner}},[e._v("Clear")])]):e._e(),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),e.winner?t("div",{staticClass:"parent radar"},[t("div",{staticClass:"child"},[t("div",[t("table",{staticClass:"table is-bordered"},[t("thead",[t("tr",[t("th",[e._v("Category")]),e._v(" "),t("th",[e._v(e._s(e.playerOne.Player))])])]),e._v(" "),t("tbody",[t("tr",[t("th",[e._v("PPG")]),e._v(" "),t("td",[e._v(e._s(e.playerOne.CareerPoints))])]),e._v(" "),t("tr",[t("th",[e._v("APG")]),e._v(" "),t("td",[e._v(e._s(e.playerOne.CareerAssists))])]),e._v(" "),t("tr",[t("th",[e._v("REB")]),e._v(" "),t("td",[e._v(e._s(e.playerOne.CareerTotalRebounds))])]),e._v(" "),t("tr",[t("th",[e._v("FG%")]),e._v(" "),t("td",[e._v(e._s(e.playerOne.CareerFieldGoalPercentage))])]),e._v(" "),t("tr",[t("th",[e._v("FT%")]),e._v(" "),t("td",[e._v(e._s(e.playerOne.CareerFreeThrowPercentage))])]),e._v(" "),t("tr",[t("th",[e._v("PER")]),e._v(" "),t("td",[e._v(e._s(e.playerOne.CareerPlayerEfficiencyRating))])]),e._v(" "),t("tr",[t("th",[e._v("NPV Salary")]),e._v(" "),t("td",[e._v("$"+e._s(this.playerOne.Salary))])])])])])]),e._v(" "),t("div",[t("testRadar",{attrs:{player1:e.winningPlayer,player2:e.runnerUp}})],1),e._v(" "),t("div",{staticClass:"child"},[t("div",[t("table",{staticClass:"table is-bordered"},[t("thead",[t("tr",[t("th",[e._v("Category")]),e._v(" "),t("th",[e._v(e._s(e.playerTwo.Player))])])]),e._v(" "),t("tbody",[t("tr",[t("th",[e._v("PPG")]),e._v(" "),t("td",[e._v(e._s(e.playerTwo.CareerPoints))])]),e._v(" "),t("tr",[t("th",[e._v("APG")]),e._v(" "),t("td",[e._v(e._s(e.playerTwo.CareerAssists))])]),e._v(" "),t("tr",[t("th",[e._v("REB")]),e._v(" "),t("td",[e._v(e._s(e.playerTwo.CareerTotalRebounds))])]),e._v(" "),t("tr",[t("th",[e._v("FG%")]),e._v(" "),t("td",[e._v(e._s(e.playerTwo.CareerFieldGoalPercentage))])]),e._v(" "),t("tr",[t("th",[e._v("FT%")]),e._v(" "),t("td",[e._v(e._s(e.playerTwo.CareerFreeThrowPercentage))])]),e._v(" "),t("tr",[t("th",[e._v("PER")]),e._v(" "),t("td",[e._v(e._s(e.playerTwo.CareerPlayerEfficiencyRating))])]),e._v(" "),t("tr",[t("th",[e._v("Salary")]),e._v(" "),t("td",[e._v("$"+e._s(e.playerTwo.Salary))])])])])])])]):e._e()])},staticRenderFns:[]};var C=t("VU/8")(u,P,!1,function(e){t("onPz")},"data-v-43015ff6",null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"section"},[t("h1",{staticClass:"is-size-3"},[e._v("\n            Project Creation Process\n        ")]),e._v(" "),t("p",{staticClass:"container"},[e._v("\n            This project started with the question: who is better, Michael Jordan or LeBron James? These two are frequently debated as the G.O.A.T. (greatest of all time). However, These two never played in the NBA at the same time, and both have played in different eras of basketball.\n        Basketball.\nWithout being able to settle the question with a one-on-one game, many people turn to statistics to compare the two. But which statistics should be compared? For instance, LeBron James has a career points per game total of 27.2 and Michael Jordan has 30.1 PPG. But LeBron has a field goal percentage of 50.4% and Jordan, 49.7%. These two differ in dozens of other metrics measured by the NBA for each game, season, and career of players. Other less-measurable factors, like hustle or leadership, can also be debated.\nWe wanted to rank players based on solely on numbers, to be able to compare players in the least subjective way possible. And we wanted to create a ranking similar to the NBA 2K video game rankings, where players are given a score, 0 to 100, based on their skills. \nWe also wanted to compare salaries of players, giving hypothetical salaries to what any NBA player should make if they played in the league today.\n\n        ")]),e._v(" "),t("h1",{staticClass:"is-size-3"},[e._v("\n            Data Gathering\n        ")]),e._v(" "),t("p",{staticClass:"container"},[e._v("\n            We used Basketball Reference, an online database that lists statistics for every player, coach, and team in the NBA. Using Mozenda web scraping services, we compiled statistics for every players career averages. From roughly 4500 players, we removed any player who played who played less than 50 career games and any player from before 1950. This left us with 3,161 players over almost 70 years.\nWe also gathered information for salaries using this same process from Basketball Reference.\n        ")]),e._v(" "),t("h1",{staticClass:"is-size-3"},[e._v("\n            Ranking\n        ")]),e._v(" "),t("p",{staticClass:"container"},[e._v("\n            Basketball Reference uses a metric called “Win Shares” which “attempts to divvy up credit for team success to the individuals on the team” (https://www.basketball-reference.com/about/ws.html). While this is a good ranking in itself, we wanted to take it further. Taking the Win Share rating for each player, we performed regression analysis to compare six other metrics: points per game (PTS), assists (AST), rebounds (TRB), field-goal percentage (FG%), free-throw percentage (FT%), and player efficiency rating (PER, calculated rating based on player accomplishments). \n[TABLE]\nFrom these calculations, we took the R-squared of each correlation to compare which metrics contributed most to Win Shares. We then weighted this information to which we would compare every player.\nFor a touchstone, we gathered the statistics of the “ideal player.” We took statistics for NBA career records for each factor, except FG% and PER, which we gave high values of 60% and 30%. This ideal player created a high score, which we drew a multiplying factor for all players.\nThis allowed us to rank each player on a scale of 0 to 100, which the number one player being (*drumroll please*): Wilt Chamberlain.\nChamberlain beats Jordan and LeBron (number 2 and number 3) in PTS, TRB, and FG%.\n\n        ")]),e._v(" "),t("h1",{staticClass:"is-size-3"},[e._v("\n            Salary\n        ")]),e._v(" "),t("p",{staticClass:"container"},[e._v("\n           In order to forecast the prospective salary of any NBA player based upon their rank and performance, we projected their career average salary forward, took an average of all NBA players’ salaries for each year of their career, took a percent difference of their career average from the overall average, organized them into cohorts based on performance, and projected each cohorts estimated salary. From this we are no able to determine on average what each NBA player should make based upon their performance.\n\n        ")]),e._v(" "),t("h1",{staticClass:"is-size-3"},[e._v("\n            Website\n        ")]),e._v(" "),t("p",{staticClass:"container"},[e._v("\n            With the statistics of each player, we created this website to compare any two NBA players against each other. Users select two players and press “Go”. Then the statistics for each player and a radar chart appear, comparing the two and presenting the better player. We also included some charts based on our findings.\n\n\n        ")]),e._v(" "),t("h1",{staticClass:"is-size-3"},[e._v("\n            About\n        ")]),e._v(" "),t("p",{staticClass:"container"},[e._v("\n\n             This project was completed in 24 hours in September 2018 for the Wolff Company BI tournament at Brigham Young University. Our team consisted of Caden Dortch, Radley Nelson, Ross Rosenlof, Ryan Jenks, Taylor Bakow, and Trevan Reese.\n        ")]),e._v(" "),t("img",{attrs:{src:"https://files.slack.com/files-pri/TD0137HGB-FD38QE3DF/ranking_flowchart.png"}})])}]};var w=t("VU/8")({name:"about",data:function(){return{}}},f,!1,function(e){t("QcRv")},"data-v-7771ee35",null).exports,b={render:function(){var e=this.$createElement,a=this._self._c||e;return a("section",[a("h1",{staticClass:"is-size-2"},[this._v("Top 10 Players")]),this._v(" "),a("ve-bar",{attrs:{data:this.chartData}})],1)},staticRenderFns:[]};var _={name:"data",components:{barChar:t("VU/8")({name:"barChar",props:["Playerdata"],data:function(){return{topTen:[],chartData:{columns:["Player","PPG","REB","AST"],rows:[{Player:"Wilt Chamberlain",PPG:30.1,REB:22.9,AST:4.4},{Player:"Michael Jordan",PPG:30.1,REB:6.2,AST:5.3},{Player:"Lebron James",PPG:27.2,REB:7.4,AST:7.2},{Player:"Bob Pettit",PPG:26.4,REB:16.2,AST:3},{Player:"Kevin Durant",PPG:27.1,REB:7.1,AST:3.9},{Player:"Elgin Baylor",PPG:27.4,REB:13.5,AST:4.3},{Player:"Larry Bird",PPG:23.3,REB:10,AST:6.3},{Player:"Oscar Robertson",PPG:25.7,REB:7.5,AST:9.5},{Player:"Kareem Abdul-Jabbar",PPG:24.6,REB:11.2,AST:3.6},{Player:"Anthony Davis",PPG:23.4,REB:10.3,AST:1.9}]}}}},b,!1,function(e){t("iOOK")},null,null).exports},data:function(){return{Playerdata:[{ItemID:1001,PlayerID:"chambwi01",Colleges:"University of Kansas",BirthDate:"August 21, 1936",Wt:"275",Ht:"7-1",Pos:"C",To:"1973",From:"1960",PlayerURL:"https://www.basketball-reference.com/players/c/chambwi01.html",Player:"Wilt Chamberlain*",LetterURL:"https://www.basketball-reference.com/players/c/",BirthCity:"Philadelphia",BirthState:"Pennsylvania",CareerGames:"1045",CareerPoints:"30.1",CareerTotalRebounds:"22.9",CareerAssists:"4.4",CareerFieldGoalPercentage:"54",CareerThreePointFieldGoalPercentage:"0",CareerFreeThrowPercentage:"51.1",CareerEffectiveFieldGoalPercentage:"0","Win Share per Game":"0.236650718",CareerPlayerEfficiencyRating:"26.1",CareerWinShares:"247.3",Shoots:"Right",PlayerImage:"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/chambwi01.jpg",Ranking:"27.63783784","Adjusted Ranking":"100",Salary:"#N/A",Metric:"PTS",Weight:"0.340540541"},{ItemID:1002,PlayerID:"jordami01",Colleges:"University of North Carolina",BirthDate:"February 17, 1963",Wt:"195",Ht:"6-6",Pos:"G-F",To:"2003",From:"1985",PlayerURL:"https://www.basketball-reference.com/players/j/jordami01.html",Player:"Michael Jordan*",LetterURL:"https://www.basketball-reference.com/players/j/",BirthCity:"Brooklyn",BirthState:"New York",CareerGames:"1072",CareerPoints:"30.1",CareerTotalRebounds:"6.2",CareerAssists:"5.3",CareerFieldGoalPercentage:"49.7",CareerThreePointFieldGoalPercentage:"32.7",CareerFreeThrowPercentage:"83.5",CareerEffectiveFieldGoalPercentage:"50.9","Win Share per Game":"0.199626866",CareerPlayerEfficiencyRating:"27.9",CareerWinShares:"214",Shoots:"Right",PlayerImage:"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/jordami01.jpg",Ranking:"26.26756757","Adjusted Ranking":"95",Salary:"34458408.19",Metric:"AST",Weight:"0.12972973"},{ItemID:1003,PlayerID:"jamesle01",Colleges:"0",BirthDate:"December 30, 1984",Wt:"250",Ht:"6-8",Pos:"F-G",To:"2018",From:"2004",PlayerURL:"https://www.basketball-reference.com/players/j/jamesle01.html",Player:"LeBron James",LetterURL:"https://www.basketball-reference.com/players/j/",BirthCity:"Akron",BirthState:"Ohio",CareerGames:"1143",CareerPoints:"27.2",CareerTotalRebounds:"7.4",CareerAssists:"7.2",CareerFieldGoalPercentage:"50.4",CareerThreePointFieldGoalPercentage:"34.4",CareerFreeThrowPercentage:"73.9",CareerEffectiveFieldGoalPercentage:"54","Win Share per Game":"0.191951006",CareerPlayerEfficiencyRating:"27.7",CareerWinShares:"219.4",Shoots:"Right",PlayerImage:"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/jamesle01.jpg",Ranking:"25.25783784","Adjusted Ranking":"92",Salary:"33285709",Metric:"TRB",Weight:"0.194594595"},{ItemID:1004,PlayerID:"pettibo01",Colleges:"Louisiana State University",BirthDate:"December 12, 1932",Wt:"205",Ht:"6-9",Pos:"F-C",To:"1965",From:"1955",PlayerURL:"https://www.basketball-reference.com/players/p/pettibo01.html",Player:"Bob Pettit*",LetterURL:"https://www.basketball-reference.com/players/p/",BirthCity:"Baton Rouge",BirthState:"Louisiana",CareerGames:"792",CareerPoints:"26.4",CareerTotalRebounds:"16.2",CareerAssists:"3",CareerFieldGoalPercentage:"43.6",CareerThreePointFieldGoalPercentage:"0",CareerFreeThrowPercentage:"76.1",CareerEffectiveFieldGoalPercentage:"0","Win Share per Game":"0.171717172",CareerPlayerEfficiencyRating:"25.3",CareerWinShares:"136",Shoots:"Right",PlayerImage:"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/pettibo01.jpg",Ranking:"25.24054054","Adjusted Ranking":"92",Salary:"#N/A",Metric:"FG%",Weight:"0.081081081"},{ItemID:1005,PlayerID:"duranke01",Colleges:"University of Texas at Austin",BirthDate:"September 29, 1988",Wt:"240",Ht:"6-9",Pos:"F-G",To:"2018",From:"2008",PlayerURL:"https://www.basketball-reference.com/players/d/duranke01.html",Player:"Kevin Durant",LetterURL:"https://www.basketball-reference.com/players/d/",BirthCity:"Washington",BirthState:"District of Columbia",CareerGames:"771",CareerPoints:"27.1",CareerTotalRebounds:"7.1",CareerAssists:"3.9",CareerFieldGoalPercentage:"49",CareerThreePointFieldGoalPercentage:"38.4",CareerFreeThrowPercentage:"88.2",CareerEffectiveFieldGoalPercentage:"53.9","Win Share per Game":"0.168871595",CareerPlayerEfficiencyRating:"25.3",CareerWinShares:"130.2",Shoots:"Right",PlayerImage:"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/duranke01.jpg",Ranking:"24.91675676","Adjusted Ranking":"91",Salary:"25000000",Metric:"3P%",Weight:"0"},{ItemID:1006,PlayerID:"bayloel01",Colleges:"Albertson College of Idaho, Seattle University",BirthDate:"September 16, 1934",Wt:"225",Ht:"6-5",Pos:"F",To:"1972",From:"1959",PlayerURL:"https://www.basketball-reference.com/players/b/bayloel01.html",Player:"Elgin Baylor*",LetterURL:"https://www.basketball-reference.com/players/b/",BirthCity:"Washington",BirthState:"District of Columbia",CareerGames:"846",CareerPoints:"27.4",CareerTotalRebounds:"13.5",CareerAssists:"4.3",CareerFieldGoalPercentage:"43.1",CareerThreePointFieldGoalPercentage:"0",CareerFreeThrowPercentage:"78",CareerEffectiveFieldGoalPercentage:"0","Win Share per Game":"0.123167849",CareerPlayerEfficiencyRating:"22.7",CareerWinShares:"104.2",Shoots:"Right",PlayerImage:"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/bayloel01.jpg",Ranking:"24.76648649","Adjusted Ranking":"91",Salary:"#N/A",Metric:"FT%",Weight:"0.054054054"},{ItemID:1007,PlayerID:"birdla01",Colleges:"Indiana State University",BirthDate:"December 7, 1956",Wt:"220",Ht:"6-9",Pos:"F",To:"1992",From:"1980",PlayerURL:"https://www.basketball-reference.com/players/b/birdla01.html",Player:"Larry Bird*",LetterURL:"https://www.basketball-reference.com/players/b/",BirthCity:"West Baden",BirthState:"Indiana",CareerGames:"897",CareerPoints:"24.3",CareerTotalRebounds:"10",CareerAssists:"6.3",CareerFieldGoalPercentage:"49.6",CareerThreePointFieldGoalPercentage:"37.6",CareerFreeThrowPercentage:"88.6",CareerEffectiveFieldGoalPercentage:"51.4","Win Share per Game":"0.162541806",CareerPlayerEfficiencyRating:"23.5",CareerWinShares:"145.8",Shoots:"Right",PlayerImage:"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/birdla01.jpg",Ranking:"24.54918919","Adjusted Ranking":"90",Salary:"5608739.76",Metric:"PER",Weight:"0.2"},{ItemID:1008,PlayerID:"roberos01",Colleges:"University of Cincinnati",BirthDate:"November 24, 1938",Wt:"205",Ht:"6-5",Pos:"G-F",To:"1974",From:"1961",PlayerURL:"https://www.basketball-reference.com/players/r/roberos01.html",Player:"Oscar Robertson*",LetterURL:"https://www.basketball-reference.com/players/r/",BirthCity:"Charlotte",BirthState:"Tennessee",CareerGames:"1040",CareerPoints:"25.7",CareerTotalRebounds:"7.5",CareerAssists:"9.5",CareerFieldGoalPercentage:"48.5",CareerThreePointFieldGoalPercentage:"0",CareerFreeThrowPercentage:"83.8",CareerEffectiveFieldGoalPercentage:"0","Win Share per Game":"0.181923077",CareerPlayerEfficiencyRating:"23.2",CareerWinShares:"189.2",Shoots:"Right",PlayerImage:"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/roberos01.jpg",Ranking:"24.54594595","Adjusted Ranking":"90",Salary:"#N/A",Metric:"eFG%",Weight:"0"},{ItemID:1009,PlayerID:"abdulka01",Colleges:"University of California, Los Angeles",BirthDate:"April 16, 1947",Wt:"225",Ht:"7-2",Pos:"C",To:"1989",From:"1970",PlayerURL:"https://www.basketball-reference.com/players/a/abdulka01.html",Player:"Kareem Abdul-Jabbar*",LetterURL:"https://www.basketball-reference.com/players/a/",BirthCity:"New York",BirthState:"New York",CareerGames:"1560",CareerPoints:"24.6",CareerTotalRebounds:"11.2",CareerAssists:"3.6",CareerFieldGoalPercentage:"55.9",CareerThreePointFieldGoalPercentage:"5.6",CareerFreeThrowPercentage:"72.1",CareerEffectiveFieldGoalPercentage:"55.9","Win Share per Game":"0.17525641",CareerPlayerEfficiencyRating:"24.6",CareerWinShares:"273.4",Shoots:"Right",PlayerImage:"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/abdulka01.jpg",Ranking:"24.37351351","Adjusted Ranking":"89",Salary:"8437245.79",Metric:"",Weight:""},{ItemID:1010,PlayerID:"davisan02",Colleges:"University of Kentucky",BirthDate:"March 11, 1993",Wt:"253",Ht:"6-10",Pos:"F-C",To:"2018",From:"2013",PlayerURL:"https://www.basketball-reference.com/players/d/davisan02.html",Player:"Anthony Davis",LetterURL:"https://www.basketball-reference.com/players/d/",BirthCity:"Chicago",BirthState:"Illinois",CareerGames:"410",CareerPoints:"23.4",CareerTotalRebounds:"10.3",CareerAssists:"1.9",CareerFieldGoalPercentage:"51.7",CareerThreePointFieldGoalPercentage:"30.9",CareerFreeThrowPercentage:"79.5",CareerEffectiveFieldGoalPercentage:"52.7","Win Share per Game":"0.152439024",CareerPlayerEfficiencyRating:"27.1",CareerWinShares:"62.5",Shoots:"Right",PlayerImage:"https://d2cwpp38twqe55.cloudfront.net/req/201808311/images/players/davisan02.jpg",Ranking:"24.12864865","Adjusted Ranking":"89",Salary:"23775506",Metric:"Multiplying Factor:",Weight:""}]}}},R={render:function(){var e=this.$createElement,a=this._self._c||e;return a("section",[a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",[a("barChar",{attrs:{Playerdata:"Playerdata"}})],1)])])])])])},staticRenderFns:[]};var F=t("VU/8")(_,R,!1,function(e){t("UPJm")},null,null).exports;r.a.use(o.a);var B=new o.a({routes:[{path:"/",name:"HelloWorld",component:C},{path:"/About",name:"about",component:w},{path:"/Data",name:"data",component:F}]}),T=t("nwQr"),G=t.n(T),S=t("4h11"),k=t("Mt+p"),A=t("TvEJ"),W=t("vO7p"),E=t.n(W);r.a.use(S.a,k.a,A.a,G.a),r.a.use(E.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:B,components:{App:l},template:"<App/>"})},QcRv:function(e,a){},U674:function(e,a){},UPJm:function(e,a){},iOOK:function(e,a){},mVvc:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={render:function(){var e,a=this,t=a.$createElement,r=a._self._c||t;return r("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a.showing?r("div",{class:(e={},e[a.overlayClass]=a.overlay,e)},[a._t("loading-container",[r("div",{class:a.loaderClass},[a._t("loading-text",[r("div",{staticClass:"pulled-left",domProps:{innerHTML:a._s(a.label)}})]),a._v(" "),a._t("loading-spinner",[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"spinner-container"},[r("div",{staticClass:"spinner-layer spinner-layer--blue"},[r("div",{staticClass:"spinner-clipper spinner-clipper--left"},[r("div",{staticClass:"spinner-circle"})]),a._v(" "),r("div",{staticClass:"spinner--patch"},[r("div",{staticClass:"spinner-circle"})]),a._v(" "),r("div",{staticClass:"spinner-clipper spinner-clipper--right"},[r("div",{staticClass:"spinner-circle"})])]),a._v(" "),r("div",{staticClass:"spinner-layer spinner-layer--red"},[r("div",{staticClass:"spinner-clipper spinner-clipper--left"},[r("div",{staticClass:"spinner-circle"})]),a._v(" "),r("div",{staticClass:"spinner--patch"},[r("div",{staticClass:"spinner-circle"})]),a._v(" "),r("div",{staticClass:"spinner-clipper spinner-clipper--right"},[r("div",{staticClass:"spinner-circle"})])]),a._v(" "),r("div",{staticClass:"spinner-layer spinner-layer--yellow"},[r("div",{staticClass:"spinner-clipper spinner-clipper--left"},[r("div",{staticClass:"spinner-circle"})]),a._v(" "),r("div",{staticClass:"spinner--patch"},[r("div",{staticClass:"spinner-circle"})]),a._v(" "),r("div",{staticClass:"spinner-clipper spinner-clipper--right"},[r("div",{staticClass:"spinner-circle"})])]),a._v(" "),r("div",{staticClass:"spinner-layer spinner-layer--green"},[r("div",{staticClass:"spinner-clipper spinner-clipper--left"},[r("div",{staticClass:"spinner-circle"})]),a._v(" "),r("div",{staticClass:"spinner--patch"},[r("div",{staticClass:"spinner-circle"})]),a._v(" "),r("div",{staticClass:"spinner-clipper spinner-clipper--right"},[r("div",{staticClass:"spinner-circle"})])])])])])],2)])],2):a._e()])},staticRenderFns:[]};var s=t("VU/8")({props:{label:{default:"Loading..."},show:{default:!1},overlay:{default:!0},loaderClass:{default:"loader-wrapper"},overlayClass:{default:"white-overlay"},eventBus:{default:null},eventShow:{default:"show-full-loading"},eventHide:{default:"hide-full-loading"}},data:function(){return{showing:!1}},watch:{show:function(e){this.showing=e}},methods:{showMe:function(){this.showing=!0},hideMe:function(){this.showing=!1},registerBusMethods:function(){this.eventBus.$on(this.eventShow,this.showMe),this.eventBus.$on(this.eventHide,this.hideMe)}},mounted:function(){this.eventBus&&this.registerBusMethods()}},r,!1,function(e){t("1cKC")},"data-v-07fae1cb",null);a.default=s.exports},onPz:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.486f1c19fc8277c72567.js.map