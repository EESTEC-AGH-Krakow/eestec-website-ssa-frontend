<template>
    <div class="modal-container">
        <div class="modal-content">
            <slot />
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {}
        }
    }
</script>


<style scoped lang="scss">
    .modal-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 50px;
    }

    .modal-content {
        width: 80%;
    }
</style>