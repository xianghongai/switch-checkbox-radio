const type = {
  switch: 'switch',
  checkbox: 'checkbox',
};

const state = {
  default: {
    alias: '默认',
    checked: false,
    enable: true,
    value: 'default',
  },
  disableUnChecked: {
    alias: '不选情况下禁用',
    checked: false,
    enable: false,
    value: 'disableUnChecked',
  },
  disableChecked: {
    alias: '选择情况下禁用',
    checked: true,
    enable: false,
    value: 'disableChecked',
  },
};

const radios = {
  default: {
    enable: true,
    checked: true,
    value: 'yes',
    state: state.default.value,
  },
  disableUnChecked: {
    enable: false,
    checked: false,
    alias: state.disableUnChecked.alias,
    state: state.disableUnChecked.value,
    value: 'no',
  },
  disableChecked: {
    enable: false,
    checked: true,
    alias: state.disableChecked.alias,
    state: state.disableChecked.value,
    value: 'yes',
  },
};

let options = [];

for (const typeItem in type) {
  for (const stateItem in state) {
    options.push(Object.assign({ type: type[typeItem] }, state[stateItem]));
  }
}

for (const radioItem in radios) {
  options.push(Object.assign({ type: 'radio' }, radios[radioItem]));
}

var app = new Vue({
  el: '#app',
  data: {
    type: type,
    state: state,
    data: [...options],
  },
  methods: {
    handleChange(event, section) {
      this.data.forEach((item) => {
        if (item.alias === section.alias && item.type === section.type) {
          item.checked = event.target.checked;
        }
      });
    },
    setValue() {
      console.dir(this.$data.data);
    },
  },
  computed: {
    checked() {
      return this.data.filter((item) => item.checked);
    },
  },
  mounted() {
    this.setValue();
  },
  watch: {
    checked(nextState) {
      console.dir(nextState);
    },
    data: {
      handler(nextState, prevState) {
        const checked = nextState.filter((item) => item.checked);
        this.setValue();
        console.dir(checked);
      },
      deep: true,
    },
  },
});
