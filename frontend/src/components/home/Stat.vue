<template>

</template>

<script>
export default {
    name: "Stat",
    props: ['title', 'value', 'icon', 'color'],
    computed: {
        style() {
            return "color: " + (this.color || "#000");
        }
    }
}
</script>

<style>

</style>
