export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  column: [
    {
      label: '主键',
      prop: 'id'
    },
    {
      label: '角色树当前节点的父节点',
      prop: 'parentId'
    },
    {
      label: '当前节点名称',
      prop: 'label'
    },
    {
      label: '角色表id',
      prop: 'roleId'
    },
    {
      label: '创建人',
      prop: 'createBy'
    },
    {
      label: '创建时间',
      prop: 'createTime'
    },
    {
      label: '修改人',
      prop: 'updateBy'
    },
    {
      label: '修改时间',
      prop: 'updateTime'
    },
    {
      label: '删除标识（0-正常,1-删除）',
      prop: 'delFlag'
    }
  ]
}
