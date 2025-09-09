module.exports = {
  main: async function (event, context) {
    /*
    If you prefer mjs import/export syntax over cjs you need to specify
    'type': 'module'
    in the Function dependencies (package.json) and along with that change the import/export syntax to:
    import foo from 'foo'
    export function main(event, context) {
      //your logic using foo library
      return
    }
    */

    const message = `Hello World`
      + ` from the Kyma Function ${context["function-name"]}`
      + ` running on ${context.runtime}!`;
    console.log(message);
    return message;
  }
}
