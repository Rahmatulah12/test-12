<template>
  <v-data-table
    :headers="headers"
    :items="itemsCategory"
    class="elevation-1"
  ></v-data-table>
</template>
<script>
import $axios from '../api';
export default {
    name: 'Categories',
    data: function(){
        return{
            headers: [
                {value: 'id', text: 'Id', sorter:false, filter:false, align:'center'},
                {value: 'created_by', text: 'Created By', sorter:false, filter:false, align:'center'},
                {value: 'created_at', text: 'Created at', sorter:false, filter:false, align:'center'},
                {value: 'updated_by', text: 'Updated By', sorter:false, filter:false, align:'center'},
                {value: 'updated_at', text: 'Updated At', sorter:false, filter:false, align:'center'},
            ],
            items: [],
        }
    },
    mounted(){
        $axios.get(`kategoris`).then(result=>{
            this.items = result.data;
        })
    },
    computed: {
        itemsCategory(){
            return this.items.map( (item) => {
                return{
                    ...item,
                    created_by: item.created_by? item.created_by.firstname + item.created_by.lastname : '',
                    updated_by: item.updated_by? item.updated_by.firstname + item.updated_by.lastname : '',
                }
            });
        }
    }
}
</script>