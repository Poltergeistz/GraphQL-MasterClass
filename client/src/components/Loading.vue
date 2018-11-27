<template>
    <div class="text-xs-center">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <h3 class="font-weight-light.font-italic">We're fetching that content for you.</h3>
    </div>
</template>
<script>
export default {
    name: 'Loading'
    
}
</script>
