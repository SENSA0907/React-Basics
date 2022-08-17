const withProduct = (Component) => {
  let results = [];
  const getData = async () => {
    await fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      results = data;
    });
  }

  // withAuth HOC, to check whether user is authonticated or not
  // if authenticated, give back the same Component
  // if not authenticated, give fallback component (404 component)

  getData();
  
  const NewComponent = ()=>{
    return <Component products={results}></Component>;
  }
  return NewComponent
};

export default withProduct;
