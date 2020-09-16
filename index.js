const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

////////////



const prefix = ""
const developers = ""





const pairs = require('./channelPairs.json'); // Keep in mind the path may vary

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let oldID;
  let newID;
  if (oldMember.voiceChannel) oldID = oldMember.voiceChannel.id;
  if (newMember.voiceChannel) newID = newMember.voiceChannel.id;

  for (let i = 0; i < pairs.length; i++) {
    const textChannel = newMember.guild.channels.get(pairs[i].text);
    if (!textChannel) {
      console.log('Invalid text channel ID in json.');
      continue;
    }

    const vcID = pairs[i].voice;

    if (oldID !== vcID && newID === vcID) {          // Joined the voice channel.
      textChannel.overwritePermissions(newMember, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true
      }).catch(console.error);
      client.channels.get("752216422234456084").send(`${newMember}` + " do `=j` to join the queue!");
    } else if (oldID === vcID && newID !== vcID) {   // Left the voice channel.
      textChannel.overwritePermissions(newMember, {
        VIEW_CHANNEL: null,
        SEND_MESSAGES: null
      }).catch(console.error);
      client.channels.get("752216422234456084").send(`=fr ${newMember}`);
    }
  }
});


client.login("NzU1MzY1MjY1NTM3MTA1OTMx.X2COuQ.ho_L1keFRlFsMkW1EO-alHfXN68");