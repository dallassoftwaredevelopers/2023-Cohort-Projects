package com.cohortE.cohortProject.service.impl;

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
}
