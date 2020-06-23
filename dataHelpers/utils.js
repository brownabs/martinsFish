//where printToDomFunction will be
const printToDomFunction = (divId, textToPrint) => {

  $(`#${divId}`).html(textToPrint);


};

export default { printToDomFunction };
