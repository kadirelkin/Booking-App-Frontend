<template>
 <div>
    <b-sidebar id="sidebar-1"  no-header shadow>
      <div class="custom-header">
        <h4>{{ $t('sideBarTitle') }}</h4>
      </div>
      <div class="px-3 py-2">
        <nav class="mb-3">
          <b-nav vertical>
          <b-nav-item>
            <router-link class="nav-link" to="/pnr-validator">
              {{ $t("PNRValidator") }}
            </router-link>
           </b-nav-item>
           <b-nav-item>
             <router-link class="nav-link" to="/voucher-validator">
               {{ $t("VoucherValidator") }}
             </router-link>
           </b-nav-item>
        </b-nav>
      </nav>
    </div>
  </b-sidebar>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-button class="bg-transparent border-0" v-b-toggle.sidebar-1>
      {{ $t("toggleSideBarText") }}
    </b-button>
    <b-navbar-brand href="/">
        <router-link class="text-white" to="/">
              {{ $t("appNavbarTitle") }}
        </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="TR/EN" right>
          <b-dropdown-item @click="setLanguage('tr')">TR</b-dropdown-item>
          <b-dropdown-item @click="setLanguage('en')">EN</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>    
</template>

<script>
export default 
  {
  name: 'NavBar',
    data() {
      return {
      }
    },
    methods: {
      setLanguage(lang) {
        this.$i18n.locale = lang
        if(this.locale == 'tr'){
        this.$validator.locale = 'tr'
      }
      }
    }
  }
</script>
<style scoped>
.nav-link {
  color: black !important;
  text-decoration: none;
}
</style>

