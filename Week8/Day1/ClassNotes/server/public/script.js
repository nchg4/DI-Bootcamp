const products = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products/");
      const data = await res.json();
      console.log(data);
      render(data);
    } catch (error) {
      console.log(console.error());
    }
  };
  
  products();
  
  const render = (arr) => {
    const html = arr.map((item) => {
      return `<div style="
          display:inline-block;
          border:1px solid #000; 
          margin:20px;
          padding: 20px;
          text-align:center;
         ">
          <h2>${item.name}</h2>
          <p>${item.price}</p>
          </div>`;
    });
    document.getElementById("shop").innerHTML = html.join("");
  };
  
  const searchProduct = (e) => {
    e.preventDefault();
    const name = e.target.search.value;
    fetch("http://localhost:5000/api/search?name=" + name)
      .then((res) => {
        console.log(res);
        //   if (res.status === 401) {
        //     return;
        //   }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.msg) {
          return alert(data.msg);
        }
        render(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  const addProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.name.value;
  
    fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name: price }),
    })
      .then((res) => res.json())
      .then((data) => {
        render(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
