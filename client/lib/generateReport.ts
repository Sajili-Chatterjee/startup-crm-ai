import jsPDF from "jspdf";

export const generateReport = async () => {
    try {
        console.log("PDF generation started");

        const pdf = new jsPDF();

        pdf.setFontSize(22);

        pdf.text(
            "Startup CRM AI Report",
            20,
            30
        );

        pdf.setFontSize(14);

        pdf.text(
            "Analytics dashboard export generated successfully.",
            20,
            50
        );

        pdf.text(
            `Generated at: ${new Date().toLocaleString()}`,
            20,
            70
        );

        pdf.save(
            "startup-crm-report.pdf"
        );

        console.log("PDF downloaded");

    } catch (error) {
        console.log(
            "PDF Error:",
            error
        );
    }
};