<template>
    <div class="column">
        <h2 class="is-size-3">Select Player</h2>
        <div class="select">
            <select v-model="vtest" :id='ident'>
                <option v-for="(player, index) in Players" :value=index :key="player.ItemID">
                    {{player.Player}} 
                </option>
            </select>
            <img class="pimg" v-if="Players[vtest].PlayerImage" :src='Players[vtest].PlayerImage'/>
        </div>
        <div>
            
        </div>
        
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'selectPlayer',
    props: ['ident', 'Players', 'start'],

    data(){
        return {
            vtest: this.start,
        }
    },
    
    
}
</script>
<style>
.pimg{
  border: solid black 3px;
  margin-top: 25px;
}
</style>


