<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>CoreUI Smart Table</strong> <small>Vue Table Component</small>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="components/smart-table.html">
            <SmartTableBasixExample />
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>CoreUI Smart Table</strong> <small>Vue Table Component</small>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="components/smart-table.html">
            <SmartTableSelectableExample />
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>CoreUI Smart Table</strong>
          <small>Table with selectable rows</small>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="components/smart-table.html">
            <SmartTableDownloadableExample />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import SmartTableBasixExample from './SmartTableBasixExample'
import SmartTableDownloadableExample from './SmartTableDownloadableExample'
import SmartTableSelectableExample from './SmartTableSelectableExample'
export default {
  name: 'SmartTable',
  components: {
    SmartTableBasixExample,
    SmartTableDownloadableExample,
    SmartTableSelectableExample,
  },
}
</script>
