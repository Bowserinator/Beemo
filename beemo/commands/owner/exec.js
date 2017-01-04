const childProcess = require('child_process');

module.exports = {
  main: async (bot, message, ...args) => {
    childProcess.exec(message.content, { shell: '/bin/bash' }, (err, stdout, stderr) => {
      if (err) return message.channel.sendCode('', err.message);
      message.channel.sendCode('bash', stdout);
    });
  },
  hidden: true,
  ownerOnly: true
}