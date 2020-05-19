export class DummyData {
    public GetDataForDev(): PdfDataClass {
        // tslint:disable-next-line: max-line-length
        const strBillJSON = `{"patientName":"Hari Krishnan","doctorid":"1","prescribedDate":"16-05-2020","heading":"Prescription","hospitalName":"Dr Arasans Clinic","clinicAddress":"3/66 Karapakkam","doctorName":"N Arasakumar","doctorTiming":[],"doctortimingjson":"[]","patientAgeAndGender":"24 Male","patientid":"1","appointmentDate":"","isvitalrequired":false,"patientVitals":null,"patientProblems":[{"problem":"Feaver","since":"1 Days","specialinstructions":"Temperature","diagnosis":"Feaver"}],"isinvestigationrequired":true,"patientInvestigation":[{"tests":"Temperature","notes":"104f"}],"patientMedication":[{"medicine":"Crocin","dosage":"Before breakfast","frequency":"1 Days","instructions":"Take with hot water","alternatemedicine":"Pracetamol","quantity":"1"}],"isadvicerequired":true,"patientAdvice":[{"advice":"Dont eat or drink cold items"}],"isdietrequired":true,"patientDiet":[{"diet":"Rasam Rice"}],"isnextvisitrequired":true,"nextvisit":"05/17/2020"}`;
        return JSON.parse(strBillJSON);
    }
}

export class PdfDataClass {
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
