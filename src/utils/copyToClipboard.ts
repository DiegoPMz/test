export const copyToClipboard = (textToCopy: string) => {
  navigator.clipboard.writeText(textToCopy).catch(function (err) {
    console.error("Error al intentar copiar al portapapeles: ", err);
  });
};
