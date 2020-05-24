export class DummyData {

    // measured in required for vitals

    private logo(): string {
        // tslint:disable-next-line: max-line-length
        return 'data:image/jpeg;base64,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';
    }

    public GetDataForDev(): PdfDataClass {
        // tslint:disable-next-line: max-line-length
        const objData = this.parseAndGetObject();

        // new data required
        objData.logo = this.logo();
        objData.doctorQualification = 'M.B.B.S, M.D, (Chest)';
        objData.regBy = 'Tamil Nadu Medical Council';
        objData.regno = '1001';
        objData.specialization = 'Consultant Pulmonologist';
        objData.prescriptionid = '123';

        return objData;
    }

    private parseAndGetObject(): PdfDataClass {
        // tslint:disable-next-line: max-line-length
        const strBillJSON = `{"patientName":"Hari Krishnan","doctorid":"1","prescribedDate":"20-05-2020","heading":"Prescription","hospitalName":"Dr Arasan's Clinic","clinicAddress":"3/66 Karapakkam","doctorName":"N Arasakumar","doctorTiming":[],"doctortimingjson":"[]","patientAgeAndGender":"24 Male","patientid":"1","appointmentDate":"","isvitalrequired":true,"patientVitals":[{"vitalname":"Temperature","vitalvalue":"99 farenheit"},{"vitalname":"Heart beat rate","vitalvalue":"80 beat per min"},{"vitalname":"Blood Pressure","vitalvalue":"80 bp"},{"vitalname":"Height","vitalvalue":"72 cms","vitalvaue":72},{"vitalname":"Weight","vitalvalue":"72 kgs"}],"patientProblems":[{"problem":"Corona","since":"2 Weeks","specialinstructions":"Temperature","diagnosis":"Symptoms like corona"},{"problem":"Asthma","since":"1 Months","specialinstructions":"Checking breating","diagnosis":"Asthma like symptoms"}],"isinvestigationrequired":true,"patientInvestigation":[{"tests":"PCR","notes":"PCR test for corona"},{"tests":"ECG","notes":"ECG-Check heart beat"}],"patientMedication":[{"medicine":"Hydroxychloroquinine","dosage":"Before breakfast","frequency":"1 Weeks","instructions":"Take with hot water","alternatemedicine":"crocin","quantity":"7"},{"medicine":"Paracetamol","dosage":"After breakfast","frequency":"1 Months","instructions":"Take with hot water","alternatemedicine":"Crocin","quantity":"15"}],"isadvicerequired":true,"patientAdvice":[{"advice":"Dont go outside"},{"advice":"Keep the house clean"},{"advice":"Self isolate yourself"}],"patientDiet":[{"diet":"Rasam rice"},{"diet":"Fresh vegetables"}],"isnextvisitrequired":true,"nextvisit":"05/27/2020"}`;
        return JSON.parse(strBillJSON);
    }
}

export class PdfDataClass {
    // new ver start

    logo: string;
    doctorQualification: string;
    regBy: string;
    regno: string;
    specialization: string;
    prescriptionid: string;

    // new var end

    doctorid: string;
    prescribedDate: string;
    heading: string;
    hospitalName: string;
    clinicAddress: string;
    doctorName: string;
    doctorTiming: PdfDataDoctorTiming[];
    patientAgeAndGender: string;
    patientid: string;
    appointmentDate: string;
    patientName: string;
    patientVitals: PdfDataVitals[];
    isvitalrequired: boolean;
    patientProblems: PdfDataPatientProblem[];
    patientInvestigation: PdfDataPatientInvestigation[];
    isinvestigationrequired: boolean;
    patientMedication: PdfDataPatientMedication[];
    patientAdvice: PdfDataPatientAdvice[];
    isadvicerequired: boolean;
    patientDiet: PdfDataPatientDiet[];
    isdietrequired: boolean;
    isnextvisitrequired: boolean;
    nextvisit: string;

    // public ClinicEmail: string;
    // public ClinicPhone: string;
    // public HospitalLogo: string;

}

export class PdfDataVitals {
    vitalname: string;
    vitalvalue: string;
}

export class PdfDataDoctorTiming {
    day: string;
    times: string;
}

export class PdfDataPatientProblem {
    problem: string;
    since: string;
    physicalexamination: string;
    diagnosis: string;
}

export class PdfDataPatientInvestigation {
    tests: string;
    notes: string;
}

export class PdfDataPatientMedication {
    medicine: string;
    dosage: string;
    frequencytotake: string;
    frequency: string;
    instructions: string;
    alternatemedicine: string;
    quantity: string;
    count: string;
    customdetails: CustomMedicineDetails[];
}

export class CustomMedicineDetails {
    count: string;
    frequency: string;
}

export class PdfDataPatientAdvice {
    advice: string;
}

export class PdfDataPatientDiet {
    diet: string;
}
