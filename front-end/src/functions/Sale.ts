import { Sale } from "@/types/sale";

export async function getSaleList(): Promise<Sale[] | undefined> {
  let error = false;
  let data;
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/sale/all",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    data = await response.json();
    if (!response.ok) throw new Error(data.message);
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    error = true;
  } finally {
    data = verifyIfIsASale(data);
    if (data != null) {
      data = fixDateToJavaScriptDate(data);
      return data;
    }
  }
}

function verifyIfIsASale(data: any): Array<Sale> | null {
  if (data === undefined || data === null) {
    return null;
  }
  if (!(data instanceof Array)) {
    return null;
  }
  const saleList = new Array<Sale>();
  data.map((content) => saleList.push(content));
  return saleList;
}

function fixDateToJavaScriptDate(sales: Array<Sale>): Array<Sale> {
  return sales.map((customer) => {
    customer.createdAt = new Date(customer.createdAt);
    return customer;
  });
}
