import { Sale, SaleInformation } from "@/types/sale";

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

export async function getSaleInformation(
  id: string
): Promise<SaleInformation | undefined> {
  let error = false;
  let data;
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/sale/${id}`,
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
    data = isValidSaleInformation(data);
    if (data != null) {
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

function isValidSaleInformation(data: any): SaleInformation | null {
  if (
    data &&
    typeof data.sale !== "undefined" &&
    typeof data.customer !== "undefined" &&
    Array.isArray(data.productList)
  ) {
    return data;
  }
  return null;
}

function fixDateToJavaScriptDate(sales: Array<Sale>): Array<Sale> {
  return sales.map((customer) => {
    customer.createdAt = new Date(customer.createdAt);
    return customer;
  });
}
