import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Table, Stack, Txt, Columns, Ul, Canvas, Rect, Line } from 'pdfmake-wrapper';
import { PdfDataClass, DummyData } from './pdf-data-classes';
import { ICustomTableLayout } from 'pdfmake-wrapper/lib/interfaces';
import pdfFonts from 'pdfmake/build/vfs_fonts';

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
  createPDF(pdfData: PdfDataClass): void {

    const pdfwrapper: PdfMakeWrapper = new PdfMakeWrapper();
    PdfMakeWrapper.setFonts(pdfFonts);
    pdfwrapper.defaultStyle({ bold: false, fontSize: 10 });
    pdfwrapper.pageMargins(0);
    pdfwrapper.add(new Txt('Hi').end);
    pdfwrapper.create().getDataUrl(async (pdfURL) => {
      localStorage.setItem('pdfURL', pdfURL);
    });
    setTimeout(() => { this.updatePDF(); }, 1000);
  }

  updatePDF() {
    this.errorMessage = '';
    this.pdfSrc = localStorage.getItem('pdfURL');
    return;
  }

}
