package com.cohortE.cohortProject.service;

import com.cohortE.cohortProject.dto.MedicationDto;
import com.cohortE.cohortProject.entity.Medication;

import java.util.List;

public interface MedicationService {

    List<Medication> getAllUserMedications();
    void deleteMedicationById(Long id);
    Medication addMedication(MedicationDto medicationDto);


}
