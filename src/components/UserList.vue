<template>
    <ul>
        <slot v-for="user in users" :key="user.id" :user="user">
        </slot>
    </ul>
</template>

<script>
export default {
    props: {
        users: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style>
ul {
    width: 250px;
    list-style: none;
    text-align: center;
    padding: 0;
}
h6 {
    font-size: 0.8rem;
}
</style>
