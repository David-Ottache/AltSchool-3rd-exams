import { computed } from 'vue';


export function useCounter(count) {
  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  const reset = () => {
    count.value = 0;
  };


  // const setValue = () => {
  //   count.value = parseInt(value.value) 
  // };

  const evenOrOdd = computed(() => {
    return count.value % 2 === 0 ? 'even' : 'odd';
  });

  return {
    increment,
    decrement,
    reset,
    // setValue,
    evenOrOdd,
  };
}
