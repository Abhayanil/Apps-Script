//Converting Doc into a PDF 
var pdf = files.getAs('application/pdf');
   pdfFolder.createFile(pdf.copyBlob());
