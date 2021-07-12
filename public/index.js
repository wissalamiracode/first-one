(async function main() {

    // Get a reference to the element to display our data in
    var form=document.getElementById('formul');
    form.onsubmit = function(event) {
    var button=document.getElementById('submit');
    // Declare a message variable to be set later
    let req
    try {
      // Attempt to fetch data from our API
      let data = await (await fetch('/api')).text()
      console.log(data)
      req = data.req
    } catch (err) {
      // If there was an error catch it and display the message
      console.log(err)
      req = err.req
    }
    // If we created the display element and added the ID correctly
    if (form) {
      // Show the message
      form.innerHTML = req
    }
};
  }())