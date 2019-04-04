




const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

  client.user.setGame(`!help`,'https://www.twitch.tv/ProGamer44');
  console.log('Im Ready!');
});
/*ProGamer44*/
client.on('message', message => {
if (message.content.split(' ')[0] == '!bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
		 if(!message.channel.guild) return message.reply('** This command only for servers **');
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});
client.on("message", message => {
    var prefix = "!";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
						 if(!message.channel.guild) return message.reply('** This command only for servers **');
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription(":white_check_mark: | �� ����� ���� ����� �����")
                                .setColor("RANDOM")
                                message.channel.sendEmbed(embed3);
                            } else {

                            let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | �� ����� ���� ������� !')
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});
client.login("NTU0Mjk2MzU0MjE4NzA0ODk2.XKV3Vg.582RxbmVlk5boy3n-vl7d1ApFn8");