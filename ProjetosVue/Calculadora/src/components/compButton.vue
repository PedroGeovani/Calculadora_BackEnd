<template>
    <button>
        <h3> {{title}} </h3>
    </button>
</template>

<script>
    export default{
        name: 'button',
        date(){
            return{
                title: "0"
            }
        }
    }

</script>