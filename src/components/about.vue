<template>
    <section class="section">
        <h1 class="is-size-3">
            Project Creation Process
        </h1>
        <p class="container">
            This project started with the question: who is better, Michael Jordan or LeBron James? These two are frequently debated as the G.O.A.T. (greatest of all time). However, These two never played in the NBA at the same time, and both have played in different eras of basketball.
        Basketball.
Without being able to settle the question with a one-on-one game, many people turn to statistics to compare the two. But which statistics should be compared? For instance, LeBron James has a career points per game total of 27.2 and Michael Jordan has 30.1 PPG. But LeBron has a field goal percentage of 50.4% and Jordan, 49.7%. These two differ in dozens of other metrics measured by the NBA for each game, season, and career of players. Other less-measurable factors, like hustle or leadership, can also be debated.
We wanted to rank players based on solely on numbers, to be able to compare players in the least subjective way possible. And we wanted to create a ranking similar to the NBA 2K video game rankings, where players are given a score, 0 to 100, based on their skills. 
We also wanted to compare salaries of players, giving hypothetical salaries to what any NBA player should make if they played in the league today.

        </p>
        <h1 class="is-size-3">
            Data Gathering
        </h1>
        <p class="container">
            We used Basketball Reference, an online database that lists statistics for every player, coach, and team in the NBA. Using Mozenda web scraping services, we compiled statistics for every players career averages. From roughly 4500 players, we removed any player who played who played less than 50 career games and any player from before 1950. This left us with 3,161 players over almost 70 years.
We also gathered information for salaries using this same process from Basketball Reference.
        </p>

        <h1 class="is-size-3">
            Ranking
        </h1>
        <p class="container">
            Basketball Reference uses a metric called “Win Shares” which “attempts to divvy up credit for team success to the individuals on the team” (https://www.basketball-reference.com/about/ws.html). While this is a good ranking in itself, we wanted to take it further. Taking the Win Share rating for each player, we performed regression analysis to compare six other metrics: points per game (PTS), assists (AST), rebounds (TRB), field-goal percentage (FG%), free-throw percentage (FT%), and player efficiency rating (PER, calculated rating based on player accomplishments). 
[TABLE]
From these calculations, we took the R-squared of each correlation to compare which metrics contributed most to Win Shares. We then weighted this information to which we would compare every player.
For a touchstone, we gathered the statistics of the “ideal player.” We took statistics for NBA career records for each factor, except FG% and PER, which we gave high values of 60% and 30%. This ideal player created a high score, which we drew a multiplying factor for all players.
This allowed us to rank each player on a scale of 0 to 100, which the number one player being (*drumroll please*): Wilt Chamberlain.
Chamberlain beats Jordan and LeBron (number 2 and number 3) in PTS, TRB, and FG%.

        </p>

        <h1 class="is-size-3">
            Salary
        </h1>
        <p class="container">
           In order to forecast the prospective salary of any NBA player based upon their rank and performance, we projected their career average salary forward, took an average of all NBA players’ salaries for each year of their career, took a percent difference of their career average from the overall average, organized them into cohorts based on performance, and projected each cohorts estimated salary. From this we are no able to determine on average what each NBA player should make based upon their performance.

        </p>

        <h1 class="is-size-3">
            Website
        </h1>
        <p class="container">
            With the statistics of each player, we created this website to compare any two NBA players against each other. Users select two players and press “Go”. Then the statistics for each player and a radar chart appear, comparing the two and presenting the better player. We also included some charts based on our findings.


        </p>

        <h1 class="is-size-3">
            About
        </h1>
        <p class="container">

             This project was completed in 24 hours in September 2018 for the Wolff Company BI tournament at Brigham Young University. Our team consisted of Caden Dortch, Radley Nelson, Ross Rosenlof, Ryan Jenks, Taylor Bakow, and Trevan Reese.
        </p>
        <img src='https://files.slack.com/files-pri/TD0137HGB-FD38QE3DF/ranking_flowchart.png'/>

        

    </section>
</template>

<script>
export default {
    name: 'about',
    data(){
        return {

        }
    }
}
</script>

<style scoped>
    h1{
        margin-top: 25px;
    }
    p{
        margin-top: 25px;
    }
</style>



