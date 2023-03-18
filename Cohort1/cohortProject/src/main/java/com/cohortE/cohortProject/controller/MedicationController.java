package com.cohortE.cohortProject.controller;

import com.cohortE.cohortProject.service.MedicationService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

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
    public String showAddMedicationForm() {
        return "medication/add-medication";
    }

    @GetMapping("/medications/{id}/delete")
    public String deleteMedication(@PathVariable Long id) {
        medicationService.deleteMedicationById(id);
        return "redirect:/medications";
    }
}
