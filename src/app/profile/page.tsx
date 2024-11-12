
import { Metadata } from "next";
import ProfileBox from "@/components/ProfileBox";


export const metadata: Metadata = {
  title: "Next.js Profile Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

const Profile = () => {
  return (
  
      <div className="mx-auto w-full max-w-[970px]">


        <ProfileBox />
      </div>
 
  );
};

export default Profile;
