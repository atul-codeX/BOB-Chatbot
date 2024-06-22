const express = require('express');
const azureOpenAIService = require('azure-openai');

const app = express();

app.post('/generate-text', async (req, res) => {
  const { input, language } = req.body;
  const response = await azureOpenAIService.generateText(input, language);
  res.json(response);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});