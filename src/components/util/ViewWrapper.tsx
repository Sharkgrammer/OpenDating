function ViewWrapper({children}: { children: any }) {

    return (
        <div className="h-full max-h-screen w-full px-2 py-5 overflow-y-auto">
            {children}
        </div>
    )
}

export default ViewWrapper
