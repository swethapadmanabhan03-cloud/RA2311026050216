const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzcDI3OThAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNjM1NCwiaWF0IjoxNzc3NzA1NDU0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOWYwMDY1YzQtMTA1Ni00NzRkLWFiMDItNDJmMjNkN2NiMDc3IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3dldGhhIHAiLCJzdWIiOiI1NmE3NDE0OS04Y2E5LTRiMWEtOWZiYy04ZDdlMTQ1MjMxMTAifSwiZW1haWwiOiJzcDI3OThAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJzd2V0aGEgcCIsInJvbGxObyI6InJhMjMxMTAyNjA1MDIxNiIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjU2YTc0MTQ5LThjYTktNGIxYS05ZmJjLThkN2UxNDUyMzExMCIsImNsaWVudFNlY3JldCI6IlRTelNucVdhVFZRVmFiZVEifQ.kjHErzKMuLZ16bSznEpc5ujY5w7PeRbKut8j3WXvBww";

export async function Log(stack, level, packageName, message) {
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
        package: packageName,
        message: message
      })
    });
    const data = await response.json();
    console.log("Log sent:", data);
  } catch (error) {
    console.error("Logging failed:", error);
  }
}