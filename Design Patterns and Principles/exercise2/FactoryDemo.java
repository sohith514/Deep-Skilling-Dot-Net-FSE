public class FactoryDemo {

    public static void main(String[] args) {

        DocumentFactory wordFactory = new WordFactory();
        DocumentFactory pdfFactory = new PdfFactory();
        DocumentFactory excelFactory = new ExcelFactory();

        System.out.println("WORD DOCUMENT");
        wordFactory.processDocument();

        System.out.println("PDF DOCUMENT");
        pdfFactory.processDocument();

        System.out.println("EXCEL DOCUMENT");
        excelFactory.processDocument();
    }
}