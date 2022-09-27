import { defineComponent, onMounted, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log("jsx");
    })
    const renderHeader = (isShow = true) => {
      return <div v-show={isShow}>header</div>
    }
    const arr = reactive([1, 2, 3, 4, 5])
    const msg = ref('message+jsx+vue')
    return { msg, arr, renderHeader }
  },

  render() {
    return <div>
      {this.renderHeader(false)}
      {this.renderHeader()}
      <div v-show={false}>{this.msg}</div>
      <div v-show={true}>{this.msg}</div>
      {this.arr.map((item)=><div>{item}</div>)}
    </div>
  }
})