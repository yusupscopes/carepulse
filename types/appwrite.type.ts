import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  name: string;
  email: string;
  phone: string;
  userId: string;
  gender: Gender;
  birthDate: Date;
  address: string;
  occupation: string;
  privacyConsent: boolean;
  primaryPhysician: string;
  insuranceProvider: string;
  emergencyContactName: string;
  allergies: string | undefined;
  insurancePolicyNumber: string;
  emergencyContactNumber: string;
  currentMedication: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  familyMedicalHistory: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument?: FormData | undefined;
  identificationDocumentId?: string | undefined;
  identificationDocumentUrl?: string | undefined;
}

export interface Appointment extends Models.Document {
  note: string;
  status: Status;
  schedule: Date;
  reason: string;
  userId: string;
  patient: Patient;
  primaryPhysician: string;
  cancellationReason: string | null;
}
