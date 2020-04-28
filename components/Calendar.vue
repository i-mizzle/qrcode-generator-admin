<template>
  <div>
    <no-ssr>
      <v-calendar
        is-dark
        is-inline
        is-expanded
        mode="multiple"
        v-model="selectedDate"
        :min-date="new Date()"
      />
    </no-ssr>
  </div>
</template>
<script>
export default {
  data() {
    return {
        selectedDate: {
            start: new Date(2020,1,9),
            end: new Date(2020,1,10)
        },
        // dates: [
        //     new Date(2020, 1, 1),
        //     {
        //         start: new Date(2020, 1, 10),
        //         end: new Date(2020, 1, 12)
        //     },
        //     new Date(2020, 1, 15),
        // ],
    }
   }
};
</script>
<style lang="scss" scoped>

    .vc-container {
        font-family: 'Poppins', sans-serif;
        background-color: $primary; 
        border: transparent;
        border-radius: 3px;
        height: 300px;
        display: flex;
        align-items: center;
        padding:15px;
    }
</style>