const Discord = require('discord.js');
const client = new Discord.Client();
const at = require('auto-updater');
const fs = require('fs');

const prefix = process.env.PREFIX;
const ownerID = process.env.OWNERID;
const packagejson = JSON.parse(require("./package.json"));

var autoupdater = new at({
    pathToJson: '',
    autoupdate: true,
    checkgit: true,
    jsonhost: 'raw.githubusercontent.com',
    contenthost: 'codeload.github.com',
    progressDebounce: 0,
    devmode: false
});

autoupdater.on('check.out-dated', function(v_old, v){
    console.log("Updating to version " + packagejson.version + "...");
    client.users.get("480987124405895168").send(packagejson.updateDescription);
});

autoupdater.on('update.extracted', function(){
    fs.readdirSync("./commands/", (err, files) => {
        files.forEach(file => {
            delete require.cache[require.resolve(file)];
        });
    });
});

client.login(process.env.TOKEN);