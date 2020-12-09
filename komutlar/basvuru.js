const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const mirage = require('../mirage.json')// dış bölüme mirage.json oluşturup içine {"oda":"779355184014295081"} genel chat id yaz

let prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
let tag = "☆";
const atan = message.author.id;
const user = client.users.cache.get('742843355460796555');
const user2 = client.users.cache.get('347418027433918467');
const kufur = ".başvuru";
  if(message.content.includes(kufur)){
  if (message.channel.id !== "785948772202971187") { // başvuru odası

{
           if (message.author.id === message.guild.ownerID) return;
              message.channel.send(`.başvuru komutunu bu kanalda kullanamazsın`).then(message.delete({timeout: 10})).then(message => message.delete({timeout: 5000}))
  return;
            }
  }
  }
   if (message.channel.id !== mirage.oda) { // allaha emanet

     if(!message.author.username.includes(tag)){
    const ferzah3 = new Discord.MessageEmbed().setTitle(`HATA!`).setDescription(`Başvuru yapabilmek için tagımızı almalısın. Tagımız: \`${tag}\` `)
    message.channel.send(ferzah3).then(message.delete({timeout: 10})).then(message => message.delete({timeout: 5000}))
    return;
  }// KULLANICIDA TAG YOKSA BAŞVURU YAPAMAZ

const ferzah = new Discord.MessageEmbed().setTitle(`<a:viana_mavitik:761618207147687978> Başvurunuz Onaylandı`).setDescription(`Yetkili Başvurusu Yaptınız İlgili Yetkililer Sizle İletişime Geçicektir. İyi Eğlenceler.`).setColor(`RANDOM`).setTimestamp()
message.channel.send(ferzah).then(message => message.delete({timeout: 5000})).then(message.delete({timeout: 5000}))
const ferzah2 = new Discord.MessageEmbed().setTitle(`YENİ BAŞVURU GELDİ`).setDescription(`<@${atan}> Adlı Kullanıcı Yekili Başvurusu Yaptı En Kısa Sürede İlgilen Lütfen!!`)
user.send(ferzah2) // yetkili sorumlusu dm
user2.send(ferzah2) // yetkili sorumlusu dm2
}
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: 'başvuru',
    description: 'FERZAH BAŞVURU SİSTEMİ'//ama bana vrdi yehehehehe :D
};
