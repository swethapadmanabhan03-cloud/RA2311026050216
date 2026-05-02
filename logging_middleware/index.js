const fetch = require('node-fetch');

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzcDI3OThAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMjExMiwiaWF0IjoxNzc3NzAxMjEyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMWFlNzUxYWYtZjIyMy00NzY5LWFjZjYtMjViYmQzYmYzNmM4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3dldGhhIHAiLCJzdWIiOiI1NmE3NDE0OS04Y2E5LTRiMWEtOWZiYy04ZDdlMTQ1MjMxMTAifSwiZW1haWwiOiJzcDI3OThAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJzd2V0aGEgcCIsInJvbGxObyI6InJhMjMxMTAyNjA1MDIxNiIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjU2YTc0MTQ5LThjYTktNGIxYS05ZmJjLThkN2UxNDUyMzExMCIsImNsaWVudFNlY3JldCI6IlRTelNucVdhVFZRVmFiZVEifQ.VxxVttO8pV262EbZNmybwnG8pvpcvTDlSuQrKSO544s";

async function Log(stack, level, package_name, message) {
  try {
    const response = await fetch('http://20.207.122.201/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        stack: stack,
        level: level,
        package: package_name,
        message: message
      })
    });

    const data = await response.json();
    console.log("LOG RESPONSE:", JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error("Logging failed:", error);
  }
}

module.exports = { Log };