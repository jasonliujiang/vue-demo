<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>

        <v-container fluid grid-list-xs>
          <v-layout row wrap>
            <v-flex
              v-for="i in 6"
              :key="i"
              xs4
            >
              <img
                :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`"
                alt="lorem"
                class="image"
                height="100%"
                width="100%"
              >
            </v-flex>
          </v-layout>
        </v-container>

        <v-subheader>June</v-subheader>
        <v-container fluid grid-list-xs>
          <v-layout row wrap>
            <v-flex
              v-for="i in 6"
              :key="i"
              xs4
            >
              <img
                :src="`https://randomuser.me/api/portraits/women/${i + 5}.jpg`"
                alt="lorem"
                class="image"
                height="100%"
                width="100%"
              >
            </v-flex>
          </v-layout>
        </v-container>

      </v-card>
    </v-flex>
  </v-layout>
</template>