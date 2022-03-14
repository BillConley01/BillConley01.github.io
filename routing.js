async function loadPage(page) {
    // fetch the page, use await
    const res = await fetch(page);
    // get text from res, use await
    const content = await res.text();
    // get the element with id 'content'
    const element = document.getElementById('content');
    // set innerHTML of the element
    element.innerHTML = content;
  }