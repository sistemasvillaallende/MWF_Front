<template>
  <CDropdown variant="nav-item">
    <CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
      <CAvatar
        :src="foto"
        size="md"
        style="height: 45px; width: auto; border-radius: 100%"
      />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <CDropdownHeader
        component="h6"
        class="dropdown-header bg-light dark:bg-white dark:bg-opacity-10 py-2"
      >
        Account
      </CDropdownHeader>
      <CDropdownItem>
        <CIcon icon="cil-bell" /> Updates
        <CBadge color="info-gradient" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-envelope-open" /> Messages
        <CBadge color="success-gradient" class="ms-auto">{{
          itemsCount
        }}</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-task" /> Tasks
        <CBadge color="danger-gradient" class="ms-auto">{{
          itemsCount
        }}</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-comment-square" /> Comments
        <CBadge color="warning-gradient" class="ms-auto">{{
          itemsCount
        }}</CBadge>
      </CDropdownItem>
      <CDropdownHeader
        component="h6"
        class="dropdown-header bg-light dark:bg-white dark:bg-opacity-10 py-2"
      >
        Settings
      </CDropdownHeader>
      <CDropdownItem> <CIcon icon="cil-user" /> Profile </CDropdownItem>
      <CDropdownItem> <CIcon icon="cil-settings" /> Settings </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-dollar" /> Payments
        <CBadge color="secondary" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-file" /> Projects
        <CBadge color="primary-gradient" class="ms-auto">{{
          itemsCount
        }}</CBadge>
      </CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem>
        <CIcon icon="cil-shield-alt" /> Lock Account
      </CDropdownItem>
      <CDropdownItem> <CIcon icon="cil-lock-locked" /> Logout </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>
<style>
.avatar-img {
  width: auto;
  height: 45px;
  border-radius: 50em;
}
</style>
<script>
export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    return {
      itemsCount: 42,
    }
  },
  data: () => ({
    foto: '',
  }),
  async mounted() {
    this.foto = this.$store.getters.getFoto
    //alert(this.NombreFormateado)
  },
}
</script>
