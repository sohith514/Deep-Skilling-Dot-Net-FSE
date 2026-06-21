public class PdfFile implements Document {

    @Override
    public void open() {
        System.out.println("Loading PDF document...");
    }

    @Override
    public void save() {
        System.out.println("PDF document secured and saved...");
    }

    @Override
    public void close() {
        System.out.println("PDF document closed...");
    }
}