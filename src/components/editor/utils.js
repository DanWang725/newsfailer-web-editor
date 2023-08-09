export const consoleLogSelect = (selected) => {
  // console.log(selected);
  console.log(selected);
  // console.log(selection);
  // console.log(window.getSelection()?.anchorNode?.parentElement?.id);
};

export const updateSpans = (rawHtml) => {
  const matches = [...rawHtml.matchAll(/<span [^>]*>(.*?)<\/span>/g)];
  console.log(matches);
  const htmlString = matches.reduce((accumulator, match, index) => {
    accumulator += `<span name="content-editor" id=${index}>${match[0]}</span>`;
    return accumulator;
  }, "");
  return htmlString;
};
