package com.cohortE.cohortProject.controller;

import com.cohortE.cohortProject.dto.MedicationDto;
import com.cohortE.cohortProject.entity.Medication;
import com.cohortE.cohortProject.service.MedicationService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MedicationController {

    private final MedicationService medicationService;

    public MedicationController(MedicationService medicationService) {
        this.medicationService = medicationService;
    }

    @GetMapping("/medications")
    public String showMedicationList(Model model) {
        model.addAttribute("medications", medicationService.getAllUserMedications());
        return "medication/medication-list";
    }

    @GetMapping("/medications/new")
    public String showAddMedicationForm(Model model) {
        model.addAttribute("medication", new MedicationDto());
        return "medication/add-medication";
    }

    @GetMapping("/medications/{id}/delete")
    public String deleteMedication(@PathVariable Long id) {
        medicationService.deleteMedicationById(id);
        return "redirect:/medications";
    }

    @PostMapping("/medications/new")
    public String addMedication(MedicationDto medicationDto) {
        medicationService.addMedication(medicationDto);
        return "redirect:/medications";
    }
}
