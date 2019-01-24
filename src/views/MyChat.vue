<template>
  <v-layout row justify-center>
    <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="red">

          <v-toolbar-title>{{ user }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="show = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-divider></v-divider>
        Hello World
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: 'my-chat',
    props: ['visible', 'user'],
    data () {
      return {
        show: false,
        notifications: false,
        sound: true,
        widgets: false
      }
    },
    watch: {
      show(val, prev) {
        this.$emit('update:visible', this.show);
      },
      visible(val, prev) {
        this.show = val;
      }
    }
  }
</script>