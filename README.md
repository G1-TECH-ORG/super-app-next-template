# super-app-next-template

For testing:

`super_app_auth_token: A9cace5e9-0ede-4726-9d54-92eff2f14654-728c0822-4550-4aed-99c1-e491dedcc560`

`super_app_id: 728c0822-4550-4aed-99c1-e491dedcc560`


Dummy `user_access_tokens`
```
dac229f8805eef2fc8ed897673ddb823abe9243c228946718f8c05406f69a1c5982e67f57cee4e44cf34d1cfd45a4d8119f11bb7fa983606c66aac961cfc4c437a72d6e35b40309570b77ffe688628bc8102fefde5b4233daeabb04770c26957d866119c3db7309c82aba72382002635eb363f7e92c7022210c5c03f496c83053d8c75ad491c5f43e7365db2637f97dfdf59bdfd41d3c33f63145471c0b543e4d0d37d6d3919f9a08d2ca5137bf09e9bab28
```

```
fc6efc4badbcf13451c74a88315be1620bc79fce27f5bd8aa3f93ac7f2fad36505f4302691eda7db26e954025ee2b68e1bef13fe7a835221663cbf12d320f1111b1b943da6259335e91cf7e4c651355128abf0d4606c368344fd5b4eb473f179208949ccea2212ed8f0718f43e0a2d067210b21d252fe1f3f870939752b7baa33c91c168e8aec95df9aa8e4e2a8201462476b33262bdd93d668bf5fce049682dc3934feb7b90517c4fc7298ce1c64c562bff2337c7530ad6f1bc219d232e686aa67d
```

```
4d636fc77e4832b330792bb257b392ea891dc21a59e768f805cf196107de439a28bd7e552ca587d612667f0ebfc292d6e919aa62aac95ca4153bce9b5a222160b81f2b458950b4aa59d484e0a54d6106136c8b10ed45d1006b85f13aa2ecbb7f15141235cc46a317292e4b4e02bacf8e84f7f1f395bf3322f224c50f1919fb5cfbd886cf1ba5bb2dcc06619b84b4a1dfd8ca656165c27f13b5543b2bffc6e38ab02868f4cf6f69341a17a4db260d684d78ca0c9da17079ad27b6511f4f9eca23
```

```
94705d6bf1e78215fd5087b4f6f4fa25d9fd63f78544a936de71b25cf0062c92f3b59b455708c325c3171d0bfd48c19d2589b451d4cdcb0bdbfb9b1061ba12cc02ad320344bae5420fb71d46ec148be6db736eed8cb9947dbf6ad8e3e40f345d5f141444308ab40bf861150859b7521c1050caf2de9d034eba4c5f1d29ba89d5b8857f91920810e28070d118a31721e69ced71b692de1fc21e9a9e2fd3fcfcef41275882b16304f7524f4cd99cbd47a9202bc371e625e96ae1e128488b33cbe2
```

```
039b9980bb0c27ef769fbca82ce5a0d8330164a43e1657ae95868422f557a56d03a2f697fb1f3a986ffdc8323832e23a1f760617598afc811e5c7e6fc6953981229b01beeb1d643c8fdf280c6bd02ef457899ae69ee05ba099f164b43cbdf4355b8642ff0cbbb20215e03db4a9636adf64d977259ac83b10a4e7937401c66a57b43b849cbfa81c843dbe0af8db2fa53772a1d64d16056dcf5ebc20df0d5ec4359e4031340571d9717d8b14170579f6ed230ba384211081a2a5139d282c9ccacc
```


Response:
```
{
  "code": 200, // status code
  "msg": "test", // message-> development: test, production: success/unauthorize
  "data": {
    "uuid": "u-d88da0d2-46bf-419d-8ad5-9df427eaa4e4", // uniquer user id, (same for a user)
    "email": "test@test.com", // email
    "t_id": 0 // unique t_id (different for user everytime)
  }
}
```


Base template for every screen:
```
import React, { useContext } from 'react'
import { UserContext } from '../../../g1/context'

const index = () => {
  const c = useContext(UserContext)
  
  if(c.currentUser){
    if(c.currentUser.code==200){
      return(
        <div className='text-center p-5'>
        Main Content goes here....
        </div>
      )
    }else{
      return(
        <div className='text-3xl font-bold tracking-tight text-center'>
          Unauthorized
        </div>
      )
    }
  }else{
    return(
      <div className='text-3xl font-bold tracking-tight text-center'>
        Loading...
      </div>
    )
  }
}

export default index

```
