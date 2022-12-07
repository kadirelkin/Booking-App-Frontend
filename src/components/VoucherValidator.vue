<template>
  <div class="d-flex row">
   <div class="col-3 align-self-center">
     <b-button @click="prevPage" :disabled="errors.has('voucher')" size="sm" class="align-self-center">
      <b-icon-arrow-left></b-icon-arrow-left>
     </b-button>
   </div>
   <div class="col-6">
      <div class="input-area">
      <h4>Voucher</h4>
      <b-form-input
        size="sm"
        name="voucher"
        @keydown.native="onSubmit"
        v-model="userVoucherNo"
        :placeholder="$t('VoucherInputPlaceholder')"
        maxlength="10"
        v-validate.initial="'required|numeric|max:10|min:6'"
      >
      </b-form-input>
      <i v-show="errors.has('voucher')" class="text-danger">{{
        errors.first("voucher")
      }}</i>
    </div>
   </div>
    <div class="col-3 align-self-center">
    <b-button @click="nextPage" :disabled="errors.has('voucher')" size="sm" class="align-self-center">
      <b-icon-arrow-right></b-icon-arrow-right>
    </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VoucherValidator",
  data() {
    return {
      userVoucherNo: this.$store.state.userVoucherNo || null,
      changePageAndSetStore: function(page){
        this.$store.commit("setUserVoucherNo", { userVoucherNo: this.userVoucherNo });
        this.$router.push({name:page});
      }
    };
  },
  methods: {
    onSubmit(evt) {
      if(evt.which == 13){
        this.changePageAndSetStore('ConfirmPage');
      }
    },
    nextPage() {
      this.changePageAndSetStore('ConfirmPage');
    },
    prevPage(){
      this.changePageAndSetStore('PNRValidator');
    }
  },
};
</script>
<style>
.input-area {
  flex-grow: 1;
}
</style>
