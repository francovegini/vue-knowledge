<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main=" Dashboard" sub="Base de conhecimento"/>
    </div>
</template>

<script>
import PageTitle from "@/components/template/PageTitle";
import Stat from "@/components/home/Stat";
import axios from 'axios';
import { baseApiUrl } from "@/global";

export default {
    name: "Home",
    components: { PageTitle, Stat },
    data: function () {
        return {
            stat: {}
        }
    },
    methods: {
        getStats() {
            axios.get(`${ baseApiUrl }/stats`)
                .then(res => this.stat = res.data);
        }
    },
    mounted() {
        this.getStats();
    }
}
</script>

<style>

</style>
