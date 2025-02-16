class VoiceController {
    constructor(voiceService) {
        this.voiceService = voiceService;
    }

    async generateVoice(req, res) {
        const { text, voice } = req.body;

        if (!text || !voice) {
            return res.status(400).json({ error: 'Text and voice are required' });
        }

        try {
            const audioFilePath = await this.voiceService.synthesizeSpeech(text, voice);
            return res.status(200).json({ audioFilePath });
        } catch (error) {
            console.error('Error generating voice:', error);
            return res.status(500).json({ error: 'Failed to generate voice' });
        }
    }
}

export default VoiceController;