<template>
  <span>{{ val.toFixed(2) || 0 }}</span>
</template>

<script>
export default {
  name: 'num',
  props: {
    val: Number
  }
}
</script>

