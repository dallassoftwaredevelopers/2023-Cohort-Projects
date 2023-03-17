package com.cohortE.cohortProject.controller;

import com.cohortE.cohortProject.service.MedicationService;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

public class MedicationController {

    private final MedicationService medicationService;

    public MedicationController(MedicationService medicationService) {
        this.medicationService = medicationService;
    }

    @GetMapping("/medications")
    public String showMedicationList(Model model) {
        model.addAttribute("medications", medicationService.getAllUserMedications());
        return "medication-list";
    }
}
