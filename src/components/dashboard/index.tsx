import whiteLogo from "../../../public/assets/Logo_white.svg"
import photo1 from "../../../public/assets/photo-1504751999194-ef177d837cfe.avif"
import photo2 from "../../../public/assets/photo-1534236161823-3897f68b00b8.avif"
import photo3 from "../../../public/assets/photo-1542549300-f44fe5ea9d82.avif"
import photo4 from "../../../public/assets//photo-1713190193924-8bd93c729b6b.avif"
export default function Dashboard() {
    const picDetails = [photo1,photo2,photo3,photo4]
    return (
        <div className="bg-black h-[100vh] py-8 px-16 text-white">
            <img src={whiteLogo} />
            <p>Welcome Test</p>
            <p>Hope you are having a good day!</p>
            <p className="text-xl font-bold">Photography</p>
            <div className="grid grid-cols-4 gap-4">
                {
                    picDetails.map(pic => (
                        <img src={pic} className="rounded-[2rem]"/>
                    ))
                }
            </div>
        </div>
    );
}