<template>
    <aside class="menu" v-show="isMenuVisible">
        <Tree :data="treeData" :options="treeOptions" ref="tree"/>
    </aside>
</template>

<script>
import { mapState } from 'vuex';
import Tree from 'liquor-tree';
import { baseApiUrl } from "@/global";
import axios from "axios";

export default {
    name: "Menu",
    components: { Tree },
    computed: mapState(['isMenuVisible']),
    data: function () {
        return {
            treeData: this.getTreeData(),
            treeOptions: {
                propertyNames: { 'text': 'name' }
            }
        }
    },
    methods: {
        getTreeData() {
            const url = `${ baseApiUrl }/categories/tree`;

            return axios.get(url)
                .then(res => res.data);
        }
    }
}
</script>

<style>
.menu {
	grid-area: menu;
	background: linear-gradient(to right, #232526, #414345);

	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
}

.menu a,
.menu a:hover {
	color: #FFF;
	text-decoration: none;
}

.menu .tree-node.selected > .tree-content,
.menu .tree-node .tree-content:hover {
	background-color: rgba(255, 255, 255, 0.2);
}

.tree-arrow.has-child {
    filter: brightness(2);
}
</style>
