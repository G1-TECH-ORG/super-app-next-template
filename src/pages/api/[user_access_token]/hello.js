import { User } from "../../../../g1/user"

export default async function handler(req, res) {
    const {user_access_token} = req.query 
    const user = await User(user_access_token)

    if(user.code==200){
        // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
        // your code goes here
        if(req.method == 'POST'){
            // Process a POST request
        }else{
            // Handle any other HTTP method
        }
        
    }else{
        res.json({error:true,msg:'User not valid',text:'Unauthorized user'})
    }

}