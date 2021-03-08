<template>
    <div class="auth-content">
        <div class="auth-modal">
            <img src="@/assets/logo.png" width="200" alt="Logo"/>
        </div>
    </div>
</template>

<script>

import axios from "axios";
import { baseApiUrl, showError, userKey } from "@/global";

export default {
    name: "Auth",
    data: function () {
        return {
            showSignup: false,
            user: {}
        }
    },
    methods: {
        signin() {
            axios.post(`${ baseApiUrl }/signin`, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data);
                    localStorage.setItem(userKey, JSON.stringify(res.data));
                    this.$router.push({ path: "/" });
                })
                .catch(showError);
        }
    }
}
</script>

<style>
.auth-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth-modal {
    background-color: #FFF;
    width: 350px;
    padding: 35px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
