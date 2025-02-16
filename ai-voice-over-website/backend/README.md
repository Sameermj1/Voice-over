# AI Voice-Over Website Backend

## Overview
This backend service is designed to handle voice generation requests using the Google Text-to-Speech API. It provides an Express server that listens for incoming requests and processes them to generate audio files from text input.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Google Cloud account with Text-to-Speech API enabled

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd ai-voice-over-website/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
1. Set up your Google Cloud credentials:
   - Create a service account in your Google Cloud project.
   - Download the JSON key file and set the environment variable:
     ```
     export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-file.json"
     ```

### Running the Application
To start the server, run:
```
npm start
```
The server will be running on `http://localhost:5000`.

### API Endpoints
- **POST /generate-voice**
  - Request Body: 
    ```json
    {
      "text": "Your text here",
      "voice": "en-US-Wavenet-D"
    }
    ```
  - Response: Audio file of the generated voice.

### Testing
You can test the API using tools like Postman or curl.

### Deployment
For deployment instructions, refer to the `deployment/cloud-deployment.md` file.

## License
This project is licensed under the MIT License. See the LICENSE file for details.