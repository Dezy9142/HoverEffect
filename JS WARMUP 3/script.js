const btn = document.querySelector("#center");

// Throttling Function
const throttleFunction = (func, delay) => {
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // Logging the difference between previously
    // called and current called timings
    now - prev, delay;

    // If difference is greater than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};

btn.addEventListener(
  "mousemove",
  throttleFunction((details) => {
    // Your less repeitition code will be here when you mousemove
    var div = document.createElement("div");
    div.classList.add("imageDiv");
    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";
    document.body.appendChild(div);

    var img = document.createElement("img");

    const imageUrls = [
        'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZvb2QlMjBhbmQlMjBqdWljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
        'https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjBhbmQlMjBqdWljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
        'https://images.unsplash.com/photo-1506802913710-40e2e66339c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        'https://images.unsplash.com/photo-1583577612013-4fecf7bf8f13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
        'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1908&q=80',
        "https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YSUyMGdpcmwlMjBkcmlua2luZyUyMGp1aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1576856497337-4f2be24683da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGdyZWVuJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZydWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      ];

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const randomIndex = getRandomInt(0, imageUrls.length - 1)
      const randomImageUrl = imageUrls[randomIndex]
    img.setAttribute(
      "src",
      randomImageUrl
    );

   
    div.appendChild(img)

    gsap.to("img",{
        y:"0",
        ease:Power1,
        duration:.6
    })
    gsap.to("img",{
        y:"100%",
        delay:.6,
        ease:Power2,
        
    })
    setTimeout(() => {
      div.remove();
    }, 2000);
  }, 400)
);
