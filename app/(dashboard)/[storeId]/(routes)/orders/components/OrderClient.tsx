"use client";

import { DataTable } from "@/components/ui/DataTable";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { OrderColumn, Columns } from "./Columns";
interface OrderClientProps {
  data: OrderColumn[];
}
const OrderClient = ({ data }: OrderClientProps) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable searchKey="products" columns={Columns} data={data} />
    </>
  );
};
export default OrderClient;
