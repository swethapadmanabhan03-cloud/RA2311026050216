const fetch = require('node-fetch');

async function register() {
  const response = await fetch('http://20.207.122.201/evaluation-service/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: "sp2798@srmist.edu.in",
      name: "Swetha P",
      mobileNo: "6381195116",
      githubUsername: "swethapadmanabhan03-cloud",
      rollNo: "RA2311026050216",
      accessCode: "QkbpxH"
    })
  });

  const data = await response.json();
  console.log("RESPONSE:", JSON.stringify(data, null, 2));
}

register();