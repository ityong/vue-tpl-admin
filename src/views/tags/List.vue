<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 标签列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" icon="delete" class="handle-del mr10" @click="addBtn(false)">添加标签</el-button>
                <el-input v-model="search_world" placeholder="筛选关键词" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="search" @click="search">搜索</el-button>
            </div>
            <el-table :data="tableData" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="id" label="ID" sortable width="150"></el-table-column>
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column prop="created_at" label="创建时间"></el-table-column>
                <el-table-column prop="updated_at" label="更新时间" ></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background
                               @current-change="handleCurrentChange"
                               layout="prev, pager, next,total"
                               :total="listTotal"
                               :page-size="pageSize"
                ></el-pagination>
            </div>
        </div>

        <!-- 添加出框 -->
        <el-dialog title="新增标签" :visible.sync="addVisible" width="30%">
            <el-form ref="form" :model="formAdd" label-width="50px">
                <el-form-item label="名称">
                    <el-input v-model="formAdd.name"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addVisible = false">取 消</el-button>
                <el-button type="primary" @click="addBtn(true)">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="50px">
                <el-form-item label="名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>&nbsp;&nbsp;&nbsp;
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'List',
        data() {
            return {
                //当前页
                curPage: 1,
                //显示条数
                pageSize: 15,
                //总条数
                listTotal : 0,
                //list
                tableData: [],
                formAdd: {},
                form: {},
                //多选框
                multipleSelection: [],
                //操作视图
                editVisible: false,
                delVisible: false,
                addVisible: false,
                //检索关键字
                search_world: '',

            }
        },
        created() {
            this.getData();
        },
        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.curPage = val;
                this.getData();
            },
            // 获取 easy-mock 的模拟数据
            getData() {
                this.$axios.get('/api/tag/index', {
                    params: {
                        page: this.curPage,
                        limit: this.pageSize,
                        name: this.search_world
                    }

                }).then((response) => {
                    let res = response.data
                    if (res.code !== 0) {
                        this.$message.error(res.msg);
                        return false;
                    }
                    this.tableData = res.data.list
                    this.listTotal = res.data.total
                    this.curPage = res.data.page
                })
            },
            search() {
                this.getData();
            },
            //编辑框
            handleEdit(index, row) {
                this.form  = row
                this.form._index  = index
                this.editVisible = true;
            },
            //删除框
            handleDelete(index, row) {
                this.form = row
                this.form._index  = index
                this.delVisible = true;
            },
            // 保存编辑
            saveEdit() {
                this.$axios.post('/api/tag/edit/' + this.form.id,{
                    id: this.form.id,
                    name: this.form.name
                }).then((response) => {
                    let res = response.data
                    if (res.code !== 0) {
                        this.$message.error(res.msg);
                        return false;
                    }
                    this.$message.success(`修改ID为: ${this.form.id} 数据列成功`);
                    this.editVisible = false;
                    this.$set(this.tableData,this.form._index,res.data)
                })
            },
            // 确定删除
            deleteRow(){
                this.$axios.post('/api/tag/destroy/' + this.form.id,{

                }).then((response) => {
                    let res = response.data
                    if (res.code !== 0) {
                        this.$message.error(res.msg);
                        return false;
                    }
                    this.$message.warning(`删除ID为: ${this.form.id} 数据列成功`);
                    this.delVisible = false;
                    this.tableData.splice(this.form._index,1)
                    this.listTotal -= 1
                })
            },
            addBtn(isPost) {

                if (!isPost) {
                    this.addVisible = true
                } else {
                    //执行添加

                    this.$axios.post('/api/tag/create/',{
                        name: this.formAdd.name
                    }).then((response) => {
                        let res = response.data
                        if (res.code !== 0) {
                            this.$message.error(res.msg);
                            return false;
                        }
                        this.$message.success(`添加成功`);
                        this.addVisible = false
                        this.tableData.push(res.data)
                        this.formAdd = {}
                        this.listTotal += 1
                    })

                }


                // const length = this.multipleSelection.length;
                // let str = '';
                // this.del_list = this.del_list.concat(this.multipleSelection);
                // for (let i = 0; i < length; i++) {
                //     str += this.multipleSelection[i].name + ' ';
                // }
                // this.$message.error('删除了' + str);
                // this.multipleSelection = [];
            },
            //多选
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
        }
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
    .table{
        width: 100%;
        font-size: 14px;
    }
    .red{
        color: #ff0000;
    }
    .mr10{
        margin-right: 10px;
    }
</style>
