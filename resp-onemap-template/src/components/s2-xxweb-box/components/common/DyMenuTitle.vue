<script>
export default {
  name: 'DyMenuItem',
  functional: true,
  props:['meta'],
  render(h, context) {
    const { meta } = context.props;
    if (meta.title) {
      return <span slot="title">{meta.title}</span>;
    }else{
      return null
    }
  }
};
</script>
