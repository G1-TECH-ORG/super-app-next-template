const User = async(user_access_token) =>{
    const body = {
                user_access_token:user_access_token,
                super_app_auth_token:process.env.NEXT_PUBLIC_SUPER_APP_AUTH_TOKEN,
                super_app_id:process.env.NEXT_PUBLIC_SUPER_APP_ID
            }
    try{
        const user = await fetch('https://authv1.g-one.tech/verify-user',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(body)
        })

        return user.json()
    }catch(e){
        console.log(e)
        return null
    }
}


export {User}