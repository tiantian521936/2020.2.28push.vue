export const actions ={
    //actions内部可以写判断循环 异步
    async search ({commit},searchName){
        try {
            let response = await axios({
                url:'https://api.github.com/search/users',
                method:'GET',
                params:{
                    q:searchName
                }
            })
            let user = []
            response.data.items.forEach(item =>{
                let user_name = item.login
                let user_img = item.avatar_url
                let user_url = item.url
                let obj = {
                    user_img,
                    user_name,
                    user_url,
                }

                user.push(obj)
            })

            commit(REQUEST_SUCCESS,users)

        }catch(error){
            commit(REQUEST_FAILD,error.message)
       
    }
  }
}