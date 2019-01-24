<template>
    <v-list two-line>
        <template v-for="(item, index) in items">
            <v-subheader
                    v-if="item.header"
                    :key="item.header"
            >
                {{ item.header }}
            </v-subheader>

            <v-divider
                    v-else-if="item.divider"
                    :inset="item.inset"
                    :key="index"
            ></v-divider>

            <v-list-tile
                    v-else
                    :key="item.name"
                    avatar
                    @click="openChat(item.name)"
            >
                <v-list-tile-avatar>
                    <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title v-html="item.name"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </template>
        <my-chat :visible.sync="open" :user="chatUser"></my-chat>
    </v-list>
</template>
<script>
  import MyChat from './MyChat'
  export default {
    data () {
      return {
        open: false,
        chatUser: '',
        items: [
          { header: 'Today' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            name: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            name: 'Summer BBQ',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            name: 'Oui oui',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
          }
        ]
      }
    },
    components: {MyChat},
    methods: {
      openChat: function (name) {
        this.chatUser = name;
        this.open = true;
      }
    }
  }
</script>