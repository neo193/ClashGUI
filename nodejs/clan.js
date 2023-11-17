const { remote } = require('electron');
const { Login } = remote.require('./login');
const { client } = remote.require('./client');

async function TrophyList(clantag) {
    await Login(); // Ensure login completes before proceeding
    const clan = await client.getClan(clantag);
    for (let i = 0; i < clan.memberCount; i++) {
        console.log(`Name: ${clan.members[i].name}\tTrophies: ${clan.members[i].trophies}`);
    }
}

async function TopExperience(clantag, top) {
    await Login();
    const clan = await client.getClan(clantag);
    clan.members.sort((a, b) => b.expLevel - a.expLevel);
    console.log(`Top ${top} Experience Holders:`)
    for (let i = 0; i < top; i++) {
        console.log(`Name: ${clan.members[i].name}\tExperience: ${clan.members[i].expLevel}`);
    }
}

module.exports = { TrophyList, TopExperience };