package com.cohortE.cohortProject.service.impl;

import com.cohortE.cohortProject.dto.MedicationLogDto;
import com.cohortE.cohortProject.entity.MedicationLog;
import com.cohortE.cohortProject.entity.Reminder;
import com.cohortE.cohortProject.repository.MedicationLogRepository;
import com.cohortE.cohortProject.service.MedicationLogService;
import com.cohortE.cohortProject.service.ReminderService;
import com.cohortE.cohortProject.service.UserService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class MedicationLogServiceImpl implements MedicationLogService {
    private final MedicationLogRepository medicationLogRepository;
    private final UserService userService;
    private final ReminderService reminderService;

    public MedicationLogServiceImpl(MedicationLogRepository medicationLogRepository, UserService userService, ReminderService reminderService) {
        this.medicationLogRepository = medicationLogRepository;
        this.userService = userService;
        this.reminderService = reminderService;
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

    public void addNewDailyMedicationLog(){
       List<Reminder> listOfDailyReminders  =  reminderService.getAllDailyReminders();
       for(Reminder reminder : listOfDailyReminders) {
           MedicationLog medicationLog = new MedicationLog();
           medicationLog.setLogDate(LocalDate.now());
           medicationLog.setTaken(false);
           medicationLog.setReminder(reminder);
           medicationLogRepository.save(medicationLog);
       }
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
