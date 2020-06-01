import {REQUEST_FAILD,REQUEST_SUCCESS,REQUESTING} from './mutationType'

export const mutations = {
    
    [REQUESTING](state){
        state.isFirst = false
        state.isLoading = true
    },

    //请求成功在操作数据
    [REQUEST_SUCCESS](state,users){
        state.isLoading = false
        state.users = users
    },

    //请求失败在操作数据
    [REQUEST_FAILD](state,msg){
        state.errMsg = msg//axios错误信息是message
        state.isLoading = false
    }
}