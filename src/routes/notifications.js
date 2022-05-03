const { Router } = require('express');
const admin = require("firebase-admin");

var serviceAccount = require("../credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://biblioloft-firebase-default-rtdb.firebaseio.com"
});

const router = Router();

router.post('/notifications', (payload, res) => {
    const data = {
        notification: {
            title: payload.body.title,
            body: payload.body.body,
            icon: payload.body.icon
        }
    };
    admin.messaging().sendToDevice(payload.body.token, data)
        .then(function(response) {
        console.log("Successfully sent message:", response);
        })
        .catch(function(error) {
        console.log("Error sending message:", error);
    });        
    res.send('Notificacion enviada')
    });

module.exports = router;

