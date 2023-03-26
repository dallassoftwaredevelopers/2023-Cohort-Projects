package com.cohortE.cohortProject.service.impl;

import com.cohortE.cohortProject.dto.MedicationLogDto;
import com.cohortE.cohortProject.entity.MedicationLog;
import com.cohortE.cohortProject.repository.MedicationLogRepository;
import com.cohortE.cohortProject.service.MedicationLogService;
import com.cohortE.cohortProject.service.UserService;

import java.util.ArrayList;
import java.util.List;

public class MedicationLogServiceImpl implements MedicationLogService {
    private final MedicationLogRepository medicationLogRepository;
    private final UserService userService;

    public MedicationLogServiceImpl(MedicationLogRepository medicationLogRepository, UserService userService) {
        this.medicationLogRepository = medicationLogRepository;
        this.userService = userService;
    }

    public List<MedicationLogDto> getDailyUsersMedicationLogs(){
        List<MedicationLog> medicationLogs =
        medicationLogRepository.findByReminderMedicationUserId(userService.getCurrentUser().getId());
        List<MedicationLogDto> medicationLogDtos = new ArrayList<>();

        for(MedicationLog medicationLog : medicationLogs){
            MedicationLogDto medicationLogDto = mapEntityToDto(medicationLog);
            medicationLogDtos.add(medicationLogDto);
        }
        return medicationLogDtos;
    }

    private MedicationLogDto mapEntityToDto(MedicationLog medicationLog) {
        MedicationLogDto medicationLogDto = new MedicationLogDto();
        medicationLogDto.setMedicationName(medicationLog.getReminder().getMedication().getMedicationName());
        medicationLogDto.setMedicationType(medicationLog.getReminder().getMedication().getMedicationType());
        medicationLogDto.setDosageAmount(medicationLog.getReminder().getMedication().getDosageAmount());
        medicationLogDto.setDosageFrequency(medicationLog.getReminder().getMedication().getDosageFrequency());
        medicationLogDto.setTaken(medicationLog.isTaken());
        medicationLogDto.setMedicationLogId(medicationLog.getId());
        return medicationLogDto;
    }
}
