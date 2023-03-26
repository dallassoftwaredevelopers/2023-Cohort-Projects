package com.cohortE.cohortProject.service.impl;

import com.cohortE.cohortProject.entity.MedicationLog;
import com.cohortE.cohortProject.entity.Reminder;
import com.cohortE.cohortProject.service.DailyLogService;
import com.cohortE.cohortProject.service.MedicationLogService;
import com.cohortE.cohortProject.service.ReminderService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class DailyLogServiceImpl implements DailyLogService {

    private final ReminderService reminderService;
    private final MedicationLogService medicationLogService;

    public DailyLogServiceImpl(ReminderService reminderService, MedicationLogService medicationLogService) {
        this.reminderService = reminderService;
        this.medicationLogService = medicationLogService;
    }

    @Override
    public void addNewDailyMedicationLog() {
        List<Reminder> listOfDailyReminders  =  reminderService.getAllDailyReminders();
        for(Reminder reminder : listOfDailyReminders) {
            medicationLogService.addMedicationLog(reminder);
        }
    }
}
