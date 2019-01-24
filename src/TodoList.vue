<template>
    <div>
        <div>
            <input v-model="inputValue"/>
            <button @click="handleSubmit">提交</button>

        </div>
        <ul>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        //
        data:function () {
          return{
              inputValue:"",
              list:[]
          }
        },
        methods:{
            handleSubmit(){
                alert(123)
                this.list.push(this.inputValue)
                this.inputValue = ''
            }
        }

    }
</script>

<style scoped>

</style>