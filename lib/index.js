exports.onCall = ({ args }) => {
  const test = `args(${args.map(JSON.stringify).join(', ')})`;
  console.log(test);
};

exports.onCommandComplete = ({ command, result }) => {
  const test = `.yieldCmd(cmds.${command.type}()).yieldReturns(${JSON.stringify(result)})`;
  console.log(test);
};

exports.onComplete = ({ result }) => {
  const test = `.returns(${JSON.stringify(result)})`;
  console.log(test);
};
