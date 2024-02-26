export async function createProduct(product: Product) {
  let error = false;
  let data;
  try {
    const response = await fetch("http://localhost:8080/product/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    data = await response.json();
    if (!response.ok) throw new Error(data.message);
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    error = true;
  }
}

export async function getProductList(): Promise<Product[] | undefined> {
  let error = false;
  let data;
  try {
    const response = await fetch("http://localhost:8080/product/list", {
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
    data = verifyIfIsAProduct(data);
    if (data != null) {
      return data;
    }
  }
}

function verifyIfIsAProduct(data: any): Array<Product> | null {
  if (data === undefined || data === null) {
    return null;
  }
  if (!(data instanceof Array)) {
    return null;
  }
  const productList = new Array<Product>();
  data.map((content) => productList.push(content));
  return productList;
}
