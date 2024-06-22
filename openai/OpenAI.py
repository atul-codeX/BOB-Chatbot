import os
from azure.openai import AzureOpenAIService

azure_openai_service = AzureOpenAIService(
    api_key=os.environ['AZURE_OPENAI_API_KEY'],
    api_endpoint=os.environ['AZURE_OPENAI_API_ENDPOINT'],
)

def generate_text(input_text, language):
    response = azure_openai_service.generate_text(input_text, language)
    return response