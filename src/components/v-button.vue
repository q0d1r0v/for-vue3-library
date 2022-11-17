<script setup lang="ts">
const props = defineProps<{
    color?: string
}>()
</script>

<template>
    <div v-if="props.color == 'error'" class="v-error-button">
        <slot />
    </div>

    <div v-else-if="props.color == 'success'" class="v-success-button">
        <slot />
    </div>

    <div class="v-primary-button" v-else>
        <slot />
    </div>
</template>

<style scoped>
.v-primary-button {
    min-width: 70px;
    padding: 0px 5px;
    height: 40px;
    background: lightskyblue;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    -webkit-user-select: none;
    color: #fff;
    transition: all 0.3s;
}

.v-primary-button:hover {
    background: rgba(135, 206, 250, 0.904);
}

.v-primary-button:active {
    background: rgba(135, 206, 250, 0.637);
}


.v-error-button {
    min-width: 70px;
    padding: 0px 5px;
    height: 40px;
    background: lightcoral;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    -webkit-user-select: none;
    color: #fff;
    transition: all 0.3s;
}

.v-error-button:hover {
    background: rgba(240, 128, 128, 0.877);
}

.v-error-button:active {
    background: rgba(240, 128, 128, 0.705);
}


.v-success-button {
    min-width: 70px;
    padding: 0px 5px;
    height: 40px;
    background: lightgreen;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    -webkit-user-select: none;
    color: #fff;
    transition: all 0.3s;
}

.v-success-button:hover {
    background: rgba(144, 238, 144, 0.918);
}

.v-success-button:active {
    background: rgba(144, 238, 144, 0.671);
}
</style>