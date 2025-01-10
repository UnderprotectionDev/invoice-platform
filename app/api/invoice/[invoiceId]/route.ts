import prisma from "@/app/utils/db";
import { NextResponse } from "next/server";
import { jsPDF } from "jspdf";
import { formatCurrency } from "@/app/utils/formatCurrency";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ invoiceId: string }>;
  }
) {
  const { invoiceId } = await params;

  const data = await prisma.invoice.findUnique({
    where: {
      id: invoiceId,
    },
    select: {
      invoiceName: true,
      invoiceNumber: true,
      currency: true,
      fromName: true,
      fromEmail: true,
      fromAddress: true,
      clientName: true,
      clientAddress: true,
      clientEmail: true,
      date: true,
      dueDate: true,
      invoiceItemDescription: true,
      invoiceItemQuantity: true,
      invoiceItemRate: true,
      total: true,
      note: true,
    },
  });

  if (!data) {
    return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
  }

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  // Set page background
  pdf.setFillColor(252, 252, 252);
  pdf.rect(0, 0, 210, 297, "F");

  // Clean header with solid blue
  pdf.setFillColor(41, 128, 185);
  pdf.rect(0, 0, 210, 40, "F");

  // Invoice title (white color on blue background)
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(28);
  pdf.text(data.invoiceName, 20, 28);

  // Reset color for main content
  pdf.setTextColor(45, 45, 45);

  // From Section with shadow effect
  pdf.setFillColor(248, 248, 248);
  pdf.roundedRect(15, 50, 85, 40, 4, 4, "F");
  pdf.setFillColor(240, 240, 240);
  pdf.roundedRect(15, 51, 85, 40, 4, 4, "F"); // Shadow effect
  pdf.setFontSize(12);
  pdf.setFont("helvetica", "bold");
  pdf.text("From", 20, 62);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10);
  pdf.text([data.fromName, data.fromEmail, data.fromAddress], 20, 68);

  // Client Section with matching style
  pdf.setFillColor(248, 248, 248);
  pdf.roundedRect(15, 100, 85, 40, 4, 4, "F");
  pdf.setFillColor(240, 240, 240);
  pdf.roundedRect(15, 101, 85, 40, 4, 4, "F");
  pdf.setFontSize(12);
  pdf.setFont("helvetica", "bold");
  pdf.text("Bill to", 20, 112);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10);
  pdf.text([data.clientName, data.clientEmail, data.clientAddress], 20, 118);

  // Invoice details with enhanced styling
  pdf.setFillColor(248, 248, 248);
  pdf.roundedRect(110, 50, 85, 40, 4, 4, "F");
  pdf.setFillColor(240, 240, 240);
  pdf.roundedRect(110, 51, 85, 40, 4, 4, "F");
  pdf.setFontSize(11);
  pdf.setFont("helvetica", "bold");
  pdf.text(`Invoice #${data.invoiceNumber}`, 115, 62);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10);
  pdf.text(
    `Date: ${new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
    }).format(data.date)}`,
    115,
    70
  );
  pdf.text(`Due Date: Net ${data.dueDate}`, 115, 78);

  // Improved table design
  // Table header with solid blue
  pdf.setFillColor(41, 128, 185);
  pdf.rect(15, 150, 180, 12, "F");

  // Table header text
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(11);
  pdf.text("Description", 20, 158);
  pdf.text("Quantity", 100, 158);
  pdf.text("Rate", 130, 158);
  pdf.text("Total", 160, 158);

  // Table content with better styling
  pdf.setTextColor(45, 45, 45);
  pdf.setFont("helvetica", "normal");

  // First row background
  pdf.setFillColor(245, 247, 250);
  pdf.rect(15, 162, 180, 12, "F");

  // Add subtle table borders
  pdf.setDrawColor(230, 230, 230);
  pdf.line(15, 162, 195, 162); // Horizontal line after header
  pdf.line(95, 150, 95, 174); // Vertical line after Description
  pdf.line(125, 150, 125, 174); // Vertical line after Quantity
  pdf.line(155, 150, 155, 174); // Vertical line after Rate

  // Table content
  pdf.setFontSize(10);
  pdf.text(data.invoiceItemDescription, 20, 170);
  pdf.text(data.invoiceItemQuantity.toString(), 100, 170);
  pdf.text(
    formatCurrency({
      amount: data.invoiceItemRate,
      currency: data.currency as any,
    }),
    130,
    170
  );
  pdf.text(
    formatCurrency({ amount: data.total, currency: data.currency as any }),
    160,
    170
  );

  // Bottom table border
  pdf.line(15, 174, 195, 174);

  // Enhanced total section with clean design
  pdf.setFillColor(41, 128, 185);
  pdf.roundedRect(110, 185, 85, 30, 4, 4, "F");
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(255, 255, 255);
  pdf.text(`Total (${data.currency})`, 115, 200);
  pdf.setFontSize(14);
  pdf.text(
    formatCurrency({ amount: data.total, currency: data.currency as any }),
    115,
    208
  );

  // Styled note section
  if (data.note) {
    pdf.setTextColor(45, 45, 45);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.text("Note", 20, 235);
    pdf.setFont("helvetica", "normal");

    // Split long text into multiple lines with 35 characters per line
    const splitText = pdf.splitTextToSize(data.note, 170);
    pdf.text(splitText, 20, 243);
  }

  // Add footer with subtle line
  pdf.setDrawColor(200, 200, 200);
  pdf.line(15, 280, 195, 280);
  pdf.setFontSize(8);
  pdf.setTextColor(130, 130, 130);
  pdf.text("Thank you for your business", 15, 288);

  // generate pdf as buffer
  const pdfBuffer = Buffer.from(pdf.output("arraybuffer"));

  //return pdf as download

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline",
    },
  });
}
