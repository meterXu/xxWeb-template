/*
 *    Copyright (c) 2018-2025, chengtg All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the sipsdcloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: chengtg (wangiegie@gmail.com)
 */

export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  defaultExpandAll: false,
  column: [
	  {
      label: 'ID',
      prop: 'id',
      hide: true,
      editDisplay: false,
      addDisplay: false
    },
	  {
      label: '父级节点',
      prop: 'parentId',
      span: 24,
      formslot: true,
      hide: true
    },
    {
      label: '类型名称',
      prop: 'name',
      span: 24,
      align: 'left'
    },
    {
      label: '类型编码',
      span: 24,
      prop: 'code'
    },
	  {
      label: '创建人',
      prop: 'createBy',
      editDisplay: false,
      addDisplay: false,
      hide: true
    },
	  {
      label: '创建日期',
      prop: 'createTime',
      editDisplay: false,
      addDisplay: false,
      hide: true
    },
	  {
      label: '更新人',
      prop: 'updateBy',
      editDisplay: false,
      addDisplay: false,
      hide: true
    },
	  {
      label: '更新日期',
      prop: 'updateTime',
      editDisplay: false,
      addDisplay: false,
      hide: true,
    },
	  {
      label: '所属部门',
      prop: 'sysOrgCode',
      editDisplay: false,
      addDisplay: false,
      hide: true,
    },
	  {
      label: '是否有子节点',
      prop: 'hasChild',
      editDisplay: false,
      addDisplay: false,
      dicData: [{
        label: '无',
        value: '0'
      }, {
        label: '有',
        value: '1'
      }]
    },
  ]
}
