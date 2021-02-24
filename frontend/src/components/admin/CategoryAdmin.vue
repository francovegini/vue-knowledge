<template>
    <div class="category-admin">
        <b-form>
            <input id="category-id" type="hidden" v-model="category.id"/>
            <b-row>
                <b-col>
                    <b-form-group label="Nome:" label-for="category-name">
                        <b-form-input id="category-name" type="text" v-model="category.name" required
                                      placeholder="Informe o nome da categoria" :readonly="mode === 'remove'"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group label="Categoria pai:" label-for="category-parentId">
                        <b-form-select id="category-parentId" :options="categories" v-model="category.parentId"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col xs="12">
                    <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
                    <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Remover</b-button>
                    <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>
        <hr/>
        <b-table hover striped :items="categories" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadCategory(data.item)" class="mr-2">
                    <i class="fa fa-pencil"/>
                </b-button>
                <b-button variant="danger" @click="loadCategory(data.item, 'remove')">
                    <i class="fa fa-trash"/>
                </b-button>
            </template>
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
        },
        loadCategory(category, mode = 'save') {
            this.mode = mode;
            this.category = { ...category };
        },
        save() {

        },
        remove() {

        },
        reset() {

        }
    },
    mounted() {
        this.loadCategories();
    }
}
</script>

<style>

</style>
