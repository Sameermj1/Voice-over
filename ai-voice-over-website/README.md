# AI Voice-Over Website

## Overview
The AI Voice-Over Website is a web application that allows users to generate voiceovers from text using advanced AI voice synthesis technology. The application features a user-friendly interface for text input and voice selection, and it supports real-time voice generation capabilities.

## Project Structure
The project is organized into several directories, each serving a specific purpose:

- **backend**: Contains the server-side code for handling voice generation requests.
- **frontend**: Contains the client-side code built with React.js for user interaction.
- **deployment**: Contains files for deploying the application using Docker and cloud services.
- **payment**: Contains the payment processing module for handling subscriptions for premium voices.

## Features
- Text input for voice generation.
- Selection of different AI voices.
- Real-time voice generation capabilities.
- Payment gateway integration for premium voice options.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- Docker installed for deployment.

### Backend Setup
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

### Deployment
Refer to the `deployment/cloud-deployment.md` file for instructions on deploying the application to cloud platforms.

### Payment Integration
Refer to the `payment/README.md` file for instructions on setting up and using the payment gateway for premium voices.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.