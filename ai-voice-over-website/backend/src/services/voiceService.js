const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient();

const voiceService = {
    generateVoice: async (text, voiceParams) => {
        const request = {
            input: { text: text },
            voice: voiceParams,
            audioConfig: { audioEncoding: 'MP3' },
        };

        const [response] = await client.synthesizeSpeech(request);
        const writeFile = util.promisify(fs.writeFile);
        const fileName = `output-${Date.now()}.mp3`;

        await writeFile(fileName, response.audioContent, 'binary');
        return fileName;
    }
};

module.exports = voiceService;