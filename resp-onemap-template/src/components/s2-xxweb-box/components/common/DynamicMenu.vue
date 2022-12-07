<script>
import {Menu, Submenu, MenuItem} from 'element-ui'
import mixin from '../../mixin/mixin';
import DyMenuTitle from './DyMenuTitle.vue'
import DynamicIcon from './DynamicIcon.vue'
import ItemLink from './ItemLink.vue'

export default {
  name: 'DynamicMenu',
  props: ['defaultActive','mode','isCollapse'],
  functional: true,
  mixins: [mixin],
  components: {
    Menu,
    Submenu,
    MenuItem,
    DyMenuTitle,
    DynamicIcon
  },
  render(h, context) {
    const {defaultActive,mode,isCollapse} = context.props;
    const permission = context.injections.app.permission
    const appConfig = context.injections.app.appConfig
    function renderSubMenu() {
      let sMenu = []
      permission.forEach(m => {
        if (m.children instanceof Array) {
          let vcs = []
          m.children.forEach(c => {
            if(c.meta){
              vcs.push(
                <ItemLink to={c}>
                  <MenuItem index={c.path}>
                    <DynamicIcon type="menu" meta={c.meta}/>
                    <template slot="title">
                      <DyMenuTitle meta={c.meta}/>
                    </template>
                  </MenuItem>
                </ItemLink>
              )
            }
          })
          sMenu.push(
            <Submenu index={m.path} popper-class={'xxWeb-xxWebBox-'+appConfig.style.theme}>
              <template slot="title">
                <DynamicIcon type="menu" meta={m.meta}/>
                <DyMenuTitle meta={m.meta}/>
              </template>
              {vcs}
            </Submenu>)
        } else {
          if(m.meta){
            sMenu.push(
              <ItemLink to={m}>
                <MenuItem index={m.path}>
                  <DynamicIcon type="menu" meta={m.meta}/>
                  <template slot="title">
                    <DyMenuTitle meta={m.meta}/>
                  </template>
                </MenuItem>
              </ItemLink>
            )
          }
        }
      })
      return sMenu
    }
    function menuItemClick(){
      window.location.href='http://www.baidu.com'
    }
    return (
      <div class="dynamic-menu">
        <Menu
          collapse={isCollapse}
          default-active={defaultActive}
          mode={mode}>
          {renderSubMenu()}
        </Menu>
      </div>
    )
  }
}
</script>

