// import UploadComponent from './components/upload.vue';
import UploadComponent from './components/stupidUpload.vue';
let UploadSdk = {};

UploadSdk.install = function(Vue, options) {
	Vue.component(UploadComponent.name, UploadComponent);
};

export const Component = UploadComponent;

export default UploadSdk;

// Auto-install
 let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(UploadSdk);
}
