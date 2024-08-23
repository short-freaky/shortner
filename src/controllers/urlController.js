const url = require('../models/url');
const generateShortUrl = require('../utils/shortener');

exports.shortenUrl = async (req, res) => {
    try {
        const { url_body } = req.body; 
        console.log(url_body) // Get both the URL and the protocol
        if (!url_body ) {
            return res.status(400).json({ error: 'URL is required' });
        }

        
        const shortUrl = generateShortUrl(url_body); 
        const newUrl = new url({ originalUrl: url_body, shortUrl }); 
        await newUrl.save(); 
        const fullShortUrl = `${req.protocol}://${req.get('host')}/${shortUrl}`;       
        res.status(201).json({ shortUrl: fullShortUrl });
    } catch (error) {
        console.error('Error in shortenUrl:', error);
        res.status(500).json({ error: 'An error occurred while shortening the URL' });
    }
};


exports.redirectUrl = async (req, res) => {
    try {
        const urlDoc = await url.findOne({ shortUrl: req.params.shortUrl });
        if (urlDoc) {
            urlDoc.clicks++;
            await urlDoc.save();
            let redirectUrl = urlDoc.originalUrl;
            return res.redirect(redirectUrl);
        } else {
            res.status(404).json({ error: 'URL not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.noOfClicks = async(req, res) => {
        try {
            console.log('aa gyi request')
            console.log( req.params.urlCode);
            const url_Doc = await url.findOne({ shortUrl: req.params.urlCode });
            console.log(url_Doc);
            if (url_Doc) {
                console.log("clicks btane h bahi")
                res.status(200).json({ clicks: url_Doc.clicks });
            } else {
                res.status(404).json({ error: 'URL not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }    
};
