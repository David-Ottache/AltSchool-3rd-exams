<template>
    <div class="Styler">
        <h1>VUE COUNTER</h1>
        <h1>{{ count }}</h1>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="reset">Reset</button>
        <!-- <input v-model="value" type="number" /> -->
        <button @click="setValue">Set Value</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useCounter } from '../composables/counter';


export default {
    setup() {
        const count = ref(0);
        const { increment, decrement, reset, setValue } = useCounter(count);

        const value = ref('');


        return {
            count,
            increment,
            decrement,
            reset,
            value,
            setValue,

        };
    },

};

</script>

<style>
.Styler {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    width: 25%;
    Padding: 60px;
}


button {
    
    display: inline-block;
    padding: 0.46em 1.6em;
    border: 0.1em solid #000000;
    margin: 0 0.8em 0.8em 0;
    border-radius: 0.5em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: cyan;
    text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
    background-color: purple;
    text-align: center;
    transition: all 0.15s;
}

button:hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    color: #FFFFFF;
    border-color: #FFFFFF;

}

input{
    display: inline-block;
    padding: 0.46em 1.6em;
    border: 0.1em solid #000000;
    margin: 0 0.8em 0.8em 0;
    border-radius: 0.5em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: cyan;
    text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
    background-color: purple;
    text-align: center;
    transition: all 0.15s;

}
</style>









