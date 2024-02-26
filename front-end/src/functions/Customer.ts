export async function getCustomerList(): Promise<Customer[] | undefined> {
  let error = false;
  let data;
  try {
    const response = await fetch("http://localhost:8080/customer/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await response.json();
    if (!response.ok) throw new Error(data.message);
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    error = true;
  } finally {
    data = verifyIfIsACustomer(data);
    if (data != null) {
      data = fixDateToJavaScriptDate(data);
      return data;
    }
  }
}

function verifyIfIsACustomer(data: any): Array<Customer> | null {
  if (data === undefined || data === null) {
    return null;
  }
  if (!(data instanceof Array)) {
    return null;
  }
  const customerList = new Array<Customer>();
  data.map((content) => customerList.push(content));
  return customerList;
}

function fixDateToJavaScriptDate(
  customers: Array<Customer>
): Array<Customer> {
  return customers.map((customer) => {
    customer.createdAt = new Date(customer.createdAt);
    if (customer.lastLogin != null) {
      customer.lastLogin = new Date(customer.lastLogin);
    }
    if (customer.lastPurchase != null) {
      customer.lastPurchase = new Date(customer.lastPurchase);
    }
    return customer;
  });
}
