<script setup lang="ts">
const Message = 'Hello world!'
const rawHtml = '<span style="color: red">Hello world!</span><div>Test</div><h1>Test</h1>'
const buttonId = 'button-id'
const buttonClass = 'btn btn-primary'
const disabled = true
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: {
    color: 'red',
    backgroundColor: 'blue'
  }
}
const number = 2
const ok = false
const listString = "abcdefe,a, tinh"
const convertToId = (data: string) => data.split(',').reverse().join('-');
const atributeName = 'href'
const url = 'http://kungfutech.edu.vn'
</script>

<template>
  <h1>Syntax</h1>
  <p>Message: {{ Message }}</p>
  <span v-html="rawHtml"></span>
  <button v-bind:id="buttonId" :class="buttonClass" :disabled>click here</button>
  <button v-bind="objectOfAttrs" :id="buttonId">Click here 2</button>
  <button>Number: {{ number * 3 }}</button>
  <p>{{ ok ? 'au ye' : 'fuck' }}</p>
  <p :id="convertToId(listString)">hlelo</p>

  <p v-if="ok"> test directives</p>
  <a v-bind:[atributeName]="url">Click here</a>
</template>
