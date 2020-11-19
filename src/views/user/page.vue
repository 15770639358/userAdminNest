<template>
    <div>
      <el-table
        :data="userInfo"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-table
                :data="props.row.roles"
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                border
                :tree-props="{children: 'child'}">
                <el-table-column
                  prop="rolename"
                  label="角色名"
                  sortable>
                </el-table-column>
              </el-table>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="用户ID"
          prop="id">
        </el-table-column>
        <el-table-column
          label="用户名"
          prop="username">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
import { getAllUserAndRoles} from '../../api/user'
export default {
    name: 'PageUser',
    data() {
        return {
            userInfo: []
        }
    },
    async mounted()  {
        const users = await getAllUserAndRoles()
        this.userInfo = users.data
    },
}
</script>
