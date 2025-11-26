/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('versions').del()
  await knex('versions').insert([
    {version_id: 1, version_name: "Authorized King James Version", version_abbr: "AKJV", language: "english", lang: "eng"},
    {version_id: 2, version_name: "Amplified Bible", version_abbr: "AMP", language: "english", lang: "eng"},
    {version_id: 3, version_name: "American Standard Version", version_abbr: "ASV", language: "english", lang: "eng"},
    {version_id: 4, version_name: "Blue Red Gold KJV", version_abbr: "BRG", language: "english", lang: "eng"},
    {version_id: 5, version_name: "Christian Standard Bible", version_abbr: "CSB", language: "english", lang: "eng"},
    {version_id: 6, version_name: "Evangelical Heritage Version", version_abbr: "EHV", language: "english", lang: "eng"},
    {version_id: 7, version_name: "English Standard Version", version_abbr: "ESV", language: "english", lang: "eng"},
    {version_id: 8, version_name: "English Standard Version Anglicised", version_abbr: "ESVUK", language: "english", lang: "eng"},
    {version_id: 9, version_name: "Geneva Bible", version_abbr: "GNV", language: "english", lang: "eng"},
    {version_id: 10, version_name: "God's Word Translation", version_abbr: "GW", language: "english", lang: "eng"},
    {version_id: 11, version_name: "International Standard Version", version_abbr: "ISV", language: "english", lang: "eng"},
    {version_id: 12, version_name: "Jubilee Bible", version_abbr: "JUB", language: "english", lang: "eng"},
    {version_id: 13, version_name: "21st Century King James Version", version_abbr: "KJ21", language: "english", lang: "eng"},
    {version_id: 14, version_name: "King James Version", version_abbr: "KJV", language: "english", lang: "eng"},
    {version_id: 15, version_name: "Lexham English Bible", version_abbr: "LEB", language: "english", lang: "eng"},
    {version_id: 16, version_name: "Modern English Version", version_abbr: "MEV", language: "english", lang: "eng"},
    {version_id: 17, version_name: "New Amerian Standard Bible", version_abbr: "NASB", language: "english", lang: "eng"},
    {version_id: 18, version_name: "New Amerian Standard Bible 1995", version_abbr: "NASB 1995", language: "english", lang: "eng"},
    {version_id: 19, version_name: "New English Translation", version_abbr: "NET", language: "english", lang: "eng"},
    {version_id: 20, version_name: "New International Version", version_abbr: "NIV", language: "english", lang: "eng"},
    {version_id: 21, version_name: "New International Version Anglicised", version_abbr: "NIVUK", language: "english", lang: "eng"},
    {version_id: 22, version_name: "New King James Version", version_abbr: "NKJV", language: "english", lang: "eng"},
    {version_id: 23, version_name: "New Living Translation", version_abbr: "NLT", language: "english", lang: "eng"},
    {version_id: 24, version_name: "New Life Version", version_abbr: "NLV", language: "english", lang: "eng"},
    {version_id: 25, version_name: "Names Of God Version", version_abbr: "NOG", language: "english", lang: "eng"},
    {version_id: 26, version_name: "New Revised Standard Version", version_abbr: "NRSV", language: "english", lang: "eng"},
    {version_id: 27, version_name: "New Revised Standard Version Updated Edition", version_abbr: "NRSVUE", language: "english", lang: "eng"},
    {version_id: 28, version_name: "World English Bible", version_abbr: "WEB", language: "english", lang: "eng"},
    {version_id: 29, version_name: "Young Literal Translation", version_abbr: "YLT", language: "english", lang: "eng"},
  ]);
};
