function formatConsole(message, data) {
  return console.log(`
============================
    ${message}:
    ${JSON.stringify(data, null, 2)}
============================
  `);
}

export default formatConsole;