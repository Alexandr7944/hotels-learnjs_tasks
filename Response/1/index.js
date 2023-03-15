async function getUsers(names) {
  const resultArray = [];
  for (let name of names) {
    const url = `https://api.github.com/users/${name}`;
    let result;
    try {
      const response = await fetch(url);
      result = response.ok ? await response.json() : null;
      resultArray.push(result);
    } catch {
      result = null;
    }
  }
  return await Promise.all(resultArray);
}
