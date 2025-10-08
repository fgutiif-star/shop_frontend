import {User, useAuth} from "@/context/AuthContext.tsx";


const ProfilePage  =()=>{
    const {User} = useAuth()
    if(!User) {
        return

    }
}

switch (User.role){
    case "admin": return <AdminProfile />;
    case "seller": return <SellerProfile />;
    case "buyer": return <BuyerProfile />;
}

export default ProfilePage;