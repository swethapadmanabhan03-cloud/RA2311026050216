const fetch = require('node-fetch');
async function getToken() {
  const response = await fetch('http://20.207.122.201/evaluation-service/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: "sp2798@srmist.edu.in",
      name: "Swetha P",
      rollNo: "RA2311026050216",
      accessCode: "QkbpxH",
      clientID: "56a74149-8ca9-4b1a-9fbc-8d7e14523110",
      clientSecret: "TSzSnqWaTVQVabeQ"
    })
  });

  const data = await response.json();
  console.log("TOKEN RESPONSE:", JSON.stringify(data, null, 2));
}

getToken();