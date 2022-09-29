module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": ["plugin:vue/essential"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    // 强制使用一致的单引号
    "quotes": ["error", "single"],
    //强制使用字面量创建数组
    "no-array-constructor": "error",
    //命名不要以下划线开头或结尾
    "no-underscore-dangle": "error",
    // 生产环境禁止使用console
    "no-console": "error",
    //不要使用 void 运算符
    "no-void": "error",
    // 组件的 data 属性的值必须是一个函数
    "vue/no-shared-component-data": "error",
    // 禁止在同一个元素上使用v-if和v-for指令
    "vue/no-use-v-if-with-v-for": "error",
    // props必须用驼峰式
    "vue/prop-name-casing": "error",
    // 使用缩写的@click而不是v-on:click
    "vue/v-on-style": "error",
    // v-for指令必须合法
    "vue/valid-v-for": "error",
  }
}