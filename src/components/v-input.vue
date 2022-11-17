<script setup lang="ts">

const props = defineProps<{
    value: string,
    placeholder?: string,
    type?: string
}>()

</script>

<template>
    <div>
        <input v-if="props.type == 'password'" :type="props.type" class="v-input" :placeholder="props.placeholder" id="v-input"/>
        <input v-else type="text" class="v-input" :placeholder="props.placeholder" id="v-input">
        <pre>
            {{props}}
        </pre>
    </div>
</template>

<style scoped>
.v-input {
    width: 200px;
    min-width: 100px;
    height: 25px;
    padding: 5px;
    font-size: 15px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    transition: all 0.3s;
}
.v-input:focus {
    outline: none;
    border: 1px solid lightgreen;
}
</style>