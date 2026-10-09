
export const ApplicationExption=({
    message = "error",
    option={status:400},
})=>{
throw new Error(message , {cause : option})
}

export const BadRequest=(message="Bad Request" , extra={})=>{
    return ApplicationExption({
        message,
        option:{
            status:400,
            ...extra
        }
    })
}
export const Unauthorized=(message="Unauthorized" , extra={})=>{
    return ApplicationExption({
        message,
        option:{
            status:401,
            ...extra
        }
    })
}
export const Forbidden=(message="Forbidden" , extra={})=>{
    return ApplicationExption({
        message,
        option:{
            status:403,
        ...extra}
    })
}
export const NotFound=(message="NotFound" , extra={})=>{
    return ApplicationExption({
        message,
        option:{

        status:400,
        ...extra
        }
    })
}


export const Conflict=(message ="Conflict" , extra={})=>{
    return ApplicationExption({
        message,
        option:{

        status:409,
        ...extra
        }
    })
}

export const RequestTimeout=(message="RequestTimeout" , extra={})=>{
return ApplicationExption({
    message,
    option:{
          status:408,
          ...extra
    }
})
}