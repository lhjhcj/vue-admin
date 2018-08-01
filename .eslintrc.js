// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    "no-multi-spaces": 0,//
    "no-spaced-func": 0,//函数调用时 函数名与()之间不能有空格// 不能用多余的空格
    "no-irregular-whitespace": 2,//不能有不规则的空格
    "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
    "quotes": 0,//引号类型 `` "" ''
    "indent": [0, 2, 4],//缩进风格
    "semi": 0,//语句强制分号结尾
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
