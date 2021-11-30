"use strict";

class Intents {
    static GUILDS = 1 << 0;

    static GUILD_MEMBERS = 1 << 1;

    static GUILD_BANS = 1 << 2;

    static GUILD_EMOJIS_AND_STICKERS = 1 << 3;

    static GUILD_INTEGRATIONS = 1 << 4;

    static GUILD_WEBHOOKS = 1 << 5;

    static GUILD_INVITES = 1 << 6;

    static GUILD_VOICE_STATES = 1 << 7;

    static GUILD_PRESENCES = 1 << 8;

    static GUILD_MESSAGES = 1 << 9;

    static GUILD_MESSAGE_REACTIONS = 1 << 10;

    static GUILD_MESSAGE_TYPING = 1 << 11;

    static DIRECT_MESSAGES = 1 << 12;

    static DIRECT_MESSAGE_REACTIONS = 1 << 13;

    static DIRECT_MESSAGE_TYPING = 1 << 14;

    static GUILD_SCHEDULED_EVENTS = 1 << 16;

    static ALL = 32767;
}

module.exports = Intents;