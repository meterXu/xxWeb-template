<script>
export default {
  name: "DynamicIcon",
  props:['type','meta'],
  functional:true,
  render(h, context) {
    const { type,meta } = context.props;
    if (meta.icon) {
      if (typeof (meta.icon) === 'object'){
        if(meta.icon.hasOwnProperty('render')){
          return h(meta.icon.render,{
            class:type==='menu'?'el-icon-dog-icon':''
          })
        }else{
          return h('DoIcon',{
            props:{
              icon:meta.icon.icon,
              conf:Object.assign(type==='menu'?{size:18,fill:'currentColor'}:{size:14,fill:'currentColor'},meta.icon.conf)
            },
            class:type==='menu'?'el-icon-dog-icon':''
          })
        }
      }else if(typeof (meta.icon) === 'function'){

      }
      else {
        return (<i class={meta.icon} />)
      }
    }else{
      return null;
    }
  }
}
</script>
