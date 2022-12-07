<template>
  <div class="d-flex row">
    <div class="col-3 align-self-center">
      <b-button @click="prevPage" size="sm" class="align-self-center">
        <b-icon-arrow-left></b-icon-arrow-left>
      </b-button>
    </div>
    <div class="col-6">
      <div class="input-area">
        <h4>PNR</h4>
        <b-form-input size="sm" name="pnr" v-model="userVoucherNo" disabled>
        </b-form-input>
      </div>
      <div class="input-area">
        <h4>Voucher</h4>
        <b-form-input size="sm" name="voucher" v-model="userPNRNo" disabled>
        </b-form-input>
      </div>
      <div class="submit-btn-content mt-5">
        <b-button v-b-modal.confirm-modal size="sm" class="btn-primary">
          {{ $t("confirmText") }}
        </b-button>
        <b-modal hide-footer hide-header id="confirm-modal">
          <p class="my-4 text-center">{{ $t("confirmModalText") }}</p>
          <div class="d-flex justify-content-around">
            <b-button size="sm" class="btn-info" @click="submitData">
              {{ $t("confirmText") }}
            </b-button>
            <b-button
              size="sm"
              class="btn-danger"
              @click="$bvModal.hide('confirm-modal')"
            >
              {{ $t("cancelText") }}
            </b-button>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PNRValidator",
  data() {
    return {
      userPNRNo: this.$store.state.userPNRNo || null,
      userVoucherNo: this.$store.state.userVoucherNo || null,
      changePageAndSetStore: function (page) {
        this.$router.push({ name: page });
      },
    };
  },
  methods: {
    submitData() {
      this.$store.commit("setUserPNRNo", { userPNRNo: null });
      this.$store.commit("setUserVoucherNo", { userVoucherNo: null });
      this.$store.commit("setIsRedirected", { isRedirected: true });
      this.$http
        .post("http://localhost:9000/validate", {
          params: {
            pnr: this.userPNRNo,
            voucher: this.userVoucherNo,
          },
        })
        .then((res) => console.log(res.data.params));
      this.changePageAndSetStore("MainPage");
    },
    prevPage() {
      this.changePageAndSetStore("VoucherValidator");
    },
  },
};
</script>
<style>
.input-area {
  flex-grow: 1;
}
</style>
