<template>
  <div class="d-flex row">
   <div class="col-3 align-self-center">
     <b-button @click="prevPage" :disabled="errors.has('pnr')" size="sm" class="align-self-center">
      <b-icon-arrow-left></b-icon-arrow-left>
     </b-button>
   </div>
   <div class="col-6">
      <div class="input-area">
      <h4>PNR</h4>
      <b-form-input
        size="sm"
        name="pnr"
        @keydown.native="onSubmit"
        v-model="userPNRNo"
        :placeholder="$t('PNRInputPlaceholder')"
        maxlength="6"
        v-validate.initial="'required|alpha_num|length:6|min:6'"
      >
      </b-form-input>
      <i v-show="errors.has('pnr')" class="text-danger">{{
        errors.first("pnr")
      }}</i>
    </div>
   </div>
    <div class="col-3 align-self-center">
    <b-button @click="nextPage" :disabled="errors.has('pnr')" size="sm" class="align-self-center">
      <b-icon-arrow-right></b-icon-arrow-right>
    </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PNRValidator",
  data() {
    return {
      userPNRNo: this.$store.state.userPNRNo || null,
      changePageAndSetStore: function(page){
        this.$store.commit("setUserPNRNo", { userPNRNo: this.userPNRNo });
        this.$router.push({name:page});
      }
    };
  },
  methods: {
    onSubmit(evt) {
      if(evt.which == 13){
        this.changePageAndSetStore('VoucherValidator');
      }
    },
    nextPage() {
      this.changePageAndSetStore('VoucherValidator');
    },
    prevPage(){
      this.changePageAndSetStore('MainPage');
    }
  },
};
</script>
<style>
.input-area {
  flex-grow: 1;
}
</style>
