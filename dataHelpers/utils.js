//where printToDomFunction will be
const printToDomFunction = (divId, textToPrint) => {

  $(`#${divId}`).html(textToPrint);
  console.log("this function is running")

};

export default { printToDomFunction };
