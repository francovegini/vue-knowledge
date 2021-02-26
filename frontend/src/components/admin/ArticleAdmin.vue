<template>
    <div class="article-admin">
        <b-form>
            <input id="article-id" type="hidden" v-model="article.id"/>
            <b-row>
                <b-col>
                    <b-form-group label="Nome:" label-for="article-name">
                        <b-form-input id="article-name" type="text" v-model="article.name" required
                                      placeholder="Informe o nome do artigo" :readonly="mode === 'remove'"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group label="Categoria pai:" label-for="article-parentId">
                        <b-form-select v-if="mode === 'save'"
                                       id="article-parentId"
                                       :options="articles" v-model="article.parentId"/>
                        <b-form-input v-else
                                      id="article-parentId" type="text"
                                      v-model="article.path"
                                      readonly/>
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
        <b-table hover striped :items="articles" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadArticle(data.item)" class="mr-2">
                    <i class="fa fa-pencil"/>
                </b-button>
                <b-button variant="danger" @click="loadArticle(data.item, 'remove')">
                    <i class="fa fa-trash"/>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import axios from "axios";
import { baseApiUrl, showError } from "@/global";

export default {
    name: "ArticleAdmin",
    components: { VueEditor },
    data: function () {
        return {
            mode: 'save',
            article: {},
            articles: [],
            categories: [],
            users: [],
            page: 1,
            limit: 0,
            count: 0,
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: 'Nome', sortable: true },
                { key: 'path', label: 'Caminho', sortable: true },
                { key: 'actions', label: 'Ações' }
            ]
        }
    },
    methods: {
        loadArticles() {
            axios.get(`${ baseApiUrl }/articles`)
                .then(res => {
                    this.articles = res.data.map(article => {
                        return { ...article, value: article.id, text: article.path }
                    })
                })
        },
        loadArticle(article, mode = 'save') {
            this.mode = mode;
            this.article = { ...article };
        },
        save() {
            const method = this.article.id ? 'put' : 'post';
            const id = this.article.id ? `/${ this.article.id }` : '';

            axios[method](`${ baseApiUrl }/articles${ id }`, this.article)
                .then(() => {
                    this.$toasted.global.defaultSuccess();
                    this.reset();
                })
                .catch(showError);
        },
        remove() {
            const id = this.article.id

            axios.delete(`${ baseApiUrl }/articles/${ id }`)
                .then(() => {
                    this.$toasted.global.defaultSuccess();
                    this.reset();
                })
                .catch(showError);
        },
        reset() {
            this.mode = 'save';
            this.article = {};
            this.loadArticles();
        }
    },
    mounted() {
        this.loadArticles();
    }
}
</script>

<style>
</style>
