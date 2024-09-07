<script setup>
import { ref, watch, onMounted } from "vue";

// Lib
import { isMatchURL } from "extra-javascript-functions/src/RegExp.js";

const store = ref({
  url: "https://demo.in/form/pagea/45",
  regex: "https://demo.in/form/(\\w+)/(\\d+$)",
  isMatched: false,
});

const output = ref([])

const isMatchRegEx = async () => {
  try {
    if (!store.value.url || !store.value.regex) return false;

    // Match Custom RegEx
    output.value = isMatchURL(store.value.regex, store.value.url);
    if (!output.value) store.value.isMatched = false
    else store.value.isMatched = true

    return true

  } catch (e) {
    store.value.isMatched = false
    return false
  }
};

watch(() => store.value, async (newValue, prevValue) => {
  localStorage.setItem("EX-DATA-DOCS-TESTING-REGEX-STORE", JSON.stringify({ url: newValue.url, regex: newValue.regex }))
  isMatchRegEx()
}, { deep: true });

onMounted(async () => {
  var getStore = localStorage.getItem("EX-DATA-DOCS-TESTING-REGEX-STORE")
  if (getStore && JSON.parse(getStore)) {
    getStore = JSON.parse(getStore)
    if (getStore.url !== undefined) store.value.url = getStore.url
    if (getStore.regex !== undefined) store.value.regex = getStore.regex
  }

  isMatchRegEx()
});

</script>

<template>
  <div>
    <label for="form-url">Form URL</label>
    <textarea v-model="store.url" placeholder="Enter the form URL here..."></textarea>
    <label for="form-url-regex">Form URL RegEx</label>
    <textarea v-model="store.regex" placeholder="Enter the form URL RegEx here..."></textarea>
    <p v-bind:class="{ 'regex-matched': store.isMatched, 'regex-not-matched': !store.isMatched }">{{ store.isMatched ? 'MATCHED :)' : 'NOT MATCHED :(' }}</p>
    <pre v-if="output" class="pre-output">{{ output }}</pre>
  </div>
</template>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.cth-btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  cursor: pointer;
}

.cth-btn:hover {
  background-color: #218838;
}

.regex-matched {
  background-color: #21d921;
  color: white;
  padding: 2px 17px 2px;
}

.regex-not-matched {
  background-color: #c73c5a;
  color: white;
  padding: 2px 17px 2px;
}

.pre-output {
  background-color: #98969654;
  padding: 9px;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
</style>
