import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AzureOpenAIService } from 'azure-openai';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const azureOpenAIService = new AzureOpenAIService({
      apiKey: 'API_KEY',
      apiEndpoint: 'https://API_ENDPOINT.azure.com/',
    });

    const handleUserInput = async (input) => {
      const response = await azureOpenAIService.generateText(input, language);
      setResponse(response);
    };

    handleUserInput(userInput);
  }, [userInput, language]);

  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <View>
      <Text>Financial Literacy Chatbot</Text>
      <TextInput
        placeholder="Ask a question"
        value={userInput}
        onChangeText={(text) => setUserInput(text)}
      />
      <Button title="Ask" onPress={() => handleUserInput(userInput)} />
      <Text>Response: {response}</Text>
      <Text>Language: {language}</Text>
      <Button title="Change Language" onPress={() => handleLanguageChange('hi')} />
    </View>
  );
};

export default App;