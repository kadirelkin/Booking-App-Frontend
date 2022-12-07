<template>
<div class="row">
    <div class="col-12 d-flex flex-column">
      <div v-if="isUserExist" class="user-info">
        <h2>{{ $t("userExistText") }}</h2>
        <b-form-input class="col-6 ml-auto mr-auto" v-model="userInfo" disabled></b-form-input>
      </div>
      <div v-else>
        <h2>{{ $t('nameInputHeading') }}</h2>
        <b-form-input @keydown.native="onSubmit" v-model="userData" :placeholder="$t('nameInputPlaceholder')"></b-form-input>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MainPage',
    data() {
      return {
        isUserExist : false,
        userInfo: null,
        userData: ''
      }
    },
    methods: {
      onSubmit(evt) {
        if(evt.which == 13){
          this.isUserExist = true;
          this.userInfo = this.userData;
          this.$store.commit('setUserInfo',{userInfo : this.userData});
        }
      }
    },
    mounted:function(){
      if(this.$store.state.isRedirected){
        setTimeout(() =>
        {
          window.alert(this.$t('redirectMessage'));
        },500)
        this.$store.commit('setIsRedirected',{isRedirected : false});
      }
      if(localStorage.getItem('userInfo') != null){
        this.isUserExist = true;
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
      }
    }
  }
</script>


