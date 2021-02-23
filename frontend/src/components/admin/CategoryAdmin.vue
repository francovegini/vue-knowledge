<template>
    <div class="category-admin">
        <b-form>
            <input id="category-id" type="hidden" v-model="category.id"/>
            <b-row>
                <b-col sm="12" md="12">
                    <b-form-group label="Nome:" label-for="category-name">
                        <b-form-input id="category-name" type="text" v-model="category.name" required
                                      placeholder="Informe o nome da categoria" :readonly="mode === 'remove'"/>
                    </b-form-group>
                </b-col>
                <b-col sm="12" md="12">
                    <b-form-group label="Categoria pai:" label-for="category-parentId">
                        <b-form-select id="category-parentId" :options="categories" v-model="category.parentId"/>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-form>

        <b-table hover striped :items="categories" :fields="fields">
        </b-table>
    </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";

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
    methods: {
        loadCategories() {
            axios.get(`${ baseApiUrl }/categories`)
                .then(res => {
                    this.categories = res.data.map(category => {
                        return { ...category, value: category.id, text: category.path }
                    })
                })
        }
    },
    mounted() {
        this.loadCategories();
    }
}
</script>

<style>

</style>
