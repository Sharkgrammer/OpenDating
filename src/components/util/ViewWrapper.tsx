function ViewWrapper({children}: { children: any }) {

    return (
        <div className="h-full w-full px-2 py-5">
            {children}
        </div>
    )
}

export default ViewWrapper
