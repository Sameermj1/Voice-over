const express = require('express');
const VoiceController = require('../controllers/voiceController');

const router = express.Router();
const voiceController = new VoiceController();

const setRoutes = (app) => {
    router.post('/generate-voice', voiceController.generateVoice.bind(voiceController));
    app.use('/api', router);
};

module.exports = setRoutes;