<script setup>
import { onMounted, onUnmounted } from 'vue'
import FieldAddressTable from '../components/FieldAddressTable.vue'
import FieldAdvanceXpath from '../components/FieldAdvanceXpath.vue'

onMounted(() => {
  document.body.classList.add('no-nav')

  var content = document.querySelector("div.VPContent")
  if (content) {
    content.style.paddingTop = "var(--vp-nav-height)"
    content.style.paddingLeft = "0px";
  }

  // Hide Right Side Bar
  var aside = document.querySelector("div.VPContent div.aside")
  if (aside) {
    aside.style.display = "none"
  }

  // Container
  var pageContent = document.querySelector("div.VPContent div.content-container")
  if (pageContent) {
    pageContent.style.maxWidth = "100%"
  }
})

onUnmounted(() => {
  document.body.classList.remove('no-nav')

  var content = document.querySelector("div.VPContent")
  if (content) {
    content.removeAttribute("style")
  }

  // Right Side Bar
  var aside = document.querySelector("div.VPContent div.aside")
  if (aside) {
    aside.removeAttribute("style")
  }
})
</script>

<style>
.no-nav .VPSidebar {
  display: none;
}
</style>

# Locate Element

How to locate any element on page?

There are three ways to locate any element on any web page.

1. Using Element **ID**
2. Using Element **Selector** Query
3. Using Element **XPath** Address

<img src="/image/field-selector-query-01.png" alt="Field Selector Address">

## Basic Query

<FieldAddressTable/>

## Advance XPath

<FieldAdvanceXpath/>
