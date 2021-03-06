import request from "request";
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

let getFacebookUsername = (sender_psid) => {
    return new Promise((resolve, reject) => {
        // Send the HTTP request to the Messenger Platform
        let uri = `https://graph.facebook.com/${sender_psid}?fields=first_name,last_name,profile_pic&access_token=${PAGE_ACCESS_TOKEN}`;
        request({
            "uri": uri,
            "method": "GET",
        }, (err, res, body) => {
            if (!err) {
                // convert string to json object
                body = JSON.parse(body);
                let username = `${body.first_name}`;
                resolve(username);
            } else {
                reject("Unable to send message:" + err);
            }
        });
    });
};

let sendResponseWelcomeNewCustomer = (username, sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response_first = {
                "text": `Hi, ${username}! Welcome to FeastBott.`
            };
            let response_second = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [{
                            "title": "FeastBott",
                            "subtitle": "Eat Healthy, Eat Fresh, Eat Local.",
                            "image_url": "https://bit.ly/3qOqCoG",
                            "buttons": [{
                                "type": "postback",
                                "title": "Show main menu",
                                "payload": "MAIN_MENU",
                            }],
                        }]
                    }
                }
            }
            // send an initial welcome message
            await sendMessage(sender_psid, response_first);

            // send an image with a button to view menu
            await sendMessage(sender_psid, response_second);

            resolve("complete");

        } catch (e) {
            reject(e);
        }
    });
};


let sendMainMenu = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [{
                                "title": "Menus",
                                "subtitle": "Take advantage of a wide array of both lunch and dinner options!",
                                "image_url": "https://bit.ly/34G2nQ5",
                                "buttons": [{
                                        "type": "postback",
                                        "title": "LUNCH MENU",
                                        "payload": "LUNCH_MENU",
                                    },
                                    {
                                        "type": "postback",
                                        "title": "DINNER MENU",
                                        "payload": "DINNER_MENU",
                                    },
                                    {
                                        "type": "postback",
                                        "title": "PUB MENU",
                                        "payload": "PUB_MENU",
                                    }
                                ],
                            },

                            {
                                "title": "Hours of operation",
                                "subtitle": `MON-FRI 10 a.m. to 11 p.m.\nSAT 5 p.m. to 10 p.m.\nSUN 5 p.m. to 9 p.m.`,
                                "image_url": "https://bit.ly/3dHeQXM",
                                "buttons": [{
                                    "type": "postback",
                                    "title": "Reserve Table",
                                    "payload": "RESERVE_TABLE",
                                }],
                            },

                            {
                                "title": "Banquet rooms",
                                "image_url": "https://bit.ly/3ocHhBy",
                                "buttons": [{
                                    "type": "postback",
                                    "title": "Show rooms",
                                    "payload": "SHOW_ROOMS",
                                }],
                            }

                        ]
                    }
                }
            }
            // send an initial welcome message
            await sendMessage(sender_psid, response);
        } catch (e) {
            reject(e);
        }
    });

};


let sendLunchMenu = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [{
                                "title": "Appetizers",                        
                                "image_url": "https://bit.ly/34G2nQ5",
                                "buttons": [{
                                        "type": "postback",
                                        "title": "SHOW APPETIZERS",
                                        "payload": "SHOW_APPETIZERS",
                                    }
                                ],
                            },

                            {
                                "title": "Entree Salad",
                                "image_url": "https://bit.ly/3dHeQXM",
                                "buttons": [{
                                    "type": "postback",
                                    "title": "SHOW ENTREE SALAD",
                                    "payload": "SHOW_ENTREE_SALAD",
                                }],
                            },

                            {
                                "title": "Fish and Shell Fish",
                                "image_url": "https://bit.ly/3ocHhBy",
                                "buttons": [
                                    {
                                    "type": "postback",
                                    "title": "SHOW_FISH",
                                    "payload": "SHOW_FISH",
                                 }
                               ],
                            },

                            {
                                "title": "Demo Classics",
                                "subtitle": "and dry-aged onsite.",
                                "image_url": "https://bit.ly/3ocHhBy",
                                "buttons": [
                                    {
                                    "type": "postback",
                                    "title": "SHOW CLASSICS",
                                    "payload": "SHOW_CLASSICS",
                                 }
                               ],
                            }, 

                            {
                                "title": "Go back",                               
                                "image_url": "https://bit.ly/3ocHhBy",
                                "buttons": [
                                    {
                                    "type": "postback",
                                    "title": "BACK TO MAIN MENU",
                                    "payload": "BACK_TO_MAIN_MENU",
                                 }
                               ],
                            }

                        ]
                    }
                }
            }
            
            // send an initial welcome message
            await sendMessage(sender_psid, response);
        } catch (e) {
            reject(e);
        }
    });
};

let sendDinnerMenu = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [{
                                "title": "Appetizers",                        
                                "image_url": "https://bit.ly/34G2nQ5",
                                "buttons": [{
                                        "type": "postback",
                                        "title": "SHOW APPETIZERS",
                                        "payload": "SHOW_APPETIZERS",
                                    }
                                ],
                            },

                            {
                                "title": "Entree Salad",
                                "image_url": "https://bit.ly/3dHeQXM",
                                "buttons": [{
                                    "type": "postback",
                                    "title": "SHOW ENTREE SALAD",
                                    "payload": "SHOW_ENTREE_SALAD",
                                }],
                            },

                            {
                                "title": "Fish and Shell Fish",
                                "image_url": "https://bit.ly/3ocHhBy",
                                "buttons": [
                                    {
                                    "type": "postback",
                                    "title": "SHOW_FISH",
                                    "payload": "SHOW_FISH",
                                 }
                               ],
                            },

                            {
                                "title": "Demo Classics",
                                "subtitle": "and dry-aged onsite.",
                                "image_url": "https://bit.ly/3ocHhBy",
                                "buttons": [
                                    {
                                    "type": "postback",
                                    "title": "SHOW CLASSICS",
                                    "payload": "SHOW_CLASSICS",
                                 }
                               ],
                            }, 

                            {
                                "title": "Go back",                               
                                "image_url": "https://bit.ly/3ocHhBy",
                                "buttons": [
                                    {
                                    "type": "postback",
                                    "title": "BACK TO MAIN MENU",
                                    "payload": "BACK_TO_MAIN_MENU",
                                 }
                               ],
                            }

                        ]
                    }
                }
            }
            
            // send an initial welcome message
            await sendMessage(sender_psid, response);
        } catch (e) {
            reject(e);
        }
    });
};

let sendPubMenu = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [{
                                "title": "Appetizers",                        
                                "image_url": "https://bit.ly/34G2nQ5",
                                "buttons": [{
                                        "type": "postback",
                                        "title": "SHOW APPETIZERS",
                                        "payload": "SHOW_APPETIZERS",
                                    }
                                ],
                            },

                            {
                                "title": "Entree Salad",
                                "image_url": "https://bit.ly/3dHeQXM",
                                "buttons": [{
                                    "type": "postback",
                                    "title": "SHOW ENTREE SALAD",
                                    "payload": "SHOW_ENTREE_SALAD",
                                }],
                            },

                            {
                                "title": "Fish and Shell Fish",
                                "image_url": "https://bit.ly/3ocHhBy",
                                "buttons": [
                                    {
                                    "type": "postback",
                                    "title": "SHOW_FISH",
                                    "payload": "SHOW_FISH",
                                 }
                               ],
                            },

                            {
                                "title": "Demo Classics",
                                "subtitle": "and dry-aged onsite.",
                                "image_url": "https://bit.ly/3ocHhBy",
                                "buttons": [
                                    {
                                    "type": "postback",
                                    "title": "SHOW CLASSICS",
                                    "payload": "SHOW_CLASSICS",
                                 }
                               ],
                            }, 

                            {
                                "title": "Go back",                               
                                "image_url": "https://bit.ly/3ocHhBy",
                                "buttons": [
                                    {
                                    "type": "postback",
                                    "title": "BACK TO MAIN MENU",
                                    "payload": "BACK_TO_MAIN_MENU",
                                 }
                               ],
                            }

                        ]
                    }
                }
            }
            
            // send an initial welcome message
            await sendMessage(sender_psid, response);
        } catch (e) {
            reject(e);
        }
    });
};

let sendMessage = (sender_psid, response) => {
    let request_body = {
        "recipient": {
            "id": sender_psid
        },
        "message": response
    };

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": "https://graph.facebook.com/v6.0/me/messages",
        "qs": {
            "access_token": PAGE_ACCESS_TOKEN
        },
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('message sent!');
        } else {
            console.error("Unable to send message:" + err);
        }
    });
};


module.exports = {
    getFacebookUsername: getFacebookUsername,
    sendResponseWelcomeNewCustomer: sendResponseWelcomeNewCustomer,
    sendMainMenu: sendMainMenu,
    sendLunchMenu: sendLunchMenu,
    sendDinnerMenu: sendDinnerMenu,
    sendPubMenu: sendPubMenu
};