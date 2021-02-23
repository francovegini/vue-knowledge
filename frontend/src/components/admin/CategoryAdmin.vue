<template>
    <div class="category-admin">
        <b-table hover striped :items="categories" :fields="fields">
        </b-table>
    </div>
</template>

<script>
export default {
    name: "CategoryAdmin",
    data: function () {
        return {
            mode: 'save',
            category: {},
            categories: [],
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: 'Nome', sortable: true },
                { key: 'path', label: 'Caminho', sortable: true },
                { key: 'actions', label: 'Ações' }
            ]
        }
    },
    methods: {}
}
</script>

<style>

</style>
