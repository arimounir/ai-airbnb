import { } from 'dotenv/config'
import fs from 'fs'
import { Configuration, OpenAIApi } from "openai";
const filePath = process.argv[2];
const fileName = process.argv[3];
const data = fs.readFileSync(filePath, "utf-8");
if (!filePath) {
  console.error("Please provide a file path.");
  process.exit(1);
}
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function getStringAfterSubstring(parentString, substring) {
  return parentString.substring(
    parentString.indexOf(substring) + substring.length
  );
}

openai
  .createCompletion({
    model: "text-davinci-003",
    prompt: `write me a complete cypress component spec test for the following React component:
${data}
    `,
    temperature: 1,
    max_tokens: 256,
    top_p: 0,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  .then((response) => {
    fs.writeFile(
      `./cypress/components/${fileName}.cy.jsx`,
      getStringAfterSubstring(response.data.choices[0].text, "\n"),
      function (err) {
        if (err) throw err;
        console.log("File is created successfully.");
      }
    );
  })
  .catch((error) => {
    console.error(error);
  });
