function AuthLayout(
    {children}:{children : React.ReactNode}
){
    return (
        <div className="flex items-center justify-center h-full  pt-44">
            {children}
        </div>
    )
}

export default AuthLayout