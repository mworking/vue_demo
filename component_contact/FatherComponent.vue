<template>
    <div>
        <son-component msgFromFather = 'this is data from father'></son-component>
    </div>
</template>

<script>

    import SonComponent from './SonComponent.vue'

    export default {
        components: { SonComponent }
    }
</script>