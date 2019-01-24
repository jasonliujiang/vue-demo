<template>
    <v-app>
        <!-- TOOLBAR -->
        <v-navigation-drawer dark
                             v-model="drawer"
                             fixed
                             clipped
                             app
                             width="200"
        >
            <v-list>
                <v-list-tile
                        v-for="item in items1"
                        :key="item.title"
                        @click=""
                >
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar dark color="red" app fixed>

            <v-toolbar-title class="white--text">WeChat</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon @click.native="changeNav()"></v-toolbar-side-icon>
        </v-toolbar>

        <!-- CONTENT -->
        <v-content app>
            <v-container fluid pa-0>
                <router-view></router-view>
            </v-container>
        </v-content>

        <!-- BOTTOM NAV -->
        <v-bottom-nav app shift :value="true" color="red">

            <v-btn dark @click="handleSelect('image')">
                <span>Image</span>
                <v-icon>photo_size_select_actual</v-icon>
            </v-btn>
            <v-btn dark @click="handleSelect('message')">
                <span>Message</span>
                <v-icon>sms</v-icon>
            </v-btn>
            <v-btn dark @click="handleSelect('me')">
                <span>Me</span>
                <v-icon>person_outline</v-icon>
            </v-btn>
        </v-bottom-nav>
    </v-app>
</template>
<script>
  import router from './router';

  export default {
    data() {
      return {
        drawer: false,
        items1: [
          { title: 'Dashboard', icon: 'dashboard' },
          { title: 'Account', icon: 'account_box' },
          { title: 'Admin', icon: 'gavel' }
        ]
      }
    },
    methods: {
      changeNav() {
        this.drawer = !this.drawer;
      },
      handleSelect(key) {
        router.push(key)
      }
    }
  }
</script>