import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Table, Stack, Txt, Columns, Ul, Canvas, Rect, Line, Img, Cell } from 'pdfmake-wrapper';
import { PdfDataClass, DummyData } from './pdf-data-classes';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ICustomTableLayout } from 'pdfmake-wrapper/lib/interfaces';

/*
A4 Sheet Size = 595 × 842 points
*/

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  errorMessage: any;
  pdfSrc: any;
  constructor() {
  }

  ngOnInit() {
    try {
      this.errorMessage = 'Creating pdf in progress...';
      const objDummyData = new DummyData();
      const objPDFData: PdfDataClass = objDummyData.GetDataForDev();
      this.createPDF(objPDFData);
    } catch (e) {
      this.errorMessage = e;
    }
  }

  alternateRowColouring(): ICustomTableLayout {
    const custmStyle: ICustomTableLayout = {};
    custmStyle.fillColor = (i, node) => {
      return (i > 0 && (i % 2 === 0)) ? '#e6e6e6' : 'white';
    };
    return custmStyle;
  }

  async createPDF(data: PdfDataClass): Promise<void> {
    const pdfwrapper: PdfMakeWrapper = new PdfMakeWrapper();
    const pdfWidth = 595;
    const marginSize = 20;
    const custmStyle: ICustomTableLayout = this.alternateRowColouring();

    PdfMakeWrapper.setFonts(pdfFonts);
    pdfwrapper.defaultStyle({ bold: false, fontSize: 10 });
    pdfwrapper.pageSize('A4');
    pdfwrapper.pageMargins(marginSize);

    // Hospital Logo
    const logo = await new Img(data.logo).width(65).height(65).build();
    const clinicDetail = new Stack([
      new Txt(data.doctorName).fontSize(15).bold().end,
      new Txt(data.doctorQualification).end,
      new Txt(data.regBy + ' REGD No: ' + data.regno).end,
      new Txt(data.specialization).end,
      new Txt(data.hospitalName + ', ' + data.clinicAddress).end,
    ]).end;

    // Clinic Details
    const headerColumns = new Columns([logo, clinicDetail]).columnGap(16).alignment('justify').end;

    const sepLine = new Canvas([new Rect([0, 3], [pdfWidth - (marginSize * 2), 3]).color('black').end]).end;

    // Patient Details
    const patientNameAndDetail = new Table([
      [new Txt(data.patientName + ', ' + data.patientAgeAndGender).fontSize(15).bold().end,
      new Txt(data.prescribedDate).fontSize(15).bold().end],
      [new Txt('Patient Id: ' + data.patientid).end, new Txt('Prescription Id: ' + data.prescriptionid).end]
    ]).alignment('left').layout('noBorders').widths(['*', 'auto']).end;

    const get4LanEmptyArray = () => {
      const vitalRow = Array(4);
      for (let i = 0; i < 4; i++) {
        vitalRow[i] = '';
      }
      return vitalRow;
    };

    // Vitals
    const vitalData = Array();
    if (data.isvitalrequired) {
      let vitalRow = get4LanEmptyArray();
      let iCol = 0;
      for (const vital of data.patientVitals) {

        vitalRow[iCol] = (new Txt(vital.vitalname + ' : ' + vital.vitalvalue).fontSize(6).end);
        if (iCol === 3) {
          iCol = -1;
          vitalData.push(vitalRow);
          vitalRow = get4LanEmptyArray();
        }
        iCol = iCol + 1;
      }
      if (vitalRow[0] !== '') {
        vitalData.push(vitalRow);
      }
    }
    const vitalTable = new Table(vitalData).alignment('justify').widths(['*', '*', '*', '*']).end;

    // Patient Problems
    const getstringInGreyTable = (pTopic: string, pData: string) => {
      // tslint:disable-next-line: max-line-length
      return new Table([[new Cell(new Txt(pTopic).alignment('center').bold().end).fillColor('#c8ccc9').end,
      new Txt(pData).alignment('left').end]]).widths([100, '*']).end;
    };

    let patientProblems = '';
    for (const patientProb of data.patientProblems) {
      patientProblems = patientProblems + patientProb.diagnosis + ', ';
    }
    if (patientProblems !== '') {
      patientProblems = patientProblems.substring(0, patientProblems.length - 2);
    }
    const tblDiagnosis = getstringInGreyTable('Diagnosis', patientProblems);

    // Header components for the Medicine
    const medicineDetails = new Array();
    medicineDetails.push([new Cell(new Txt('Rx').fontSize(15).bold().end).colSpan(2).end,
      '',
    new Stack(['Frequency', '', '( Mor-Aft-Eve-Night )']).end,
      'Period', 'Quantity']);
    let iMed = 1;
    for (const objMed of data.patientMedication) {
      medicineDetails.push([iMed, objMed.medicine, objMed.dosage, objMed.frequency, objMed.quantity]);
      iMed = iMed + 1;
    }
    const medicineHeader = new Table([...medicineDetails]).widths([20, '*', '*', '*', '*']).layout(custmStyle).end;

    // Adding the components in the pdf
    pdfwrapper.add(headerColumns);
    pdfwrapper.add(sepLine);
    pdfwrapper.add(patientNameAndDetail);
    if (data.isvitalrequired) {
      pdfwrapper.add(vitalTable);
    }
    pdfwrapper.add(pdfwrapper.ln(1));
    pdfwrapper.add(tblDiagnosis);
    pdfwrapper.add(pdfwrapper.ln(1));
    pdfwrapper.add(medicineHeader);

    pdfwrapper.create().open();
    pdfwrapper.create().getDataUrl(async (pdfURL) => {
      this.errorMessage = '';
      this.pdfSrc = pdfURL;
    });
  }
}
