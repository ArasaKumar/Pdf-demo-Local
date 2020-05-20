import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Table, Stack, Txt, Columns, Ul, Canvas, Rect, Line, Img } from 'pdfmake-wrapper';
import { PdfDataClass, DummyData } from './pdf-data-classes';
import { ICustomTableLayout } from 'pdfmake-wrapper/lib/interfaces';
import pdfFonts from 'pdfmake/build/vfs_fonts';

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

  async createPDF(data: PdfDataClass): Promise<void> {
    const dnData = new DummyData();
    const pdfwrapper: PdfMakeWrapper = new PdfMakeWrapper();
    PdfMakeWrapper.setFonts(pdfFonts);
    pdfwrapper.defaultStyle({ bold: false, fontSize: 10 });
    pdfwrapper.pageSize('A4');

    const pdfWidth = 595;
    const marginSize = 20;

    pdfwrapper.pageMargins(marginSize);

    const logo = await new Img(data.logo).width(65).height(65).build();
    const clinicDetail = new Stack([
      new Txt(data.doctorName).fontSize(15).bold().end,
      new Txt(data.doctorQualification).end,
      new Txt(data.regBy + ' REGD No: ' + data.regno).end,
      new Txt(data.specialization).end,
      new Txt(data.hospitalName + ', ' + data.clinicAddress).end,
    ]).end;

    const headerColumns = new Columns([logo, clinicDetail]).columnGap(16).alignment('justify').end;

    const sepLine = new Canvas([new Rect([0, 3], [pdfWidth - (marginSize * 2), 3]).color('black').end]).end;

    pdfwrapper.add(headerColumns);
    pdfwrapper.add(sepLine);

    pdfwrapper.create().open();
    pdfwrapper.create().getDataUrl(async (pdfURL) => {
      this.errorMessage = '';
      this.pdfSrc = pdfURL;
    });
  }
}
