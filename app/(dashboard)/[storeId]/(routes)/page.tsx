import prismadb from "@/lib/prismadb";

interface DashBoardPageProps {
  params: {
    storeId: string;
  };
}
const DashBoardPage = async ({ params }: DashBoardPageProps) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <> Active store: {store?.name}</>;
};

export default DashBoardPage;
