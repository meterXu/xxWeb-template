export function queryPermissionsByUser() {
  return new Promise((resolve, reject) => {
    let permission = {}
    permission.menu = [
      {
        path: '/{{ namespace }}',
        meta:{
          title:'网关管理',
          icon: {icon:'DoIncoming',conf:{fill:'currentColor'}},
        },
        children: [
          {
            path: '/{{ namespace }}/route',
            meta:{
              title: '动态路由',
              icon:{icon:'DoEqualizer',conf:{fill:'currentColor'}}
            }
          }
        ]
      }
    ]
    permission.allPerms = {
      add:true,
      search:true,
      edit:true,
      delete:true
    }

    resolve(permission)
  })
}