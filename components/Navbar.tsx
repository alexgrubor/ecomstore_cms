import { auth } from "@clerk/nextjs";

import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import Menu from "./Menu";

const Navbar = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <Menu stores={stores} />
    </div>
  );
};
export default Navbar;
