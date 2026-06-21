public class ExcelFile implements Document {

    @Override
    public void open() {
        System.out.println("Spreadsheet opened...");
    }

    @Override
    public void save() {
        System.out.println("Spreadsheet data saved...");
    }

    @Override
    public void close() {
        System.out.println("Spreadsheet closed...");
    }
}