package com.cohortE.cohortProject.service.impl;

import com.cohortE.cohortProject.dto.MedicationDto;
import com.cohortE.cohortProject.entity.Medication;
import com.cohortE.cohortProject.entity.User;
import com.cohortE.cohortProject.repository.MedicationRepository;
import com.cohortE.cohortProject.service.MedicationService;
import com.cohortE.cohortProject.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicationServiceImpl implements MedicationService {

    private final MedicationRepository medicationRepository;
    private final UserService userService;

    public MedicationServiceImpl(MedicationRepository medicationRepository, UserService userService) {
        this.medicationRepository = medicationRepository;
        this.userService = userService;
    }

    @Override
    public List<Medication> getAllUserMedications() {
        User user = userService.getCurrentUser();
        return medicationRepository.findByUserId(user.getId());
    }
    @Override
    public Medication addMedication(MedicationDto medicationDto) {
        Medication medication = mapDtoToEntity(medicationDto);
        medication.setUser(userService.getCurrentUser());
        return medicationRepository.save(medication) ;
    }
    @Override
    public void deleteMedicationById(Long id) {
        medicationRepository.deleteById(id);
    }

    private Medication mapDtoToEntity(MedicationDto medicationDto) {
        Medication medication = new Medication();
        medication.setMedicationName(medicationDto.getMedicationName());
        medication.setMedicationType(medicationDto.getMedicationType());
        medication.setDosageAmount(medicationDto.getDosageAmount());
        medication.setDosageFrequency(medicationDto.getDosageFrequency());
        return medication;
    }
}
