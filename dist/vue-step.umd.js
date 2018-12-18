(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.VueStep = {})));
}(this, (function (exports) { 'use strict';

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .v-step-warp-horizontal[data-v-47f88a0c] { position: relative; padding: 10px 0; z-index: 2; } .v-step-warp-horizontal .v-step-progress-bg[data-v-47f88a0c] { position: absolute; width: 100%; height: 4px; bottom: 22px; background-color: #ddd; } .v-step-warp-horizontal .v-step-progress-value[data-v-47f88a0c] { position: inherit; top: 0; left: 0; height: inherit; } .v-step-list[data-v-47f88a0c] { position: relative; display: -webkit-flex; display: flex; cursor: pointer; user-select: none; } .v-step-list[data-v-47f88a0c], .v-step-item[data-v-47f88a0c] { margin: 0; padding: 0; list-style-type: none; } .v-step-warp-horizontal .v-step-list[data-v-47f88a0c] { justify-content: space-around; text-align: center; } .v-step-item-label[data-v-47f88a0c] { font-size: 14px; color: #666; } .v-step-item-number[data-v-47f88a0c] { width: 19px; height: 19px; line-height: 19px; font-size: 13px; border-radius: 50%; color: #666; background-color: #ddd; } .v-step-warp-horizontal .v-step-item-label[data-v-47f88a0c] { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .v-step-warp-horizontal .v-step-item-number[data-v-47f88a0c] { margin: 5px auto; } .v-step-warp-horizontal.style2 .v-step-progress-bg[data-v-47f88a0c] { height: 2px; bottom: 19px; } .v-step-warp-horizontal.style2 .v-step-item-number[data-v-47f88a0c] { width: 10px; height: 10px; line-height: 10px; } .v-step-warp-vertical[data-v-47f88a0c] { position: relative; padding: 0; z-index: 2; } .v-step-warp-vertical .v-step-progress-bg[data-v-47f88a0c] { position: absolute; width: 4px; height: 100%; top: 0; left: 15px; background-color: #ddd; } .v-step-warp-vertical .v-step-progress-value[data-v-47f88a0c] { position: absolute; top: 0; left: 0; width: inherit; } .v-step-warp-vertical .v-step-list[data-v-47f88a0c] { height: inherit; flex-direction: column; padding-left: 8px; } .v-step-warp-vertical .v-step-item[data-v-47f88a0c] { display: -webkit-flex; display: flex; height: 25%; align-items: center; } .v-step-warp-vertical .v-step-item-number[data-v-47f88a0c] { text-align: center; } .v-step-warp-vertical .v-step-item-label[data-v-47f88a0c] { position: absolute; order: 1; padding-left: 34px; } .v-step-warp-vertical.style2 .v-step-progress-bg[data-v-47f88a0c] { width: 2px; } .v-step-warp-vertical.style2 .v-step-item-number[data-v-47f88a0c] { width: 10px; height: 10px; line-height: 10px; margin-left: 3px; } .v-step-warp-vertical.style2 .v-step-item-label[data-v-47f88a0c] { padding-top: 0; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();































  var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[("v-step-warp-" + (_vm.direction)), _vm.styleType]},[_c('div',{staticClass:"v-step-progress-bg"},[_c('div',{staticClass:"v-step-progress-value",style:(_vm.progressStyle)})]),_vm._v(" "),_c('ul',{staticClass:"v-step-list"},_vm._l((_vm.stepList),function(label,index){return _c('li',{key:index,staticClass:"v-step-item",style:(_vm.horizontalItemWidth),on:{"click":function($event){_vm.selectItem(index);}}},[_c('label',{staticClass:"v-step-item-label"},[_vm._v(" "+_vm._s(label)+" ")]),_vm._v(" "),_c('div',{staticClass:"v-step-item-number",style:(_vm.itemNumberStyle(index))},[_vm._v(" "+_vm._s(_vm.showItemNumber(index))+" ")])])}),0)])},staticRenderFns: [],_scopeId: 'data-v-47f88a0c',
    name: 'vue-step',
    props: {
      nowStep: {
        type: Number,
        required: true
      },
      stepList: {
        type: Array,
        required: true
      },
      activeColor: {
        type: String,
        default: '#1fb11d'
      },
      progressColor:{
         type: String,
         default: '#ffffff'
      },
      styleType: {
        type: String,
        default: 'style1',
        validator: function (value) {
          return ['style1', 'style2'].indexOf(value) !== -1
        }
      },
      direction: {
        type: String,
        default: 'horizontal'
      }
    },
    computed: {
      stepItemWidth: function stepItemWidth () {
        return 100 / this.stepList.length
      },
      horizontalItemWidth: function horizontalItemWidth () {
        return this.direction === 'vertical'
          ? ''
          : { width: this.stepItemWidth + '%' }
      },
      progressStyle: function progressStyle () {
        var oStyle = {
          'background-color': this.activeColor
        };
        if (this.direction === 'vertical') {
          oStyle.height = this.stepItemWidth * this.nowStep + '%';
        } else {
          oStyle.width = this.stepItemWidth * this.nowStep + '%';
        }
        return oStyle
      }
    },
    methods: {
      itemNumberStyle: function itemNumberStyle (index) {
        var style = '';
        if (index < this.nowStep) {
          style = {
            'background-color': this.activeColor,
            'color': '#fff',
          };
        }
        if (this.nowStep == index + 1){
          style = {
              'background-color': this.progressColor,
              'color': '#555',
               'border': '1px solid #1fb11d'
          };
        }
        return style
      },
      showItemNumber: function showItemNumber (index) {
        return this.styleType !== 'style2' ? index + 1 : ''
      },
      selectItem: function selectItem (itemIndex) {
        this.$emit('selected', this.showItemNumber(itemIndex));
      }
    }
  }

  // Import vue component

  // install function executed by Vue.use()
  function install(Vue) {
  	if (install.installed) { return; }
  	install.installed = true;
  	Vue.component('VueStep', component);
  }

  // Create module definition for Vue.use()
  var plugin = {
  	install: install,
  };

  // To auto-install when vue is found
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
  	GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
  	GlobalVue = global.Vue;
  }
  if (GlobalVue) {
  	GlobalVue.use(plugin);
  }

  // It's possible to expose named exports when writing components that can
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.install = install;
  exports.default = component;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
