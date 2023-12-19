import { UserButton } from "@clerk/nextjs";
const Menubar = () => {
    return(
        <div className=' mt-5 pr-2 flex w-full justify-end'>
                <UserButton afterSignOutUrl="/"/>
        </div>
    )
}
export default Menubar