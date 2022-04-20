<template>
<div>

  <el-table  :data="filterTableData" style="width: 100%">
    <el-table-column prop="category" label="分类" column-key="category" :filters="filtercategory" :filter-method="filterHandler"   />
    <el-table-column prop="name" label="名称"  />
    <el-table-column prop="desc" label="简介" />
    <el-table-column sortable prop="status" label="访问速度ms" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="搜索网站名称" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleOpen(scope.$index, scope.row)" type="primary" round
          >open</el-button>
      </template>
    </el-table-column>

  </el-table>


</div>

</template>



<script  setup>
import datas from 'datas'
import {computed,ref} from 'vue'

const tableData=datas

const handleOpen=(index,row)=>{
    window.open(row['url'],'_blank')
}

const search=ref('')

const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

const filtercategory=computed(
()=>{
        var filterdata=[]
        var categorys=[]
        for (var i in datas){
            categorys.push(datas[i]['category'])
            }
        categorys=Array.from(new Set(categorys))
        for (var i in categorys){
            filterdata.push({"text":categorys[i],"value":categorys[i]})
        }
        return filterdata

})

const filterHandler = (value,row,column) => {
  const property = column['property']
  return row[property] === value}

</script>

<script>

export default ({
mounted(){
    // 在这里访问网站然后修改状态
for(var index in this.datas){
    _fetch(this,index)
}
async function _fetch(obj,index){
    var start_time=new Date()
    await fetch(obj.datas[index]['url'],{ method: "GET", mode: "no-cors" })
    var end_time=new Date()
    obj.datas[index]['status']=end_time.getTime()-start_time.getTime()
}

}

})
</script>
